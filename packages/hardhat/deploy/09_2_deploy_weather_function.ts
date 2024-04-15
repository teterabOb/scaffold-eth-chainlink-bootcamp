import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployWeather: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  //const subscriptionId = "YOUR_FUNCTION_SUBSCRIPTION_ID";
  const subscriptionId = 123;

  await deploy("WeatherFunctions", {
    from: deployer,
    // Contract constructor arguments
    args: [subscriptionId],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const weatherFunction = await hre.ethers.getContract<Contract>("WeatherFunctions", deployer);
  console.log("👋 Initial greeting weather function:", await weatherFunction.name());
};

export default deployWeather;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployWeather.tags = ["GettingStartedFunctionsConsumer"];
