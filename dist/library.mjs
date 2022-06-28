import { resolveComponent, openBlock, createBlock } from 'vue';

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
  const _component_brk_button = resolveComponent("brk-button");

  return (openBlock(), createBlock(_component_brk_button, {
    id: "brk-button",
    text: _ctx.props.text,
    accessibilityText: _ctx.props.accessibilityText,
    variant: _ctx.props.variant,
    link: _ctx.props.link,
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

export { Plugin as default };
