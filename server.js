// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// app.post('/webhook', async (req, res) => {
//   try {
//     const { pusher, repository, commits } = req.body;
//     if (!commits || commits.length === 0) {
//       return res.status(400).send('No commits found');
//     }

//     const commitMessages = commits.map(commit => commit.message).join('\n');
//     const content = `New push by ${pusher.name} in repository ${repository.full_name}\n\nCommits:\n${commitMessages}`;

//     if (!content || content.trim().length === 0) {
//       return res.status(400).send('Message content is empty');
//     }

//     await axios.post('https://discord.com/api/webhooks/1270580286962532414/IShxLqwTyPK4dB93Hf-yP3Di8nsROufrGllJVe5auRMpBSWGis4bmkXU0j-LVuF5Xgge', {
//       content: content
//     });

//     res.status(200).send('Webhook received and processed');
//   } catch (error) {
//     console.error('Error sending to Discord:', error);
//     res.status(500).send('Error processing webhook');
//   }
// });

// const PORT = 4000; // Porta configurada para evitar conflitos com React
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
