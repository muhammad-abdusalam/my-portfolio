# Muhammad Adam — Developer Portfolio

A personal developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It showcases my skills, projects, and contact information in a responsive, bilingual experience.

## Features

- **Bilingual interface:** Arabic and English.
- **RTL/LTR support:** Layout direction adapts to the selected language.
- **Light and dark themes:** Switch between light and dark appearances.
- **Responsive design:** Optimized for desktop, tablet, and mobile screens.
- **Accessibility:** Includes accessibility-conscious interface patterns and reduced-motion support.
- **Projects and skills:** Dedicated sections for showcasing development work and technical skills.
- **Contact form:** Server-side email delivery using Resend.
- **Rate limiting:** Request protection using Upstash Redis and Ratelimit.
- **SEO foundations:** Metadata and other search-engine optimization essentials.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend](https://resend.com/)
- [Upstash Redis](https://upstash.com/)

## Getting Started

### Prerequisites

- Node.js compatible with the project's Next.js version.
- npm.
- A Resend API key for contact-form email delivery.
- Upstash Redis REST credentials for rate limiting.

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/muhammad-abdusalam/my-portfolio.git
cd my-portfolio
npm install
```

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace the example values with your own configuration. Never commit real API keys or credentials.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

- `npm run dev` — starts the development server.
- `npm run build` — creates a production build.
- `npm run start` — starts the production server after building.
- `npm run lint` — runs the project's configured linting checks.

## Contact Form Configuration

The contact form submits to the server-side endpoint:

```text
/api/contact
```

Email delivery is handled by Resend.

- Configure `RESEND_API_KEY` in `.env.local`.
- The current test sender is `onboarding@resend.dev`.
- Sending emails to the public from a production deployment may require a verified domain and an appropriately configured sender address in Resend.
- The recipient address is configured in the server-side contact route.
- Rate limiting uses Upstash Redis and Ratelimit, with a limit of five requests per IP address within ten minutes.
- The rate limiter is configured to reject requests when its required service is unavailable.

Do not expose secret environment variables in client-side code or commit them to the repository.

## Deployment

The project is intended to be deployed to [Vercel](https://vercel.com/).

Before deploying:

1. Push the reviewed project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables in the deployment settings.
4. Set `NEXT_PUBLIC_SITE_URL` to the production website URL.
5. Configure and verify the production sender domain in Resend if required.
6. Confirm that the contact form, rate limiting, language switching, themes, and production build work as expected.

## Copyright

Copyright © 2026 Muhammad Adam. All rights reserved.

No license is granted to use, copy, modify, distribute, or reproduce this project's source code or other original materials without prior written permission from the copyright holder.

Third-party libraries and assets remain subject to their respective licenses and terms.
