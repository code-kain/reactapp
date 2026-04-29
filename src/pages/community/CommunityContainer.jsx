import React from "react";
import CommunityComponent from "./CommunityComponent";
import { Link, Outlet } from "react-router-dom";
import {
  ActionBtn,
  CategoryPill,
  ColumnBlock,
  ContentArea,
  H6Bold,
  H7Bold,
  Page,
  RowBlock,
  RowSimpleBlock,
} from "./communityStyle";
import LiveChatCard from "./chat/chatComponents/LiveChatCard";
import PostListCard from "./post/postComponents/PostListCard";

const users = [
  { userId: 1, userName: "홍길동" },
  { userId: 2, userName: "장보고" },
];

const CommunityContainer = () => {
  return (
    <>
      <div>
        <Page>
          <Link to={"/community/chat"}>실시간 채팅</Link>
          <Link to={"/community/post"}>게시글</Link>
          <ContentArea>
            {/* 좌측 메인 */}
            {/* 해당 부분이 아울렛으로 되어야 함 */}
            <Outlet />
          </ContentArea>
        </Page>
      </div>
      <div>
        지금 활동 중인 멤버
        {users.map((user) => (
          <div key={user.userId}>
            <Link to={`/community/profile/${user.userId}`}>
              {user.userName}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommunityContainer;
