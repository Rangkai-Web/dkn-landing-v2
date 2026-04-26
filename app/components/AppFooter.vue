<template>
  <footer
    class="border-t border-white/5 bg-midnight px-5 py-14 pb-7 md:px-[52px]"
  >
    <div class="mx-auto max-w-[1100px]">
      <!-- Top Section -->
      <div
        class="grid grid-cols-1 gap-12 border-b border-white/7 pb-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]"
      >
        <div class="ft-brand">
          <NuxtLink to="/" class="flex items-center gap-3 no-underline">
            <!-- <div
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-teal-secondary to-gold-primary"
            >
              <svg viewBox="0 0 18 18" fill="none" class="h-[18px] w-[18px]">
                <path
                  d="M3 9a6 6 0 0 1 12 0"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M6 12a3 3 0 0 1 6 0"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <circle cx="9" cy="7" r="1.5" fill="white" />
              </svg>
            </div> -->
            <NuxtImg
              :src="profile?.logo_url || '/logo/dkn-logo.webp'"
              alt="Logo DKN"
              class="w-12 h-12 rounded-xl"
            />
            <div>
              <div class="text-[14px] font-bold tracking-[0.3px] text-white">
                <span class="text-teal-secondary">{{
                  profile?.site_name.split(" ")[0] || "DKN"
                }}</span>
                {{ profile?.site_name.split(" ")[1] || "Indonesia" }}
              </div>
              <div class="mt-px text-[10px] tracking-[0.4px] text-white/30">
                PT Dayaguna Kompetensi Nusantara
              </div>
            </div>
          </NuxtLink>
          <p class="mb-5 mt-3.5 text-[13px] leading-relaxed text-white/36">
            {{ profile?.site_description }}
          </p>
          <div class="flex gap-2">
            <a
              v-for="social in profile?.social_media"
              :key="social.platform"
              :href="social.url"
              target="_blank"
              rel="noreferrer"
              class="w-8 h-8 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-white/40 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
            >
              <Icon :name="social.icon" size="18" />
            </a>
          </div>
        </div>

        <div class="ft-col">
          <h5
            class="mb-3.5 text-[10px] font-bold uppercase tracking-[1.5px] text-white/24"
          >
            Platform
          </h5>
          <ul class="flex flex-col gap-[9px] list-none p-0">
            <li>
              <NuxtLink
                to="/webinar"
                class="text-[13px] text-white/44 no-underline transition-colors hover:text-white"
                >Webinar Gratis</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/webinar#rekaman"
                class="text-[13px] text-white/44 no-underline transition-colors hover:text-white"
                >Rekaman Webinar</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/program"
                class="text-[13px] text-white/44 no-underline transition-colors hover:text-white"
                >Program Belajar</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/program#lms"
                class="text-[13px] text-white/44 no-underline transition-colors hover:text-white"
                >Akses LMS</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="ft-col">
          <h5
            class="mb-3.5 text-[10px] font-bold uppercase tracking-[1.5px] text-white/24"
          >
            Layanan Corporate
          </h5>
          <ul class="flex flex-col gap-[9px] list-none p-0">
            <li>
              <NuxtLink
                to="/#layanan"
                class="text-[13px] text-white/44 no-underline transition-colors hover:text-white"
                >Corporate Training</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#layanan"
                class="text-[13px] text-white/44 no-underline transition-colors hover:text-white"
                >Advisory</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#layanan"
                class="text-[13px] text-white/44 no-underline transition-colors hover:text-white"
                >Assessment Center</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#layanan"
                class="text-[13px] text-white/44 no-underline transition-colors hover:text-white"
                >Certification</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-[13px] text-white/44 no-underline transition-colors hover:text-white"
                >Konsultasi</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="ft-col ft-contact">
          <h5
            class="mb-3.5 text-[10px] font-bold uppercase tracking-[1.5px] text-white/24"
          >
            Hubungi Kami
          </h5>
          <strong
            class="block text-[10px] font-bold uppercase tracking-[1px] text-white/22"
            >Kantor</strong
          >
          <p class="mb-3 text-[13px] leading-loose text-white/44">
            {{ profile?.contact?.address }}
          </p>
          <strong
            class="mt-3 block text-[10px] font-bold uppercase tracking-[1px] text-white/22"
            >WhatsApp</strong
          >
          <p class="mb-3 text-[13px] leading-loose text-white/44">
            +{{ profile?.contact?.whatsapp_number }}
          </p>
          <strong
            class="mt-3 block text-[10px] font-bold uppercase tracking-[1px] text-white/22"
            >Email</strong
          >
          <p class="text-[13px] leading-loose text-white/44">
            {{ profile?.contact?.email }}
          </p>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="flex flex-col items-center justify-between gap-4 pt-6 md:flex-row"
      >
        <p class="text-[11.5px] text-white/18">
          © {{ new Date().getFullYear() }}
          {{ profile?.site_name || "PT Dayaguna Kompetensi Nusantara" }}. Hak
          cipta dilindungi undang-undang.
        </p>
        <span class="text-[11px] italic text-white/14"
          >Where Competence Moves Forward</span
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useProfileStore } from "~/stores/profileStore";

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchProfile();
});
</script>
