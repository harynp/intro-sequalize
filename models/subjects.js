'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subjects = sequelize.define('Subjects', {
    subject_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Subjects.associate = function (models) {
    const Subjects = this.sequelize.define('Subjects', {foreignKey:'subjectsId'})
    // Subjects.hasMany(models.Teachers);
    Subjects.hasMany(models.Teachers, {foreignKey: 'subjectsId'});
  };
  return Subjects;
};