import { auth } from "express-openid-connect";
import dotenv from "dotenv";

dotenv.config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET || process.env.SECRET,
  baseURL: process.env.AUTH0_BASE_URL || process.env.BASE_URL || "http://localhost:5001",
  clientID: process.env.AUTH0_CLIENT_ID || process.env.CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || process.env.ISSUER,
  routes: {
    callback: "/callback",
  },
};

export const authMiddleware = auth(config);
