# CSHTS
campus second-hand trading system

这是一个给校友秘密留言的系统，可以使用学号查询到其他同学的公钥，并给该同学留言，对方只能看到留言。有用户注册、登录、秘密留言、显示留言等功能。
在 Windows 系统、MyEclipse 环境下进行开发，基于 Java Web 开发技术，主要使用 Bootstrap 、Servlet、JDBC、Java 加密与解密、Java 数字摘要算法，使用 MySQL 数据库。

请打开 MongoDB
`use CSHTS`

请在terminal中运行

```
git clone git@github.com:feishuoren/CSHTS.git
cd CSHTS
npm install
npm run webpack
npm start

```
请在浏览器中打开
`localhost:3000`

eslint 使用
```
npm run eslint
```
WebStorm 中支持 `.editorconfig`
> File-> settings -> Editor -> Code Style -> Enable EditorConfig support （ 勾选 ）
