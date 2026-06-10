import React from "react";
import {
  PageButtonRow,
  PageButton,
  HighlightButton,
  ArrowButton,
} from "./pageCountStyle";

const S = {
  PageButtonRow,
  PageButton,
  HighlightButton,
  ArrowButton,
};

const PAGE_SIZE = 5;

const PageCount = ({ totalPages = 1, currentPage = 1, onPageChange }) => {
  const totalGroups = Math.ceil(totalPages / PAGE_SIZE);
  const currentGroup = Math.ceil(currentPage / PAGE_SIZE);
  const groupStart = (currentGroup - 1) * PAGE_SIZE + 1;
  const groupEnd = Math.min(groupStart + PAGE_SIZE - 1, totalPages);

  const isFirstGroup = currentGroup === 1;
  const isLastGroup = currentGroup === totalGroups;

  const pages = Array.from(
    { length: groupEnd - groupStart + 1 },
    (_, i) => groupStart + i,
  );

  return (
    <S.PageButtonRow>
      {/* 맨 처음 페이지 */}
      <S.ArrowButton disabled={isFirstGroup} onClick={() => onPageChange(1)}>
        {"<<"}
      </S.ArrowButton>

      {/* 이전 그룹 첫 페이지 */}
      <S.ArrowButton
        disabled={isFirstGroup}
        onClick={() => onPageChange(groupStart - PAGE_SIZE)}
      >
        {"<"}
      </S.ArrowButton>

      {/* 현재 그룹 페이지 번호들 */}
      {pages.map((page) =>
        page === currentPage ? (
          <S.HighlightButton key={page}>{page}</S.HighlightButton>
        ) : (
          <S.PageButton key={page} onClick={() => onPageChange(page)}>
            {page}
          </S.PageButton>
        ),
      )}

      {/* 다음 그룹 첫 페이지 */}
      <S.ArrowButton
        disabled={isLastGroup}
        onClick={() => onPageChange(groupStart + PAGE_SIZE)}
      >
        {">"}
      </S.ArrowButton>

      {/* 맨 마지막 페이지 */}
      <S.ArrowButton
        disabled={isLastGroup}
        onClick={() => onPageChange(totalPages)}
      >
        {">>"}
      </S.ArrowButton>
    </S.PageButtonRow>
  );
};

export default PageCount;
