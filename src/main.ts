import { Game } from "./game/game";
import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

const game = new Game(app);
void game.boot();
