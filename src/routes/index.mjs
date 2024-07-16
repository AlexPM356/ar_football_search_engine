import { Router } from "express";
import tournamentsRouter from "./tournaments.mjs";
import tournamentsYearRouter from './tournament_year.mjs';
import countryRouter from './country.mjs';
import playerRouter from './player.mjs';

const router = Router();
router.use(
    tournamentsRouter,
    tournamentsYearRouter,
    countryRouter,
    playerRouter
);
export default router;