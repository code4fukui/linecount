# linecount

指定されたファイルタイプのコード行数をディレクトリごとに再帰的にカウントするDenoスクリプト。

## 機能

- 現在のディレクトリを再帰的にスキャンしてソースファイルを検出します。
- 拡張子でファイルをフィルタリングします（デフォルトは`.c`と`.h`）。
- 各ディレクトリ内の一致するすべてのファイルの行数を集計します。
- ディレクトリとその合計行数のシンプルなリストを出力します。

## 必要条件

- [Deno](https://deno.land/) ランタイム

## 使い方

解析したいディレクトリのルートからスクリプトを実行します。現在のディレクトリと、一致するファイルを含むサブディレクトリの行数を出力します。

```sh
deno run --allow-read https://code4fukui.github.io/linecount/linecount.js
```

### 出力例

```
. 580
src 1250
src/utils 430
```

## カスタマイズ

異なるファイルタイプの行数をカウントするには、`linecount.js`スクリプトの上部にある`exts`配列を変更する必要があります。

たとえば、JavaScriptとTypeScriptファイルの行数をカウントするには、以下の行を：
```javascript
const exts = [".c", ".h"];
```
次のように変更します：
```javascript
const exts = [".js", ".ts"];
```

## インストール

スクリプトを`linecount`という名前の実行可能コマンドとしてインストールします。

```sh
deno install --allow-read -n linecount https://code4fukui.github.io/linecount/linecount.js
```

インストール後は、任意のディレクトリから直接実行できます：

```sh
linecount
```

## アンインストール

```sh
deno uninstall linecount
```

## ライセンス

This project is unlicensed.
