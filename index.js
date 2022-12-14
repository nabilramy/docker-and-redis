const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`Visits: ${visits}`);
        client.set('visits', +visits + 1);
    });
    }
);

app.listen(3000, () => {
    console.log('Server started on port 3000');
}
);