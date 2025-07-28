import { ILogger } from "../types/ILogger";

export class Logger implements ILogger {
  log(message: string, ...optionalParams: any[]): void {
    console.log(message, ...optionalParams);
  }
  warn(message: string, ...optionalParams: any[]): void {
    console.warn(message, ...optionalParams);
  }
  error(message: string, ...optionalParams: any[]): void {
    console.warn(message, ...optionalParams);
  }
  info: (message: string, ...optionalParams: any[]) => void = (
    message: string,
    ...optionalParams: any[]
  ): void => {
    console.log(message, ...optionalParams);
  };
}

export default new Logger();
