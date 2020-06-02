<template >
  <div>
    <!--头部  start-->
    <div class="haer">
      <div class="albedo"></div>
      <div class="us_text">净慈人物</div>
      <div class="us_text2">清凉道场 兰若荣光</div>
    </div>
    <div style="height: 2rem;"></div>
    <div class="Figure_content">
      <div class="Figure_img">
        <img :src="this.onelist.picture" alt />
      </div>
      <div style="height: 1rem;"></div>
      <div class="Figure_title">
        <p class="ps">
          {{this.onelist.name}}
          <span class="spans">{{this.onelist.beginYear}}</span>
        </p>
        <div style="height: 1rem;"></div>
        <div class="Figure_text ql-editor" v-html="this.onelist.detailHtml"></div>
      </div>
      <div style="height: 1rem;"></div>
      <div class="know" style="  width: 6rem;">了解更多</div>
      <div style="height: 1rem;"></div>
    </div>
    <div style="height: 1rem;"></div>
    <div class="Figure_content zhuchi">
      <p class="zhuchi1">住持</p>
      <div style="height: 1rem;"></div>

      <div>
        <span style="color:red">\</span>
        <span class="zhuchi2">ZHUCHI</span>
        <div style="height: 1rem;"></div>

        <ul>
          <li class="zhuchi3" v-for=" item in zclists" :key="item.id">
            <span v-if="item.generationNum==0">{{item.generation}}</span>
            <span v-else>第{{item.generation}}代</span>
            <span>{{item.name}}</span>
          </li>
        </ul>
        <div style="height: 1rem;"></div>
      </div>
    </div>
    <div style="height: 5rem;"></div>

    <!-- 法嗣 -->
    <div class="Figure_content zhuchi" style="border:0">
      <p class="zhuchi1">法嗣</p>
      <div style="height: 1rem;"></div>

      <div>
        <span style="color:red">\</span>
        <span class="zhuchi2">FASI</span>
        <div style="height: 1rem;"></div>

        <ul>
          <li class="zhuchi3" v-for=" item in stlists" :key="item.id">
            <span v-if="item.generation" style="margin-right:1rem">第{{item.generation}}代</span>

            <span>{{item.name}}</span>
          </li>
        </ul>
        <div style="height: 3rem;"></div>
      </div>
    </div>
  </div>
</template>
<script>
import 'styleless/Figure.less'

export default {
  name: '',
  data() {
    return {
      onelist: [],
      Figurelist: [],
      zclists: [],
      stlists: []
    }
  },
  created() {
    this.zclist()
    this.stlist()
  },
  mounted() {},
  methods: {
    zclist() {
      this.$public.noAuthController.noAuthMasterAll(1).then(res => {
        if (res.code == '000000') {
          this.onelist = res.data[0]
          console.log('zclist ->  this.onelist', this.onelist)
          this.Figurelist = res.data.shift()
          this.zclists = res.data
        }
      })
    },
    stlist() {
      this.$public.noAuthController.noAuthMasterAll(0).then(res => {
        if (res.code == '000000') {
          this.stlists = res.data
        }
      })
    }
  },
  components: {}
}
</script>