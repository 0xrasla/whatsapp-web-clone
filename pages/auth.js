import React from "react";
import Head from "next/head";

const auth = () => {
  return (
    <>
      <Head>
        <title>Lets Chat!</title>
        <meta name="description" content="Website to chat!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-auth">
          <h1>Login to Continue Chatting...</h1>
          <div className="auth-screen">
            <div className="side-1">
              Rasso-Chat is a small online community for people to chat with
              each other.
            </div>
            <div className="side-2">
              <div className="auth-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                  </div>
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default auth;
