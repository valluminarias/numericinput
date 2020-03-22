import Vue from "vue";
import NumericInput from "./NumericInput.vue";

const Components = {
    NumericInput,
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;