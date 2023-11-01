var connData = {
  host: process.env.DB_HOST, 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.APP_DB_PORT,  
  timezone: 'Z'
}
export default connData
