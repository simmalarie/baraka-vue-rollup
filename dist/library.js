'use strict';

var vue = require('vue');

var script = {
  name: 'VueButton',
  props: {
    text: {
        type: String,
        default: 'bouton',
    },
    accessibilityText:{
        type: String,
        default: 'bouton',
    },

    variant:{
        type: String,
        default: 'primary'
    },
    link:{
        type: String,
        default: null
    },
    inverted: {
        type: Boolean,
        default: false
    }
  },
   methods: {
    doClick() {
        console.log("clicked");   
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_brk_button = vue.resolveComponent("brk-button");

  return (vue.openBlock(), vue.createBlock(_component_brk_button, {
    id: "brk-button",
    text: $props.text,
    accessibilityText: $props.accessibilityText,
    variant: $props.variant,
    link: $props.link,
    onClick: $options.doClick
  }, null, 8 /* PROPS */, ["text", "accessibilityText", "variant", "link", "onClick"]))
}

script.render = render;
script.__file = "src/VueButton.vue";

//import components from'./components'

const Plugin = {
  install (Vue) {
    /*
    //globally register each component on the Vue instance
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        
        Vue.component(component.name, component)
      }
    } */

    Vue.component("vue-button", script);

  }
};

module.exports = Plugin;
