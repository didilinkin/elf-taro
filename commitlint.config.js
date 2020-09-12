/**
 * feat：新功能（feature）
 * fix：修补bug
 * docs：文档（documentation）
 * style： 代码格式（不影响代码运行的变动）
 * refactor：重构（即不是新增功能，也不是修改bug的代码变动）
 * test：增加测试
 * chore：构建过程或辅助工具的变动
 *
 * 提交格式：<type>(<scope>): <describe> 其中scope可忽略
 *
 * 提交实例： git commit -am 'fix(location): 登录接口地址修改'
 *
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'
    ]],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
};
