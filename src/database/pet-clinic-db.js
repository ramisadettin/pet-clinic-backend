var connData = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? {
  host: 'localhost', 
  user: 'root',
  password: 'petApp12345!',
  database: 'pet_clinic',
  timezone: 'Z'
} : {
  host: process.env.DB_HOST, 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,  
}
export default connData
