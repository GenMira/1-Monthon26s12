import Phaser from "phaser";
import { Room } from "colyseus.js";

// 仮のPhaserゲーム起動関数
export function launchPhaserGame(container: HTMLElement, room: Room): Phaser.Game {
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: container,
    width: 800,
    height: 600,
    scene: {
      create() {
        console.log("Phaser 起動完了。接続中のRoom:", room.roomId);
      }
    }
  };

  return new Phaser.Game(config);
}