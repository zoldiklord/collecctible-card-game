//SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract CollectionNFT is ERC721 {

  struct MetaNFT {
    uint256 id;
    string img;
  }
// https://images.pokemontcg.io/xy10/100.png
  MetaNFT[] public metadata;

  constructor(string memory _name, uint256 _cardCount) ERC721(_name, _name) {
    for(uint256 i = 0; i < _cardCount; i++) {
      _safeMint(msg.sender, i);
      metadata.push(MetaNFT(i,"https://images.pokemontcg.io/xy1/100.png"));


      
    }
  }


function mint(address _to, uint256 _id) public {
    _safeMint(_to, _id);
}

  function geturl(uint256 tokenId) public view returns (string memory) {
    return tokenURI(tokenId);
  }

}