/**
 * 声明
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-10-20 16:34:17
 */

import './index.scss';

import template from './index.html';

import G from 'constants';
import 'components/base/head-menu';

export default {
	template,
	data() {
		const account = G.account || {};
		return { account };
	},
};
