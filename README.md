# Gatsby template

## USE TECHNOLOGY

- [Gatsby](https://www.gatsbyjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [PostCSS](https://postcss.org/)
- [Tailwind](https://tailwindcss.com/)
- [Material-UI](https://material-ui.com/)

## Command

### Install

```shell script
npm ci
```

### Watch

##### develop watch

```shell script
npm start
```

### Build

```shell script
npm run build
```

##### production watch

```shell script
npm run serve
```

### Format

format for prettier

```shell script
npm run format
```

## Clean

delete .cache & public

```shell script
npm run gatsby-clean
```

## Type Check

type check for typescript

```shell script
npm run type-check
```

## Settings

`src/siteMetaData.ts`

## Directory

## CSS

- @import が使えます。(postcss-import)
- ネストが使えます。(postcss-nested)
- css grid が使えます(autoprefixer grid:autoplace)
- tailwindcss が使えます。

##### <a href="https://tailwindcss.com/" target="_blank">tailwind</a>

##### <a href="https://nerdcave.com/tailwind-cheat-sheet" target="_blank">tailwind cheat sheet</a>

## CSS 命名規則 - MindBEMding

### Block

- 命名は英単語 1 単語もしくは 2 単語
- 命名は英単語 2 単語の場合のセパレータは`_`
- 命名は具体的な名前はなるべく避け、抽象化した名前にする
- block のネストは element`１つ`のみ

```html
<div class="block"></div>
```

```html
<div class="block_block"></div>
```

```scss
.block {
  // ...
}
.block_block {
  // ...
}
```

### Element

- 英単語 1 単語のみ
- block とのセパレータは`--`
- 命名は具体的な名前でも可
- element は`必ずblockのネスト`でなければならない
- element は`block--element`以外の形にしてはならない

```html
<div class="block--element"></div>
```

```html
<div class="block_block--element"></div>
```

```scss
.block {
  &--element {
    // ...
  }
}
.block_block {
  &--element {
    // ...
  }
}
```

## Modifier

- tailwindcss で代替する

## State

- prefix は`is-`
- state class に直接スタイルを当てない

```html
<div class="block--element is-active"></div>
```

```html
<div class="block_block--element is-active"></div>
```

```scss
.block {
  &--element {
    &.is-active {
      // ...
    }
  }
}
.block_block {
  &--element {
    &.is-active {
      // ...
    }
  }
}
```

## Example

```html
<div class="card_lv1">
  <div class="card_l1--header">
    <div class="card_lv1--image">
      <img src="./hoge" alt="" />
    </div>
  </div>
  <div class="card_l1--container">
    <h1 class="card_l1--title">タイトル</h1>
    <p class="card_l1--text">テキスト</p>
  </div>
  <div class="card_l1--footer">
    <div class="card_l1--link">
      <a class="button_lv1" href="#">リンク</a>
    </div>
  </div>
</div>
```

```scss
.card_lv1 {
  &--header {
    // ...
  }
  &--image {
    // ...
  }
  &--container {
    // ...
  }
  &--title {
    // ...
  }
  &--text {
    // ...
  }
  &--footer {
    // ...
  }
  &--link {
    // ...
  }
}
```

```scss
.button_lv1 {
  // ...
}
```

## CSS 設計
