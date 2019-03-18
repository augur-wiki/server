"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Request for Reputation (REP) token statistics.
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function repRequest() {
    function handleResponse() {
        const price = 0;
        return price;
    }
    /*
    const handleResponse = (response: AxiosResponse) => {
        const price: number = 0;
        return price;
    };*/
    const handleError = (response) => {
        // tslint:disable-next-line:no-console
        console.log("there has been an eror");
    };
    const queryUrl = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=REP&tsyms=USD&api_key=";
    axios_1.default.get(queryUrl + process.env.CRYPTO_COMPARE_API)
        .then(handleResponse)
        .catch(handleError);
}
exports.repRequest = repRequest;
//# sourceMappingURL=repInfo.js.map