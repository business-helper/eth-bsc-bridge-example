const BridgeBsc = artifacts.require('./BridgeBsc.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  const bridgeBsc = await BridgeBsc.deployed();
  await bridgeBsc.burn(recipient, 1000);
  done();
}
