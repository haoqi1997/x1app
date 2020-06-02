<template >
  <div>
    <!--头部  start-->
    <div class="haer">
      <div class="albedo"></div>
      <div class="us_text">南屏妙音</div>
      <div class="us_text2">清凉道场 兰若荣光</div>
    </div>
    <div style="height: 2rem;"></div>
    <div class="Song_content">
      <!-- <div class="bofang" @click="bofangs">
        <span class="bofangimg">
          <img src="../../../assets/img/home/播放.png" alt />
        </span>
        <span class="bofangtext">播放全部</span>
      </div>-->
      <div class="tables">
        <ul>
          <!-- v-for="item in helplist" :key="item.id" -->
          <li v-for="(item,idx) in tableData" :key="item.id">
            <div class="tablesleft">
              <span class="sequence">{{idx+1}}</span>
              <span class="songname">{{item.title}}</span>
            </div>
            <div class="tablesrigth">
              <span class="bofangtable" @click="handleClick(item.filePath)">
                <img src="../../../assets/img/home/播放1.png" alt />
              </span>
              <span class="xiazaitable" @click="downloadmp3(item.filePath)">
                <img src="../../../assets/img/home/下载.png" alt />
              </span>
            </div>
          </li>
        </ul>
        <div style="height: 2rem;"></div>
      </div>
    </div>
    <div style="height:3rem">
      <audio
        :class="{hide:ishide}"
        style=" position: fixed;
                left: 50%;
                bottom: 0px;
                transform: translate(-50%);"
        src
        id="eventAudio"
        ref="audios"
        controls
        preload
      >您的浏览器不支持 audio 标签。</audio>
    </div>
  </div>
</template>
<script>
import 'styleless/Song.less'

export default {
  name: '',
  data() {
    return {
      isbofang: true,
      isbofangs: true,
      data: {
        current: '1',
        size: '5'
      },
      tableData: [],
      isplay: '',
      ishide: true
    }
  },
  created() {
    this.getlist()
  },
  mounted() {},
  methods: {
    //   单曲播放
    bofang(val) {
      //   this.isbofangs = false
      if (this.isbofang) {
        console.log('bofang播放')
        this.isbofang = false
      } else {
        console.log('bofang播放停止')
        this.isbofang = true
      }
    },
    handleClick(row) {
      if (this.isplay == row) {
        row = ''
        this.ishide = true
      }
      let buttonAudio = document.getElementById('eventAudio')
      buttonAudio.setAttribute('src', row)
      buttonAudio.play()
      this.isplay = row
      this.ishide = false
    },
    //下载
    downloadmp3(src) {
      let v = src.substring(src.lastIndexOf('/') + 1)
      window.open(`${window.filemp3}/file/downloadFile?fileName=${v}`)
    },
    //全部播放
    bofangs() {
      if (this.isbofangs) {
        console.log('sss播放')
        this.isbofangs = false
      } else {
        console.log('sss播放停止')
        this.isbofangs = true
      }
    },
    //下载
    xiazai() {
      console.log('下载')
    },
    getlist() {
      this.$public.noAuthController
        .noAuthaudioFileConditions(this.data)
        .then(res => {
          if (res.code == '000000') {
            this.tableData = res.data.records
            console.log('getlist -> this.tableData', this.tableData)
          }
        })
    }
  },
  components: {}
}
</script>
<style lang="less">
.hide {
  display: none !important;
}
</style>