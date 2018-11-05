// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const asideMenuConfig = [
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   icon: 'el-icon-menu',
  //   children: [
  //     {
  //       path: '/analysis',
  //       name: '分析页',
  //     },
  //     {
  //       path: '/monitor',
  //       name: '监控页',
  //     },
  //     {
  //       path: '/workplace',
  //       name: '工作台',
  //     },
  //   ],
  // },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
  },
  {
    path: '/example/chart',
    name: 'Example/Chart',
    icon: 'chart',
  },
  {
    path: '/example/table',
    name: 'Example/Table',
    icon: 'table',
  },
  {
    path: '/example/form',
    name: 'Example/Form',
    icon: 'form',
  },
  {
    path: '/example/multiForm',
    name: 'Example/MultiForm',
    icon: 'multiForm',
  },
  {
    path: '/example/desc',
    name: 'Example/Desc',
    icon: 'desc',
  },
  {
    path: '/example/error/error403',
    name: 'Example/Error/Error403',
    icon: 'error403',
  },
  {
    path: '/example/error/error404',
    name: 'Example/Error/Error404',
    icon: 'error404',
  },
  {
    path: '/example/error/error500',
    name: 'Example/Error/Error500',
    icon: 'error500',
  },
  {
    path: '/example/msg/successMsg',
    name: 'Example/Msg/SuccessMsg',
    icon: 'successMsg',
  },
  {
    path: '/example/msg/failMsg',
    name: 'Example/Msg/FailMsg',
    icon: 'failMsg',
  },
];

export { headerMenuConfig, asideMenuConfig };
