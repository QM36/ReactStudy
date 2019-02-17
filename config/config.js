export default {
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: 'helloworld',
        component: './HelloWorld'
      },{
        path: '/helloworld',
        component: 'Helloworld'
      }, {
        path: '/dashboard',
        routes: [{
          path: '/dashboard/analysis',
          component: '/Dashboard/Analysis'
        },{
          path: '/dashboard/monitor',
          component: 'Dashboard/Monitor'
        },{
          path: '/dashboard/workplace',
          component: 'Dashboard/Workplace'
        }]
      }]
  }],
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ]
}