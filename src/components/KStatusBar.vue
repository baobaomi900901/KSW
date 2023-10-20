<!--
* @description  参数1
* @fileName  KStatusBar
* @author userName
* @date 2023-10-15 00:20:01
* @version V3.0.0
!-->
<template>
  <div
    id="KStatusBar"
    class="KStatusBar flex justify-between items-center h-12 bg-white border-b border-gray-200"
  >
    <div class="logo px-4 h-12 w-40 flex items-center">
      <img src="../assets/project/企业_logo.png" alt="logo" />
    </div>
    <div class="GlobalSeach"></div>
    <div
      class="StatusGroup h-full px-3 flex flex-row-reverse justify-center items-center gap-4"
    >
      <div
        class="user text-xs text-white font-bold w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center"
      >
        <span>MT</span>
      </div>
      <!-- 消息 -->
      <kStatusItem class=" message">
        <i class="iconfont icon-zhuangtailan-xiaoxi"></i>
      </kStatusItem>
      <!-- 问题 -->
      <kStatusItem class="kStatusItem question">
        <i class="iconfont icon-zhuangtailan-wenti"></i>
      </kStatusItem>
      <!-- 论坛 -->
      <kStatusItem class="kStatusItem forum">
        <i class="iconfont icon-zhuangtailan-bangzhuzhongxin"></i>
      </kStatusItem>
      <!-- 全局操作 -->
      <kStatusItem class="kStatusItem GlobalOperation">
        <i class="iconfont icon-zhuangtailan-quanjucaozuo"></i>
      </kStatusItem>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import kStatusItem from "./kStatusItem.vue";
</script>
<style scoped>
.user {
  background: #ff6a00;
}
</style>