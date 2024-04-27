import steem from 'steem';

steem.api.setOptions({ url: 'http://test1.steem.fans:8090'});
steem.config.set('address_prefix','TST');
steem.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');

const active_key = '';

async function transfer_to_vesting(from, amount, active_key) {
  const transfer_to_vesting_op = [
    "transfer_to_vesting",
    {
      "from": from,
      "to": "",
      "amount": `${amount} TESTS`,
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

  let err, res = await sendPromise(transfer_to_vesting_op, active_key);
  console.log(res);
}

async function main() {
  for(let i = 1; i <= 30; i++) {
    await transfer_to_vesting('test-account-' + i, "5.000", active_key);
  }
}

main();

// steem.api.call('database_api.get_dynamic_global_properties', {}, function(err, result) {
//   console.log(err, result);
// });

// steem.api.getDynamicGlobalProperties((err, res) => {
//   console.log(err, res);
// });
