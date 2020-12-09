export const Tourisme_address = "0x68B4Bb11f5273C4673C8A2E080B043bC64D13a75";


export const Tourisme_abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "clients",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "dateRegistration",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "offers",
    "outputs": [
      {
        "internalType": "string",
        "name": "destination",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "priceTransport",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "priceTravel",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "priceRestauration",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "priceActivity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "priceTours",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "reservationByUser",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isTransport",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isTravel",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isRestauration",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isActivity",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isTours",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "priceinTokens",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tourAddress",
        "type": "address"
      }
    ],
    "name": "setTourToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      }
    ],
    "name": "register",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "isRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "clientId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "getClient",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "dateRegistration",
            "type": "uint256"
          }
        ],
        "internalType": "struct Tourisme.Client",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_destination",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_priceTransport",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_priceTravel",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_priceRestauration",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_priceActivity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_priceTours",
        "type": "uint256"
      }
    ],
    "name": "addOffer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "offerId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getOffer",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "destination",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "priceTransport",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "priceTravel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "priceRestauration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "priceActivity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "priceTours",
            "type": "uint256"
          }
        ],
        "internalType": "struct Tourisme.Offer",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_isTransport",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "_isTravel",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "_isRestauration",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "_isActivities",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "_isTours",
        "type": "bool"
      }
    ],
    "name": "chooseOffer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reservationId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getReservation",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "isTransport",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isTravel",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isRestauration",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isActivity",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isTours",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "priceinTokens",
            "type": "uint256"
          }
        ],
        "internalType": "struct Tourisme.Reservation",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "reserveByClient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]