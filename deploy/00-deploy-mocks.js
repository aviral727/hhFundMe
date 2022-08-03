const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

module.export = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  if (developmentChains.includes(chainId)) {
    log("Local network detected! Deploying mocks...");
    await deploy("MockV3Aggregator", {
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER],
    });
    log("Mocks Deployed!");
    log("____________________________________");
  }
};

module.exports.tags = ["all", "mocks"];
