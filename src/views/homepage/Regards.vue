<template >
  <div>
    <!--头部  start-->
    <div class="haer">
      <div class="albedo"></div>
      <div class="us_text">关于净慈</div>
      <div class="us_text2">清凉道场 兰若荣光</div>
    </div>

    <div style="height: 3rem;"></div>
    <div class="Regards_content" v-for="item in list" :key="item.detailHtml">
      <!-- 1 -->
      <div style="height: 2rem;"></div>
      <p class="two_title">{{item.title}}</p>
      <span style="color:red">/</span>
      <p class="main_content ql-editor" v-html="item.detailHtml"></p>
      <div style="height: 1rem;"></div>
      <div class="two_img">
        <img src="../../assets/img/home/03.png" alt />
      </div>
      <div style="height: 3rem;"></div>
    </div>
  </div>
</template>
<script>
import 'styleless/Regards.less'

export default {
  name: '',
  data() {
    return {
      data: {
        current: '1',
        size: '5'
      },
      list: []
    }
  },
  created() {
    this.getlist()
  },
  mounted() {},
  methods: {
    getlist() {
      this.$public.noAuthController
        .noAuthBeforeOrSinceConditions(this.data)
        .then(res => {
          if (res.code == '000000') {
            this.list = res.data.records
            console.log('getlist -> list', this.list)
          }
        })
    }
  },
  components: {}
}
</script>