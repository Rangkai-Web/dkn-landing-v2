<template>
  <div class="bg-navy border-t border-white/6 px-5 py-7 md:px-[52px]">
    <div class="mx-auto max-w-[720px]">
      <div class="mb-5 text-center text-[13px] md:text-[14px] font-bold text-white/60 leading-relaxed px-4">
        Terima info program &amp; insight terbaru langsung ke inbox Anda
      </div>
      <form class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]" @submit.prevent>
        <input 
          type="text" 
          placeholder="Nama lengkap"
          aria-label="Nama lengkap"
          class="w-full rounded-[7px] border border-white/10 bg-white/6 px-4 py-[11px] text-[13px] text-white outline-none transition-colors placeholder:text-white/26 focus:border-teal-secondary"
        >
        <input 
          type="email" 
          placeholder="Email bisnis Anda"
          aria-label="Email bisnis Anda"
          class="w-full rounded-[7px] border border-white/10 bg-white/6 px-4 py-[11px] text-[13px] text-white outline-none transition-colors placeholder:text-white/26 focus:border-teal-secondary"
        >
        <div class="md:col-span-2 lg:col-span-1">
          <input 
            type="tel" 
            placeholder="Nomor WhatsApp"
            aria-label="Nomor WhatsApp"
            class="w-full rounded-[7px] border border-white/10 bg-white/6 px-4 py-[11px] text-[13px] text-white outline-none transition-colors placeholder:text-white/26 focus:border-teal-secondary"
          >
        </div>
        <div class="md:col-span-2 lg:col-span-1">
          <button type="submit" class="w-full cursor-pointer whitespace-nowrap rounded-[7px] bg-teal-secondary px-6 py-[11px] text-[13px] font-bold text-white transition-all hover:bg-teal-primary uppercase tracking-wider">
            Daftar Sekarang
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
