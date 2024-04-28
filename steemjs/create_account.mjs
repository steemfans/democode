import steem from 'steem';

steem.api.setOptions({ url: 'http://test1.steem.fans:8090'});
steem.config.set('address_prefix','TST');
steem.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');

const account_name = 'initminer';
const active_key = '';

const new_account_pub = 'TST8Vf3uwM1to43pe1omHbuLkouW8zMSooeaBSDZCbGHnf2Y4kcbS';

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

async function claim(account_name, active_key) {
  const claim_op = [
    "claim_account",
    {
      "fee": "0.000 TESTS",
      "creator": account_name,
      "extensions": []
    }
  ];
  const res = await sendPromise(claim_op, active_key);
  console.log(res);
}

async function create_account(account_name, new_account_name, new_account_pub, active_key) {
  const create_account_op = [
    "create_claimed_account",
    {
      "creator": account_name,
      "new_account_name": new_account_name,
      "owner": {
        "weight_threshold": 1,
        "account_auths": [],
        "key_auths": [
          [
            new_account_pub,
            1
          ]
        ]
      },
      "active": {
        "weight_threshold": 1,
        "account_auths": [],
        "key_auths": [
          [
            new_account_pub,
            1
          ]
        ]
      },
      "posting": {
        "weight_threshold": 1,
        "account_auths": [],
        "key_auths": [
          [
            new_account_pub,
            1
          ]
        ]
      },
      "memo_key": new_account_pub,
      "json_metadata": "{}"
    }
  ];

  const res = await sendPromise(create_account_op, active_key);
  console.log(res);
}

async function main() {
  for(let i = 29; i <= 30; i++) {
    await claim(account_name, active_key);
    await claim(account_name, active_key);
    await create_account(account_name, 'test-account-' + i, new_account_pub, active_key);
  }
}

main();
