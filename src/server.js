import app from './app.js'; 
import logger from './utils/logger.js';

import dotenv from 'dotenv'; 
// Load environment variables from .env file
dotenv.config();

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
