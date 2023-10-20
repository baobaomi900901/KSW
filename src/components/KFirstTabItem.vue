<!--
* @description  参数1
* @fileName  KFirstTabItem
* @author userName
* @date 2023-10-16 10:27:30
* @version V3.0.0
!-->
<template>
  <div
    id="KFirstTabItem"
    class="KFirstTabItem text-sm px-5 flex justify-center items-center border-r border-gray-200 hover:bg-gray-50"
    :class="{ 'pr-0': props.close, 'bg-gray-100': props.active }"
  >
    <slot></slot>
    <div
      class="close px-2 text-xs text-gray-300 h-full flex justify-center items-center"
      v-if="props.close"
    >
      <i class="iconfont icon-caidanlan-yeqian-guanbi"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// 接收props
const props = defineProps({
  // 参数1
  close: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

console.log(props);
</script>
<style scoped>
.KFirstTabItem:hover .close {
  color: #999;
}
</style>