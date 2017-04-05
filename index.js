const coinbase = require('./exchanges/coinbase');
const bitstamp = require('./exchanges/bitstamp');

function coinTicker(exchange, pair) {
  switch (exchange) {
    case 'coinbase':
      return coinbase(pair);
      break;
    case 'bitstamp':
      return bitstamp(pair);
      break;

    default:
      console.error(`Unrecognized exchange: "${exchange}"`);
      return 'Unrecognized exchange';
  }
}

module.exports = coinTicker;

