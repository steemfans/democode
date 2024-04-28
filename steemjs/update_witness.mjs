import steem from 'steem';

steem.api.setOptions({ url: 'http://test1.steem.fans:8090'});
steem.config.set('address_prefix','TST');
steem.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');

const data = {
  'test-account-1': 'TST89Dap8gmaHvEBL2dvwU7onaFDUeJeCuxh7h9XXGyUfHB2KbApL',
  'test-account-2': 'TST5EyQa7HLWvXQxFMpf7rCDP2ZXb5usvsSrRUioddhQRpYw1fFgH',
  'test-account-3': 'TST8CEgeCJS1hq4D4gZjPF6YdWmPzZRxr6rqfHpStuEx9X2wxoeWM',
  'test-account-4': 'TST7TEFgDTRYkQyQ3TNPSoun8zxPpmGFM6YiRqMiqL4h23ngJUtLd',
  'test-account-5': 'TST5b17p6k7JLh8iXVdVg5r7zVumYcSD31wQCFxxcZ1ZdwwJfaaos',
  'test-account-6': 'TST5vdQGXxYUnXEFTDAEygHb5hXtPMuSVVwpjykfLwmKPRgGZHr2Y',
  'test-account-7': 'TST7NVtnQJ6pmZWHN4Nb5FihwZYDjxXnHKZPrYubzKDLs6hacHzaU',
  'test-account-8': 'TST5dGSzfbvC5szuAzskhA81JZUy6hwjpux9Aopaxadg9QeiHmgB5',
  'test-account-9': 'TST6vnP49CepV6zmHjLBh3aXbGJss2pHqJEWiMfcXN8Sy5h5giq91',
  'test-account-10': 'TST7M9tGbYkd4WpgGeDw3aWVxHHSE4pAGUgL5UTXmFfSFig5sskKg',
  'test-account-11': 'TST691pgXZw3uh8nuB7rujZqSXdYoe8BKE57EmcDYmjkQqLdvLGiZ',
  'test-account-12': 'TST6eJGqoPcxZKipi57BpcWX9Lk4KyPxb3ggE4YAdKcX2DecsqwXW',
  'test-account-13': 'TST8f5k9esygmbBMqbQ2JykNMYT6NRuQeUJ6QTpsGrguPK3pTpD7Q',
  'test-account-14': 'TST6hHVY8DZipcduK6enGofVzptudpnqduk6PgjX7JfQifbboDk1f',
  'test-account-15': 'TST5x5CafDHzsFuFgM6BArz5qca5JYUvswgUgwfSgSrS8GbgGGwSB',
  'test-account-16': 'TST813ijWkiahqp2GWjQxNHHqHS61TDYGYUy4cWMrmEHnk5qnVWr6',
  'test-account-17': 'TST6Su5gs41crtfS7RSFyvT4zn5oMgRfngKBDsGUg5Z1M7NdBGHnW',
  'test-account-18': 'TST69Qn6zRiizykDK9A1WvFTA1Z6jjkTMZnWDwe4MYgr13m9mtjhg',
  'test-account-19': 'TST86fFSHFBgeRnriNABbhyqG6E7HbJjjWj5PnZNYgxTeU99cieTg',
  'test-account-20': 'TST7fhZR2TC5uuyj6gaXtWYvMPGPGUbRj9sHAvBomtLYgUTF5n4Tv',
  'test-account-21': 'TST71NdQdvc6UVkY4x2og4cAUvN8M1z9aXBeT9eG7YkLpQL5PxP1K',
  'test-account-22': 'TST7q8E9DQCKy4gTp6bE5LpnwwE3czae3fFMypQU6kapbnLumPke1',
  'test-account-23': 'TST8JNS3XkicZSzdFp2sgeQ7Z9eVUdQaP89yDaLZHdMULrRkatFaF',
  'test-account-24': 'TST8SuSWTa6dyjzS57ve8s35wzE8yghwy5u4HRuWYEkWyH1wAuEav',
  'test-account-25': 'TST7CE7sCFQ93EJsVRvDBrCsAG5ZjrfgzTmw2GzYbPco6xt5swLDh',
  'test-account-26': 'TST5a2tSxYX35vtq37vCVrDHyBQpiFpKQL9qh1x9REVt9T2WsMTMo',
  'test-account-27': 'TST5Xn2rJatoJYmvvigk5q9UVdS4NV2TQaMx4UaThx1B1bU4RJ3VT',
  'test-account-28': 'TST5MtfrZXCbmvZ5kQPcfToYCH6bn6H3a6GM8GngXz3N6RSF3A69p',
  'test-account-29': 'TST8P3TbQmeDemZJpPNdUsT9itDHBrQzfNERsAfrbPWZrXLEN8pTA',
  'test-account-30': 'TST6PJjZNU3KzN2sTxprU9KLkqtvtHWzvpK9ETZvSvWnSLHGVySn9',
}

const active_key = '';

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
  Object.keys(data).forEach(async (k) => {
    console.log(`account_name: ${k}, sign_key: ${data[k]}`);
    await update_witness(k, data[k], active_key);
  });
}

main();
