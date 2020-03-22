<template>
  <input
    @input="onInputHandler"
    @blur="onBlurHandler"
    @focus="onFocusHandler"
    ref="numericInput"
    type="text"
    v-model="theValue"
  />
</template>

<script>
import Helper from "./helpers";

export default {
  name: "NumericInput",

  props: {
    value: {
      default: 0
    },

    decimalPlaces: {
      default: 2
    },

    separator: {
      default: ","
    }
  },

  data() {
    return {
      localValue: this.value,
      formattedValue: Helper.formatValue(
        this.value,
        this.decimalPlaces,
        this.separator
      )
    };
  },

  methods: {
    onInputHandler() {
      this.$emit("input", this.localValue);
    },

    onBlurHandler() {
      this.formattedValue = Helper.formatValue(
        this.localValue,
        this.decimalPlaces,
        this.separator
      );
    },

    onFocusHandler() {
      this.formattedValue = Helper.unformatValue(this.formattedValue);
    },

    matchNumericInput(val) {
      var rgx = /^[\d,]*?\.?[0-9]{0,2}$/;

      return val.match(rgx);
    }
  },

  computed: {
    theValue: {
      get: function() {
        return this.formattedValue;
      },

      set: function(newValue) {
        this.localValue = newValue;
      }
    }
  },

  watch: {
    value(newVal, oldVal) {
      let match = this.matchNumericInput(newVal.toString());
      this.localValue = this.formattedValue = !match ? oldVal : newVal;
    }
  }
};
</script>

