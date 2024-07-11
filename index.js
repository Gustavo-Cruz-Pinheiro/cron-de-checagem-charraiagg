import cron from 'node-cron';
import axios from 'axios';

cron.schedule('*/5 * * * *', async () => {
  try {
    await axios.get('https://charraiagg-back-end.onrender.com/health');
    console.log('Keep-alive request successful');
  } catch (error) {
    console.error('Error keeping API alive:', error);
  }
});
