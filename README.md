# Hapi Boilerplate

## Setup

    $ npm install
    $ npm start

## Tests

    $ npm test

## API Docs

Navigate to `/documentation` for full blown swagger docs of the API.

## File Structure

Routes / handlers / and business logic are contained within the `/components` directory. Each route is provided a `handler` function which is wrapped around a `service` function. These `service` functions allow each component's business logic to be tested independently from the API.