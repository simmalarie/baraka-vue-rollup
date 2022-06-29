<template>
    <brk-button id="brk-button" :text='text' :accessibilityText='accessibilityText' :variant='variant' :link='link' @click="doClick"></brk-button>
    
</template>

<script>

export default {
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
        console.log("clicked")   
    }
  }
}
</script>

<!--script setup>
    const props = defineProps({
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
    });
    //Fonctions
    function doClick() {
        console.log("clicked")   
    }
</script-->
