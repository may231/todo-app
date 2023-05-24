const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/todo_web_app_db', 
    {
        logging: false,
    }
);

module.exports = conn;
