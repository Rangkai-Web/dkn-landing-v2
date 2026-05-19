<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener"
    aria-label="Hubungi DKN via WhatsApp"
    class="fixed bottom-[26px] right-[26px] z-[999] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.28)] transition-transform hover:scale-[1.08]"
  >
    <svg viewBox="0 0 24 24" fill="white" class="h-[26px] w-[26px]">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
      />
      <path
        d="M11.99 2C6.473 2 2 6.473 2 11.99c0 1.776.46 3.447 1.263 4.913L2.05 21.95l5.173-1.195A9.94 9.94 0 0011.99 22c5.516 0 9.99-4.474 9.99-9.99C21.98 6.473 17.506 2 11.99 2zm0 18.18c-1.608 0-3.11-.44-4.395-1.203l-.315-.187-3.27.756.783-3.176-.205-.328A8.16 8.16 0 013.82 11.99c0-4.503 3.667-8.17 8.17-8.17 4.503 0 8.17 3.667 8.17 8.17 0 4.503-3.667 8.19-8.17 8.19z"
      />
    </svg>
  </a>
</template>

<script setup lang="ts">
import { useProfileStore } from "~/stores/profileStore";

const store = useProfileStore();
const { profile, isLoading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchProfile();
});

const whatsappLink = computed(() => {
  if (!profile.value?.contact?.whatsapp_number) return "";
  const phoneNumber = profile.value.contact.whatsapp_number.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Halo DKN, saya ingin berkonsultasi.",
  )}`;
});
</script>
