import { AxiosResponse } from 'axios';

export type RequestFunction = (args: any) => Promise<AxiosResponse>

export const retryRequest = async (requestFunction: RequestFunction, args: any, retries: number = 3) => {
    let response,
        isError = false;

    try {
        if(retries != 3) console.log(`Retrying request: ${retries}`);
        response = await requestFunction(args);

        const responseStatus = response?.ok || response.data.ok;
        if(!responseStatus) throw response;
    }
    catch(error){
        console.error(error);
        response = null;
        isError = true; 
    }

    // made like this to cover 200 and 300 http codes
    // const requestSucceed = response.data && response.data.message !== 'Request failed with status code 422';

    const requestSucceed = isError != true;

    if (retries === 0) throw new Error(`multiple attempts on same request failed: ${response.data?.message || response.statusText}`);   

    if (!requestSucceed) return retryRequest(requestFunction, args, retries - 1);
    return response.data;
};