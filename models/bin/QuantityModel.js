module.exports = class Quantity extends require('sequelize').Model {
    static init(sequelize, Sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                    unique: true,
                },

                kg: {
                    type: Sequelize.INTEGER,
                },
            },
            {
                tableName: 'quantity',
                paranoid: true,
                timestamps: true,
                sequelize,
            }
        );
    }
};
