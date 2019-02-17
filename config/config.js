export default {
  routes: [{
    path: '/',
    component: '../layout',
    routes: [{
    	path: '/',
    	component: 'HelloWorld'
    },{
    	path: 'HelloWorld',
    	component: 'HelloWorld'
    },{
    	path: 'puzzlecards',
    	component: 'puzzlecards'
    },{
    	path: '/',
    	routes: [{
    		path: '/analysis',
    		component: 'Dashboard/Analysis'
    	},{
    		path: '/monitor',
    		component: 'Dashboard/Monitor'
    	},{
    		path: '/workplace',
    		component: 'Dashboard/Workplace'
    	}]
    }]
  }],
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
    }],
  ]
}