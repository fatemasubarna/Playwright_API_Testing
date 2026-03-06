import { APIRequestContext, request  } from "@playwright/test";

const Login_URL = "https://dmoney.roadtocareer.net/user/login";

export interface LoginPayload {
    email: string;
    password: string;
}


export async function loginRequest (request: APIRequestContext, payload: LoginPayload) {
    let respnssata = await request.post( Login_URL, {
        data: payload
    })
    const response = await respnssata.json();
    return response;
    
}




