import { Core } from "./core";
import { InsertPlugin } from "./plugins/insert";

export function createCore() {
  const core = new Core();
  new InsertPlugin(core);

  return core;
}
