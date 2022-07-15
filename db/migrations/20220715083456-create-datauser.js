'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('datausers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nik: {
        type: Sequelize.UUID,
        defaultValues: Sequelize.UUIDV1,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM(['admin','user'])
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('datausers');
  }
};