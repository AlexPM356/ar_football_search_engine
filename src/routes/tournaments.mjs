import { Router } from 'express';
import pool from '../config/index.mjs';
import currentDateTime from '../utils/time.mjs';
import path from 'path';
import views_path from '../index.mjs';

const router = Router();

router.get('/api/world_cup', async (req, res) => {
    console.log(req.url);
    console.log(currentDateTime)
    console.log('----------------------------------------------');
    const results = await pool.query(
        'SELECT DISTINCT year_played FROM copy_world_cup_players ORDER BY year_played'
    )
    res.render(path.join(views_path + '/tournaments.ejs'), {tournaments: results.rows});
});

export default router;