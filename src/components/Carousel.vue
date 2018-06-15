<template>
<carousel :autoplay="true" class="clientes-carousel" :perPageCustom="[[768,2],[1024,5]]">
  <slide v-for="logo in logos" :key="logo.src">
    <img style="max-height:80px;" :src="require(`@/assets/clientes/${logo.src}.png`)" alt="cliente">
  </slide>
</carousel>
</template>
<script>
export default {
  props: {
    logos: {
      type: Array,
      required: true
    }
  },
 data: () => ({

 })
}
</script>
