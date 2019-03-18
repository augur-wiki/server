// Request for Reputation (REP) token statistics.
import axios, { AxiosError, AxiosResponse } from "axios";
import dotenv from "dotenv";
import * as express from "express";

dotenv.config();

export function repRequest() {

    const handleResponse = (response: AxiosResponse) => {
        const repInfo = {
            update: response.data.RAW.REP.USD.LASTUPDATE,
            price: response.data.RAW.REP.USD.PRICE,
            priceChange: response.data.RAW.REP.USD.CHANGEPCT24HOUR,
            lowDay: response.data.RAW.REP.USD.LOW24HOUR,
            highDay: response.data.RAW.REP.USD.HIGH24HOUR,
            marketCap: response.data.RAW.REP.USD.MKTCAP,
            volume: response.data.RAW.REP.USD.TOTALVOLUME24H
        };
        // tslint:disable-next-line:no-console
        console.log(repInfo);
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
