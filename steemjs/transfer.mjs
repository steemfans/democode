import steem from 'steem';

steem.api.setOptions({ url: 'http://test1.steem.fans:8090'});
steem.config.set('address_prefix','TST');
steem.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');

const from = 'initminer';
const active_key = '';

async function transfer(from, to, active_key) {
  const transfer_op = [
    "transfer",
    {
      "from": from,
      "to": to,
      "amount": "10.000 TESTS",
      "memo": "Test coins."
    }
  ];

  const sendPromise = function(op, active_key) {
    return new Promise((resolve, reject) => {
      steem.broadcast.send({
        extensions: [],
        operations: [
          op,
        ]
      }, [active_key], (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  let err, res = await sendPromise(transfer_op, active_key);
  console.log(res);
}

async function main() {
  for(let i = 1; i <= 30; i++) {
    await transfer(from, 'test-account-' + i, active_key);
  }
}

main();

// steem.api.call('database_api.get_dynamic_global_properties', {}, function(err, result) {
//   console.log(err, result);
// });

// steem.api.getDynamicGlobalProperties((err, res) => {
//   console.log(err, res);
// });
