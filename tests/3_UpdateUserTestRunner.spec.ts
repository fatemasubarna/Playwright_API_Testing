
import { test, expect } from '@playwright/test';
import { updateUserRequest } from '../services/UserUpdate.service';
import { saveEnvVar } from '../utils/Utils';
import * as dotenv from 'dotenv';
import { faker } from '@faker-js/faker';

test("Admin Can Update Existing User", async ({ request }) => {

    dotenv.config({ override: true }); // ✅ re-reads .env to get fresh token

    const userId = process.env.userId;
expect(userId, "userId env var must be set before running this test").toBeTruthy();

    const payload = {
        name: "test user",
        email: faker.internet.email(),
        password: faker.internet.password({ length: 8 }),
        phone_number: "01122" + faker.string.numeric(6),
        nid: faker.string.numeric(8),
        role: "customer"
    }

    // FIX 2: Pass userId variable instead of process.env.userId directly
    let res = await updateUserRequest(request, payload, process.env.Token, userId);
    console.log(res);

    // FIX 3: Assert res.user exists before accessing .id
    expect(res.user, `Update failed with: ${res.message}`).toBeDefined();

    // FIX 4: Fixed key name from "user Id" → "userId" to match process.env.userId
    saveEnvVar("userId", res.user.id, ".env")

    // expect(res.message).toContain("User created");
     
})