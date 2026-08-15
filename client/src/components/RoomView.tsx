import type { Room } from "colyseus.js";

interface RoomViewProps {
  room: Room;
  onStartGame: () => void;
}

export default function RoomView({
  room: _room,
  onStartGame: _onStartGame,
}: RoomViewProps) {
  return <div>test</div>;
}
