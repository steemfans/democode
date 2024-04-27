import steem from 'steem';

steem.api.setOptions({ url: 'http://172.20.0.2:8090'});
steem.config.set('address_prefix','TST');
steem.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');

const account_name = 'initminer';
const active_key = '';

const new_account_name = 'ety001.test';
const new_account_priv = '';
const new_account_pub = 'TST8Vf3uwM1to43pe1omHbuLkouW8zMSooeaBSDZCbGHnf2Y4kcbS';

const claim_op = [
  "claim_account",
  {
    "fee": "0.000 TESTS",
    "creator": account_name,
    "extensions": []
  }
];

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
]

steem.broadcast.send({
  extensions: [],
  operations: [
    claim_op,
  ]
}, [active_key], (err, result) => {
  console.log(err, result);
  if (err === null) {
    steem.broadcast.send({
      extensions: [],
      operations: [
        create_account_op,
      ]
    }, [active_key], (err2, res2) => {
      console.log(err2, res2);
    });
  }
});

// steem.api.call('database_api.get_dynamic_global_properties', {}, function(err, result) {
//   console.log(err, result);
// });

// steem.api.getDynamicGlobalProperties((err, res) => {
//   console.log(err, res);
// });