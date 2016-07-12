<template lang="html">
 test 2s
</template>

<script>
import { changestatus } from '../vuex/actions'
export default {
  vuex: {
    actions: {
      states: changestatus
    }
  },
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    this.states(2)
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
