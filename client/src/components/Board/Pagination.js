import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../util/api";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 2rem 7rem 2rem;
  .dotdotdot {
    margin-right: 0.3rem;
  }
`;

const PageButton = styled.button`
  box-sizing: border-box;
  background-color: ${(props) =>
    props.selected === props.buttonId ? props.theme.highlightOrange : "white"};
  border: ${(props) =>
    props.selected === props.buttonId
      ? props.theme.highlightOrange + " solid 1px"
      : props.theme.grayFont + " solid 1px"};
  color: ${(props) => (props.selected === props.buttonId ? "white" : "black")};
  border-radius: 3px;
  padding: 0.4rem 0.6rem;
  margin-right: 0.3rem;
`;

const Pagination = ({
  currentPage,
  currentSize,
  setCurrentPage,
  setCurrentSize,
}) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pageSizes = [15, 30, 50];

  const LinkButton = ({ buttonContent, selected, buttonId }) => {
    const navigate = useNavigate();
    const onPageButtonClick = (buttonId, buttonContent) => {
      if (buttonId) {
        setCurrentSize(buttonContent);
        navigate(`/?size=${buttonContent}`);
      } else {
        setCurrentPage(buttonContent);
        navigate(`/?page=${buttonContent}`);
      }
    };
    return (
      <PageButton
        onClick={() => onPageButtonClick(buttonId, buttonContent)}
        buttonId={buttonId || buttonContent}
        selected={selected}
      >
        {buttonContent}
      </PageButton>
    );
  };

  return (
    <>
      {currentPage && currentSize && (
        <StyledPagination className="Pagination">
          <div className="pages">
            {currentPage > 4 && (
              <>
                <LinkButton buttonContent="Prev" />
                <LinkButton buttonContent={1} />
                <span className="dotdotdot">...</span>
              </>
            )}
            {pages.map((v) => {
              if (currentPage < 5 && v < 6) {
                return (
                  <LinkButton
                    selected={currentPage}
                    buttonContent={v}
                    key={v}
                  />
                );
              } else if (
                currentPage >= 5 &&
                v >= currentPage - 2 &&
                v <= currentPage + 2
              ) {
                return (
                  <LinkButton
                    selected={currentPage}
                    buttonContent={v}
                    key={v}
                  />
                );
              }
            })}
            <span className="dotdotdot">...</span>
            {/* 마지막 페이지 설정 관련 서버 작업 후 진행 예정 */}
            <PageButton buttonId="1234">
              {/* last page number */}1234
            </PageButton>
            <LinkButton buttonContent="Next" />
          </div>
          <div className="page-size">
            {pageSizes.map((v) => (
              <LinkButton
                key={v}
                selected={"size" + currentSize}
                buttonId={"size" + v}
                buttonContent={v}
              />
            ))}
            per page
          </div>
        </StyledPagination>
      )}
      {(!currentPage || !currentSize) && <Navigate to="/?page=1" />}
    </>
  );
};

export default Pagination;

// {4페이지}까지는 [prev] 버튼 없음
// {5페이지}부터 {마지막페이지 - 5페이지}까지 [prev] [1] ... 과 함께 현재 페이지가 3번째 버튼이 됨
// {마지막 페이지 - 4페이지} 까지는 [next] 버튼 없음
