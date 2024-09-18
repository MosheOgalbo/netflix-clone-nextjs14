
# Netflix Clone (Next.js 14)

This project is a Netflix-like streaming platform built using React and Next.js 14, designed for video streaming. It uses PostgreSQL as the database, hosted on Supabase, with Prisma as the ORM for efficient database management.

## Setup Instructions

Before running the project, make sure to create a `.env` file in the root directory with the following environment variables:

### Database Configuration:

```
DATABASE_URL="postgresql://postgres.[Reference-ID]:[YOUR-PASSWORD]@aws-0-us-east-2.pooler.supabase.com:5432/postgres"
```

### GitHub OAuth Provider:

```
GITHUB_ID=
GITHUB_SECRET=
```

### Google OAuth Provider:

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Email Provider Configuration:

Configure the email provider for sending emails such as user signups or password resets.

```
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=465
EMAIL_FROM=
```

## Prisma

Prisma is used as the ORM to interact with the PostgreSQL database. It allows for type-safe database queries and migrations. Make sure to run the following command to apply migrations after setting up the project:

```bash
npx prisma migrate dev
```

You can also inspect your database schema with:

```bash
npx prisma studio
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Running Tests

To run tests, use the following command:

```bash
npm run test
```

## Project Structure

- **Frontend:** React with Next.js 14
- **Backend:** Node.js with PostgreSQL (Supabase) and Prisma ORM
- **Authentication:** GitHub and Google OAuth, Email provider

## Prerequisites

- Node.js 18.x.x
- npm 9.x.x
- Next.js 14.x.x

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

For any questions or issues, feel free to reach out!
