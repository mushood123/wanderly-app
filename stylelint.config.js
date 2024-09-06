/* eslint-disable no-multi-spaces, max-len */

module.exports = {
    processors: [
        'stylelint-processor-styled-components',
    ],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-styled-components',
        'stylelint-config-react-native-styled-components',
    ],
    rules: {
        'comment-no-empty': true,                     // https://github.com/stylelint/stylelint/blob/master/lib/rules/comment-no-empty/README.md
        'declaration-block-no-duplicate-properties': true,            // https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-no-duplicate-properties/README.md
        'declaration-block-no-shorthand-property-overrides': true,    // https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-no-shorthand-property-overrides/README.md
        'declaration-colon-space-after': 'always',    // https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-colon-space-after/README.md
        'declaration-colon-space-before': 'never',    // https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-colon-space-before/README.md
        indentation: 4,                             // https://github.com/stylelint/stylelint/blob/master/lib/rules/indentation/README.md
        linebreaks: 'unix',                         // https://github.com/stylelint/stylelint/blob/master/lib/rules/linebreaks/README.md
        'max-empty-lines': 1,                         // https://github.com/stylelint/stylelint/blob/master/lib/rules/max-empty-lines/README.md
        'max-line-length': 160,                       // https://github.com/stylelint/stylelint/blob/master/lib/rules/max-line-length/README.md
        'no-empty-first-line': true,                  // https://github.com/stylelint/stylelint/blob/master/lib/rules/no-empty-first-line/README.md
        'no-missing-end-of-source-newline': true,     // https://github.com/stylelint/stylelint/blob/master/lib/rules/no-missing-end-of-source-newline/README.md
        'property-no-unknown': [true, {
            ignoreProperties: [
                // these are the react-native style propeteries which are not handled by style lint.
                // style lint push a warning on these properties
                'margin-horizontal',
                'margin-vertical',
                'padding-horizontal',
                'padding-vertical',
                'shadow-color',
                'shadow-opacity',
                'shadow-radius',
                'textAlignVertical',
                'resize-mode',
                'box-sizing',
                'tint-color'
            ],
        }],                                          // https://github.com/stylelint/stylelint/blob/master/lib/rules/property-no-unknown/README.md
        'react-native/css-property-no-unknown': [true, {
            ignoreProperties: ['textAlignVertical', 'elevation', 'box-sizing', 'tint-color'],
        }],                                          // https://github.com/kristerkari/stylelint-react-native/tree/master/src/rules/css-property-no-unknown
        'shorthand-property-no-redundant-values': true,               // https://github.com/stylelint/stylelint/blob/master/lib/rules/shorthand-property-no-redundant-values/README.md
        'unit-no-unknown': true,                      // https://github.com/stylelint/stylelint/blob/master/lib/rules/unit-no-unknown/README.md
    },
};
