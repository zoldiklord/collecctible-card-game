//SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "./Collection.sol";

contract Main {
  
  struct Collection {
    
    string name; 
    uint256 cardCount;
    address collectionAddress;
  }
  
  Collection[] public collections;

  function createCollection(string memory _name, uint256 _cardCount) public {
    
    Collection memory newCollection = Collection(_name, _cardCount, address(new CollectionNFT(_name, _cardCount)));
    collections.push(newCollection);
  }
  

  function getCollections() public view returns (Collection[] memory) {
    return collections;
  }
}


