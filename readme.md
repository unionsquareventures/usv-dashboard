USV Dashboard
=============

# Running This Project

1. Clone/download the repo and cd into it

2. Run `npm install` to install all of the dependencies

3. Create a file called `.env` in the root of the directory. This is where the secrets (`process.env.*`) are pulled from when you run the project locally. In the `.env` file, assign `AIRTABLE_KEY` to your airtable API key as well as `AIRTABLE_COMPANIES_BASE_ID` to the ID for the Dash 3.0 base. The .env file should look like this:

```
AIRTABLE_KEY=key123456789
AIRTABLE_COMPANIES_BASE_ID=app123456789
GOOGLE_CLIENT_ID=810380289272-v86e6hkvtaj7280do08emcma1bi79t3b.apps.googleusercontent.com
DISABLE_LOGIN=true
```
^ that last DISABLE_LOGIN=true is just for development environments, it should not be there for production environments

4. Run `npm run dev` to run the project locally. Then go to localhost:3000 in the browser to view it.
