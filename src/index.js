import components from'./components'

const plugin = {
  install (Vue) {
    //globally register each component on the Vue instance
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin