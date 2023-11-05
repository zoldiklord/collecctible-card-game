//SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract CollectionNFT is ERC721 {

  struct NFT {
    uint256 id;
    string img;
  }

  NFT[] public tokens;

  constructor(string memory _name, uint256 _cardCount) ERC721(_name, _name) {
    for(uint256 i = 0; i < _cardCount; i++) {
      tokens.push(NFT(i, "")); 
    }
  }

  function mint(address _to, uint256 _id) public {
    _safeMint(_to, _id);
  }

  function tokenURI(uint256 _tokenId) public view override returns (string memory) {
    return string.concat(
      "data:application/json;base64,",
      Base64.encode(
        bytes(
          string.concat(
            '{"id": "',
            Strings.toString(_tokenId),
            '", "img": "',
            tokens[_tokenId].img,
            '"}'
          )
        )
      )
    );
  }

}