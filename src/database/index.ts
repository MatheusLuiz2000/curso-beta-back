import SQLConfig from '../config/database';

// Models
import Cursos from '../app/models/Cursos';
import Categorias from '../app/models/Categorias';
import Administrador from '../app/models/Administrador';

const Sequelize = require('sequelize');

const models = [Categorias, Cursos, Administrador];

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
