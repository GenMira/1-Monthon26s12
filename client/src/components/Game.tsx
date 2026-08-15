// components/Game.tsx のイメージ
import { useEffect, useRef } from "react";
import type { Room } from "colyseus.js";
import { launchPhaserGame } from "../game/PhaserGame";

interface GameProps {
  room: Room;
  onFinishGame: () => void;
}

export default function Game({ room, onFinishGame: _onFinishGame }: GameProps) {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gameRef.current) return;

    // Phaser 3 ゲームを div要素にアタッチして起動
    const phaserInstance = launchPhaserGame(gameRef.current, room);

    return () => {
      // 画面退場（アンマウント）時に Phaser を安全に破棄
      phaserInstance.destroy(true);
    };
  }, [room]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* 1. Phaser 3 の描画キャンバスが埋め込まれる領域 */}
      <div ref={gameRef} id="phaser-container" style={{ width: "100%", height: "100%" }} />

      {/* 2. キャンバスの上に重ねる React UI (HUD) */}
      <div className="game-ui-overlay" style={{ position: "absolute", top: 10, left: 10, pointerEvents: "none" }}>
        <h2>ゲームプレイ中...</h2>
        {/* スコアやタイマーなどを表示 */}
      </div>
    </div>
  );
};
