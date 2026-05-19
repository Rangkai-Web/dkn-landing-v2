import { defineStore } from "pinia";
import { ref } from "vue";

export interface IBnspUnit {
  id: number;
  title: string;
  desc: string;
}

export interface IBnspInfoCard {
  type: string;
  label: string;
  value: string;
  sub: string;
}

export interface IBnspData {
  badge: string;
  titleHtml: string;
  description: string;
  units: IBnspUnit[];
  infoCards: IBnspInfoCard[];
  priceNote: string;
  ctaText: string;
  whatsappMessage: string;
  benefits: string[];
}

export const useBnspStore = defineStore("bnsp", () => {
  const bnspData = ref<IBnspData | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchBnspData = async () => {
    if (bnspData.value) return;

    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.apiBaseUrl;

      const data = await $fetch<any>("sertifikasi-bnsp", {
        baseURL: baseUrl,
      });

      if (data && data.status === "success" && data.data) {
        bnspData.value = {
          badge: data.data.badge,
          titleHtml: data.data.titleHtml,
          description: data.data.description,
          units: data.data.units || [],
          infoCards: data.data.infoCards || [],
          priceNote: data.data.priceNote,
          ctaText: data.data.ctaText,
          whatsappMessage: data.data.whatsappMessage,
          benefits: data.data.benefits || [],
        };
      }
    } catch (err: any) {
      console.error("Failed to fetch BNSP data:", err);
      error.value = err.message || "Gagal mengambil data sertifikasi BNSP";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    bnspData,
    isLoading,
    error,
    fetchBnspData,
  };
});
