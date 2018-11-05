// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

// import HeaderAsideLayout from './layouts/HeaderAsideLayout';
// import Dashboard from './pages/Dashboard';
import Chart from './pages/chart';
import Table from './pages/table';
import Form from './pages/form';

const Dashboard = () => import('@/pages/dashboard/index');
const HeaderAsideLayout = () => import('@coracain/cain-ice-core/core/layout/Layout');
const Error404 = () => import('@/pages/errorpage/404');
const Error403 = () => import('@/pages/errorpage/403');
const Error500 = () => import('@/pages/errorpage/500');
const SuccessMsg = () => import('@/pages/msg/successMsg');
const FailMsg = () => import('@/pages/msg/failMsg');
const MultiForm = () => import('@/pages/form/multiForm');
const Desc = () => import('@/pages/desc');
// const Dashboard = () => import('@/pages/dashboard/index');
// const Chart = () => import('@/pages/charts/index');
// const Table = () => import('@/pages/table/index');
// const Form = () => import('@/pages/form/index');

const routerConfig = [
  // {
  //   path: '/',
  //   layout: HeaderAsideLayout,
  //   component: Dashboard,
  //   children: [
  //     {
  //       path: '/dashboard/analysis',
  //       layout: HeaderAsideLayout,
  //       component: Dashboard,
  //     },
  //     {
  //       path: '/dashboard/monitor',
  //       layout: HeaderAsideLayout,
  //       component: NotFound,
  //     },
  //     {
  //       path: '/dashboard/workplace',
  //       layout: HeaderAsideLayout,
  //       component: NotFound,
  //     },
  //   ],
  // },
  {
    path: '/dashboard',
    layout: HeaderAsideLayout,
    component: Dashboard,
  },
  {
    path: '/example/chart',
    layout: HeaderAsideLayout,
    component: Chart,
  },
  {
    path: '/example/table',
    layout: HeaderAsideLayout,
    component: Table,
  },
  {
    path: '/example/form',
    layout: HeaderAsideLayout,
    component: Form,
  },
  {
    path: '/example/multiForm',
    layout: HeaderAsideLayout,
    component: MultiForm,
  },
  {
    path: '/example/desc',
    layout: HeaderAsideLayout,
    component: Desc,
  },
  {
    path: '/example/error/error403',
    layout: HeaderAsideLayout,
    component: Error403,
  },
  {
    path: '/example/error/error404',
    layout: HeaderAsideLayout,
    component: Error404,
  },
  {
    path: '/example/error/error500',
    layout: HeaderAsideLayout,
    component: Error500,
  },
  {
    path: '/example/msg/successMsg',
    layout: HeaderAsideLayout,
    component: SuccessMsg,
  },
  {
    path: '/example/msg/failMsg',
    layout: HeaderAsideLayout,
    component: FailMsg,
  },
  // {
  //   path: '*',
  //   layout: HeaderAsideLayout,
  //   component: NotFound,
  // },
];

export default routerConfig;
