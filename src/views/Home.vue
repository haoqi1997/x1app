<template>
  <div class="home">
    <el-header>
      <div class="home_box">
        <div class="home_logo">
          <div class="logo">
            <router-link to="/" style="color:#000">净慈寺</router-link>
          </div>
          <span>|</span>
          <div class="logo_english">
            JINGCI
            TEMPLE
          </div>
        </div>
        <div class="home_drawer" @click="drawer = true">
          <ul>
            <li></li>
            <span style=" display: block;height:4pt"></span>
            <li></li>
            <span style="display: block;height:4pt"></span>

            <li></li>
          </ul>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <div class="main">
          <router-view></router-view>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="footer">
          <!-- 11111 -->
          <div class="footer_celerity">
            <p>快速导航</p>
            <div class="navigation">
              <ul>
                <li style="text-align: left">
                  <router-link to="/index/regards">关于净慈</router-link>
                </li>
                <li>
                  <router-link to="/index/dynamic">净慈动态</router-link>
                </li>
                <li>
                  <router-link to="/index/figure">净慈人物</router-link>
                </li>
                <li style="text-align: end">
                  <router-link to="/index/culture">净慈文化</router-link>
                </li>
                <li style="text-align: left">
                  <router-link to="/index/law">净慈法务</router-link>
                </li>
                <li>
                  <router-link to="/index/help">助建净慈</router-link>
                </li>
                <li>
                  <router-link to="/index/volunteer">净慈义工</router-link>
                </li>
                <li style="text-align: end">
                  <router-link to="/index/contactUS">联系我们</router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- 22222 -->
          <div class="footer_celerity margs">
            <p>电话</p>
            <span class="across"></span>
            <div class="phone">0551-22222222</div>
          </div>
          <!-- 33333 -->
          <div class="footer_celerity margs">
            <p>邮箱</p>
            <span class="across"></span>
            <div class="phone">jingcisi@sdf.com</div>
          </div>
          <div class="footer_celerity">
            <span class="relation">
              <img src="../assets/img/qq.png" alt />
            </span>
            <span class="relation">
              <img src="../assets/img/weibo.png" alt />
            </span>
            <span class="relation">
              <img src="../assets/img/weixin.png" alt />
            </span>
          </div>
        </div>
      </el-main>
    </el-container>

    <!-- 右边的抽屉 -->
    <el-drawer title :visible.sync="drawer" custom-class="drawerstyle">
      <!-- <drawerMenu></drawerMenu> -->
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
        <div class="footer_celerity">
          <span class="relation">
            <img src="../assets/img/qq.png" alt />
          </span>
          <span class="relation">
            <img src="../assets/img/weibo.png" alt />
          </span>
          <span class="relation">
            <img src="../assets/img/weixin.png" alt />
          </span>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import drawerMenu from 'components/home/drawer'
export default {
  name: 'Home',

  data() {
    return {
      drawer: false, //抽屉开关
      menuList: [
        {
          functionUrl: 'home',
          name: '净慈寺首页'
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
  },
  components: { drawerMenu }
}
</script>
<style lang="less">
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
  height: 1.55rem;
  ul {
    li {
      width: 17.5pt;
      height: 2.5pt;
      background-color: #000;
    }
  }
}
.home_logo {
  display: flex;
  margin: auto 0;
  span {
    margin: 0 8pt;
    color: #bfbfbf;
  }
  .logo_english {
    width: 25.5pt;
    height: 15pt;
    font-size: 6pt;
    color: #bfbfbf;
  }
}
/* 抽屉 */
.drawerstyle {
  width: 77% !important;
}
.share > ul {
  display: flex;
}
.main {
  width: 86.13%;
  margin: 0 auto;
}

/* 布局 */
.el-header,
.el-footer {
  color: #333;
  height: 43pt !important;
  font-size: 1.6rem;
}
.el-header {
  position: fixed;
  width: 100%;
  padding: 0 5.6%;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: #fff;
}
.el-container {
  height: 100%;
}
.el-main {
  margin-top: 43pt;
  background-color: #e9eef3;
  color: #333;
  font-size: 1.6rem;
  padding: 0rem;
}
.main_banner {
  height: 16rem;
  border-bottom: 0.1rem solid #000;
}
.footer {
  padding: 25.5pt 25pt 25pt;
  background-color: #d3c5a5;
  .footer_celerity {
    p {
      color: #a08f67;
    }
    .navigation {
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          margin-top: 13.5pt;
          width: 25%;
          text-align: center;
          font-size: 12pt;
          font-family: 'GenRyuMin TW TTF';
          font-weight: 400;
          a {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
    .phone {
      color: rgba(255, 255, 255, 1);
      font-size: 9pt;
      font-family: 'GenRyuMin TW TTF';
    }
  }
}
.margs {
  margin-top: 36.5pt;
}
.relation {
  display: inline-block;
  width: 9.5pt;
  height: 8pt;
  margin-right: 19.5pt;
  img {
    width: 100%;
  }
}
.across::after {
  clear: both;
  content: '';
  display: block;
  width: 9.5pt;
  height: 0.5pt;
  margin: 10pt 0;
  background-color: #fff;
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
