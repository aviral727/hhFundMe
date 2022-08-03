const { getNamedAccounts, deployments, network } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");
const helperConfig = require("../helper-hardhat-config");
// const { networkConfig } = require("../helper-hardhat-config");

module.export = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [],
    log: true,
  });
  const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
};

// const fundMe = await deploy("FundMe", {
//   from: deployer,
//   args: [],
//   log: true,
// });
