import { Response } from "express";

export type MockedResponse<TResult> = Response & {
    state: {
        status?: number, 
        json?: TResult | unknown
    }
}

export function makeResponse<TResult>(){
    const response = {
        state: {}
    } as MockedResponse<TResult>;

    response.status = (status: number) =>{
        response.state.status = status;
        return response;
    }

    response.json = (json: TResult) => {
        response.state.json = json;
        return response;
    }

    return response;
}