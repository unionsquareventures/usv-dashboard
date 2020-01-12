USV Dashboard
=============

# Running This Project

1. Clone/download the repo and cd into it

2. Run `npm install` to install all of the dependencies

3. Create a file called `.env` in the root of the directory. This is where the secrets (`process.env.*`) are pulled from when you run the project locally. In the `.env` file, assign `AIRTABLE_KEY` to your airtable API key. The .env file should look like this:

```
AIRTABLE_KEY=key123456789
```

4. Run `npm run dev` to run the project locally. Then go to localhost:3000 in the browser to view it.
