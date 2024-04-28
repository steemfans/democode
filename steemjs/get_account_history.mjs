import steem from 'steem';

// steem.api.setOptions({ url: 'http://test1.steem.fans:8090'});
// steem.config.set('address_prefix','TST');
// steem.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');

// steem.api.getDynamicGlobalProperties((err, res) => {
//   console.log(err, res);
// });

async function getAccountHistory(username, from, limit) {
  return steem.api.getAccountHistoryAsync(username, from, limit)
}

async function main() {
  const username = 'ety001';
  const limit = 3;
  let from = -1, page = 5;
  let result, tmp;

  for (let p = 1; p <= 5; p++) {
    result = await getAccountHistory(username, from, limit);
    tmp = result.reverse()
    for(let i = 0; i < limit; i++) {
      console.log("id:", tmp[i][0]);
      console.log("block_num:", tmp[i][1]['block']);
      console.log("trx_in_block:", tmp[i][1]['trx_in_block']);
      console.log("timestamp:", tmp[i][1]['timestamp']);
      console.log("op:", tmp[i][1]['op']);
      console.log("---------"); 
    }
    console.log(`--------- page${p} ---------`); 
    from = tmp[limit][0];
  }
}

main();