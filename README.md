ticket-wicket
=============

An event creation and ticket sales app built on the Ethereum blockchain. Built at [ETHWaterloo](https://ethwaterloo.com/) hackathon.

You can visit the app at [ticketwicket.xyz](https://ticketwicket.xyz). You'll want to be running `testrpc` locally as well.

## Development

1. Install global dependencies:

  `npm install -g truffle`

  `npm install -g ethereumjs-testrpc`

2. Run `testrpc` locally

3. Compile the contracts `truffle compile`

4. Start the app

  `cd client && yarn install`

  `cd client && yarn start`

## Notes

The client app creates the event contract so we don't actually need to use `truffle migrate` but you can if you want

## Deployment

To get the latest changes to be reflected on ticketwicket.xyz, you need to run `yarn run build` in the `client` directory,
and place the resulting files from `client/build` into the top-level directory on the `gh-pages` branch.

## Team

* Kevin Hughes
* Christopher Vollick
* Ben Cox
* Chris Thomson
