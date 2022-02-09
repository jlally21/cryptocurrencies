# cryptocurrencies [![Build Status](https://travis-ci.org/crypti/cryptocurrencies.svg?branch=master)](https://travis-ci.org/crypti/cryptocurrencies)

> A JSON list of all the cryptocurrency symbols and names

The currency list is a [JSON file](cryptocurrencies.json) that can be used wherever.

## Install

```
$ npm install --save cryptocurrencies
```

## Usage

```js
const cryptocurrencies = require("cryptocurrencies");

cryptocurrencies.BTC;
//=> 'Bitcoin'

cryptocurrencies.symbols();
//=> ['42', ... 'BTC', 'ETH', 'LTC', ...]
```

## Cryptocurrencies

<!-- DO NOT REMOVE THE COMMENTS BELOW, OR EDIT THIS TABLE DIRECTLY. -->
<!-- Use `npm run build` to auto-generate the table. -->

<!-- BEGIN TABLE INJECT -->
There are currently **0 cryptocurrencies** represented*:

<small><em>* Last updated: Wed, 09 Feb 2022 17:39:27 GMT</em></small>

| Symbol | Name |
| :------ | :------ |

<!-- END TABLE INJECT -->

## Building

The JSON list, the currency icons, and the Markdown Table shown above (in this readme) are auto-generated
from the coin list made available by the [cryptocompare coinlist API](https://www.cryptocompare.com/api/data/coinlist/),
and can be updated automatically by running:

```
$ npm run build
```

## License

MIT © [Crypti Team](https://github.com/crypti)
