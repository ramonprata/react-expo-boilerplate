import { IStepDto, IStepView } from "../types/IStep";

export const trasnformDataSteps = (steps: IStepDto[]): IStepView[] => {
  if (!steps || steps.length === 0) {
    return [];
  }

  return steps.map((step) => ({
    title: step.title,
    description: step.description,
  }));
};

export const mappers = {
  getHomeSteps: (steps: IStepDto[]) => trasnformDataSteps(steps),
};

export type TMappers = typeof mappers;
