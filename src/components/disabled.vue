<template lang="html">
 <div class="disabled">
   <button @click="plus">+</button><button @click="minus">-</button>{{getCount}}
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'getCount'
  ]),
  methods:
  mapActions([
    'plus',
    'minus'
  ]),
  components: {}
}
</script>

<style lang="css">
</style>
