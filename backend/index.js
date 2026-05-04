// backend/index.js
import express from "express";
import { authMiddleware } from "./middleware/auth.js";
import pkg from "express-openid-connect";
import cors from "cors";

const { requiresAuth } = pkg;
const app = express();
app.use(authMiddleware);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.json({ message: "Auth0 Express server is running." });
});

app.get("/login", (req, res) => {
  return res.oidc.login({ returnTo: "http://localhost:5173/profile" });
});

app.get("/logout", (req, res) => {
  return res.oidc.logout({ returnTo: "http://localhost:5173" });
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.json(req.oidc.user);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
