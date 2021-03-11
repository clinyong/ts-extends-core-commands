export interface Commands {}

export class Core {
  commands: Commands;

  constructor() {
    this.commands = {};
  }

  registerCommands(name: string, func: any) {
    // @ts-ignore
    this.commands[name] = func;
  }
}
