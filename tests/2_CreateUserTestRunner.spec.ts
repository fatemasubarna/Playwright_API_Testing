
import { test, expect } from '@playwright/test';
import { createUserRequest } from '../services/UserCreate.service';
import { saveEnvVar } from '../utils/Utils';
import * as dotenv from 'dotenv';

test("Admin Can Create New User", async ({ request }) => {

    dotenv.config({ override: true }); // ✅ re-reads .env to get fresh token

    const payload = {
        name: "user",
        email: "strashhhgs@gmail.com",
        password: "12345678",
        phone_number: "01122334445",
        nid: "12345678",
        role: "customer"
    }

    let res = await createUserRequest(request, payload, process.env.Token);
    console.log(res);

    expect(res.message).toContain("User created");
   //expect(res.message).toContain("User already exists");
    saveEnvVar("user Id", res.user.id, ".env")
})