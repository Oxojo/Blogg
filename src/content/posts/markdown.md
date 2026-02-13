---
title: Markdown 使用例
date: 2026-02-14
summary: Markdown を使用した場合の見た目について
category: 使用例
tags: [Markdown]
---

# h1

## h2

### h3 `inline code`

#### h4

##### h5

###### h6

## 太字・イタリック

**太字 (Bold)**，_イタリック (Italic)_

## 取り消し線

~~取り消し線はこんな感じ~~

## 引用

> こんな感じで引用ができる <br>
> **Bold** とか _Italic_ とか

> 引用に
>
> > 引用を重ねて

> 注釈も入れられたりして<br>
> — <cite>Oxojo[^1]</cite>

[^1]: 注釈はここに

## 分割線

---

## テーブル

表も書けます

| Name  | Age |  Fruit |
| :---- | :-: | -----: |
| Bob   | 27  |  Apple |
| Alice | 23  | Banana |
| John  | 28  | Orange |

もちろん表の中身も markdown つかえちゃう

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## コードブロック

### Syntax

コードブロックは ``` を使えばこんな感じで囲めます

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

ただの text も ok

```
const var text = "hello world"
```

## KaTeX

KaTeX に対応してくれるとうれしいよね

$E = mc^2$ みたいにインラインでやってもらうこともできれば、

$$
e^{i\pi} + 1 = 0
$$

みたいにもできる。```math とかで囲んでも同様 :

```math
\oint_{\partial V} \mathbf{E} \cdot d\mathbf{A} = \frac{Q}{\epsilon_0}
```

## リスト

### 順序付き

1. First item
2. Second item
3. Third item

### 箇条書き

- List item
- Another item
- And another item

ネストもできるよ

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Spoiler

```md
||hide content||
```

隠したいところは、||こんな感じで|| 隠せちゃう

hover すると見れます

## おわり

Markdown + KaTeX 対応本当にありがとう
