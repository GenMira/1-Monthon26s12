import type { UserInfo } from "../../../resource/types/user";

interface EntranceProps {
  user: UserInfo;
  onCreateRoom: () => void;
  onFindRoom: () => void;
}

export default function Entrance({
  user: _user,
  onCreateRoom: _onCreateRoom,
  onFindRoom: _onFindRoom,
}: EntranceProps) {
  return(
    <div>test</div>
  )
}
