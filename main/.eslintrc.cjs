/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins:[
      'vue',
      'prettier'
  ],
  rules:{
    'indent':['error',2], //确保所有的缩进 使用2个空格
    'linebreak-style':['error','unix'], //结尾换行符为 LF
    'quotes':['error','single'], // 字符串使用单引号
    'eol-last':['error','always'], //行末添加一个空行
    'no-trailing-spaces':'error', //删除行末的空白字符
    'space-infix-ops':'error', //运算符两边有空格
    'brace-style':['error','1tbs'], //大括号不起另一行 确保条件语句大括号使用1tbs风格
    'key-spacing':['error',{beforeColon:false,afterColon:true}], //不强制空格在操作符周围
  },
  parserOptions: {
    ecmaVersion: 'latest', //使用最新版本的 ECMAScript 语法
    sourceType:'module' // 支持 ES 模块
  },
  env:{
    browser:true,
    node:true,
    es2021:true
  },

  override:[
    {
      files:[
          '.eslintrc.{js,cjs}'
      ],
      rules:{
        //对于 js文件，字符串使用单引号
        'quotes':['error','single']
      }
    },
    {
      files:['*.html','*.less','*.css','*.json'],
      rules:{
        //对于这些文件，字符串使用单引号
        'quotes':['error','double']
      }
    },
    {
      files:['package.json'],
      rules:{
        //对 package.json 文件，缩进4个空格
        'indent':['error',4]
      }
    }
  ],

}
