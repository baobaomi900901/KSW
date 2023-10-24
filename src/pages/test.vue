<!--
* @description  参数1
* @fileName  test
* @author userName
* @date 2023-10-24 16:59:46
* @version V3.0.0
!-->
<template>
  <div id="test" class="test">
    <div class="main w-1/2 h-80 bg-red-50 px-12 flex flex-col">
      <div class="title text-center border-b border-b-gray-90">标题</div>
      <div class="content flex flex-col overflow-auto">
        <div class="item bg-yellow-50">内容 1</div>
        <div class="item bg-yellow-50">内容 1</div>
        <div class="item bg-yellow-50">内容 1</div>
        <div class="item bg-yellow-50">内容 1</div>
        <div class="item bg-yellow-50">内容 1</div>
        <div class="item bg-yellow-50">内容 1</div>
      </div>
      <div class="bar w-full text-center bg-blue-50">add</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
</script>
<style scoped>
</style>