<template>
  <nav
    class="sticky top-0 z-[100] flex h-[68px] items-center justify-between border-b border-white/10 bg-midnight/97 px-4 md:px-[52px] backdrop-blur-lg"
  >
    <div class="flex items-center gap-4 lg:gap-0">
      <!-- Mobile Menu Toggle (Index Only) -->
      <button
        v-if="!isWebinarPage"
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10 lg:hidden"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle menu"
      >
        <Icon
          :name="
            isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3-bottom-right'
          "
          class="h-6 w-6 text-white"
        />
      </button>

      <NuxtLink
        to="/"
        class="flex items-center gap-2.5 md:gap-3 no-underline"
        @click="closeMenu"
      >
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
              profile?.site_name?.split(" ")[0] || "DKN"
            }}</span>
            {{ profile?.site_name?.split(" ")[1] || "Indonesia" }}
          </div>
          <div
            class="hidden md:block mt-[1px] text-[10px] tracking-[0.4px] text-white/30"
          >
            PT Dayaguna Kompetensi Nusantara
          </div>
        </div>
      </NuxtLink>
    </div>

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

    <!-- Mobile Menu Overlay -->
    <Transition name="fade-slide">
      <div
        v-if="isMenuOpen && !isWebinarPage"
        class="fixed inset-0 top-[68px] z-90 flex flex-col lg:hidden"
      >
        <div
          class="flex flex-col gap-6 pt-4 bg-midnight/95 p-6 backdrop-blur-xl"
        >
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-lg font-semibold text-white/70 transition-colors hover:text-white"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
          <div class="my-4 h-px bg-white/10" />
          <NuxtLink
            to="/webinar"
            class="flex items-center justify-center rounded-xl bg-teal-secondary py-4 text-center font-bold text-white shadow-lg shadow-teal-secondary/20"
            @click="closeMenu"
          >
            Ikuti Webinar Gratis →
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { useProfileStore } from "~/stores/profileStore";

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

const route = useRoute();
const isWebinarPage = computed(() => route.path === "/webinar");

const isMenuOpen = ref(false);
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Handle body scroll locking
watch(isMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

const isMobile = ref(false);
onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
  onUnmounted(() => {
    window.removeEventListener("resize", checkMobile);
    document.body.style.overflow = "";
  });

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

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
