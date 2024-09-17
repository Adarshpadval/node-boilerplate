const config = {
    // Server Configuration
    server: {
      port: process.env.PORT || 3000,
    },
  
    // Database Configuration
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306, 
      user: process.env.DB_USER || 'fakeUser',
      password: process.env.DB_PASSWORD || 'fakePassword',
      database: process.env.DB_NAME || 'fakeDatabase',
    },
  
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    apiKey: process.env.API_KEY || 'your_api_key',
  };
  
  export default config;
  