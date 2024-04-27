import {Client} from 'dsteem';

const options = {
  addressPrefix: 'TST',
  chainId: '18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e',
};
const client = new Client('http://test1.steem.fans:8090', options);

for await (const block of client.blockchain.getBlocks()) {
  console.log(block);
  console.log(`New block, id: ${ block.block_id }`);
}