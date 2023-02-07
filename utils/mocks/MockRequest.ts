import { Request } from "express";
import { Params } from "express-serve-static-core";

interface mockRequest {
    params?: Params;
}


export function MockRequest({params}: mockRequest): Request{
    const request = {
        params: params || {}
    }as unknown;

    return request as Request;
}

