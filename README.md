## 安装
### gnpm 安装

```javascript
gnpm i -S @lib/gant

```
## 引入组件
### 自动按需引入组件 (推荐)
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

安装插件
```javascript

gnpm i -D babel-plugin-import
 
// 在.babelrc 中添加配置
{
  "plugins": [
    ["import", {
      "libraryName": "@lib/gant",
      "camel2DashComponentName": false,
      "style": true
    }, "@lib/gant"]
  ]
}


// 接着你可以在代码中直接引入 gant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import {Area} from '@lib/gant';

```

### 手动按需引入组件
在不使用插件的情况下，可以手动引入需要的组件
```javascript
import Area from '@lib/gant/lib/Area/index.js';
import '@lib/gant/lib/Area/style.css';

```

### 导入所有组件
gant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

```javascript
import Vue from 'vue';
import Gant from '@lib/gant';
import '@lib/gant/lib/style.css';

Vue.use(Gant);
```

### 添加新组件
```
npm run add

```

添加新组件时，只需执行如上指令并根据提示进行操作即可，且需要在 `docs/site/config.js` 中配置组件名称及相应的路径。

```

src
|- toast
|  |- demo        # 示例代码
|  |- README.md    # 中文文档
|  |- index.js   # 组件入口
|
|- index.js     # 所有组件入口

```
同时，你也可以请按照上面的目录结构组织文件新建组件
