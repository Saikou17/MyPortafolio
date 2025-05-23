<script setup>

defineProps({
  frame: Object,
})
</script>

<template>
  <div class="bg-white w-[250px] h-[300px] mb-10 flex items-center justify-center">
    <div class="relative w-full h-full border-[15px] border-black shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center">
      <div class="relative w-full h-full border-[40px] border-white shadow-inner flex items-center justify-center text-center">
        <img
          v-if="frame.image"
          :src="frame.image"
          :alt="frame.name"
          class="w-full h-auto object-contain"
        />
        <div
          v-else
          class="text-lg p-4 whitespace-pre-line break-words"
        >
          {{ frame.description }}
        </div>
      </div>
    </div>
  </div>
</template>
