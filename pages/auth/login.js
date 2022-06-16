import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const route = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const redirect = (url) => route.push(url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("/api/auth/login", data);

    if (res.data.error) {
      alert(res.data.error);
    }

    if (res.data.ok) {
      redirect("/rooms");
    }
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
              <h2>New to Lets Chat ?</h2>
              <button onClick={() => redirect("/auth/signup")}>
                Register Now..
              </button>
            </div>
            <div className="side-2">
              <h1> Login to your Account...</h1>
              <div className="auth-form">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
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
                      required
                      id="password"
                      onInput={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
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

export default Login;
