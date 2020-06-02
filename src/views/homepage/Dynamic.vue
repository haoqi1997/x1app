<template >
  <div>
    <!--头部  start-->
    <div class="haer">
      <div class="albedo"></div>
      <div class="us_text">净慈动态</div>
      <div class="us_text2">清凉道场 兰若荣光</div>
    </div>
    <div style="height: 2rem;"></div>
    <div class="Dynamic_content">
      <div>
        <p class="Dynamic1">法会报道</p>
        <p>
          <span style="color:red">\</span>
          <i style="display: inline-block;width: 1rem;"></i>
          <span style="color:#B7B7B7;font-family:GenRyuMin TW TTF;font-size: .5rem;">FAHUIBAODAO</span>
        </p>
      </div>
      <div style="height: 1rem;"></div>
      <div v-for=" item in reportlist" :key="item.id">
        <p class="Dynamic1">{{item.title}}</p>
        <p style="font-size: .2rem;
    font-family: GenRyuMin TW TTF;">{{item.createdTime}}</p>
        <div style="height: .5rem;"></div>
        <div class="two_img">
          <img :src="item.picture" alt />
        </div>
        <div style="height: 2rem;"></div>
        <div class="Dynamic1">{{item.synopsis}}</div>
        <div style="height: 3rem;"></div>
        <div class="know" style="width: 6rem;">
          了解更多
          <!-- <router-link to="/index/OfAllGes" style="color: #C4C4C4;">了解更多</router-link> -->
        </div>
        <div style="height: 2rem;"></div>
      </div>
    </div>
    <!-- 头部 end -->
    <div style="height: 2rem;"></div>
    <div class="Dynamic_content">
      <div>
        <p class="Dynamic1">新闻资讯</p>
        <p>
          <span style="color:red">\</span>
          <i style="display: inline-block;width: 1rem;"></i>
          <span style="color:#B7B7B7;font-family:GenRyuMin TW TTF;font-size: .5rem;">XINWENZIXUN</span>
        </p>
      </div>
      <div style="height: 1rem;"></div>
      <div v-for=" item in journalismList" :key="item.id">
        <p class="Dynamic1">{{item.title}}</p>
        <p style="font-size: .2rem;
    font-family: GenRyuMin TW TTF;">{{item.createdTime}}</p>
        <div style="height: .5rem;"></div>
        <div class="two_img">
          <img :src="item.picture" alt />
        </div>
        <div style="height: 2rem;"></div>
        <div class="Dynamic1">{{item.synopsis}}</div>
        <div style="height: 3rem;"></div>
        <div class="know" style="width: 6rem;">
          了解更多
          <!-- <router-link to="/index/OfAllGes" style="color: #C4C4C4;">了解更多</router-link> -->
        </div>
        <div style="height: 2rem;"></div>
      </div>
    </div>
    <!-- 头部 end -->
    <!-- 头部 end -->
    <div style="height: 2rem;"></div>
    <div class="Dynamic_content" style="border:0">
      <div>
        <p class="Dynamic1">公益慈善</p>
        <p>
          <span style="color:red">\</span>
          <i style="display: inline-block;width: 1rem;"></i>
          <span style="color:#B7B7B7;font-family:GenRyuMin TW TTF;font-size: .5rem;">GONGYICISHAN</span>
        </p>
      </div>
      <div style="height: 1rem;"></div>
      <div v-for=" item in benefitList" :key="item.id">
        <p class="Dynamic1">{{item.title}}</p>
        <p style="font-size: .2rem;
    font-family: GenRyuMin TW TTF;">{{item.createdTime}}</p>
        <div style="height: .5rem;"></div>
        <div class="two_img">
          <img :src="item.picture" alt />
        </div>
        <div style="height: 2rem;"></div>
        <div class="Dynamic1">{{item.synopsis}}</div>
        <div style="height: 3rem;"></div>
        <div class="know" style="width: 6rem;">
          了解更多
          <!-- <router-link to="/index/OfAllGes" style="color: #C4C4C4;">了解更多</router-link> -->
        </div>
        <div style="height: 2rem;"></div>
      </div>
    </div>
    <!-- 头部 end -->
  </div>
</template>
<script>
import 'styleless/Dynamic.less'

export default {
  name: '',
  data() {
    return {
      reportlist: [], //法会报道
      journalismList: [], //新闻
      benefitList: [], //公益
      data: {
        current: 1,
        size: 10
      }
    }
  },
  created() {
    this.getlist()
    this.journalism()
    this.getlist3()
  },
  mounted() {},
  methods: {
    getlist() {
      this.$public.noAuthController
        .noAuthhappeningConditions({
          current: 1,
          size: 10,
          typeCode: 'report'
        })
        .then(res => {
          if (res.code == '000000') {
            this.reportlist = res.data.records
          }
        })
    },
    // xinwen
    journalism() {
      this.$public.noAuthController
        .noAuthhappeningConditions({
          current: 1,
          size: 10,
          typeCode: 'news'
        })
        .then(res => {
          if (res.code == '000000') {
            this.journalismList = res.data.records
            console.log('mounted -> this.journalismList ', this.journalismList)
          }
        })
    },
    getlist3() {
      this.$public.noAuthController
        .noAuthhappeningConditions({
          current: 1,
          size: 10,
          typeCode: 'charityevent'
        })
        .then(res => {
          if (res.code == '000000') {
            this.benefitList = res.data.records
            console.log('mounted ->  this.benefitList', this.benefitList)
          }
        })
    }
  },
  components: {}
}
</script>