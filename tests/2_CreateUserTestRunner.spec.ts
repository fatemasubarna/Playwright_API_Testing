
import { test, expect } from '@playwright/test';
import { createUserRequest } from '../services/UserCreate.service';
import { saveEnvVar } from '../utils/Utils';
import * as dotenv from 'dotenv';
import { faker } from '@faker-js/faker';


test("Admin Can Create New User", async ({ request }) => {

    dotenv.config({ override: true }); // ✅ re-reads .env to get fresh token

    const payload = {
        name: faker.person.fullName(),
        email: faker.internet.userName() + "@gmail.com",
        //email: faker.internet.email(),
        password: faker.internet.password({ length: 8 }),
        phone_number: "01122" + faker.string.numeric(6),
        nid: faker.string.numeric(8),
         role: "customer"
    }

    let res = await createUserRequest(request, payload, process.env.Token);
    console.log(res);

   // expect(res.message).toContain("User created"); 
//    expect(
//   res.message.includes("User created") ||
//   res.message.includes("User already exists")||
//   res.message.includes("Only Gmail addresses (@gmail.com) are allowed.")
// ).toBeTruthy();
    // saveEnvVar("userId", res.user.id, ".env")

    expect(res.message).toContain("User created");
expect(res.user, `Create failed: ${res.message}`).toBeDefined();
saveEnvVar("userId", res.user.id, ".env")
})