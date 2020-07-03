/*
 * @Autor: duyuanli
 * @Date: 2020-07-03 10:04:22
 * @LastEditors: duyuanli
 * @LastEditTime: 2020-07-03 11:20:53
 */
module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?:\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  rules: {
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'update', 'docs', 'style', 'refactor', 'test', 'chore', 'release', 'revert']
    ]
  }
}