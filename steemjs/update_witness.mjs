import steem from 'steem';

steem.api.setOptions({ url: 'http://test1.steem.fans:8090'});
steem.config.set('address_prefix','TST');
steem.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');

const active_key = '';
const signkey = 'TST8Vf3uwM1to43pe1omHbuLkouW8zMSooeaBSDZCbGHnf2Y4kcbS';

async function update_witness(account_name, signkey, active_key) {
  const update_witness_op = [
    "witness_update",
    {
      "owner": account_name,
      "url": "test/test",
      "block_signing_key": signkey,
      "props": {
        "account_creation_fee": "0.000 TESTS",
        "maximum_block_size": 131072,
        "sbd_interest_rate": 0
      },
      "fee": "0.000 TESTS",
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

  const res = await sendPromise(update_witness_op, active_key);
  console.log(res);
}

async function main() {
  for(let i = 1; i <= 30; i++) {
    await update_witness('test-account-' + i, signkey, active_key);
  }
}

main();

// steem.api.call('database_api.get_dynamic_global_properties', {}, function(err, result) {
//   console.log(err, result);
// });

// steem.api.getDynamicGlobalProperties((err, res) => {
//   console.log(err, res);
// });
