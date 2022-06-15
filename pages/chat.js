import React from "react";
import Head from "next/head";

const Chat = () => {
  return (
    <div>
      <Head>
        <title>Let&apos; Chat | Home</title>
        <meta name="description" content="Website to chat!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container-chat">Hello World!</main>
    </div>
  );
};

export default Chat;
