//import components from'./components'
import BrkVButton from './BrkVButton.vue'

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

    Vue.component("brk-vue-button", BrkVButton);

  }
}

export default Plugin