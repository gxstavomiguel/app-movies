const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/webhook', async (req, res) => {
  try {
    const payload = {
      content: `New push by ${req.body.pusher.name} in repository ${req.body.repository.full_name}`,
    };
    await axios.post('https://discord.com/api/webhooks/1270580286962532414/IShxLqwTyPK4dB93Hf-yP3Di8nsROufrGllJVe5auRMpBSWGis4bmkXU0j-LVuF5Xgge', payload);
    res.status(200).send('Webhook received and processed');
  } catch (error) {
    console.error('Error sending to Discord:', error);
    res.status(500).send('Error processing webhook');
  }
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
