import React, { useState } from "react";
import ConfirmPopup from "../../common/ConfirmPopup";
import styled from "styled-components";
import { LAYOUT, radius, shadows } from "../../constants";
import { useChatContext, SCREEN, LIST_FILTER } from "../../context/ChatContext";
import SideChatHeader from "./sideChatComponents/SideChatHeader";
import SideChatListComponent from "./sideChatComponents/SideChatListComponent";
import SideChatRequestComponent from "./sideChatComponents/SideChatRequestComponent";
import SideChatComponent from "./sideChatComponents/SideChatComponent";
import SideChatOngoingComponent from "./sideChatComponents/SideChatOngoingComponent";
import SideChatDirectComponent from "./sideChatComponents/SideChatDirectComponent";

// ─── Panel ───────────────────────────────────────────────────────────────────

const ChatPanel = styled.div`
  width: ${LAYOUT.sidebarWidth};
  display: flex;
  flex-direction: column;
  border-radius: ${radius.card};
  box-shadow: ${shadows.float};
  overflow: hidden;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const SideChat = ({ onDragMouseDown }) => {
  const {
    screen,
    listFilter,
    chatRoomDTO,
    floatView,
    closeView,
    expandView,
    leaveRoom,
  } = useChatContext();
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <ChatPanel>
      <SideChatHeader
        screen={screen}
        listFilter={listFilter}
        chatPartnerName={chatRoomDTO?.chatRoomName}
        onMinimize={floatView}
        onExpand={expandView}
        onClose={() => setConfirmOpen(true)}
        onDragMouseDown={onDragMouseDown}
      />

      {screen === SCREEN.LIST && listFilter === LIST_FILTER.LIVE && (
        <SideChatListComponent />
      )}
      {screen === SCREEN.LIST && listFilter === LIST_FILTER.REQUEST && (
        <SideChatRequestComponent />
      )}
      {screen === SCREEN.LIST && listFilter === LIST_FILTER.ONGOING && (
        <SideChatOngoingComponent />
      )}
      {screen === SCREEN.LIST && listFilter === LIST_FILTER.DIRECT && (
        <SideChatDirectComponent />
      )}
      {screen === SCREEN.ROOM && (
        <SideChatComponent chatRoomId={chatRoomDTO?.id} onViewAll={leaveRoom} />
      )}
      <ConfirmPopup
        isOpen={confirmOpen}
        message="채팅방에서 나가시겠습니까?"
        onConfirm={() => {
          closeView();
          setConfirmOpen(false);
        }}
        onClose={() => setConfirmOpen(false)}
      />
    </ChatPanel>
  );
};

export default SideChat;
