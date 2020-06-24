# HC-tool
HC-tool是一个在线编辑的可视化布局系统，旨在通过可视化页面来生成前端布局及样式代码。通过此工具，可以设置页面布局、添加元素、设置元素样式从而生成最终前端代码，具有在线编辑和即时预览等功能。

线上demo地址：
https://zhangying2345.github.io/HCtool/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### works
1. 删除功能(vuex递归)-----
2. 只有一个cell的容器才能设置flex属性
3. 集成class 方案
4. ejs生成html， 生成style文件

5. style 读取style表单

6. 单个flex才允许设置宽度和高度

6/4TODO:
1. 导出代码时一些div默认应该有flex布局
2. 添加文本组件
3. 添加清空功能
4. 样式调整支持即时预览

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### 重要的事说三遍
- 使用typescript需vue组件的代码中写lang="ts"!
- 使用typescript需vue组件的代码中写lang="ts"!
- 使用typescript需vue组件的代码中写lang="ts"!

#### 使用原则
1. 组件不允许单独存在，必须存在于容器中
