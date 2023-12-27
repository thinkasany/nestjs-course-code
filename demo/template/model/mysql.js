const { DataTypes, Sequelize } = require('sequelize');

const operatorsAliases = {
  $eq: Sequelize.Op.eq,
  $ne: Sequelize.Op.ne,
  $gte: Sequelize.Op.gte,
  $gt: Sequelize.Op.gt,
  $lte: Sequelize.Op.lte,
  $lt: Sequelize.Op.lt,
  $not: Sequelize.Op.not,
  $in: Sequelize.Op.in,
  $notIn: Sequelize.Op.notIn,
  $is: Sequelize.Op.is,
  $like: Sequelize.Op.like,
  $notLike: Sequelize.Op.notLike,
  $iLike: Sequelize.Op.iLike,
  $notILike: Sequelize.Op.notILike,
  $regexp: Sequelize.Op.regexp,
  $notRegexp: Sequelize.Op.notRegexp,
  $iRegexp: Sequelize.Op.iRegexp,
  $notIRegexp: Sequelize.Op.notIRegexp,
  $between: Sequelize.Op.between,
  $notBetween: Sequelize.Op.notBetween,
  $overlap: Sequelize.Op.overlap,
  $contains: Sequelize.Op.contains,
  $contained: Sequelize.Op.contained,
  $adjacent: Sequelize.Op.adjacent,
  $strictLeft: Sequelize.Op.strictLeft,
  $strictRight: Sequelize.Op.strictRight,
  $noExtendRight: Sequelize.Op.noExtendRight,
  $noExtendLeft: Sequelize.Op.noExtendLeft,
  $and: Sequelize.Op.and,
  $or: Sequelize.Op.or,
  $any: Sequelize.Op.any,
  $all: Sequelize.Op.all,
  $values: Sequelize.Op.values,
  $col: Sequelize.Op.col
};


const sequelize = new Sequelize('think', 'root', '123456', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 60,
    min: 1,
    idle: 20000,  // 连接被释放前的最大空闲时间
    acquire: 40000,  // pool 抛出错误前进行重连的最长时间
  },
  operatorsAliases: operatorsAliases,
  timezone: '+08:00',
});


module.exports = {sequelize };
