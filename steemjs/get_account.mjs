import steem from 'steem';

steem.api.setOptions({ url: 'http://test1.steem.fans:8090'});
steem.config.set('address_prefix','TST');
steem.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');

// steem.api.getDynamicGlobalProperties((err, res) => {
//   console.log(err, res);
// });

steem.api.getAccounts(['test-account-30'], (res, err) => {
  console.log(res, err);
});

