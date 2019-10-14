# Dialog 弹出框

### 函数调用
Dialog 是一个函数而不是组件，因此可以直接调用，展示对应的提示弹窗
```javascript

import { Dialog } from '@lib/gant';

Dialog.alert({message: 'this is message'});
Dialog.confirm({message: 'this is message'});
```

### 全局方法
注册 Dialog 组件后，会自动在 Vue 的 prototype 上挂载 $dialog 方法，在所有组件内部都可以直接调用此方法
``` javascript

import { Dialog } from '@lib/gant';

Vue.use(Dialog);
```

## 代码演示

### 消息提示

```javascript
export default {
  data () {
    return {};
  },
  mounted() {
    this.$dialog.alert({
      message: '领取商品后需在12天内上传试用报告，否则无法申请下份试用',
      ConfirmBtnText: '我知道了',
    }).then(res => {
      // on confirm
    })
  }
}
```

### 消息确认

```javascript
export default {
  data () {
    return {};
  },
  mounted() {
    this.$dialog.confirm({
      message: '<p>确定要放弃支付吗?</p>',
      ConfirmBtnText: '继续支付',
      cancelBtnText: '放弃支付'
    }).then(res => {
      // on confirm
    })
    .catch(res => {
      // on cancel
    })
  }
}
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| Dialog.alert | 展示消息提示弹窗 | `options` | `Promise` |
| Dialog.confirm | 展示消息确认弹窗 | `options` | `Promise` |


### Options
通过函数调用 Dialog 时，支持传入以下选项：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| message | 文本内容，支持html片段 | `string` | `-` |
| confirmBtnText | 确认按钮文案	 | `string` | `确定` |
| confirmColor | 确认按钮颜色 | `string` | `#1A1A1A` |
| cancelBtnText | 取消按钮文案 | `string` | `取消` |
| cancelColor | 取消按钮颜色 | `string` | `#999999` |
| title | 标题 | `string` | `-` |
| titleColor | 标题颜色 | `string` | `#1A1A1A` |
