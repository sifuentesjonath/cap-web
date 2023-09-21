import axios from 'axios';
import { getJwt } from './jwt';

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

customAxios.defaults.headers.common['Accept'] = 'application/json'
customAxios.defaults.headers.common['Content-Type'] = 'application/json'

const setAuthHeader = (token) => {
  customAxios.defaults.headers.common['authorization'] = `Bearer ${token}`;
}

if (getJwt()) {
  setAuthHeader(getJwt())
}
//@ts-ignore
customAxios.interceptors.response.use(
  response => {
    if (response.config) console.info(`[AXIOS]:${response.config.method.toUpperCase()}:${response.config.url}`, { config: response.config, data: response.data });
    //@ts-ignore
    return { ok: true, status: response.status, data: (response || {}).data, message: response.message }
  }, 
  error => {
    console.log({ error })
    /** if execution reaches here then response is undefined and breaks execution * check console.log({ error }) *
        reaching here leads to a 'Network error', printed Object shows an isAxiosError: true
    */
    if(error.response){
      return { ok: false, status: error.response.status, data: error.response.data, message: error.response.message }
    }
    return { ok: false, status: 400, message: 'Axios error' }
});

export { setAuthHeader };

//@ts-ignore
customAxios.origin = axios;
export default customAxios;
