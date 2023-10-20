<!--
* @description  参数1
* @fileName  KMenu
* @author userName
* @date 2023-10-16 09:19:40
* @version V3.0.0
!-->
<template>
  <div id="KMenuBar" class="KMenuBar flex items-center h-10 bg-white border-b border-gray-200">
    <div class="menu-box border-r border-gray-200">
      <div class="menu"></div>
    </div>
    <div class="app-title w-40 h-full px-3 flex items-center text-lg font-bold border-r border-gray-200">
      <span>RPA_2.0</span>
    </div>
    <div class="FirstTab flex w-full">
      <div class="group w-full flex ">
        <KFirstTabItem class="KFirstTabItem" :close="false" :active="true">首页</KFirstTabItem>
        <KFirstTabItem class="KFirstTabItem"  >自定义</KFirstTabItem>
        <KFirstTabItem class="KFirstTabItem" >自定义2</KFirstTabItem>
        <KFirstTabItem class="KFirstTabItem" >自定义3</KFirstTabItem>
      </div>
      <div class="edit w-10 h-10 flex justify-center items-center border-l border-gray-200">
        <i class="iconfont icon-caidanlan-bianji text-xs"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import KFirstTabItem from "./KFirstTabItem.vue";

</script>
<style scoped>
.KMenuBar {
}
.KMenuBar .menu {
  --size: 1.5rem;
  display: block;
  width: var(--size);
  height: var(--size);
  margin: 0.5rem 1.25rem;
}
.KMenuBar .menu::before {
  --shadow-color-init: #d8d8d8;
  --shadow-color-1: #99c4ff;
  --shadow-color-2: #80b5ff;
  --shadow-color-3: #68a7ff;
  --shadow-color-4: #68a8ff;
  --shadow-color-5: #519aff;
  --shadow-color-6: #378bff;

  --shadow-size: calc(var(--size) / 4);
  --shadow-gap: calc(var(--size) / 8);
  --shadow-col: calc(var(--shadow-size) + var(--shadow-gap));
  --shadow-col-1: calc(var(--shadow-size) * 2 + var(--shadow-gap) * 2);
  --shadow-row: calc(var(--shadow-size) + var(--shadow-gap));
  --shadow-row-1: calc(var(--shadow-size) * 2 + var(--shadow-gap) * 2);

  content: "";
  position: relative;
  display: block;
  top: 0;
  left: 0;
  width: var(--shadow-size);
  height: var(--shadow-size);
  background: var(--shadow-color-init);
  z-index: 10;
  border-radius: 50%;

  /* 设置阴影 */
  box-shadow: 0 0 0 var(--shadow-color-init),
    var(--shadow-col) 0 0 var(--shadow-color-init),
    var(--shadow-col-1) 0 0 var(--shadow-color-init),
    0 var(--shadow-row) 0 var(--shadow-color-init),
    var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
    var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
    0 var(--shadow-row-1) 0 var(--shadow-color-init),
    var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
    var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  animation: menuShadowReverse 0.2s ease-out forwards;
}
.KMenuBar .menu:hover::before {
  /* 动画保持最后䘝状态 */
  animation: menuShadow 0.2s ease-out forwards;
}

@keyframes menuShadow {
  0% {
    box-shadow: 0 0 0 var(--shadow-color-init),
      var(--shadow-col) 0 0 var(--shadow-color-init),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  20% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-init),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  40% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  50% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  60% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  80% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-5),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-5),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  100% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-5),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-5),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-6);
  }
}

@keyframes menuShadowReverse {
  100% {
    box-shadow: 0 0 0 var(--shadow-color-init),
      var(--shadow-col) 0 0 var(--shadow-color-init),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  80% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-init),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  60% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  50% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  40% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  20% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-5),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-5),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  0% {
    background: var(--shadow-color-1);
    box-shadow: 0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-5),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-5),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-6);
  }
}
</style>