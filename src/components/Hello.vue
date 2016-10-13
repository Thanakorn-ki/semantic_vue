<template>
  <div class="ui container">
    <button class="ui button green right floated" @click="modal">
      <i class="plus icon"></i>Add Event
    </button>
    <div class="ui modal small">
      <i class="close icon"></i>
      <div class="header">
        Create Event
      </div>
      <div class="ui form">
        <div class="field">
          <label>ชื่อ Event</label>
          <input type="text" v-model="e.event_name">
        </div>
        <div class="field">
          <label>วันที่เริ่มงาน</label>
          <input type="date" v-model="e.event_date">
        </div>
        <div class="field">
          <label>รายละเอียดงาน</label>
          <input type="text" v-model="e.event_location">
        </div>
      </div>

      <div class="actions">
        <div class="ui black deny button">
          ยกเลิก
        </div>
        <div class="ui positive right labeled icon button" @click="add_event(e)">
          สร้าง
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
    <div v-for="event in data_event">
      <div class="ui cards">
        <div class="card">
          <div class="content">
            <img class="right floated mini ui image" src="https://cdn4.iconfinder.com/data/icons/flat-icon-set/2133/flat_icons-graficheria.it-06.png">
            <div class="header">
              {{event.event_name}}
            </div>
            <div class="meta">
              {{event.event_date}}
            </div>
            <div class="description">
              {{event.event_location}}
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <div class="ui basic green button">Detail</div>
              <div class="ui basic red button" @click="model_basic()">Delete</div>
            </div>
          </div>
        </div>
      </div>
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
  </div>
</template>

<script>
/* global $ */
export default {
  data () {
    return {
      data_event: [],
      e: {}
    }
  },
  methods: {
    modal: function () {
      $('.small.modal').modal('show')
    },
    model_basic: function () {
      $('.ui.basic.modal').modal('show')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
