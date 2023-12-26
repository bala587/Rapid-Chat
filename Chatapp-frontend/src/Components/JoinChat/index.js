import { useState } from "react";
import Chat from "../Chat";

const JoinChat = ({ socket }) => {
  const [userName, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    console.log("userName: ", userName);
    console.log("Room: ", room);
    if (userName && room) {
      socket.emit("join-room", room);
      console.log("Joining room....");
      setShowChat(true);
    }
    // if (userName !== "" && room !== "") {
    //   socket.emit("join_room", room);
    //   setShowChat(true);
    // }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat </h3>
          <input
            type="text"
            placeholder="Enter the username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter the room ID"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button className="btn-sm" onClick={joinRoom}>Join room</button>
        </div>
      ) : (
        <Chat socket={socket} userName={userName} room={room} />
      )}
    </div>
  );
};

export default JoinChat;
