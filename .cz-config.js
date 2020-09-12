module.exports = {
  types: [
    {
      value: 'init',
      name : 'init:     初始提交'
    },
    {
      value: 'feat',
      name : 'feat:     新功能'
    },
    {
      value: 'fix',
      name : 'fix:      修改问题'
    },
    {
      value: 'docs',
      name : 'docs:     文档修改'
    },
    {
      value: 'chore',
      name : 'chore:    修改构建流程, 依赖管理'
    },
    {
      value: 'refactor',
      name : 'refactor: 代码重构'
    },
    {
      value: 'perf',
      name : 'perf:     更改代码以提高性能'
    },
    {
      value: 'test',
      name : 'test:     添加缺失的测试或更正现有的测试'
    },
    {
      value: 'style',
      name : 'style:    样式修改不影响逻辑'
    },
    {
      value: 'revert',
      name : 'revert:   版本回退'
    },
    {
      value: 'release',
      name : 'release:  版本发布'
    },
    {
      value: 'del',
      name : 'del:      删除文件'
    },
  ],
  allowBreakingChanges: [
    'init',
    'feat',
    'fix',
    'docs',
    'chore',
    'refactor',
    'perf',
    'test',
    'style',
    'revert',
    'release',
    'del',
  ]
};
