import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

const Signup = () => {
  const route = useRouter();

  const redirect = (url) => route.push(url);

  const randomString = () => {
    return Math.random().toString(36).substring(2, 15).toUpperCase();
  };

  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    picture: `https://avatars.dicebear.com/api/bottts/${randomString()}.svg`,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("/api/auth/signup", data);
  };

  return (
    <>
      <Head>
        <title>Lets Chat!</title>
        <meta name="description" content="Website to chat!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-auth">
          <div className="auth-screen">
            <div className="side-1">
              Rasso-Chat is a small online community for people to chat with
              each other.
              <h2>Already a Member ?</h2>
              <button onClick={() => redirect("/auth/login")}>Login Now</button>
            </div>
            <div className="side-2">
              <h1> Register your Free Account...</h1>
              <div className="auth-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="text"
                      required
                      onInput={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      onInput={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      required
                      onInput={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      id="password"
                    />
                  </div>
                  <button type="submit">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
