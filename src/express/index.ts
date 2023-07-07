
import express from 'express';
import router from '@/routes'
import { createServer } from "http";
import cors from 'cors'


const app = express()


app.use(express.text({ type: 'text/*' }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(cors({
  origin: '*'
}))




app.use('/', router);



const server = createServer(app)

declare global {
  namespace Express {
      interface Request {
          token?: string;
      }
  }
}

export const startApp = () => {
  return server.listen(1332, async (err?: Error) => {
    if (err) {
      console.error(`Error : ${err}`);
      process.exit(-1);
    }

    console.log(`App is running on ${1332}`);
  });

  
};



export default app;

