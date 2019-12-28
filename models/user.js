module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        // userIDAuth: DataTypes.STRING
    });
    return User;
};