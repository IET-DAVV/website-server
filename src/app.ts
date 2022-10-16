import express, {Request,Response,Application} from 'express';

const app:Application = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req:Request, res:Response):void => {
    res.status(200).json({message: `Server Running on PORT 👉 {PORT}`})
  });

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
  });