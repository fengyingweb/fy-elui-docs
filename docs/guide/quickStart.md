## 快速上手

### 脚手架

推荐使用 Vue 官方提供的脚手架 [Vue Cli 3](https://cli.vuejs.org/zh/) 创建项目

``` bash
# 安装 Vue Cli
npm install -g @vue/cli

# 创建一个项目
vue create hello-world

# 创建完成后，可以通过命令打开图形化界面，如下图所示
vue ui
```

### 安装

``` bash
# 通过 npm 安装
npm i fy-elui -S

# 通过 yarn 安装
yarn add fy-elui
```

## 引入组件

### 方式一. 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

``` bash
# 安装插件
npm i babel-plugin-import -D
```

``` js
// 在.babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "fy-elui",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'fy-elui',
      libraryDirectory: 'es',
      style: true
    }, 'fy-elui']
  ]
};
// 接着你可以在代码中直接引入 fy-elui 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from 'fy-elui';
```

::: tip
如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入
:::

### 方式二. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

``` js
import Button from 'fy-elui/lib/button';
import 'fy-elui/lib/button/style';
```

### 方式三. 导入所有组件

fy-elui 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法

``` js
import Vue from 'vue';
import FyElUI from 'fy-elui';
import 'fy-elui/lib/index.css';

Vue.use(FyElUI);
```

::: tip
注意：配置 babel-plugin-import 插件后，将不允许以这种方式导入组件
:::

## 其他

### Rem 适配

fy-elui 中的样式默认使用px作为单位，如果需要使用rem单位，推荐使用以下两个工具：

* [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
* [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

### PostCSS 配置

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

``` js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```

::: tip
注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，这会导致 fy-elui 的样式无法被编译
:::

### 底部安全区适配

iPhone X 等机型底部存在底部指示条，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行底部安全区适配。fy-elui 中部分组件提供了safe-area-inset-bottom属性，设置该属性后，即可在对应的机型上开启适配，如下示例：

``` html
<!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover">

<!-- 开启 safe-area-inset-bottom 属性 -->
<fy-number-keyboard safe-area-inset-bottom />
```
