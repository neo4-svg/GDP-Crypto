import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect();

  const GDPToken = await ethers.getContractFactory("GDPToken");
  const gdp = await GDPToken.deploy(1000000000); // 1 billion GDP
  await gdp.waitForDeployment();

  console.log("GDPToken deployed to:", await gdp.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
