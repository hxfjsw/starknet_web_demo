const axios = require('axios');

async function  test() {

    const Address = "0x0677ff1778d4f28fa4e94280e8b092fce97f36970f15603f5a24745c5e807e8e";

    const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
    const headers = { 'user-agent': userAgent }

    const postData = {
        operationName: 'events',
        variables: {
            input: {
                from_address: Address,
                sort_by: 'timestamp',
                order_by: 'desc',
            },
            first: 100,
        },
        query:
            'query events($first: Float, $last: Float, $before: String, $after: String, $input: EventsInput!) {\n  events(\n    first: $first\n    last: $last\n    before: $before\n    after: $after\n    input: $input\n  ) {\n    edges {\n      cursor\n      node {\n        id\n        block_hash\n        transaction_hash\n        event_index\n        from_address\n        keys\n        data\n        timestamp\n        key_name\n      data_decoded\n        __typename\n      }\n      __typename\n    }\n    pageInfo {\n      hasNextPage\n      __typename\n    }\n    __typename\n  }\n}',
    }

    const axiosClient = axios.create();
    const resp = await axiosClient.post('https://api-testnet.starkscan.co/graphql', postData, { headers })
    const events = resp.data?.data?.events.edges;
    // console.log(events);
    for (const event of events) {
        const data = event.node.data_decoded;
        console.log(data);
    }
}

test();