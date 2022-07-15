'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class datauser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  datauser.init({
    nik: {
      type: DataTypes.UUID,
      defaultValues: Sequelize.UUIDV1,
    },
    nama: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    phone: DataTypes.STRING,
    role: DataTypes.ENUM(['admin','user'])
  }, {
    sequelize,
    modelName: 'datauser',
  });
  return datauser;
};