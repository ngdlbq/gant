const OFF = 0;
const ERROR = 2;

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:vue/essential"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "rules": {
        // "indent": [
        //     "error",
        //     "tab"
        // ],
        "quotes": [
            ERROR,
            "single"
        ],
        // "semi": [
        //     ERROR,
        //     "always"
        // ],
        "no-console": process.env.NODE_ENV === "production" ? ERROR : OFF,
        "no-debugger": process.env.NODE_ENV === "production" ? ERROR : OFF,
        "no-var": ERROR,
        "prefer-const": ERROR,
        "eqeqeq": ERROR,
        "no-extra-semi": ERROR,
        "comma-dangle": [ERROR, "never"], //是否允许对象中出现结尾逗号
        "no-multi-spaces": ERROR, //不允许出现多余的空格
        "no-empty-pattern": OFF,  // 禁止使用空解构模式
        "vue/no-use-v-if-with-v-for": 'off'
    }
};