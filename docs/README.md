[![npm version](https://badgen.net/npm/v/numericinput)](https://npm.im/numericinput) [![jsdelivr downloads](https://data.jsdelivr.com/v1/package/npm/numericinput/badge?style=rounded)](https://www.jsdelivr.com/package/npm/numericinput)

# NumericInput
NumericInput is an input component for Vue JS with number formatting support. Number formatting uses the [accounting](https://github.com/openexchangerates/accounting.js) library for formatting number.

## Installation
```
npm i numericinput
```

## Usage
1. Import the Component
```
    ...
    import NumericInput from 'numericinput';

    ...
    components: {
        NumericInput,
    }
    ...
```
2. Use the component
```
<template>
    <numeric-input/>
</template>
```

## Props

- Decimal Places
    - (Optional)
    - Set the decimal places
    - default: `2`

- Separator
    - (Optional)
    - Set the places separator
    - default: `','`

### Example Usage

```
<template>
    <numeric-input 
        :decimal-places="4"
        separator=",">
</template>
```

## Development

Install [vue-cli](https://cli.vuejs.org/) globally
``` 
npm i -g @vue/cli 
```
### Building
``` 
npm run bundle 
```