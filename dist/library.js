'use strict';

var vue = require('vue');

var script = {
  __name: 'BrkVButton',
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
  setup(__props) {

const props = __props;


    

    //Fonctions
    function doClick() {
        console.log("clicked");
        
    }


return (_ctx, _cache) => {
  const _component_brk_button = vue.resolveComponent("brk-button");

  return (vue.openBlock(), vue.createBlock(_component_brk_button, {
    id: "brk-button",
    text: props.text,
    accessibilityText: props.accessibilityText,
    variant: props.variant,
    link: props.link,
    onClick: doClick
  }, null, 8 /* PROPS */, ["text", "accessibilityText", "variant", "link"]))
}
}

};

script.__file = "src/BrkVButton.vue";

/*************************************************
 * Liste des composantes constituant la librairie
 * 
**************************************************/

var components = { BrkVButton: script };

const plugin = {
  install (Vue) {
    //globally register each component on the Vue instance
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
