// Request for Reputation (REP) token statistics.
import axios, { AxiosError, AxiosResponse } from "axios";
import dotenv from "dotenv";
import * as express from "express";

dotenv.config();

export function repRequest() {

    const handleResponse = (response: AxiosResponse) => {

        const price = response.data.RAW.REP.USD.PRICE;
        // tslint:disable-next-line:no-console
        console.log(price);
    };

    const handleError = (response: AxiosError) => {
        // tslint:disable-next-line:no-console
        console.log("there has been an eror");
    };

    const queryUrl: string = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=REP&tsyms=USD&api_key=";

    axios.get(queryUrl + process.env.CRYPTO_COMPARE_API)
        .then(handleResponse)
        .catch(handleError);
}
