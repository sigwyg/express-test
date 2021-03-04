POSTに対して302を返すエンドポイント、に対して3つの方法でリクエストを投げる

1. `<form method="post">`
1. XML Http Request
1. Fetch API

302レスポンスはAPIが受け取るので、リダイレクト先のリソースを200で受け取る動作になる。
つまり後者2つはリダイレクトしない。

## Usage

```shell
$ node index.js
```

## Reference

- https://github.com/expressjs/express
