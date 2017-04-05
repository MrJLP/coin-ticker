const chai = require('chai');
const { expect } = chai;

const coinTicker = require('../index.js');

describe('coinTicker', () => {

  // Coinbase
  it('Should return an object of Coinbase BTC/USD data', done => {
    var objectdata = coinTicker('coinbase', 'BTC-USD').then(data => {
      //console.log('data: ', data); 
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'currency', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.exchange).to.equal('coinbase');
      done();
    });
  });

  it('Should return an object of Coinbase ETH/USD data', done => {
    coinTicker('coinbase', 'ETH-USD').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'currency', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.exchange).to.equal('coinbase');
      done();
    });
  });

  it('Should return an object of Coinbase BTC/EUR data', done => {
    coinTicker('coinbase', 'BTC-EUR').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'currency', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.exchange).to.equal('coinbase');
      done();
    });
  });

  it('Should return an object of Coinbase ETH/USD data', done => {
    coinTicker('coinbase', 'ETH-USD').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'currency', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.exchange).to.equal('coinbase');
      done();
    });
  });


  // Bitstamp
  it('Should return an object of Bitstamp BTC/USD data', done => {
    coinTicker('bitstamp').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitstamp');
      done();
    });
  });

  it('Should return an object of Bitstamp BTC/EUR data', done => {
    coinTicker('bitstamp', 'btceur')
      .then(data => {
        // console.log('data:', data);
        expect(data).to.be.an('object');
        expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
        expect(data.last).to.be.a('string');
        expect(data.low).to.be.a('string');
        expect(data.high).to.be.a('string');
        expect(data.vol).to.be.a('string');
        expect(data.exchange).to.equal('bitstamp');
        expect(data.pair).to.equal('btceur');
      })
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Bitstamp EUR/USD data', done => {
    coinTicker('bitstamp', 'eurusd')
      .then(data => {
        // console.log('data:', data);
        expect(data).to.be.an('object');
        expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
        expect(data.last).to.be.a('string');
        expect(data.low).to.be.a('string');
        expect(data.high).to.be.a('string');
        expect(data.vol).to.be.a('string');
        expect(data.exchange).to.equal('bitstamp');
        expect(data.pair).to.equal('eurusd');
      })
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Bitstamp XRP/EUR data', done => {
    coinTicker('bitstamp', 'xrpeur')
      .then(data => {
        // console.log('data:', data);
        expect(data).to.be.an('object');
        expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
        expect(data.last).to.be.a('string');
        expect(data.low).to.be.a('string');
        expect(data.high).to.be.a('string');
        expect(data.vol).to.be.a('string');
        expect(data.exchange).to.equal('bitstamp');
        expect(data.pair).to.equal('xrpeur');
      })
      .then(done)
      .catch(err => done(err));
  });


  // error testing
  it('Should send error message if given invalid arguments', () => {
    expect(coinTicker('not an exchange')).to.be.a('string');
    expect(coinTicker('not an exchange')).to.equal('Unrecognized exchange');
  });

  it('Should send error message if given no arguments', () => {
    expect(coinTicker()).to.be.a('string');
    expect(coinTicker()).to.equal('Unrecognized exchange');
  });
});

