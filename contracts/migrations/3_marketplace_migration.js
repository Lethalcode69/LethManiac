const LethalMarketContract = artifacts.require("LethalMarketContract");

module.exports = function (deployer) {
  deployer.deploy(LethalMarketContract);
};
