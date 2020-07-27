// ミドルウェア
const bodyParser = require('body-parser')
// `Express`アプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
  // httpリクエストのbodyの内容をJSONとして解析するミドルウェア
  app.use(bodyParser.json())
  // TODO:
}