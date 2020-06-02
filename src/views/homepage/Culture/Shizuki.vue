<template >
  <div>
    <!--头部  start-->
    <div class="haer">
      <div class="albedo"></div>
      <div class="us_text">南屏指月</div>
      <div class="us_text2">清凉道场 兰若荣光</div>
    </div>
    <div style="height: 2rem;"></div>
    <div class="Shizuki_content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="item in elTabslist"
          :key="item.name"
          :label="item.label"
          :name="item.name"
        >
          <div class="main_content" v-for=" item in main_list" :key="item.content">
            <div style="height: 2rem;"></div>
            <p class="main_title">{{item.title}}</p>
            <div style="height: 2rem;"></div>
            <div class="main_title2">{{item.content}}</div>
            <div style="height: 2rem;"></div>
            <div class="know" style="  width: 6rem;">了解更多</div>
            <div style="height: 2rem;"></div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import 'styleless/Shizuki.less'

export default {
  name: '',
  data() {
    return {
      activeName: '佛学经典1',
      elTabslist: [
        {
          label: '佛学经典',
          name: '佛学经典1'
        },
        {
          label: '南屏禅话',
          name: '南屏禅话2'
        },
        {
          label: '佛教公案',
          name: '佛教公案3'
        },
        {
          label: '诗词赏读',
          name: '4'
        },
        {
          label: '佛经故事',
          name: '5'
        }
      ],
      main_list: [
        {
          title: '[佛学经典]《大佛顶首楞严经》',
          content:
            '第一卷叙阿难因乞食，被摩登伽女用幻术摄入淫席，将毁戒体。如来放光，并勒文殊师利以神咒往护，遂将阿难及摩登伽女来归佛所。阿难见佛，顶礼悲泣，悔恨自己一向多闻，道力未全，因而启请宣说十方如来得成菩提妙奢摩他三摩禅那最初方便。佛告以一切众生从无始来生死相续，皆由不知常住真心性净明体，有诸妄想故有轮转。又告以有三摩提，名（大正19.107a）∶‘大....'
        },
        {
          title: '[佛学经典]《大佛顶首楞严经》',
          content:
            '力未全，因而启请宣说十方如来得成菩提妙奢摩他三摩禅那最初方便。佛告以一切众生从无始来生死相续，皆由不知常住真心性净明体，有诸妄想故有轮转。又告以有三摩提，名（大正19.107a）∶‘大....'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab.name, event)
    }
  },
  components: {}
}
</script>