# Crypto Recovery Platform Backend

This repository contains the backend infrastructure for the Crypto Recovery Platform.

## **Architecture**
- **Frontend**: Next.js client connecting to the API Gateway.
- **API Gateway** (NestJS):
  - Manages requests and routes them to the appropriate services.
- **Services**:
  - Case Service (NestJS): Manages case submissions and tracking.
  - Auth/RBAC Service (NestJS): Authenticates users and implements role-based access control.
  - Payments Service (NestJS): Handles payment logic.
  - Webhooks Service (NestJS): Listens for external events.
- **AI Forensics Engine**: Flask app for wallet tracing, risk scoring, and anomaly detection.

## **Technology Stack**
- **API Gateway and Services**: NestJS
- **AI Engine**: Flask
- **Database**: Supabase (Postgres)
- **Authentication**: JWT / Supabase Auth
- **Deployment**: Railway & Replit

## **Development Instructions**
1. Clone the repo:
   ```sh
   git clone https://github.com/cloudswan4-ui/crypto_recovery_platform.git
   ```
2. Set up the environment variables in `.env`:
   ```env
   SUPABASE_URL=<Your Supabase URL>
   SUPABASE_ANON_KEY=<Your Supabase Anon Key>
   JWT_SECRET=<Your JWT Secret>
   ```
3. Install dependencies (example for API Gateway):
   ```sh
   cd api-gateway
   npm install
   ```
4. Start services:
   - API Gateway:
     ```sh
     cd api-gateway
     npm run start
     ```
   - Case Service:
     ```sh
     cd services/case-service
     npm run start
     ```
   - Auth Service:
     ```sh
     cd services/auth-service
     npm run start
     ```
   - AI Engine:
     ```sh
     cd ai-engine
     python app.py
     ```

## **Deployment**
Services can be deployed via:
- **Railway**: Deploy each service as an independent app.
- **Replit**: Use for collaboration and testing environments.

## **Contributors**
- Managed by `cloudswan4-ui`. Contributions welcome!