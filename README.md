# tarojs-ts-cli
Taro 小程序 脚手架 (Taro + Dva + Typescript + Immutable)

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

# 目录结构
    ├── dist/                       // 微信小程序编译结果目录
    ├── docs/                       // 文档目录
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

## TODO-LIST
* 全局 lang 配置
* lodash 引用 优化 - 整体引入 会造成项目体积过大, 无法上传
* Pure Component 使用
* 贴合 小程序设计规范 (UI)
* Immutable 说明文档
* Prettier
* git hooks
* ESLint (TS) rules 配置

## Remake
* ts
* redux
* immer
* taro-ui
