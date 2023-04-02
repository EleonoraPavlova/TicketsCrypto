/* eslint-disable */
const API_KEY = '27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a'

//URLSearchParams
//получить цену в usd массиву конкр монет
export const loadTickers = tickers =>
  fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(',')}&tsyms=USD&api_key=${API_KEY}`
  ).then((r) => r.json()).then(rawData => Object.fromEntries(Object.entries(rawData).map(([key, value]) => [key, value.USD])));

//Object.fromEntries - получает массив пар вида [ключ, значение], он создаёт из них объект {}
//Object.entries(obj) – возвращает МАССИВ пар [ключ, значение].



//получить список монет доступных на данный момент монет
export const getCoinsList = () =>
  fetch(
    `https://min-api.cryptocompare.com/data/blockchain/list?&api_key=${API_KEY}`
  ).then((r) => r.json());

//  `https://min-api.cryptocompare.com/data/all/coinlist&api_key=${API_KEY}`


const tickers = new Map()


export const subscribeToTicker = (ticker, cb) => {
  const subscribers = tickers.get(ticker) || []
  tickers.set(ticker, [...subscribers, cb])
};


export const unsubscribeFromTicker = (ticker, cb) => {
  const subscribers = tickers.get(ticker) || []
  tickers.set(ticker, subscribers.filter((fn) => fn != cb))
}
//(ticker, cb) - когда ticker обновится, вызови вот эту cb колбэк функц