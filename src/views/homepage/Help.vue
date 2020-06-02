<template >
  <div>
    <!--头部  start-->
    <div class="haer">
      <div class="albedo"></div>
      <div class="us_text">助建净慈</div>
      <div class="us_text2">清凉道场 兰若荣光</div>
    </div>
    <div style="height: 2rem;"></div>
    <div class="Help_content">
      <ul>
        <li v-for="item in helplist" :key="item.id">
          <p class="helpimg">
            <img :src="item.src" alt />
          </p>
          <p class="title">{{item.name}}</p>
          <p class="money">￥{{item.money}}.00/片</p>
        </li>
      </ul>
      <div style="height: 2rem;"></div>
    </div>
  </div>
</template>
<script>
import 'styleless/Help.less'

export default {
  name: '',
  data() {
    return {
      helplist: [
        {
          src: require('../../assets/img/home/06.png'),
          id: 1,
          name: '银熏板瓦',
          money: 200
        },
        {
          id: 2,
          src: require('../../assets/img/home/06.png'),

          name: '银熏板瓦',
          money: 200
        },
        {
          id: 3,
          name: '银熏板瓦',
          src: require('../../assets/img/home/06.png'),

          money: 200
        },
        {
          id: 4,
          name: '银熏板瓦',
          src: require('../../assets/img/home/06.png'),
          money: 200
        }
      ]
    }
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
