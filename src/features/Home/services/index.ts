import { logger } from "@/src/shared/base";
import { mappers } from "../utils/mappers";
import { HomeManager } from "./HomeManager";
import { HomeRepository } from "./HomeRepository";

const homeRepository = new HomeRepository();
const homeManager = new HomeManager(homeRepository, mappers, logger);

export default homeManager;
