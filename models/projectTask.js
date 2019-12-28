module.exports = function (sequelize, DataTypes) {
    let ProjectTask = sequelize.define("ProjectTask", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        dateDue: DataTypes.DATE,
        isComplete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        note: DataTypes.TEXT
    })
    ProjectTask.belongsTo(Project);
    return ProjectTask;
};