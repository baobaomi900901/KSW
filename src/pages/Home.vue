<!--
* @description  参数1
* @fileName  Home
* @author userName
* @date 2023-10-15 10:15:46
* @version V3.0.0
!-->
<template>
  <div id="Home" class="Home h-full px-4 pt-4 flex bg-gray-50">
    <KCard class="w-1/3 shadow-base">
      <template #header>
        <div>
          <div class="text font-bold mb-1">需求总开发进度</div>
          <div class="text-xs text-gray-400">
            开发阶段需求开发进度总和÷ 开发阶段需求数
          </div>
        </div>
      </template>
      <template #main>
        <div class="text-sm indent-6">
          当我闭上眼睛，瞬间，世界的形态开始变幻。彩色的火花在黑暗中绽放，熠熠生辉。五彩斑斓的蝴蝶在空中翩翩起舞，它们的翅膀像绚丽的画作一样，为大地带来了无尽的欢愉。随着微风的吹拂，花朵在阳光的照耀下绽放，芬芳的香气弥漫在空气中，让人陶醉其中。
        </div>
      </template>
    </KCard>
  </div>
</template>

<script setup>
import KCard from "../components/KCard.vue";
</script>
<style scoped>
</style>