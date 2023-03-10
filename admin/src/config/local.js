/*
* 在本地开发调试时，三个web项目和一个node项目都是在独立运行的
* 因此需要配置每个服务的本地访问地址，以使能互相调用/请求
* admin、editor、view、api 四个服务的默认端口号分别为
* 8567、8565、8566、7051，因此默认配置如下
*/

module.exports = {
  ADMIN_PATH: 'http://localhost:8567/', // 管理后台访问地址
  EDITOR_PATH: 'http://localhost:8565/', // 编辑器访问地址
  VIEW_PATH: 'http://localhost:8566/', // 页面客户端访问地址
  API_PATH: 'http://localhost:7051/api', // api 服务端访问地址
}
