<template>
  <div class="home">
    <el-header>
      <div class="home_box">
        <div class="home_logo">logo</div>
        <div class="home_drawer" @click="drawer = true"></div>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <div class="main_banner">
          <h1>banner</h1>
        </div>
        <router-view></router-view>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </el-main>
      <div class="footer"></div>
    </el-container>
    <!-- 右边的抽屉 -->
    <el-drawer title :visible.sync="drawer" custom-class="drawerstyle">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        router
      >
        <template v-for="item in menuList">
          <template v-if="item.childList">
            <el-submenu :index="item.functionUrl" :key="item.name">
              <template slot="title">
                <span slot="title">{{ item.name }}</span>
              </template>
              <template v-for="subItem in item.childList">
                <el-submenu
                  v-if="subItem.childList"
                  :index="subItem.functionUrl"
                  :key="subItem.name"
                >
                  <template slot="title" @click="drawer = false">{{ subItem.name }}1</template>
                  <el-menu-item
                    v-for="(threeItem,i) in subItem.childList"
                    :key="i"
                    :index="threeItem.functionUrl"
                    @click="drawer = false"
                  >
                    &nbsp;
                    {{ threeItem.name }}2
                  </el-menu-item>
                </el-submenu>
                <el-menu-item
                  v-else
                  :index="subItem.functionUrl"
                  :key="subItem.name"
                  @click="drawer = false"
                >{{ subItem.name }}3</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item
              @click="drawer = false"
              :index="item.functionUrl"
              :key="item.name"
              :class="{tophome:item.name === '净慈寺首页'}"
            >
              &nbsp;
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
      <div class="share">
        <ul>
          <li>
            <a href="javascripu:;" target="_blank" rel="noopener noreferrer">微信</a>
          </li>
          <li>
            <a href="javascripu:;" target="_blank" rel="noopener noreferrer">微博</a>
          </li>
          <li>
            <a href="javascripu:;" target="_blank" rel="noopener noreferrer">妈耶</a>
          </li>
        </ul>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      drawer: false, //抽屉开关
      menuList: [
        {
          functionUrl: '/',
          name: '净慈寺首页',
          childList: [
            {
              functionUrl: 'home',
              name: '首页选选1'
            }
          ]
        },
        {
          functionUrl: 'regards',
          name: '关于净慈',
          childList: [
            {
              functionUrl: '/index/regards',
              name: '关于净慈1'
            }
          ]
        },
        {
          functionUrl: 'dynamic',
          name: '净慈动态'
        },
        {
          functionUrl: 'figure',
          name: '净慈人物'
        },
        {
          functionUrl: 'culture',
          name: '净慈文化'
        },
        {
          functionUrl: 'law',
          name: '净慈法务'
        },
        {
          functionUrl: 'help',
          name: '助建净慈'
        },
        {
          functionUrl: 'volunteer',
          name: '净慈义工'
        },
        {
          functionUrl: 'contactUS',
          name: '联系我们'
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
    // onScroll(key, keyPath) {
    //   //   console.log('onScroll -> keyPath', keyPath)
    //   console.log('onScroll -> key', key)
    // }
  }
}
</script>
<style >
.home {
  height: 100%;
}
.home_box {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.home_drawer {
  margin: auto 0;
  width: 2rem;
  height: 2rem;
  background: url('../assets/img/drawer.png');
  background-size: cover;
}
.home_logo {
  margin: auto 0;
  width: 5rem;
  height: 2.5rem;
  /* background: url('../assets/img/drawer.png');
  background-size: cover; */
}
/* 抽屉 */
.drawerstyle {
  width: 77% !important;
}
.share > ul {
  display: flex;
}

/* 布局 */
.el-header,
.el-footer {
  color: #333;
  height: 4rem !important;
  font-size: 1.6rem;
}
.el-header {
  position: fixed;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  flex-shrink: 0;
  background: aliceblue;
}
.el-container {
  height: 100%;
}
.el-main {
  margin-top: 4rem;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 16rem;
  font-size: 1.6rem;
  padding: 0rem;
}
.main_banner {
  height: 16rem;
  border-bottom: 0.1rem solid #000;
}
.el-footer {
  height: 6rem !important;
}

/*选项卡颜色 */
.nav-bar {
  position: absolute;
  height: 2px;
  bottom: -2px;
  left: 0px;
  background: #f0250f;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
</style>
