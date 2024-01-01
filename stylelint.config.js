/** @type {import('stylelint').Config} */

export default {
    rules: {
        "color-no-invalid-hex": true,
        "font-family-no-duplicate-names": true,
        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction": true,
        "string-no-newline": true,
        "unit-no-unknown": true,
        "property-no-unknown": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": true,
        "selector-type-no-unknown": true,
        "media-feature-name-no-unknown": true,
        "at-rule-no-unknown": true,
        "comment-no-empty": true,
        "no-empty-source": true,
        "no-invalid-double-slash-comments": true,
        "no-unknown-animations": true,
        "function-url-no-scheme-relative": true,
        "number-max-precision": 2,
        "declaration-no-important": true,
        "declaration-block-single-line-max-declarations": 1,
        "comment-word-disallowed-list": ["todo"],
        "color-hex-length": "long",
        "font-family-name-quotes": "always-unless-keyword",
        "function-name-case": "lower",
        "function-url-quotes": "always",
        "length-zero-no-unit": true,
        "value-keyword-case": [
            "lower",
            {
                camelCaseSvgKeywords: true,
            },
        ],
        "selector-attribute-quotes": "always",
        "selector-pseudo-element-colon-notation": "double",
        "selector-type-case": "lower",
        "rule-empty-line-before": [
            "always-multi-line",
            {
                except: ["first-nested"],
            },
        ],
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-after-blockless"],
            },
        ],
        "comment-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
            },
        ],
        "comment-whitespace-inside": "always",
    },
};
