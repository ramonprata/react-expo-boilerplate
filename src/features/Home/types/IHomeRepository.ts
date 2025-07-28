import { IStep } from "./IStep";

export interface IHomeRepository {
  fetchHomeSteps(): Promise<IStep[]>;
}
