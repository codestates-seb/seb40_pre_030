import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 2rem 7rem 2rem;
`;

const PageButton = styled.button`
  background-color: white;
  border: ${(props) => props.theme.grayFont + " solid 1px"};
  border-radius: 3px;
  padding: 0.4rem 0.6rem;
  margin-right: 0.3rem;
`;

// props: page, size
const Pagination = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pageSizes = [15, 30, 50];
  const pageNow = useLocation().search; // 현재 페이지 또는 페이지 사이즈
  console.log(pageNow);
  return (
    <StyledPagination className="Pagination">
      <div className="pages">
        <PageButton>Prev</PageButton>
        ...
        {pages.map((v) => (
          <Link to={"/?page=" + v}>
            <PageButton key={v}>{v}</PageButton>
          </Link>
        ))}
        ...
        <PageButton>{/* last page number */}1234</PageButton>
        <PageButton>Next</PageButton>
      </div>
      <div className="page-size">
        {pageSizes.map((v) => (
          <Link to={"/?size=" + v}>
            <PageButton>{v}</PageButton>
          </Link>
        ))}
        per page
      </div>
    </StyledPagination>
  );
};

export default Pagination;

// 4페이지까지는 [prev] 버튼 없음
// 5페이지부터는 [prev] [1] ... 과 함께 현재 페이지가 3번째 버튼이 됨