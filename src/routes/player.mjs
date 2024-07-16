import { Router } from "express";
import pool from "../config/index.mjs";
import path from 'path';
import views_path from '../index.mjs';
import currentDateTime from '../utils/time.mjs';

const router = Router();

router.get('/api/:country/:player', async (req, res) => {
    console.log(req.url);
    console.log(currentDateTime)
    console.log('----------------------------------------------');
    let countryParam = req.params.country;
    let countryDB = (countryParam[0].toUpperCase() + countryParam.slice(1));
    const results = await pool.query(
        'SELECT player_name, player_position, caps, goals, country, birthdate, year_played' +
        ' FROM copy_world_cup_players' +
        ` WHERE player_name LIKE '%' || $1 || '%' ORDER BY year_played`, [req.params.player]
    )
    //res.status(200).send(results.rows)
    res.render(path.join(views_path + '/player.ejs'), {player: results.rows});
});

export default router;