<template>
  <nav
    class="sticky top-0 z-100 flex h-[68px] items-center justify-between border-b border-white/10 bg-midnight/97 px-4 md:px-[52px] backdrop-blur-lg"
  >
    <div class="flex items-center gap-4 xl:gap-0">
      <!-- Mobile Menu Toggle (Index Only) -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10 xl:hidden"
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
          width="40"
          height="40"
          class="w-10 h-10 rounded-xl"
        />
        <div class="leading-tight">
          <div
            class="text-[13px] md:text-[14px] font-bold tracking-[0.3px] text-white"
          >
            <span class="text-teal-secondary">
              {{
                profile?.site_name.split(" ").slice(0, 3).join(" ") || ""
              }}
            </span>
            {{ profile?.site_name.split(" ")[3] || "" }}
          </div>
          <!-- <div
            class="hidden md:block mt-px text-[10px] tracking-[0.4px] text-white/30"
          >
            PT Dayaguna Kompetensi Nusantara
          </div> -->
        </div>
      </NuxtLink>
    </div>

    <!-- Desktop Nav Links -->
    <div class="hidden gap-7 xl:flex">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.href"
        :to="link.href"
        class="text-[13px] font-medium text-white/50 no-underline transition-colors hover:text-white"
      >
        {{ link.label }}
      </NuxtLink>
    </div>

    <!-- Right Actions -->
    <div class="flex items-center gap-2.5">
      <NuxtLink
        to="/webinar#rekaman"
        class="hidden md:inline-flex items-center rounded-md border border-white/12 bg-white/7 px-[18px] py-2 text-[13px] font-medium text-white/75 no-underline transition-all hover:bg-white/13"
      >
        Webinar Gratis
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="inline-flex items-center rounded-md bg-teal-secondary px-3.5 md:px-5 py-[9px] text-[13px] font-semibold text-white no-underline transition-all hover:bg-teal-primary"
      >
        {{ isMobile ? "Diskusi Corporate" : "Diskusi Corporate" }}
      </NuxtLink>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade-slide">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 top-[68px] z-90 flex flex-col xl:hidden"
      >
        <div
          class="flex flex-col gap-6 pt-4 bg-midnight/95 p-6 backdrop-blur-xl"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="text-lg font-semibold text-white/70 transition-colors hover:text-white"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="my-4 h-px bg-white/10" />
          <NuxtLink
            to="/webinar#rekaman"
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
// const isWebinarPage = computed(() => route.path === "/webinar");

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
  { label: "Webinar", href: "/webinar#recording" },
  { label: "Program Belajar Bersertifikat", href: "/program" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Tentang", href: "/tentang" },
  { label: "Resources", href: "/resources" },
  { label: "Produk", href: "/produk" },
  { label: "Konsultasi", href: "/contact" },
  { label: "Kontak", href: "/contact-detail" },
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
