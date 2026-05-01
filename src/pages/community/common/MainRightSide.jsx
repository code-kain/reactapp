import React from "react";
import { ColumnBlock } from "../communityStyle";
import SideUserProfile from "./SideUserProfile copy";
import SideNotice from "./SideNotice";

const MainRightSide = () => {
  return (
    <div>
      {/* 사이드 바 column */}
      <ColumnBlock width="312px">
        <SideUserProfile />
        <SideNotice />
      </ColumnBlock>
    </div>
  );
};

export default MainRightSide;
