import 'dotenv/config'
import { DeployFunction } from 'hardhat-deploy/types'

const deployer: DeployFunction = async hre => {
  if (hre.network.config.chainId !== 31337) return
  const { deployer } = await hre.getNamedAccounts()
  await hre.deployments.deploy('Main', { from: deployer, log: true })

  await hre.deployments.deploy('CollectionNFT', {
    from: deployer,
    log: true,
    args: ['base1', 10] 
  });

  await hre.deployments.deploy('CollectionNFT', {
    from: deployer,
    log: true,
    args: ['base2', 10] 
  });
/*
  await hre.deployments.deploy('MyNFT', {
    from: deployer,
    log: true,
    args: ['Hugo_NFT', "HNFT", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOJPHyAB9kovMuvCGjdgXoJPacLaIlQDkPw&usqp=CAU", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"] 
  });

  await hre.deployments.deploy('MyNFT', {
    from: deployer,
    log: true,
    args: ['Hamza_NFT', "ZNFT", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOJPHyAB9kovMuvCGjdgXoJPacLaIlQDkPw&usqp=CAU", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"] 
  });

  await hre.deployments.deploy('MyNFT', {
    from: deployer,
    log: true,
    args: ['Personne_NFT', "PNFT", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOJPHyAB9kovMuvCGjdgXoJPacLaIlQDkPw&usqp=CAU", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"] 
  });
*/

}

export default deployer

