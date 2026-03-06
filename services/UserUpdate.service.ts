import { APIRequestContext } from "@playwright/test";

const Update_User_URL = "https://dmoney.roadtocareer.net/user/update/";

export interface updateUserPayload {
  name: string,
  email: string,
  password: string,
  phone_number: string,
  nid: string,
  role: string
}


export async function updateUserRequest (request: APIRequestContext, payload: updateUserPayload, token ?: string, userId ?: string) {
    let responsedata = await request.put( Update_User_URL+userId, {
        data: payload,
        headers : {

        "X-AUTH-SECRET-KEY" : "ROADTOSDET",
        "Authorization" : "bearer " + token  
        } 

    })
    const response = await responsedata.json();
    return response;
    
}