module.exports = function (sequelize, DataTypes) {
    let Task = sequelize.define("Task", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        dateDue: DataTypes.DATE,
        reoccurring: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        reoccurringEndDate: DataTypes.DATE,
        isComplete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        note: DataTypes.TEXT
    })
    Task.belongsTo(User);
    return Task;
};