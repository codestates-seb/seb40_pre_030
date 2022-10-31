import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

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

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSize, setCurrentSize] = useState(15);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pageSizes = [15, 30, 50];
  const pageNow = useLocation().search; // 현재 페이지 또는 페이지 사이즈

  useEffect(() => {
    const num = pageNow.slice(pageNow.indexOf("=") + 1);
    if (pageNow.includes("page")) setCurrentPage(Number(num));
    else if (pageNow.includes("size")) {
      setCurrentSize(Number(num));
      setCurrentPage(1);
    }
  }, [pageNow]);

  console.log("currentPage ", currentPage);
  console.log("currentSize ", currentSize);

  return (
    <StyledPagination className="Pagination">
      <div className="pages">
        {currentPage > 4 && (
          <>
            <Link to={"/?page=" + (currentPage - 1)}>
              <PageButton buttonId="prev">Prev</PageButton>
            </Link>
            <Link to="/?page=1">
              <PageButton buttonId={1}>1</PageButton>
            </Link>
            <span className="dotdotdot">...</span>
          </>
        )}
        {pages.map((v) => {
          if (currentPage < 5 && v < 6) {
            return (
              <Link to={"/?page=" + v} key={v}>
                <PageButton selected={currentPage} buttonId={v}>
                  {v}
                </PageButton>
              </Link>
            );
          } else if (
            currentPage >= 5 &&
            v >= currentPage - 2 &&
            v <= currentPage + 2
          ) {
            return (
              <Link to={"/?page=" + v} key={v}>
                <PageButton selected={currentPage} buttonId={v}>
                  {v}
                </PageButton>
              </Link>
            );
          }
        })}
        <span className="dotdotdot">...</span>
        <PageButton buttonId="prev">{/* last page number */}1234</PageButton>
        <Link to={"/?page=" + (currentPage + 1)}>
          <PageButton buttonId="next">Next</PageButton>
        </Link>
      </div>
      <div className="page-size">
        {pageSizes.map((v) => (
          <Link to={"/?size=" + v} key={v}>
            <PageButton selected={"size" + currentSize} buttonId={"size" + v}>
              {v}
            </PageButton>
          </Link>
        ))}
        per page
      </div>
    </StyledPagination>
  );
};

export default Pagination;

// {4페이지}까지는 [prev] 버튼 없음
// {5페이지}부터 {마지막페이지 - 5페이지}까지 [prev] [1] ... 과 함께 현재 페이지가 3번째 버튼이 됨
// {마지막 페이지 - 4페이지} 까지는 [next] 버튼 없음
