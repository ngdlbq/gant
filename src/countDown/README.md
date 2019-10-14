# CountDown 倒计时

### 引入
``` javascript
import { CountDown } from '@lib/gant';

Vue.use(CountDown)
```

## 代码演示

### 基础用法（自动开始倒计时）

```html
<CountDown :time="time" @finish="finish" autoStart />
```

```javascript
export default {
  data () {
    return {
      time: 1000 * 1000
    };
  },
  methods: {
    finish() {
      this.$toast('finish');
    }
  }
}
```

### 自定义样式

```html
<CountDown :time="time" @finish="finish" autoStart>
  <template v-slot="{timeData}">
    <span>{{timeData.hours}}时</span>
    <span>{{timeData.minutes}}分</span>
    <span>{{timeData.seconds}}秒</span>
  </template>
</CountDown>
```

```css
<style lang="less" scoped>
  span {
    display: inline-flex;
    padding: 10px 20px;
    background-color: #409EFF;
    color: #fff;
  }
</style>
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| time | 倒计时时长，单位毫秒 | `string | number` | `-` |
| auto-start | 是否自动开始倒计时	 | `boolean` | `false` |
| formate | 时间格式，DD-日，HH-时，mm-分，ss-秒 | `string` | `HH:mm:ss` |


### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| finish | 倒计时结束时触发	 | - |


### Slots

| 插槽名称 | 说明 | SlotProps |
|------|------|------|------|
| default | 自定义内容 | `timeData` |
timeData 是一个对象，键值对分别对应剩余的 天数、小时、分钟、秒数, 具体格式如下：
```javascript
{
  days: 'xxx',
  hours: 'xxx', 
  minutes: 'xxx', 
  seconds: 'xxx'
}
```