import {Client, PrivateKey, Authority, Asset} from 'dsteem';

const options = {
  addressPrefix: 'TST',
  chainId: '18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e',
};
const client = new Client('http://172.20.0.2:8090', options);

const creator = 'initminer';
const key1 = PrivateKey.fromString('5JNHfZYKGaomSFvd4NUdQ9qMcEAC43kujbfjueTHpVapX1Kzq2n');

const newName = 'ety001.test';
const newKey = PrivateKey.fromString('5JEreA97B4k3fAq4YCdeCDwzytCohdCjYtRRgca3Lp5vuNHiPBS');
const newPubStr = 'TST8cz4eQK9nm3i1qmBJH8Q4qt6FW3HDgJ9RgS7D6V2cc5VfSmY8a';
const newPub = Authority.from(newPubStr);
const fee = Asset.from(0, 'TESTS');


const claim_op = [
  'claim_account',
  {
    creator,
    extensions: [],
    fee,
  }
];

const create_op = [
  'create_claimed_account',
  {
    active: newPub,
    creator,
    extensions: [],
    json_metadata: JSON.stringify({}),
    memo_key: newPubStr,
    new_account_name: newName,
    owner: newPub,
    posting: newPub,
  }
];

const ops = [claim_op, create_op];
client.broadcast.sendOperations(ops, key1).then(function(res){
  console.log(res);
});