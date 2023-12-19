<!--
* @description  参数1
* @fileName  m
* @author userName
* @date 2023-12-11 09:45:15
* @version V3.0.0
!-->
<template>
  <div id="m" class="m">
    <!-- Menu-left -->
    <!-- 右侧内容: conter-right -->
        <!-- tab -->
        <!-- page -->
            <!-- 控制 -->
                <!-- 左侧标题 -->
                    <!-- 标题 -->
                    <!-- 副标题 -->
                <!-- 右侧按钮 -->
                    <!-- 主要按钮 -->
                    <!-- 次要按钮 -->
            <!-- 表格 -->
                <!-- 表格 -->
                <!-- 页码 -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const text:string = 'moby';
const number:number = 123;
const arr = [1,2,3,4]
const obj = {
  a: 1,
  b: 2,
  c: 3
}
const boolean = true;
const boolean2 = false;
function handleClick(t:string= '十', number:number = 10) {
  console.log(t);
  return t;
}
handleClick(undefined,);
arr.reduce((a,b) => a+b, 0)
console.log
</script>
<style scoped>
</style>