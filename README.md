# elf-taro-cli

Elf 基于 Taro 的 小程序 脚手架

> Taro-cli version: Taro v3.0.0-rc.6

## 主要功能

- dva
- 异步请求
- 腾讯地图 示例
- Typescript

## 预览项目

```bash
# 全局安装taro脚手架
npm install -g @tarojs/cli
# 安装依赖
yarn install

# 小程序 预览模式 => 用 小程序开发工具 打开 ./dist 文件夹 即可预览
yarn dev:weapp
```

## 打包项目

```bash
# 打包完成的小程序 文件在 ./dist 文件夹内
yarn build:weapp
```

## 注意事项

- 本项目拉取到本地后， “小程序开发工具” 请打开 “不校验合法域名”！ 方便查看 请求效果

## 常见错误

1. 开发环境版本不相同

   [Taro 版本升级权威指南](https://aotu.io/notes/2020/08/31/taro-versions/index.html)

   [taro update self 的更新好像不管用](https://github.com/NervJS/taro/issues/297)

# 目录结构

    ├── dist/                       // 微信小程序编译结果目录
    ├── config/                     // Taro 配置目录
    │   ├── dev.js                  // 开发时配置
    │   ├── index.js                // 默认配置
    │   └── prod.js                 // 打包时配置
    ├── src/                        // 源码目录
    │   ├── components/             // 公共组件
    │   └── dvaCore/                // dva-core 配置
    │       └── index.ts
    │   └── models/                 // 全局 models
    │       └── index.ts
    │   ├── pages                   // 页面文件目录
    │   │   └── index
    │   │       ├── model/          // 业务逻辑 (Dva model)
    │   │       ├── index.tsx       // 页面逻辑
    │   │       └── index.styl      // 页面样式
    │   ├── services/               // 全局模块请求
    │   ├── utils                   // 常用工具类
    │   ├── app.js                  // 入口文件
    │   └── index.html
    ├── global.d.ts                 // 全局类型配置
    └── package.json                // 项目依赖

## TODO

- 用户信息读取
- components 功能
- dva-model-extend

## 项目版本升级

```bash
# 1. 更新 Taro CLI 工具:
npm i -g @tarojs/cli@latest

# 2. 更新项目中 Taro 相关的依赖:
taro update project

# 3. 删除原来的node_modules后重新安装依赖(注意):
cnpm install
```

## 已配置的依赖

| 名称    | 库名称                                                                   | 用途                                  |
| ------- | ------------------------------------------------------------------------ | ------------------------------------- |
| Taro    | [@tarojs/taro](https://taro-docs.jd.com/taro/docs/README/index.html)     | 基础库                                |
| Taro-UI | [taro-ui](https://taro-ui.jd.com/#/docs/introduction)                    | 样式库                                |
| Dva     | [dva-core](https://dvajs.com/guide/)                                     | 基于 redux 和 redux-saga 的数据流方案 |
| Immer   | [dva-immer](https://github.com/dvajs/dva/tree/master/packages/dva-immer) | immer 不可变结构                      |
| Lodash  | [lodash](https://lodash.com/docs/4.17.15)                                | 函数库                                |

## 开发环境的依赖

| 名称            | 库名称                                                           | 用途              |
| --------------- | ---------------------------------------------------------------- | ----------------- |
| Typescript      | [typescript](https://www.typescriptlang.org/docs)                | JS 超集语言       |
| ESLint          | [eslint](https://eslint.org/docs/user-guide/getting-started)     | 规范检查          |
| Prettier        | [prettier](https://prettier.io/docs/en/index.html)               | 代码格式化        |
| cz-customizable | [cz-customizable](https://www.npmjs.com/package/cz-customizable) | Git commit 规范化 |

## 特别鸣谢

| 库名称                                                   | 用途                                                    |
| -------------------------------------------------------- | ------------------------------------------------------- |
| [taro-request](https://github.com/TigerHee/taro-request) | 封装 Taro.request（拦截器，url 配置，Authorization 等） |
