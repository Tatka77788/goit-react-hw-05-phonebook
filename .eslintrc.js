module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      "eslint:recommended",
      "airbnb",
      "plugin:import/errors",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier",
      "plugin:prettier/recommended",
      "prettier/react"
    ],
    globals: {
      "window": true,
      "document": true,
      "localStorage": true,
      "FormData": true,
      "FileReader": true,
      "Blob": true,
      "navigator": true
    },
    
    plugins: ["react", "import", "prettier", "jsx-a11y"],
    parser: "babel-eslint",
    parserOptions: {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    rules: {
      "no-console": 0,
      "no-unused-expressions": 0,
      "no-param-reassign": 0,
      "no-plusplus": 0,
      "linebreak-style": 0,
      "global-require": 0,
      "eslint linebreak-style": [0, "error", "windows"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/no-did-update-set-state": 0,
      "jsx-a11y/no-onchange": 0,
      "jsx-a11y/label-has-associated-control": 0,
      "jsx-a11y/no-noninteractive-element-interactions": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/no-autofocus": 0,
      "jsx-a11y/no-static-element-interactions": 0,
      "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
      "react/destructuring-assignment": [
        2,
        "always",
        { "ignoreClassFields": true }
      ],
      "react/static-property-placement": [1, "static public field"],
      "react/state-in-constructor": [1, "never"],
      "react/sort-comp": [
        2,
        {
          "order": [
            "static-methods",
            "static-variables",
            "instance-variables",
            "lifecycle",
            "everything-else",
            "render"
          ]
        }
      ]
    }
  };
  