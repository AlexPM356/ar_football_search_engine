import express from 'express';
import routes from './routes/index.mjs';
import currentDateTime from './utils/time.mjs';
import bodyParser from 'body-parser';

//DEFINE PATH TO RENDER HTML FILES
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const views_path = __dirname + '/views';
export default views_path;

//============================================================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

//============================================================================================
app.get('/', (req, res) =>{
    console.log(req.url);
    console.log(currentDateTime)
    console.log('----------------------------------------------');
    res.render(path.join(views_path + '/index.ejs'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('----------------------------------------------');
});