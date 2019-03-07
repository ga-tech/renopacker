module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
  ],
  rules: {
    indentation: 2,
    'font-family-no-missing-generic-family-keyword': true,
    'color-hex-case': 'lower', // hex値は小文字指定（大文字を禁止）
    'color-hex-length': 'short', // hex値は短い表記（冗長な表記は禁止）
    'color-named': 'never', // 名前付きカラー指定を禁止
    'color-no-invalid-hex': true, // 無効な16進数の色指定を禁止
    'function-comma-space-after': 'always-single-line', // 単一行のカンマ後には空白が必要
    'function-comma-space-before': 'never', // カンマ前の空白を禁止
    'number-leading-zero': 'never', // 「0.*」の0は省略し許可しない（.*のようにする）
    'number-no-trailing-zeros': true, // 小数点以下の末尾0を禁止
    'string-no-newline': true, // 文字列の改行を禁止
    'string-quotes': 'double', // '指定（''を禁止）
    'length-zero-no-unit': true, // 0の時の右記単位指定を禁止（em, ex, ch, vw, vh, cm, mm, in, pt, pc, px, rem, vmin, vmax）
    'unit-case': 'lower', // 単位は小文字指定（大文字を禁止）
    'unit-no-unknown': true, // 不明な単位を禁止
    'unit-whitelist': [
      "rem", // ルート要素（html要素）のフォントサイズに対応した単位
      "%",
      "s", // 1s: 1秒
      "deg", // 度数法 0～360までの数値 右回転
      "vh", // 画面の高さを100とする単位
    ],
    'value-no-vendor-prefix': true, // ベンダープレフィックスを禁止（autoprefixerの使用前提）
    'value-list-comma-newline-after': 'always-multi-line', // 値リストのカンマ後に改行は許可し改行後のカンマは禁止
    'value-list-comma-space-after': 'always-single-line', // 値リストの単一行のカンマ後には空白が必要
    'value-list-comma-space-before': 'never', // 値リストのカンマ前の空白を禁止
    'shorthand-property-no-redundant-values': true, // 省略形のプロパティで重複する値を許可しない
    'property-case': 'lower', // プロパティは小文字指定（大文字を禁止）
    'property-no-vendor-prefix': true, // プロパティのベンダープレフィックスを禁止（autoprefixerの使用前提）
    'declaration-bang-space-after': 'never', // 宣言後の空白を禁止
    'declaration-bang-space-before': 'always', // 宣言前の空白を必須
    'declaration-colon-newline-after': 'always-multi-line', // 複数行の時のコロン後には改行が必須
    'declaration-colon-space-after': 'always-single-line', // 単一行の時のコロン後に空白が必須
    'declaration-colon-space-before': 'never', // コロン前の空白を禁止
    'declaration-block-no-duplicate-properties': [
      // 宣言ブロック内で重複するプロパティを禁止
      true,
      {
        ignore: [
          'consecutive-duplicates' // 連続する場合は許可（レガシーブラウザ対応で記述する場合がある為）
        ]
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true, // ショートハンドで値の上書き禁止
    'declaration-block-semicolon-newline-after': 'always-multi-line', // セミコロン後に改行が必須（セレクタ含め一行の場合は容認）
    'declaration-block-semicolon-newline-before': 'never-multi-line', // セミコロン前の空白・改行を禁止
    'declaration-block-semicolon-space-after': 'always-single-line', // 単一行の時のセミコロン後に空白が必須
    'declaration-block-semicolon-space-before': 'never', // セミコロン前の空白を禁止
    'declaration-block-trailing-semicolon': 'always', // 末尾のセミコロンを必須
    'block-closing-brace-empty-line-before': 'never', // 閉じ括弧前の空行を禁止
    'block-closing-brace-newline-after': 'always', // 閉じ括弧後の改行を必須
    'block-closing-brace-newline-before': 'always-multi-line', // 複数行の時に閉じ括弧前に改行を必須
    'block-opening-brace-space-after': 'always-single-line', // 単一行の時に閉じ括弧後に空白を必須
    'block-opening-brace-space-before': 'always', // 単一行で閉じ括弧前に空白を必須
    'selector-attribute-brackets-space-inside': 'never', // 属性セレクタ内の括弧の内側の空白を禁止
    'selector-attribute-operator-space-after': 'never', // 属性セレクタ内の演算子の後の空白を禁止
    'selector-attribute-operator-space-before': 'never', // 属性セレクタ内の演算子の前の空白を禁止
    'selector-attribute-quotes': 'always', // 属性値の引用符を必須
    'selector-combinator-space-after': 'always', // コンビネータ後に空白を必須
    'selector-combinator-space-before': 'always', // コンビネータ前に空白を必須
    'selector-descendant-combinator-no-non-space': true, // 下位コンビネータの空白以外を禁止
    // 'selector-max-compound-selectors': 3, // セレクタ内の複合セレクタ数を制限
    // 'selector-max-specificity': '0,4,0', // 'id,class,type'でセレクタの特異性を制限
    'selector-max-empty-lines': 1, // セレクタ内の隣接する空行の数を制限
    'selector-pseudo-class-case': 'lower', // 擬似セレクタは小文字指定（大文字は禁止）
    'selector-pseudo-class-parentheses-space-inside': 'never', // 擬似セレクタ内の括弧の内側の空白を禁止
    'selector-type-case': 'lower', // セレクタは小文字（大文字は禁止）
    'selector-list-comma-newline-after': 'always', // セレクタリストのカンマの後に改行を必須
    'selector-list-comma-newline-before': 'never-multi-line', // セレクタリストのカンマの前の空白を禁止
    'selector-list-comma-space-before': 'never', // セレクタリストのカンマの前の空白を禁止
    'media-feature-colon-space-after': 'always', // メディアクエリ内のコロンの後の空白を指定
    'media-feature-colon-space-before': 'never', // メディアクエリ内のコロンの前の空白を禁止
    'media-feature-name-case': 'lower', // メディアクエリの小文字指定（大文字を禁止）
    'media-feature-parentheses-space-inside': 'never', // メディアクエリの括弧内側の空白を禁止
    'media-feature-range-operator-space-after': 'always', // メディアクエリ内の範囲演算子の後の空白を指定
    'media-feature-range-operator-space-before': 'always', // メディアクエリ内の範囲演算子の前の空白を指定
    'media-query-list-comma-newline-after': 'always-multi-line', // メディアクエリの複数行の時はカンマの後に改行を必須
    'media-query-list-comma-newline-before': 'never-multi-line', // メディアクエリの複数行の時はカンマの前に空白を必須
    'media-query-list-comma-space-after': 'always-single-line', // メディアクエリのカンマの後に改行を必須
    'media-query-list-comma-space-before': 'never', // メディアクエリのカンマの前の空白を禁止
    // 'at-rule-blacklist': ['extend'], // 禁止する@ルールを指定
    'at-rule-name-case': 'lower', // @ルールは小文字指定（大文字を禁止）
    'at-rule-name-space-after': 'always-single-line', // @ルールで単一行の時は@ルール名の後に空白を必須
    'at-rule-semicolon-newline-after': 'always', // @ルールでセミコロンの後に改行を必須
    'comment-whitespace-inside': 'always', // コメントの内側に空白を必須
    'max-empty-lines': 2, // 隣接する空行を制限
    'no-extra-semicolons': true, // 余分なセミコロンを禁止
    'no-missing-end-of-source-newline': true, // 行末の改行を必須
    'no-descending-specificity': null, // 詳細度の低いセレクタがあとから呼び出されていてもOK（SCSSだとなりがち）

    'order/order': [
      'at-rules',
      {
        type: 'at-rule',
        name: 'charset'
      },
      {
        type: 'at-rule',
        name: 'import'
      },
      {
        type: 'at-rule',
        name: 'include'
      },
      {
        type: 'at-rule',
        name: 'util',
        hasBlock: true
      },
      {
        type: 'at-rule',
        name: 'define-mixin',
        hasBlock: true
      },
      {
        type: 'at-rule',
        name: 'add-mixin',
        hasBlock: true
      },
      {
        type: 'at-rule',
        name: 'apply',
        hasBlock: true
      },
      {
        type: 'at-rule',
        name: 'custom-media',
        hasBlock: true
      },
      {
        type: 'at-rule',
        name: 'keyframes',
        hasBlock: true
      },
      'custom-properties',
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
        hasBlock: true
      },
      'rules'
    ],
    'order/properties-order': [
      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',

      'display',
      'visibility',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      '-ms-overflow-x',
      '-ms-overflow-y',
      'clip',
      'zoom',
      'flex-direction',
      'flex-order',
      'flex-pack',
      'flex-align',

      '-webkit-box-sizing',
      '-moz-box-sizing',
      'box-sizing',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-top',
      'border-top-width',
      'border-top-style',
      'border-top-color',
      'border-right',
      'border-right-width',
      'border-right-style',
      'border-right-color',
      'border-bottom',
      'border-bottom-width',
      'border-bottom-style',
      'border-bottom-color',
      'border-left',
      'border-left-width',
      'border-left-style',
      'border-left-color',
      '-webkit-border-radius',
      '-moz-border-radius',
      'border-radius',
      '-webkit-border-top-left-radius',
      '-moz-border-radius-topleft',
      'border-top-left-radius',
      '-webkit-border-top-right-radius',
      '-moz-border-radius-topright',
      'border-top-right-radius',
      '-webkit-border-bottom-right-radius',
      '-moz-border-radius-bottomright',
      'border-bottom-right-radius',
      '-webkit-border-bottom-left-radius',
      '-moz-border-radius-bottomleft',
      'border-bottom-left-radius',
      '-webkit-border-image',
      '-moz-border-image',
      '-o-border-image',
      'border-image',
      '-webkit-border-image-source',
      '-moz-border-image-source',
      '-o-border-image-source',
      'border-image-source',
      '-webkit-border-image-slice',
      '-moz-border-image-slice',
      '-o-border-image-slice',
      'border-image-slice',
      '-webkit-border-image-width',
      '-moz-border-image-width',
      '-o-border-image-width',
      'border-image-width',
      '-webkit-border-image-outset',
      '-moz-border-image-outset',
      '-o-border-image-outset',
      'border-image-outset',
      '-webkit-border-image-repeat',
      '-moz-border-image-repeat',
      '-o-border-image-repeat',
      'border-image-repeat',
      'outline',
      'outline-width',
      'outline-style',
      'outline-color',
      'outline-offset',
      'background',
      'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader',
      'background-color',
      'background-image',
      'background-repeat',
      'background-attachment',
      'background-position',
      'background-position-x',
      '-ms-background-position-x',
      'background-position-y',
      '-ms-background-position-y',
      '-webkit-background-clip',
      '-moz-background-clip',
      'background-clip',
      'background-origin',
      '-webkit-background-size',
      '-moz-background-size',
      '-o-background-size',
      'background-size',
      'box-decoration-break',
      '-webkit-box-shadow',
      '-moz-box-shadow',
      'box-shadow',

      'table-layout',
      'empty-cells',
      'caption-side',
      'border-spacing',
      'border-collapse',
      'list-style',
      'list-style-position',
      'list-style-type',
      'list-style-image',

      'font',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'font-variant',
      'font-size-adjust',
      'font-stretch',
      'font-effect',
      'font-emphasize',
      'font-emphasize-position',
      'font-emphasize-style',
      'font-smooth',
      'line-height',
      'color',
      'filter:progid:DXImageTransform.Microsoft.gradient',
      '-ms-filter:\\progid:DXImageTransform.Microsoft.gradient',
      'text-shadow',
      'text-align',
      '-webkit-text-align-last',
      '-moz-text-align-last',
      '-ms-text-align-last',
      'text-align-last',
      'vertical-align',
      'white-space',
      'text-decoration',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-style',
      'text-emphasis-position',
      'text-indent',
      '-ms-text-justify',
      'text-justify',
      'letter-spacing',
      'word-spacing',
      '-ms-writing-mode',
      'text-outline',
      'text-transform',
      'text-wrap',
      'text-overflow',
      '-ms-text-overflow',
      'text-overflow-ellipsis',
      'text-overflow-mode',
      '-ms-word-wrap',
      'word-wrap',
      'word-break',
      '-ms-word-break',
      '-moz-tab-size',
      '-o-tab-size',
      'tab-size',
      '-webkit-hyphens',
      '-moz-hyphens',
      'hyphens',
      'pointer-events',

      'content',
      'quotes',
      'counter-reset',
      'counter-increment',
      'resize',
      'cursor',
      '-webkit-user-select',
      '-moz-user-select',
      '-ms-user-select',
      'user-select',
      'nav-index',
      'nav-up',
      'nav-right',
      'nav-down',
      'nav-left',

      'opacity',
      'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
      '-ms-filter:progid:DXImageTransform.Microsoft.Alpha',
      '-ms-interpolation-mode',
      '-webkit-transition',
      '-moz-transition',
      '-ms-transition',
      '-o-transition',
      'transition',
      '-webkit-transition-delay',
      '-moz-transition-delay',
      '-ms-transition-delay',
      '-o-transition-delay',
      'transition-delay',
      '-webkit-transition-timing-function',
      '-moz-transition-timing-function',
      '-ms-transition-timing-function',
      '-o-transition-timing-function',
      'transition-timing-function',
      '-webkit-transition-duration',
      '-moz-transition-duration',
      '-ms-transition-duration',
      '-o-transition-duration',
      'transition-duration',
      '-webkit-transition-property',
      '-moz-transition-property',
      '-ms-transition-property',
      '-o-transition-property',
      'transition-property',
      '-webkit-transform',
      '-moz-transform',
      '-ms-transform',
      '-o-transform',
      'transform',
      '-webkit-transform-origin',
      '-moz-transform-origin',
      '-ms-transform-origin',
      '-o-transform-origin',
      'transform-origin',
      '-webkit-animation',
      '-moz-animation',
      '-ms-animation',
      '-o-animation',
      'animation',
      '-webkit-animation-name',
      '-moz-animation-name',
      '-ms-animation-name',
      '-o-animation-name',
      'animation-name',
      '-webkit-animation-duration',
      '-moz-animation-duration',
      '-ms-animation-duration',
      '-o-animation-duration',
      'animation-duration',
      '-webkit-animation-play-state',
      '-moz-animation-play-state',
      '-ms-animation-play-state',
      '-o-animation-play-state',
      'animation-play-state',
      '-webkit-animation-timing-function',
      '-moz-animation-timing-function',
      '-ms-animation-timing-function',
      '-o-animation-timing-function',
      'animation-timing-function',
      '-webkit-animation-delay',
      '-moz-animation-delay',
      '-ms-animation-delay',
      '-o-animation-delay',
      'animation-delay',
      '-webkit-animation-iteration-count',
      '-moz-animation-iteration-count',
      '-ms-animation-iteration-count',
      '-o-animation-iteration-count',
      'animation-iteration-count',
      '-webkit-animation-direction',
      '-moz-animation-direction',
      '-ms-animation-direction',
      '-o-animation-direction',
      'animation-direction'
    ]
  }
}
