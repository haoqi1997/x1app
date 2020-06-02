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
                  <router-link to="/index/shizuki">净慈文化</router-link>
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
                  <template slot="title" @click="drawer = false">{{ subItem.name }}</template>
                  <el-menu-item
                    v-for="(threeItem,i) in subItem.childList"
                    :key="i"
                    :index="threeItem.functionUrl"
                    @click="drawer = false"
                  >
                    &nbsp;
                    {{ threeItem.name }}
                  </el-menu-item>
                </el-submenu>
                <el-menu-item
                  v-else
                  :index="subItem.functionUrl"
                  :key="subItem.name"
                  @click="drawer = false"
                >{{ subItem.name }}</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item @click="drawer = false" :index="item.functionUrl" :key="item.name">
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
          name: '关于净慈'
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
          name: '净慈文化',
          childList: [
            {
              functionUrl: '/index/shizuki',
              name: '南屏指月'
            },
            {
              functionUrl: '/index/song',
              name: '南屏妙音'
            }
          ]
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
  created() {
    // console.log('created -> this.$public', this.$public.noAuthController)
    this.$public.noAuthController.resourceIndex().then(res => {
      if (res.code == '000000') {
        // console.log('created -> res', res)
      }
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: { drawerMenu }
}
</script>
