import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployGettingStarted: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("GettingStartedFunctionsConsumer", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const gettingStartedFunction = await hre.ethers.getContract<Contract>("GettingStartedFunctionsConsumer", deployer);
  console.log("👋 Initial greeting starting function:", await gettingStartedFunction.GREETING());
};

export default deployGettingStarted;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployGettingStarted.tags = ["GettingStartedFunctionsConsumer"];
