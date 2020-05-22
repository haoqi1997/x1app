<template >
  <div>
    <nut-tab @tab-switch="tabSwitch">
      <nut-tab-panel tab-title="页签1">页签4565</nut-tab-panel>
      <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
      <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
    </nut-tab>
  </div>
</template>
<script>
// import Vue from 'vue'
// import { Tab, nutTabPanel } from '@nutui/nutui'
export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    //   切换时触发
    tabSwitch(index, event) {
      console.log(index, event.target)
    }
  },
  components: {}
}
</script>