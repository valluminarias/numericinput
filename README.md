# NumericInput
[![npm version](https://badgen.net/npm/v/numericinput)](https://npm.im/numericinput) [![jsdelivr downloads](https://data.jsdelivr.com/v1/package/npm/numericinput/badge?style=rounded)](https://www.jsdelivr.com/package/npm/numericinput)

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
        :separator=",">
</template>
```

## Development

Install `vue-cli` globally
``` 
npm i -g @vue/cli 
```
### Building
``` 
npm run bundle 
```