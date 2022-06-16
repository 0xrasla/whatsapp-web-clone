import React, { useState } from "react";
import { prisma } from "./db/client";
import Head from "next/head";

export const getServerSideProps = async () => {
  const rooms = JSON.stringify(await prisma.room.findMany());
  return {
    props: {
      rooms,
    },
  };
};

const Rooms = ({ rooms }) => {
  const [showForm, setShowForm] = useState(false);
  const [roomsData] = useState(JSON.parse(rooms));
  return (
    <>
      <Head>
        <title>Let&apos; Chat!</title>
        <meta name="description" content="Website to chat!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-chat">
        <div className="rooms-list">
          <div className="header">
            <h1>Rooms</h1>
            <button onClick={() => setShowForm(!showForm)}>Create Room</button>
          </div>
          <div className={showForm ? "showform" : "hideform"}>
            <div className="create-roomform">
              <h3>Create a Room</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="room-name">Room Name</label>
                  <input type="text" id="room-name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="room-description">Room Description</label>
                  <input type="text" id="room-description" required />
                </div>
                <button>Create</button>
              </form>
            </div>
          </div>
          <div className="rooms">
            <ul>
              {roomsData.length > 0 ? (
                roomsData.map((room) => (
                  <li key={room.id}>
                    # <a href={`/rooms/${room.id}`}>{room.name}</a>
                  </li>
                ))
              ) : (
                <div>
                  <h3>No Rooms Found</h3>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
