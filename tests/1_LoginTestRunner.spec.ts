import { test, expect } from '@playwright/test';
import { loginRequest } from '../services/login.service';
import { saveEnvVar } from '../utils/Utils';




test("Admin Can Login", async ({ request }) => {

    const payload = {
        email: "admin@dmoney.com",
        password: "1234"
    }

    let res = await loginRequest(request, payload);
    console.log(res);

    expect(res.message).toContain("Login successful");
    saveEnvVar("Token", res.token, ".env")

}
)


