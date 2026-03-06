
import { test, expect } from '@playwright/test';
import { updateUserRequest } from '../services/UserUpdate.service';
import { saveEnvVar } from '../utils/Utils';
import * as dotenv from 'dotenv';

test.only("Admin Can Update Existing User", async ({ request }) => {

    dotenv.config({ override: true }); // ✅ re-reads .env to get fresh token

    const payload = {
        name: "user",
        email: "strashhhgs@gmail.com",
        password: "12345678",
        phone_number: "01122334445",
        nid: "12345678",
        role: "customer"
    }

    let res = await updateUserRequest(request, payload, process.env.Token, process.env.userId);
    console.log(res);

    // expect(res.message).toContain("User created");
    // saveEnvVar("user Id", res.user.id, ".env")
})