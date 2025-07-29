import { IStepDto, IStepView } from "../types/IStep";

export const trasnformDataSteps = (steps: IStepDto[]): IStepView[] => {
  // use to perform some complex transform IStepDto => IStepView

  return steps.map((step) => ({
    title: step.title,
    description: step.description,
  }));
};

export const mappers = {
  getHomeSteps: (steps: IStepDto[]) => trasnformDataSteps(steps),
};

export type TMappers = typeof mappers;
