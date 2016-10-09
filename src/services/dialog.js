/**
 * 弹出框
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-10-09 10:51:09
 */

import Vue from 'vue';
import 'components/base/dialog';

function entity(message, config) {
	let _container = document.createElement('div');
	document.body.appendChild(_container);

	const Dialog = Vue.extend({
		el: () => _container,
		data() {
			return { show: true, config };
		},
		template: `<pk-dialog v-if="show"  :close="close" :config="config">${message}</pk-dialog>`,
		methods: {
			close() {
				this.show = false;
			}
		}
	});

	return new Dialog();
}


export default {
	alert: (message, settings) => {
		let config = { autoClose: true, title: '提示', type: 'alert', onConfirm: () => {} };
		if (typeof settings === 'function') {
			config.onConfirm = settings;
		} else {
			config = {...config, ...settings };
		}
		return entity(message, config);
	},
	confirm: (message, settings, onCancel) => {
		let config = { autoClose: true, title: '提示', ...config, type: 'confirm', onConfirm: () => {}, onCancel: () => {} };
		if (typeof settings === 'function') {
			config.onConfirm = settings;
			config.onCancel = onCancel;
		} else {
			config = {...config, ...settings };
		}
		return entity(message, config);
	}
};


// function spreadAttr(obj) {
// 	return Object.keys(obj).reduce((prev, next) => {
// 		return prev += ` ${next}="${obj[next]}"`;
// 	}, '');
// }
