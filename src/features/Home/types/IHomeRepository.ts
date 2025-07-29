import { IStepDto } from "./IStep";

export interface IHomeRepository {
  fetchHomeSteps(): Promise<IStepDto[]>;
}
