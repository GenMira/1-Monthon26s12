import type { Room } from "colyseus.js";

interface FindRoomProps {
  onJoinedRoom: (room: Room) => void;
}

export default function FindRoom({ onJoinedRoom: _onJoinedRoom }: FindRoomProps) {
  return <div>test</div>;
}
