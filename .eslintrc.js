module.exports = {
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true,
            "async": true,
            "jsx": true
        },
    },
    "env": {
        "node": true
    },
    "rules": {
        "indent": ["error", 4, {
            "SwitchCase": 1,
            "ObjectExpression": "first"
        }],
        "eqeqeq": 1,
        "no-useless-escape": 0,
        "brace-style": 0,//大括号风格
        "curly": [2, "all"], //[2, "all"],//必须使用 if(){} 中的{}
        "no-new": 0,
        "no-return-assign": 0,//return 语句中不能有赋值表达式
        "handle-callback-err": 0,
        "padded-blocks": 0,
        "no-duplicate-imports": 0,
        "operator-linebreak": 0,
        "no-extend-native": 0,
        "no-sequences": 0,
        "no-debugger": 0,
        "no-eval": 0,
        "comma-dangle": [2, "never"],
        "arrow-spacing": [2, { "before": true, "after": true }],
        "no-undef": 2,
        "no-unused-vars": 1,
        "no-console": 0,
        "space-before-function-paren": [0, "always"],
        "keyword-spacing": [2, { "before": true, "after": true }],
        "space-before-blocks": [2, "always"],
        "spaced-comment": [2, "always", {"exceptions": ['-', '+']}],
        "quotes": [2, "double"],
        "semi": [2, "never"],
        "no-multiple-empty-lines": [2, {"max": 1}],
        "generator-star-spacing": [2, { "before": true, "after": true }],
        "object-curly-newline": ["error", { "consistent": true, "minProperties": 2 }],
        "object-curly-spacing": [2, "always"],
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "linebreak-style": [0, "unix"],
        "eol-last": [2, "unix"],
        "object-property-newline": [2, {}],
        "space-infix-ops": 2,
        "no-control-regex": 0,
        "no-empty": 0
    },
    "globals": {
        "Promise": true,
        "window": true,
        "document": true,
        "location": true
    }
}
