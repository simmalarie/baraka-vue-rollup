//import components from'./components'
import VueButton from './VueButton.vue'

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

    Vue.component("vue-button", VueButton);

  }
}

export default Plugin