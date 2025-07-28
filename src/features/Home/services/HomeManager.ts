import { ILogger } from "@/src/shared/types";
import { IHomeRepository } from "../types/IHomeRepository";
import { IStep } from "../types/IStep";

export class HomeManager {
  private repository: IHomeRepository;
  private logger: ILogger;

  constructor(_repository: IHomeRepository, _logger: ILogger) {
    this.repository = _repository;
    this.logger = _logger;
  }

  async getHomeSteps(): Promise<IStep[]> {
    try {
      return await this.repository.fetchHomeSteps();
    } catch (error) {
      this.logger?.error("Failed to fetch home steps", error);
      throw new Error("Custom error message...");
    }
  }
}
