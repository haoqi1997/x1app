<template >
  <div>
    <!--头部  start-->
    <div class="haer">
      <div class="albedo"></div>
      <div class="logo_img">
        <img src="../../assets/img/后台/首页.png" alt />
      </div>
      <div class="logo_text">
        <ul>
          <li>以禅修戒律为行</li>
          <li>弘化</li>
          <li>以华严圆教为宗</li>
          <li>传承</li>
          <li>以极乐净土为归</li>
          <li>解脱</li>
        </ul>
      </div>
    </div>
    <!--头部 end -->
    <div style="height: 2rem;"></div>
    <!-- 内容 start -->
    <div class="index_content">
      <!-- 1 -->
      <div class="one">
        <div class="one_title">
          <div class="one_title_1">
            <p>01</p>
          </div>
          <div class="one_title_2">
            <span class="gu">古往</span>
            <div class="iocs"></div>
            <span class="lai">今来</span>
          </div>
        </div>
        <div
          class="main_content"
        >净慈寺，位于浙江省杭州市的西湖南岸，雷峰塔对面，是西湖历史上四大古刹之一，中国著名寺院之一。因为寺内钟声宏亮，所以"南屏晚钟"成为"西湖十景"之一。 净慈寺在浙江杭州的南屏山慧日峰下，是公元954年五代吴越国钱弘俶为高僧永明禅师而建，原名永明禅院；南宋时改称净慈寺，并建造了五百罗汉堂。寺屡毁屡建。寺宇、山门、钟楼、后殿、运木古井和济公殿，都是二十世纪八十年代重建的。其中大雄宝殿单层重檐，黄色琉璃瓦脊，更显庄严宏传。特别是一口重达一百多公斤的新铸铜钟，铸有赵朴初等人书写的《妙法莲华经》，计六点八万字。每日黄昏，悠扬的钟声在暮色苍茫的西湖上空荡，激起人们的无限遐思。</div>
      </div>
      <div class="know" style="  width: 6rem;">
        了解更多
        <!-- <router-link to="/index/OfAllGes" style="color: #C4C4C4;">了解更多</router-link> -->
      </div>
      <!-- 1+0 -->
      <!-- 2 -->
      <div style="height: 3rem;"></div>

      <div class="one">
        <div class="one_title" style="position: absolute;
    right: 7rem;">
          <div class="one_title_2">
            <span class="gu">法会</span>
            <div class="iocs"></div>
            <span class="lai">报道</span>
          </div>
          <div class="one_title_1" style="position: relative;
    right: -7rem;">
            <p>02</p>
          </div>
        </div>
        <div style="height: 5rem;"></div>
        <div class="two_img">
          <img src="../../assets/img/home/02.png" alt />
        </div>
        <div style="height: 2rem;"></div>

        <p class="two_title">南屏晚钟</p>
        <span style="color:red">/</span>
        <p class="main_content">南屏山钟灵毓秀，净慈寺香烟氤氲，为历代文人向往之处。不少士大夫为避世出尘，常来该寺谈禅吟咏，成为古代杭城文风。</p>
        <div class="know knows">
          详情
          <!-- <router-link to="/index/OfAllGes" style="color: #C4C4C4;">了解更多</router-link> -->
        </div>
      </div>
      <!-- 2+0 -->
      <!-- 2 -->
      <div style="height: 3rem;"></div>
      <div class="one_title">
        <div class="one_title_1">
          <p>03</p>
        </div>
        <div class="one_title_2">
          <span class="gu">南屏</span>
          <div class="iocs"></div>
          <span class="lai">指月</span>
        </div>
      </div>
      <div class="one">
        <div style="height: 5rem;"></div>
        <div class="two_img">
          <img src="../../assets/img/home/02.png" alt />
        </div>
        <div style="height: 2rem;"></div>

        <p class="two_title">佛学经典</p>
        <span style="color:red">/</span>
        <p
          class="main_content"
        >《般若波罗蜜多心经》，简称《心经》，是佛法中流传最广、最精髓的一册经书，全篇仅短短260个字，却言简义丰地告诉我们，一切物质其实都是由心产生的，任何情境也会随心变化，不必用自己的态度去看待当下，跟我们讲了修心开智，脱离苦厄的方法。 这本经书，虽然讲得博大精深，却相对易读，是佛学中最重要的一部经典，几乎所有佛学弟子都可倒背如流。因此，不妨从这部经书着手，相信一定获益良多。</p>
        <div class="know" style="  width: 6rem;">
          了解更多
          <!-- <router-link to="/index/OfAllGes" style="color: #C4C4C4;">了解更多</router-link> -->
        </div>
        <div style="height: 2rem;"></div>
      </div>
      <!-- 2+0 -->
    </div>
    <!-- 内容 end -->
  </div>
</template>
<script>
// 首页样式
import 'styleless/home.less'
export default {
  name: '',
  data() {
    return {}
  },
  created() {
    $(document).ready(function() {
      if (location.href.indexOf('#reloaded') == -1) {
        location.href = location.href + '#reloaded'
        location.reload()
      }
    })
  },
  mounted() {},
  methods: {},
  components: {}
}
</script>

