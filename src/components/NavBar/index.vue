<template>
  <div>
    <header>
      <div class="container main-nav-bar">
        <img :src="`./static/${address}`" class="logo" alt="" />
        <img src="@/../static/logo.svg" class="logo-name" alt="" />
        <svg-icon icon-class="github" class="github" @callback="goTogithub"></svg-icon>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="self-info">个人信息</el-dropdown-item>
            <el-dropdown-item command="exit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: String,
    },
    title: {
      type: String,
    },
    userName: {
      type: String,
    },
  },
  methods: {
    goTogithub() {
      location.href = 'https://github.com/james-cain';
    },
    handleCommand(command) {
      switch (command) {
        case 'exit':
          this.$store.dispatch('LogOut').then(() => {
            location.reload();// 为了重新实例化vue-router对象 避免bug
          });
          break;
        case 'self-info':
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style>
header {
  background-color: #002140;
  border-color: #002140;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  min-width: 1000px;
}
.github {
  font-size: 22px;
  position: absolute;
  top: 14px;
  right: 100px;
  cursor: pointer;
}
ul {
  -webkit-padding-start: 0px;
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
}
.main-nav-bar .el-dropdown {
  position: absolute;
  top: 0;
  right: 20px;
}
.main-nav-bar .el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.main-nav-bar .el-icon-arrow-down {
  font-size: 12px;
}
.container {
  height: 48px;
  line-height: 48px;
  background-color: #003C78;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}
.subMenu li {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.container > .logo {
  height: 30px;
  float: left;
}
.container > .logo-name {
  height: 30px;
  margin-left: 20px;
  float: left;
}
.container > span {
  float: left;
  margin-left: 17px;
  width: 98px;
  font-family: "PingFangHK-Regular",Arial,sans-serif,Helvetica,"Microsoft YaHei";
}
.container > ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.container > ul > li {
  float: left;
  cursor: pointer;
}
.container .nav-bar {
  margin: 0 80px;
  display: inline-block;
}
.nav-bar > li {
  width: 120px;
  height: 48px;
  text-align: center;
  margin-right: 8px;
}
.nav-bar li.selected {
  background-color: #00356b;
}
.nav-bar li i {
  transition: transform .3s linear;
  -webkit-transition: -webkit-transform 0.3s linear;
  display: inline-block;
}
.nav-bar li i.rot {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.subMenu {
  width: 100%;
  background-color: #ffffff;
  list-style: none;
  border-radius: 3px;
  z-index: 1000;
  border: solid 1px rgb(209, 219, 229);
  color: rgb(72, 87, 106);
  padding: 6px 0;
  margin-top: 3px;
}
.subMenu li {
  height: 30px;
  line-height: 30px;
}
.subMenu li.selected {
  background-color: rgb(228, 232, 241);
}
.nav-tool-bar {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
}
.nav-tool-bar li {
  padding: 0 14px;
  display: flex;
  align-items: center;
}
.nav-tool-bar li:first-child {
  padding: 0 14px 0 0;
}
.icon-user {
  margin-right: 4px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
  opacity: 0
}
@media (min-width: 1200px) {
  .container, .child-container {
    min-width: 1200px;
  }
}
</style>
