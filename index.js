// import cron from 'node-cron';
// import axios from 'axios';

// cron.schedule('*/4 * * * *', async () => {
//   try {
//     await axios.get('https://charraiagg-back-end.onrender.com/health');
//     console.log('Keep-alive request successful');
//   } catch (error) {
//     console.error('Error keeping API alive:', error);
//   }
// });

import { get } from 'https';

const url = 'https://charraiagg-back-end.onrender.com/health'; // Substitua pelo URL da sua API

setInterval(() => {
  get(url, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`Erro: ${e.message}`);
  });
}, 300000); // 300000ms = 5 minutos