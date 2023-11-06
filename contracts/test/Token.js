const { expect } = require("chai");
import {ethers}  from "hardhat";

describe("MyNFT", function () {
  it("Should return the new greeting once it's changed", async function () {
    // Déployer le contrat MyNFT
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy('Hugo_NFT', "HNFT","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOJPHyAB9kovMuvCGjdgXoJPacLaIlQDkPw&usqp=CAU", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

    // Attendre que le contrat soit déployé
    await myNFT.deployed();

    const owner = await myNFT.owner(); // Ensure you set the contract owner address to the owner variable.
    console.log("contract adress", myNFT.address)
    console.log("adress owner", owner)
    // Mint the NFT to the owner's wallet
    await myNFT.mindCard(owner, 2,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOJPHyAB9kovMuvCGjdgXoJPacLaIlQDkPw&usqp=CAU");
    const name = await myNFT.name();
    const symbol = await myNFT.symbol();
    const a = await myNFT.tokenId;
    const b = await myNFT.tokenURI;
    console.log("name = ",name);
    console.log("symbol = ",symbol);
    console.log("Token ID:", a);
    console.log("Token URI:", b);
    //console.log(myNFT);
    /*
    // Vous pouvez maintenant interagir avec le contrat MyNFT, par exemple, obtenir des informations sur le contrat
    const name = await myNFT.name();
    const symbol = await myNFT.symbol();
    const owner = await myNFT.owner();
    console.log("icicici")
    console.log({name,symbol,owner})

    // Assurez-vous d'ajouter des assertions pour vérifier les valeurs obtenues
    expect(name).to.equal("Hugo_NFT");
    expect(symbol).to.equal("HNFT");
    expect(owner).to.equal("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

    const a = await myNFT.mindCard("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", 2);
    // Vous pouvez maintenant obtenir l'ID du token que vous avez créé
    console.log("Token ID:", a.tokenId);
    console.log({a});*/
  });
});