import axios from 'axios';
const API_KEY = '5382b414fe43684c1dcb4d17d976144f';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  
  const url = `${ROOT_URL}&q=${city},us`;
  //axios return a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}