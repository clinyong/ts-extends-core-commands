import { Core } from "../../core/core";

export class InsertPlugin {
  constructor(core: Core) {
    core.registerCommands("insert", this.insert.bind(this));
  }

  insert(value: string) {
    console.log("insert " + value);
  }
}
