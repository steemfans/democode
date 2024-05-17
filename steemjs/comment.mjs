import steem from 'steem';

steem.api.setOptions({ url: 'http://test1.steem.fans:8090'});
steem.config.set('address_prefix','TST');
steem.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');

const account_name = 'initminer';
const active_key = '';

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

async function comment(author, title, body, parent_author, parent_permlink, permlink, json_metadata, active_key) {
  const comment_op = [
    "comment",
    {
      author,
      title,
      body,
      parent_author,
      parent_permlink,
      permlink,
      json_metadata,
    }
  ];
  const res = await sendPromise(comment_op, active_key);
  console.log(res);
}

async function main() {
  await comment(account_name, "test_title", "test body", '', 'steem', 'the-first-test-post', "{\"tags\":[\"steemit\",\"example\",\"tags\"]}", active_key);
}

main();
