package com.codestates.auth.filter;

import com.codestates.auth.jwt.JwtTokenizer;
import com.codestates.auth.utils.CustomAuthorityUtils;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

// JWT 검증: reqeust 당 한 번 실행
public class JwtVerificationFilter extends OncePerRequestFilter {

    private final JwtTokenizer jwtTokenizer; // 검증, Claims 얻기
    private final CustomAuthorityUtils authorityUtils; // 성공 시 Authentication에 채울 사용자 권한 생성

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        Map<String, Object> claims = verifyJwt(request);
        setAuthenticationToContext(claims);

        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {

        String authorization = request.getHeader("Authorization");
        return authorization == null || !authorization.startsWith("Bearer");
    }

    // JWT 검증
    private Map<String, Object> verifyJwt(HttpServletRequest request) {

        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }

    // Authentication을 SecurityContext에 저장
    private void setAuthenticationToContext(Map<String, Object> claims) {

        String username = (String) claims.get("username");
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List) claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
