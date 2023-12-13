import cors from 'cors';
import express from 'express';
import { router as userRouter } from './routes/user.route.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use('/users', express.json(), userRouter)

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
})