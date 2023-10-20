<template>
  <div
    id="KCard"
    class="KCard border rounded-md p-4 flex flex-col gap-3 bg-white h-fit"
  >
    <slot name="header"></slot>
    <slot name="main"></slot>
  </div>
</template>

<script setup>

</script>

<style scoped>
.KCard {
  @apply border rounded-md p-4 flex flex-col gap-3 bg-white h-fit;
  min-height: 10rem;
}
</style> 