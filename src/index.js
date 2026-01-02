import express from 'express';

import walkRouter from './routers/walk.js';
import { errorHandler } from './utils/errors.js';

const app = express();
app.use(express.json());

app.use('/api/walk', walkRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
