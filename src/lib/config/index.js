module.exports = Config = {
    dbHost: process.env.DBHOST || "localhost",
    dbUsername: process.env.DBUSER || "root",
    dbName: process.env.DBNAME || "node_products",
    dbPassword: process.env.DBPASS || "bagaskaramadhan97",
    port: process.env.PORT || "3001"
}