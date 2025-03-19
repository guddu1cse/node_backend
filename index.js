import app from './src/app.js';
import dotenv from 'dotenv';
import { getAllTutorials, createTableTutorials, addTutorial } from './src/query.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

(async () => {
    //await addTutorial({ id: 1, title: 'Tutorial 1', description: 'Description 1', published: true });
    const res = await getAllTutorials();
    console.log(res);
})();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
