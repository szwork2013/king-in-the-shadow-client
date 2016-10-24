import Vue from 'vue';
import VueRouter from 'vue-router';

import G from 'constants';
import accoutAuth from 'services/account-auth';

import Home from 'containers/home';
import Login from 'containers/login';
import Register from 'containers/register';

import UserContainer from 'components/contains/user';
import User from 'containers/user';

// otherwise
import Contact from 'containers/otherwise/contact';
import Declaration from 'containers/otherwise/declaration';

Vue.use(VueRouter);

const routes = [
	{ name: 'home', path: '/', component: Vue.extend(Home) },
	{ name: 'contact', path: '/contact', component: Vue.extend(Contact) },
	{ name: 'declaration', path: '/declaration', component: Vue.extend(Declaration) },
	{ name: 'register', path: '/register', component: Vue.extend(Register) },
	{ name: 'login', path: '/login', component: Vue.extend(Login) }, {
		path: '/user',
		component: Vue.extend(UserContainer),
		children: [
			{ name: 'user.dashboard', path: 'dashboard', component: Vue.extend(User.Dashboard), beforeEnter: accoutAuth.beforeRouteEnter }, // , beforeEnter: accoutAuth.mixin.beforeRouteEnter
			{ name: 'user.nodes', path: 'nodes', component: Vue.extend(User.Nodes) },
		]
	},
	{ path: '*', redirect: '/' }
];

const router = new VueRouter({ routes });
router.beforeEach((to, from, next) => {
	G.showMainMenu = false;
	G.showUserMenu = false;
	next();
});

export default router;
