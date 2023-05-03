import React from 'react'
import MessageList from './MessageList';
import ChatInput from './ChatInput';


export const metadata = {
  title: 'Meta Messenger',
  // icons: {
  //   url: "/meta.png",
  //   type: 'image/png',
  // },
  // shortcut: { url: "/meta.png", type: "image/png" },
};

function HomePage() {
  return (
    <main>
      {/* MessageList */}
      <MessageList/>
      {/* ChatInput */}
      <ChatInput/>
    </main>
  )
}

export default HomePage