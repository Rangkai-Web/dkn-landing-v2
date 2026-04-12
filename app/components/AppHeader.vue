<template>
  <nav
    class="sticky top-0 z-[100] flex h-[68px] items-center justify-between border-b border-white/10 bg-midnight/97 px-4 md:px-[52px] backdrop-blur-lg"
  >
    <NuxtLink to="/" class="flex items-center gap-2.5 md:gap-3 no-underline">
      <!-- <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-secondary to-gold-primary shrink-0">
        <svg viewBox="0 0 18 18" fill="none" class="h-[18px] w-[18px]">
          <path d="M3 9a6 6 0 0 1 12 0" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M6 12a3 3 0 0 1 6 0" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="9" cy="7" r="1.5" fill="white"/>
        </svg>
      </div> -->
      <NuxtImg
        :src="profile?.logo_url || '/logo/dkn-logo.webp'"
        alt="Logo DKN"
        class="w-10 h-10 rounded-xl"
      />
      <div class="leading-tight">
        <div
          class="text-[13px] md:text-[14px] font-bold tracking-[0.3px] text-white"
        >
          <span class="text-teal-secondary">{{
            profile?.site_name.split(" ")[0] || "DKN"
          }}</span>
          {{ profile?.site_name.split(" ")[1] || "Indonesia" }}
        </div>
        <div
          class="hidden md:block mt-[1px] text-[10px] tracking-[0.4px] text-white/30"
        >
          PT Dayaguna Kompetensi Nusantara
        </div>
      </div>
    </NuxtLink>

    <!-- Desktop Nav Links -->
    <div v-if="!isWebinarPage" class="hidden gap-7 lg:flex">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="text-[13px] font-medium text-white/50 no-underline transition-colors hover:text-white"
      >
        {{ link.label }}
      </a>
    </div>

    <!-- Right Actions -->
    <div class="flex items-center gap-2.5">
      <template v-if="!isWebinarPage">
        <NuxtLink
          to="/#webinar"
          class="hidden md:inline-flex items-center rounded-md border border-white/12 bg-white/7 px-[18px] py-2 text-[13px] font-medium text-white/75 no-underline transition-all hover:bg-white/13"
        >
          Webinar Gratis
        </NuxtLink>
        <NuxtLink
          to="/webinar"
          class="inline-flex items-center rounded-md bg-teal-secondary px-3.5 md:px-5 py-[9px] text-[13px] font-semibold text-white no-underline transition-all hover:bg-teal-primary"
        >
          {{ isMobile ? "Daftar Webinar" : "Daftar Webinar →" }}
        </NuxtLink>
      </template>
      <template v-else>
        <a
          href="#register"
          class="inline-flex items-center gap-[7px] rounded-md bg-gold-primary px-4 md:px-[22px] py-[9px] text-[13px] font-extrabold text-midnight transition-all hover:bg-gold-secondary whitespace-nowrap"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            class="h-3.5 w-3.5 shrink-0"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span class="hidden xs:inline">Amankan Slot Sekarang</span>
          <span class="xs:hidden">Daftar Slot</span>
        </a>
      </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useProfileStore } from "~/stores/profileStore";

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

const route = useRoute();
const isWebinarPage = computed(() => route.path === "/webinar");

const isMobile = ref(false);
onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
  onUnmounted(() => window.removeEventListener("resize", checkMobile));

  store.fetchProfile();
});

const navLinks = [
  { label: "Tentang DKN", href: "#why" },
  { label: "Tantangan", href: "#problems" },
  { label: "Metodologi", href: "#framework" },
  { label: "Layanan", href: "#services" },
  { label: "Webinar", href: "#webinar" },
  { label: "Platform LMS", href: "#platform" },
];
</script>

<style scoped>
.bg-midnight\/97 {
  background-color: rgba(6, 12, 24, 0.97);
}
</style>
