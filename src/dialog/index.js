// import Confirm from './src/confirm.js';


/*
	命令式Confirm弹窗组件
	使用方式： Confirm({title: `<p>ni</p>`}).then(res=>{
			    console.log(res);
		    }).catch(res=>{
			    console.log(res);
		    })

    confirm是个promise  then 返回确认的cb， catch调用取消的cb
	@params
	title: confirm的文本 可用标签
	ConfirmBtnText： 确定的文本
	confirmColor： 确定的文本颜色
	cancelBtnText： 取消的文本
	cancelColor： 取消的文本颜色

 */


// Confirm.install = function(Vue) {
// 	Vue.$confirm= Vue.prototype.$confirm = Confirm;
// };

// export default Confirm;


import Dialog from './src/index';

Dialog.install = function(Vue) {
	Vue.$dialog = Vue.prototype.$dialog = Dialog;
};

export default Dialog;


