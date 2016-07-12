<template lang="html">
  <div class="ui inverted segment">
  <div class="ui inverted secondary pointing menu">
    <a v-link="{path:'/'}" class="item" :class="{ 'active': states===1}">
      Home
    </a>
    <a v-link="{path:'/disabled'}" class="item" :class="{ 'active': states===2}">
      Messages
    </a>
    <a class="item" :class="{ 'active': states===3}">
      Friends
    </a>
  </div>
</div>
<div>
   <router-view></router-view>
</div>
</template>

<script>
import store from './vuex/store'
import { getCount } from './vuex/getters'
export default {
  store,
  vuex: {
    getters: {
      states: getCount
    }
  },
  data: function () {
    return {}
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
