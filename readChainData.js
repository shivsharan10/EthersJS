const { ethers } = require('ethers');

const readChainData = async () => {
  const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

  const blockNumber = await provider.getBlockNumber();
  console.log('Block Number:', blockNumber);

  const gasPrice = await provider.getGasPrice();
  console.log("Current Gas Proce:", gasPrice);
  console.log("Gas in GWEI is:", ethers.utils.formatUnits(gasPrice, "gwei"));

  const bal = await provider.getBalance("0x0b0605d0D05552C02c9CE6C442e14d781DD65a84");
  console.log("Available balance:", ethers.utils.formatEther(bal), "Ether");
}

readChainData();