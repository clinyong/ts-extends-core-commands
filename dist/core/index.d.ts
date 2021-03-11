export interface Commands {
}
export declare class Core {
    commands: Commands;
    constructor();
    registerCommands(name: string, func: any): void;
}
