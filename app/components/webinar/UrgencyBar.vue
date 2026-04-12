<template>
  <div class="urgency-bar flex items-center justify-center gap-2.5 bg-gold-primary px-5 py-2.5 md:px-[52px]">
    <div class="ub-dot h-2 w-2 rounded-full bg-midnight opacity-50"></div>
    <p class="text-center text-[12px] md:text-[13px] font-bold text-midnight leading-tight">
      ⚡ <strong>Slot terbatas</strong> — 71% kursi terisi. <span class="hidden sm:inline">Webinar gratis ini tidak diulang dengan format yang sama.</span>
    </p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.ub-dot {
  animation: pulse 1.8s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(0.8); }
}
</style>
