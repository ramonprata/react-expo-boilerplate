import { IHomeRepository } from "../types/IHomeRepository";
import { IStep } from "../types/IStep";

export class HomeRepository implements IHomeRepository {
  async fetchHomeSteps(): Promise<IStep[]> {
    // Simulate fetching data from an API or database
    // in a real application, this would be replaced with an actual data fetching logic
    // For example, using fetch or axios to get data from a server
    return new Promise<IStep[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            title: "Step 1: Try it",
            description:
              "Edit app/(tabs)/index.tsx to see changes. Press cmd + d to open developer tools.",
          },
          {
            title: "Step 2: Explore",
            description:
              "Tap the Explore tab to learn more about what's included in this starter app.",
          },
          {
            title: "Step 3: Get a fresh start",
            description:
              "When you're ready, run npm run reset-project to get a fresh app directory. This will move the current app to app-example.",
          },
        ]);
      }, 3000);
    });
  }
}
