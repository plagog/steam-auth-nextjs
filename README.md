This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Steam Auth Implementation using NextJS and Javascript.
### Special thanks to HilliamT @ (https://github.com/HilliamT)

I created a simple JS version of HilliamT's code and added functionality to support a returnUrl (utilizing non-secure cookies) which is determined by the route you initiate the steam login process from.

To test it out, navigate to localhost:3000/anything-here. Notice that a cookie named steamReturnUrl is created everytime you start the process.

## Usage

At root dir run:

      $ npm install

At root dir create .env.local with:

      DOMAIN=http://localhost:3000 # Where this app will run
      SESSION_SECRET= # 32+ char random string
      STEAM_API_KEY= # Your Steam API Key

At root dir run:

      $ npm run dev


## HilliamT Docs

Read HilliamT's docs here: (https://github.com/HilliamT/nextjs-steam-auth)





## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
