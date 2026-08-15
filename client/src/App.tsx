import { useState } from "react";
import type { Room } from "colyseus.js";
import Title from "./components/Title";
import Entrance from "./components/Entrance";
import CreateRoom from "./components/CreateRoom";
import FindRoom from "./components/FindRoom";
import RoomView from "./components/RoomView";
import Game from "./components/Game";
import Result from "./components/Result";
import type { UserInfo } from "../../resource/types/user";

export type GamePhase = "TITLE" | "ENTRANCE" | "CREATEROOM" | "FINDROOM" | "ROOM" | "GAME" | "RESULT";

function App() {
  const [phase, setPhase] = useState<GamePhase>("TITLE");
  const [user, setUser] = useState<UserInfo | null>(null);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);
  
  const handleRegisterSuccess = (userInfo: UserInfo) => {
    setUser(userInfo);
    setPhase("ENTRANCE");
  };

  const handleCreateRoom = () => {
    setPhase("CREATEROOM");
  };

  const handleFindRoom = () => {
    setPhase("FINDROOM");
  };

  const handleJoinedRoom = (room: Room) => {
    setCurrentRoom(room);
    setPhase("ROOM");
  };

  const handleStartGame = () => {
    setPhase("GAME");
  };

  const handleFinishGame = () => {
    setPhase("RESULT");
  };

  const handleBackToRoom = () => {
    setPhase("ROOM");
  };

  return (
    <div className="app-container" style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {phase === "TITLE" && (
        <Title onRegisterSuccess={handleRegisterSuccess} />
      )}

      {phase === "ENTRANCE" && user && (
        <Entrance 
          user={user} 
          onCreateRoom={handleCreateRoom}
          onFindRoom={handleFindRoom}
        />
      )}

      {phase === "FINDROOM" && (
        <FindRoom 
          onJoinedRoom={handleJoinedRoom} 
        />
      )}

      {phase === "CREATEROOM" && (
        <CreateRoom 
          onJoinedRoom={handleJoinedRoom} 
        />
      )}

      {phase === "ROOM" && currentRoom && (
        <RoomView 
          room={currentRoom} 
          onStartGame={handleStartGame} 
        />
      )}

      {phase === "GAME" && currentRoom && (
        <Game 
          room={currentRoom} 
          onFinishGame={handleFinishGame} 
        />
      )}

      {phase === "RESULT" && (
        <Result onBackToRoom={handleBackToRoom} />
      )}
    </div>
  );
}

export default App
