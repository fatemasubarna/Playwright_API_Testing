
import { test, expect } from '@playwright/test';
import { updateUserRequest } from '../services/UserUpdate.service';
import { saveEnvVar } from '../utils/Utils';
import * as dotenv from 'dotenv';
import { faker } from '@faker-js/faker';

test("Admin Can Update Existing User", async ({ request }) => {

    dotenv.config({ override: true }); // ✅ re-reads .env to get fresh token

    const payload = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 8 }),
        phone_number: "01122" + faker.string.numeric(6),
        nid: faker.string.numeric(8),
        role: "customer"
    }

    let res = await updateUserRequest(request, payload, process.env.Token, process.env.userId);
    console.log(res);

    // expect(res.message).toContain("User created");
    // saveEnvVar("user Id", res.user.id, ".env")
})