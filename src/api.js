/* eslint-disable */
const API_KEY = '27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a'

//URLSearchParams
export const loadTicker = (tickerName) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`
  ).then((r) => r.json());



export const getCoinsList = () =>
  fetch(
    `https://min-api.cryptocompare.com/data/blockchain/list?&api_key=${API_KEY}`
  ).then((r) => r.json());


