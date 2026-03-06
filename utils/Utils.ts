import { test, request } from "@playwright/test";
import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";  // ✅ Fixed: uncommented
dotenv.config();                   // ✅ Fixed: uncommented

export function generateRandomNumber(min:number,max:number){
    return (Math.floor(Math.random()*(max-min)+min)); 
}

export function saveEnvVar(
  key: string,
  value: string,
  envFilePath?: string
): void {
  const envPath = envFilePath || path.resolve(__dirname, "..", ".env");
  const newLine = `${key}=${value}`;
  const exists = fs.existsSync(envPath);

  let content = exists ? fs.readFileSync(envPath, "utf-8") : "";

  // Replace existing key or append if missing
  content = content.match(new RegExp(`^${key}=`, "m"))
    ? content.replace(new RegExp(`^${key}=.*`, "m"), newLine)
    : `${content.trim()}\n${newLine}\n`;

  fs.writeFileSync(envPath, content.trim() + "\n", "utf-8");
  console.log(`Saved ${key} to ${envPath}`);
}