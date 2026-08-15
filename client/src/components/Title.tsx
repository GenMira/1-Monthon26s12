import type { UserInfo } from "../../../resource/types/user";

interface TitleProps {
  onRegisterSuccess: (userInfo: UserInfo) => void;
}

export default function Title({ onRegisterSuccess: _onRegisterSuccess }: TitleProps) {
  return(
    <div>test</div>
  )
}
