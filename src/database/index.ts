import SQLConfig from '../config/database';
import Cursos from '../app/models/Cursos';
import Categorias from '../app/models/Categorias';
// import mongoose from 'mongoose';
const Sequelize = require('sequelize');

const models = [Categorias, Cursos];

class Database {
  connection;

  NOSQLConnection;

  constructor() {
    this.SQL();
  }

  SQL() {
    this.connection = new Sequelize(SQLConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();