<template lang="html">
  <div class="ui container">
    <div class="ui inverted segment">
      <div class="ui inverted secondary pointing menu">
        <router-link to="/" class="item">Home</router-link>
        <router-link to="/disabled" class="item">Messages</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  computed: {},
  mount () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
