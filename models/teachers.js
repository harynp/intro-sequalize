'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    subjectsId: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Teachers.associate = function (models) {
    const Teachers = this.sequelize.define('Teachers', {foreignKey:'subjectsId'})
    Teachers.belongsTo(models.Subjects);
  };

  return Teachers;
};