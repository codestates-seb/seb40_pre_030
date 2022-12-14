import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1.4rem 4rem 2rem;
  .dotdotdot {
    margin-right: 0.3rem;
  }
`;

const PageButton = styled.button`
  box-sizing: border-box;
  background-color: ${(props) =>
    props.selected === props.buttonContent
      ? props.theme.highlightOrange
      : "white"};
  border: ${(props) =>
    props.selected === props.buttonContent
      ? props.theme.highlightOrange + " solid 1px"
      : "lightgray solid 1px"};
  color: ${(props) =>
    props.selected === props.buttonContent ? "white" : "black"};
  border-radius: 3px;
  padding: 0.4rem 0.6rem;
  margin-right: 0.3rem;
  :last-child {
    margin-right: 0;
  }
`;

const UserPagination = ({ currentPage, setCurrentPage }) => {
  const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [pageIdx, setPageIdx] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (pageIdx >= 3 && pages.length < 50) {
      setPages([...pages, pages[pages.length - 1] + 1]);
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 1) navigate("/users");
    else navigate(`/users/?page=${currentPage}`);
  }, [currentPage]);

  const LinkButton = ({ buttonContent, selected }) => {
    const onPageButtonClick = (buttonContent) => {
      if (buttonContent === "Prev") {
        setCurrentPage((prev) => prev - 1);
        setPageIdx((prev) => prev - 1);
      } else if (buttonContent === "Next") {
        setCurrentPage((prev) => prev + 1);
        setPageIdx((prev) => prev + 1);
      } else {
        setCurrentPage(buttonContent);
        setPageIdx(buttonContent);
      }
    };

    return (
      <PageButton
        onClick={() => onPageButtonClick(buttonContent)}
        selected={selected}
        buttonContent={buttonContent}
      >
        {buttonContent}
      </PageButton>
    );
  };

  return (
    <>
      <StyledPagination className="TagPagination">
        <div className="pages">
          {currentPage > 1 && (
            <>
              <LinkButton selected={currentPage} buttonContent="Prev" />
              <span className="dotdotdot">...</span>
            </>
          )}
          {pages.map((v) => {
            if (currentPage < 5 && v < 6) {
              return (
                <LinkButton selected={currentPage} buttonContent={v} key={v} />
              );
            } else if (
              currentPage >= 5 &&
              v >= currentPage - 2 &&
              v <= currentPage + 2
            ) {
              return (
                <LinkButton selected={currentPage} buttonContent={v} key={v} />
              );
            }
          })}
          {currentPage < 50 && (
            <>
              <span className="dotdotdot">...</span>
              <LinkButton selected={currentPage} buttonContent="Next" />
            </>
          )}
        </div>
      </StyledPagination>
    </>
  );
};

export default UserPagination;

// {4?????????}????????? [prev] ?????? ??????
// {5?????????}?????? {?????????????????? - 5?????????}?????? [prev] [1] ... ??? ?????? ?????? ???????????? 3?????? ????????? ???
// {????????? ????????? - 4?????????} ????????? [next] ?????? ??????
