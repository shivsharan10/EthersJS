const { ethers } = require('ethers');
const ABI = require('./ABI');

const callReadFun = async () => {
  const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

  const contract = new ethers.Contract('0xCC8048eF226eb2383B08949F752Cf31932d487cc', ABI.humanReadableABI, provider);

  const symbol = await contract.symbol();
  console.log('Symbol:', symbol);

  const totalSupply = await contract.totalSupply();
  console.log("Total Supply", ethers.utils.formatUnits(totalSupply, 18), symbol);

  const balance = await contract.balanceOf('0x5096383E4aa3Eb37D0A75704C3adf4696EAc7840');
  console.log("Token Balance", ethers.utils.formatUnits(balance, 18), symbol);
}

callReadFun();
