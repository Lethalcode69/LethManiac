const LethalToken = artifacts.require("LethalToken");

module.exports = function (deployer) {
  deployer.deploy(LethalToken);
};
