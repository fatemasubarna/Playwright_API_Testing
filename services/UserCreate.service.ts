import { APIRequestContext } from "@playwright/test";

const Create_User_URL = "https://dmoney.roadtocareer.net/user/create";

export interface createUserPayload {
    name: string,
  email: string,
  password: string,
  phone_number: string,
  nid: string,
  role: string
}


export async function createUserRequest (request: APIRequestContext, payload: createUserPayload, token ?: string) {
    let responsedata = await request.post( Create_User_URL, {
        data: payload,
        headers : {

        "X-AUTH-SECRET-KEY" : "ROADTOSDET",
        "Authorization" : "bearer " + token  
        } 

    })
    const response = await responsedata.json();
    return response;
    
}