module.exports = {
    root: true,
    env: {
        browser: true,
        jest: true,
        es2021: true,
        'react-native/react-native': true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier', 'eslint:recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', 'react-native'],
    rules: {
        'import/prefer-default-export': 'off', // https://gitlab.com/gitlab-org/frontend/rfcs/-/issues/20
        'import/no-unresolved': 'off',
        'no-unsafe-optional-chaining': 'off',
        'no-extra-boolean-cast': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // enable .js files
        'react/function-component-definition': 'off', // https://github.com/airbnb/javascript/issues/2505
        semi: ['error', 'always'],
        'arrow-body-style': ['error', 'as-needed'],
        'eol-last': ['error', 'always'],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'max-len': [
            'error',
            {
                code: 120,
            },
        ],
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
            },
        ],
        indent: ['error', 4],
        quotes: ['error', 'single'],
        camelcase: [
            'error',
            {
                properties: 'never',
            },
        ],
        'arrow-parens': ['error', 'as-needed'],
        'func-style': ['error', 'expression'],
        'quote-props': ['error', 'as-needed'],
        'no-extra-parens': 'error',
        'no-extra-bind': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'object-curly-spacing': ['error', 'always'],
        'keyword-spacing': ['error', { after: true, before: true }],
        'space-before-blocks': 2,
        'space-infix-ops': 2,
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react**',
                        group: 'builtin',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
        'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
        'react/jsx-first-prop-new-line': [2],
        'react/jsx-max-props-per-line': [2, { maximum: { multi: 1, single: 1 } }],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
        'react/jsx-closing-tag-location': ['error'],
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react/jsx-props-no-multi-spaces': 2,
        'no-multiple-empty-lines': 2,
        'no-console': 2,
        'brace-style': [2, '1tbs'],
        'react-hooks/exhaustive-deps': [1],
        'no-use-before-define': [0],
        'react/jsx-curly-newline': [2],
        'react/jsx-wrap-multilines': [2],
        'default-param-last': [0],
        'import/no-extraneous-dependencies': 'off',
    },
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathPrefix: '~src',
                rootPathSuffix: 'src/',
            },
        },
    },
};
