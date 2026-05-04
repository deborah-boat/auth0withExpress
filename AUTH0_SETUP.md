# Auth0 Setup Guide

## Prerequisites
- Auth0 account and tenant (e.g. `dev-3zuqd5vw0bjjmiew.eu.auth0.com`)
- Auth0 Application created (type: Regular Web Application)

## Step 1: Configure Backend Environment

Copy `backend/.env.example` to `backend/.env` and fill in your Auth0 values:

```bash
AUTH0_SECRET=your-generated-secret
AUTH0_BASE_URL=http://localhost:5001
AUTH0_CLIENT_ID=your-client-id
AUTH0_ISSUER_BASE_URL=https://your-tenant.eu.auth0.com
PORT=5001
```

## Step 2: Configure Auth0 Application Settings

Go to **Auth0 Dashboard → Applications → Your App → Settings** and add:

### Allowed Callback URLs
```
http://localhost:5001/callback
```

### Allowed Logout URLs
```
http://localhost:5001
http://localhost:5173
```

### Allowed Web Origins (optional but recommended)
```
http://localhost:5001
http://localhost:5173
```

Then **Save Changes**.

## Step 3: Start the App

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend (in another terminal):**
```bash
cd client
npm run dev
```

Then visit `http://localhost:5173`.

## Troubleshooting

| Error | Fix |
|-------|-----|
| `Callback URL mismatch` | Add `http://localhost:5001/callback` to Auth0 Allowed Callback URLs |
| `invalid_request: The "returnTo" querystring parameter ... is not defined` | Add `http://localhost:5001` and `http://localhost:5173` to Auth0 Allowed Logout URLs |
| `Issuer discovery failed (404)` | Check that `AUTH0_ISSUER_BASE_URL` matches your Auth0 tenant domain exactly (e.g. `https://dev-xxxxx.eu.auth0.com`) |

