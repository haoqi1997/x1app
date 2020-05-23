<template>
  <div>
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
              <el-submenu v-if="subItem.childList" :index="subItem.functionUrl" :key="subItem.name">
                <template slot="title" @click="shutdrawer">{{ subItem.name }}1</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.childList"
                  :key="i"
                  :index="threeItem.functionUrl"
                  @click="shutdrawer"
                >
                  &nbsp;
                  {{ threeItem.name }}2
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.functionUrl"
                :key="subItem.name"
                @click="shutdrawer"
              >{{ subItem.name }}3</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            @click="shutdrawer"
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
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    drawer: Boolean
  },
  data() {
    return {
      drawer: '',
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
    },
    shutdrawer() {
      console.log(5656)
    }
    // onScroll(key, keyPath) {
    //   //   console.log('onScroll -> keyPath', keyPath)
    //   console.log('onScroll -> key', key)
    // }
  }
}
</script>