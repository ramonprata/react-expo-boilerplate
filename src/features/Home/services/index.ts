import { logger } from "@/src/shared/base";
import { HomeManager } from "./HomeManager";
import { HomeRepository } from "./HomeRepository";

const homeRepository = new HomeRepository();
const homeManager = new HomeManager(homeRepository, logger);

export default homeManager;
