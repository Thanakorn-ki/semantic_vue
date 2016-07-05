<template lang="html">
  <div class="ui labeled button" tabindex="0"  @click="alertmodal()">
  <div class="ui red button">
    <i class="heart icon"></i> Like
  </div>
  <a class="ui basic red left pointing label">
    1,048
  </a>
</div>
<div class="ui labeled button" tabindex="0">
  <div class="ui basic blue button">
    <i class="fork icon"></i> Forks
  </div>
  <a class="ui basic left pointing blue label">
    1,048
  </a>
</div>

<div class="ui basic modal">
  <i class="close icon"></i>
  <div class="header">
    Archive Old Messages
  </div>
  <div class="image content">
    <div class="image">
      <i class="archive icon"></i>
    </div>
    <div class="description">
      <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
    </div>
  </div>
  <div class="actions">
    <div class="two fluid ui inverted buttons">
      <div class="ui cancel red basic inverted button">
        <i class="remove icon"></i>
        No
      </div>
      <div class="ui ok green basic inverted button">
        <i class="checkmark icon"></i>
        Yes
      </div>
    </div>
  </div>
</div>
</template>

<script>
/*globals $:false */

export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    alertmodal: function () {
      $('.ui.basic.modal').modal('show')
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
