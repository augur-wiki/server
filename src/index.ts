import dotenv from "dotenv";
import express from "express";

import { repRequest } from "./data/repInfo";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get( "/rep", ( req, res ) => {
    // tslint:disable-next-line:no-console
    console.log(repRequest());
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
