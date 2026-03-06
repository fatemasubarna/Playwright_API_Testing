import{test, expect} from '@playwright/test';

test("userlist", async ({ request }) => {

    let response = await request.get( "https://reqres.in/api/users?page=2",{
        headers : {
            "x-api-key":  "reqres_c90e0e8b84c7401385e37d1b3b7ae7e4",
            Accept : "application/json"
        }

    } );

    console.log( await response.json() );


})


test("user create", async ({ request }) => {

    let response = await request.post( "https://reqres.in/api/users",{

        data : {
            name : "morpheus",
            job : "leader"
        },

        headers : {
            "x-api-key":  "reqres_c90e0e8b84c7401385e37d1b3b7ae7e4",
            Accept : "application/json"
        }

    } );

    console.log( await response.json() );
    let res = await response.json();
    let userid = res.id;
    console.log("user id is " + userid);



})