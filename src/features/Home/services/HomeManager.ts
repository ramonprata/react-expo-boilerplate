import { ILogger } from "@/src/shared/types";
import { IHomeRepository } from "../types/IHomeRepository";
import { IStepView } from "../types/IStep";
import { TMappers } from "../utils/mappers";

export class HomeManager {
  private repository: IHomeRepository;
  private logger: ILogger;
  private mappers: TMappers;

  constructor(
    _repository: IHomeRepository,
    _logger: ILogger,
    _mappers: TMappers
  ) {
    this.repository = _repository;
    this.logger = _logger;
    this.mappers = _mappers;
  }

  async getHomeSteps(): Promise<IStepView[]> {
    try {
      const data = await this.repository.fetchHomeSteps();
      return this.mappers?.getHomeSteps(data);
    } catch (error) {
      this.logger?.error("Failed to fetch home steps", error);
      throw new Error("Custom error message...");
    }
  }
}
