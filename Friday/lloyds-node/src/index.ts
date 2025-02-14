import express, {NextFunction, Request, Response} from "express";

const port =  process.env.PORT ?? 3000;
const expressApp = express();

expressApp.listen(port, ()=>{
    console.log("Express server listening on port " + port);
});
