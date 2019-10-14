# Area 地址选择器

### 引入
``` javascript
import { Area } from '@lib/gant';

Vue.use(Area);
```

## 代码演示

### 基础用法

```html
<Area title="地址选择" :data="areaData" v-model="show" 
  @cancel="cancel" @confirm="confirm" />
```

```javascript
export default {
  data () {
    return {
      show: false
    };
  },
  computed: {
    areaData() {
      return areaData.areaInfo;
    }
  },
  methods: {
    handle() {
      this.show = true;
    },
    cancel() {
      this.show = false;
    },
    confirm(items) {
      this.show = false;
      console.log('确认', items);
    }
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 显示隐藏 | `boolean` | `false` |
| data | 省市区数据，格式见下方 | `object` | `-` |
| title | 标题 | `string` | - |
| cancel-text | 取消按钮文字 | `string` | `取消` |
| confirm-text | 确定按钮文字 | `string` | `确认` |
| itemHeight | 选项高度 | `number` | `37px` |
| visibleItemCount | 可见的选项个数	 | `number` | `7` |


### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| confirm | 确定时的回调 | 一个数组参数，具体格式看下方数据格式章节 |
| cancel | 取消时的回调 | - |


### Slots

| 插槽名称 | 说明 |
|------|------|
| default | 自定义标题 |


### 省市区列表数据格式
整体是一个 object，包含 provsData, citysData, distsData 三个 key, key 的名称可修改, 具体格式如下：
```javascript
{
  provsData: [
    {name: '北京市', code: 110000},
    {name: '天津市', code: 120000}
  ],
  citysData: {
    110000: [
      {name: '北京市', code: 110100}
    ],
    120000: [
      {name: '天津市', code: 120100}
    ],
    130000: [
      {name: '石家庄市', code: 130100}, 
      {name: '唐山市', code: 130200}
    ],
  },
  distsData: {
    110100: [
      {name: '东城区', code: 110101}, 
      {name: '西城区', code:110102},
      {name: '崇文区', code:110103},
      {name: '宣武区', code:110104},
      {name: '朝阳区', code:110105},
      {name: '丰台区', code:110106},
      {name: '石景山区', code:110107},
      {name: '海淀区', code:110108},
      // ....
    ]
  }
}
```
如果仅需要省、市或市、区，只要输入相应的数据，结构同上。
完整数据见 [area.js](http://gitlab.ops.yangege.cn/fe-zebra/zebra-scenic/blob/master/src/views/detail/pages/addConsignee/area.js)


### 点击完成时返回的数据格式

confirm 回调事件入参为一个数组，数组内包含 columnsNum 个数据， 每个数据对应一列选项中被选中的数据, 具体格式如下：
```javascript
[
  {
    code: '110000',
    name: '北京市'
  },
  {
    code: '110100',
    name: '北京市'
  },
  {
    code: '110101',
    name: '东城区'
  }
]
```




