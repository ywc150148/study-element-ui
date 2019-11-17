<template>
  <div>
    <el-container :style="{ height: clientHeight+'px'}">
      <!-- 侧边栏 -->
      <el-aside class="test-aside" :width="asideWidth" :style="{ height: clientHeight + 'px'}">
        <div class="test-aside-logo">
          <el-avatar shape="square" :size="40" fit="cover" :src="logo"></el-avatar>
          <span class="test-aside-logo_name">后台管理系统</span>
        </div>

        <el-menu
          class="test-aside_menu"
          :style="{ height: clientHeight-60+'px'}"
          background-color="#555555"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          :collapse-transition="false"
          :width="asideWidth"
          default-active="$route.path"
          router
        >
          <template v-for="item in asideMenu">
            <!-- 一级 -->
            <el-menu-item :index="item.index" :key="item.index" v-if="!item.subs">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title ==undefined?item.name:$t(`${item.title}`)}}</span>
            </el-menu-item>
            <!-- 一级 -->

            <template v-else>
              <!-- 二级 -->
              <el-submenu :index="item.index" :key="item.index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{ item.title ==undefined?item.name:$t(`${item.title}`)}}</span>
                </template>

                <template v-for="sub in item.subs">
                  <el-menu-item :index="sub.index" :key="sub.index" v-if="!sub.childs">
                    <span slot="title">{{ sub.title== undefined ?sub.name:$t(`${sub.title}`)}}</span>
                  </el-menu-item>
                  <!-- 三级-分组 -->
                  <template v-else>
                    <el-menu-item-group :key="sub.index">
                      <template slot="title">{{ sub.title== undefined ?sub.name:$t(`${sub.title}`)}}</template>
                      <el-menu-item
                        :index="child.index"
                        v-for="child in sub.childs"
                        :key="child.index"
                      >{{ child.title == undefined?child.name:$t(`${child.title}`)}}</el-menu-item>
                    </el-menu-item-group>
                  </template>
                  <!-- 三级-分组 -->
                </template>
              </el-submenu>
              <!-- 二级 -->
            </template>
          </template>
        </el-menu>
      </el-aside>
      <!-- 侧边栏 -->

      <el-container :style="{ height: clientHeight+'px'}">
        <!-- 头部 -->
        <el-header class="test-header">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="4">
              <div class="toggle-aside-btn">
                <el-button
                  type="info"
                  size="mini"
                  :icon="isCollapse? 'el-icon-s-unfold':'el-icon-s-fold'"
                  @click="isCollapse=!isCollapse"
                ></el-button>
              </div>
            </el-col>
            <el-col :span="14">
              <div class="test-header-r">
                <!-- <el-dropdown>
                  <i class="el-icon-setting"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <span>王小虎</span>-->

                <!-- <el-dropdown trigger="click" @command="handleLang">
                  <span class="el-dropdown-link">{{selectLang}}</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="lang in langs"
                      :key="lang.name"
                      :command="lang.locale"
                    >{{lang.name}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>-->

                <el-menu default-active="1" class="test-header-r_menu-demo" mode="horizontal">
                  <!-- @select="handleSelect" -->
                  <el-submenu index="1">
                    <template slot="title">{{selectLang}}</template>
                    <el-menu-item
                      index="1-1"
                      v-for="lang in langs"
                      :key="lang.name"
                      @click="handleLang(lang.locale)"
                    >{{lang.name}}</el-menu-item>
                  </el-submenu>
                  <el-submenu class="test-header-r_menu__submenu-2" index="2">
                    <template slot="title">
                      <el-avatar shape="circle" :size="30" fit="cover" :src="logo">
                        <img
                          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                        >
                      </el-avatar>Admin
                    </template>
                    <el-menu-item index="2-1">{{ $t(`head_menu.personalInformation`)}}</el-menu-item>
                    <el-menu-item index="2-2">{{ $t(`head_menu.modifyInformation`)}}</el-menu-item>
                    <el-menu-item index="2-3">{{ $t(`head_menu.signOut`)}}</el-menu-item>
                  </el-submenu>
                </el-menu>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <!-- 头部 -->

        <!-- 主体 -->
        <div class="test-main-wrap" :style="{ height: clientHeight - 60 +'px'}">
          <Breadcrumb></Breadcrumb>
          <el-main class="test-main">
            <router-view/>
          </el-main>
        </div>
        <!-- 主体 -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import VueEvent from "../../config/VueEvent.js";
import logo from "../../assets/logo.png";
import lang from "../../config/i18n/langs/index.js";
import Breadcrumb from "../parts/Breadcrumb.vue";
export default {
  components: {
    Breadcrumb
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      province: "上海",
      city: "普陀区",
      address: "上海市普陀区金沙江路 1518 弄",
      zip: 200333
    };
    return {
      tableData: Array(20).fill(item),
      clientHeight: 500,
      isCollapse: false,
      logo,
      asideMenu: [
        {
          icon: "el-icon-s-home",
          index: "/admin/index",
          title: "aside_menu.homePage",
          name: "首页"
        },
        {
          icon: "el-icon-user",
          index: "/admin/UserManagement",
          title: "aside_menu.userManagement",
          name: "用户管理"
        },
        {
          icon: "el-icon-menu",
          index: "3",
          title: "aside_menu.navigation",
          name: "导航",
          subs: [
            {
              icon: "el-icon-tickets",
              index: "/admin/navigation/n1",
              title: "aside_menu.navigationSub.roleManagement",
              name: "角色管理"
            },
            {
              index: "/admin/navigation/n2",
              title: "aside_menu.navigationSub.userPrivileges",
              name: "角色权限"
            },
            {
              icon: "el-icon-tickets",
              index: "3-1",
              title: "aside_menu.navigationSub.userManagement",
              name: "用户管理",
              childs: [
                {
                  index: "/admin/navigation/n3",
                  title: "aside_menu.navigationSub.activity",
                  name: "活动-1"
                },
                {
                  index: "/admin/navigation/n4",
                  title: "aside_menu.navigationSub.activity",
                  name: "活动-2"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    // 侧栏宽度
    asideWidth() {
      return this.isCollapse ? "60px" : "200px";
    },
    langs() {
      let arr = [];
      for (let i in lang) {
        arr.push(lang[i].lang);
      }
      return arr;
    },
    selectLang() {
      let name = "语言";
      for (let i in lang) {
        if (this.$i18n.locale == lang[i].lang.locale) {
          name = lang[i].lang.name;
          break;
        }
      }
      return name;
    }
  },
  mounted() {
    this.clientHeight = this.$tools.getClientHeight();
    VueEvent.$on("changeClientHeight", height => {
      this.clientHeight = height;
    });
  },
  methods: {
    handleLang(l) {
      this.$i18n.locale = l;
      localStorage.setItem("locale", l);
    }
  }
};
</script>

<style lang="less">
@c-header-bg: #fff;
@c-aside-bg: #555555;
@c-main-bg: #efefef;

.test-aside {
  overflow-x: hidden;
  transition: 0.2s;

  .test-aside-logo {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: @c-aside-bg;

    .el-avatar {
      margin: 0 10px;
      display: inline-block;
      vertical-align: middle;
      background: none;
    }

    .test-aside-logo_name {
      display: inline-block;
      font-size: 18px;
      vertical-align: middle;
      color: #fff;
      font-weight: bold;
    }
  }

  .test-aside_menu {
    width: 100%;
    text-align: left;
    overflow-y: auto;
    overflow-x: inherit;
    li {
      text-align: left;
    }
  }
}

.test-header {
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  font-size: 12px;
  background: @c-header-bg;

  .toggle-aside-btn {
    .el-button {
      font-size: 16px;
      background: @c-aside-bg;
    }
  }

  .test-header-r {
    text-align: right;

    & > .el-dropdown {
      margin-left: 10px;
    }

    & > span {
      margin-left: 10px;
    }

    .test-header-r_menu-demo {
      display: inline-block;
      vertical-align: middle;
      background: none;
      border: none;

      & :hover {
        background: none;
        border: none;
      }

      .el-submenu__title {
        padding: 0 0;
      }

      .el-submenu {
        margin-left: 10px;
      }

      & .test-header-r_menu__submenu-2 {
        .el-avatar {
          margin-right: 5px;
          background: @c-header-bg;
          box-shadow: 0px 0px 1px @c-aside-bg;
        }
      }
    }
  }
}

.test-main-wrap {
  overflow-y: auto;
  background: @c-main-bg;

  .test-main {
    .test-main-table {
      padding: 10px;
    }
  }
}

// 头部菜单
.el-menu--horizontal {
  .el-menu--popup {
    min-width: 120px;
  }
}
</style>
