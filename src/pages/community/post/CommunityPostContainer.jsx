import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ColumnBlock, ActionBtn, CategoryPill } from "../communityStyle";
import T from "../communityTextStyle";
import PostListSection from "./postComponents/PostListSection.jsx";
import LiveChatListSection from "./postComponents/LiveChatListSection.jsx";
import { useChatContext } from "../context/ChatContext";
import { POST_CATEGORIES } from "../constants";
import {
  HeaderBlock,
  PostHeader,
  PostCategoryHeader,
  PostCategoryRow,
  AllChatButton,
} from "./communityPostContainerStyle";

const S = {
  ColumnBlock,
  ActionBtn,
  CategoryPill,
  HeaderBlock,
  PostHeader,
  PostCategoryHeader,
  PostCategoryRow,
  AllChatButton,
};

// 컴포넌트
const CommunityPostContainer = () => {
  const { openCreateChatRoom } = useChatContext();
  const [selectedTag, setSelectedTag] = useState("");

  console.log("메인 영역 그려지기");
  return (
    <div>
      {/* <CommunityPostComponent /> */}
      <S.ColumnBlock>
        {/* 상단 헤더 */}
        <S.HeaderBlock>
          {/* 제목 */}
          <T.H6Bold>실시간 채팅방</T.H6Bold>

          {/* 글쓰기 버튼 */}
          <S.ActionBtn $type="submit" onClick={openCreateChatRoom}>
            +채팅방 만들기
          </S.ActionBtn>
        </S.HeaderBlock>
        {/* 채팅방 */}
        <LiveChatListSection />
        {/* 채팅방 모두 보기 버튼 */}
        <S.AllChatButton>
          <Link to={"/community/chat"}>전체 보기 →</Link>
        </S.AllChatButton>
        {/* 포스트 영역 헤더 */}
        <S.PostHeader>
          <T.H7Bold>게시글</T.H7Bold>
        </S.PostHeader>
        {/* 카테고리 및 글쓰기 버튼 */}
        <S.PostCategoryHeader>
          {/* 카테고리 */}
          <S.PostCategoryRow>
            {POST_CATEGORIES.map(({ label, value }) => (
              <S.CategoryPill
                key={value}
                $active={selectedTag === value}
                onClick={() => setSelectedTag(value)}
              >
                {label}
              </S.CategoryPill>
            ))}
          </S.PostCategoryRow>
          <Link to="/community/post/write">
            <S.ActionBtn $type="submit">글쓰기</S.ActionBtn>
          </Link>

          {/* 글쓰기 */}
        </S.PostCategoryHeader>
        {/* 포스트 카드 목록 + 페이지네이션 */}
        <PostListSection postTag={selectedTag} />

        {/* 테스트 */}
      </S.ColumnBlock>
    </div>
  );
};

export default CommunityPostContainer;
