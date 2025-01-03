

// 引入中间件组合工具
const compose = require('koa-compose');

// 导出插件中间件函数
module.exports = () => async (ctx, next) => {
  think.logger.debug('【插件】开始加载插件中间件');

  // 获取所有插件中间件
  const middlewares = think.getPluginMiddlewares();

  // 如果没有可用的插件中间件，直接执行下一个中间件
  if (!think.isArray(middlewares) || !middlewares.length) {
    think.logger.debug('【插件】未找到可用的插件中间件');
    return next();
  }

  think.logger.debug('【插件】组合并执行插件中间件');
  // 组合所有插件中间件并执行
  return compose(middlewares)(ctx, next);
};