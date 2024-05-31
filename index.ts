import express from 'express';
import configs from './src/config/config';
import router from './src/routers';

const app = express();

app.use('/api', router);

app.listen(configs.PORT, () => {
    console.log("Server alive and running at", configs.PORT);
});