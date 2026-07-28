import { defineStore } from "pinia";
import { ref } from "vue";

export interface IBanner {
  id: number;
  page_key: string;
  image_full_url: string | null;
  alt_text: string | null;
  caption: string | null;
  link_url: string | null;
  sort_order: number;
  is_active: boolean;
}

interface IBannerResponse {
  status: string;
  data: IBanner[];
}

export const useBannerStore = defineStore("banner", () => {
  const bannersByPage = ref<Record<string, IBanner[]>>({});
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchBanners = async (pageKey: string) => {
    if (bannersByPage.value[pageKey]) return;

    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const response = await $fetch<IBannerResponse>("banners", {
        baseURL: config.public.apiBaseUrl,
        params: { page_key: pageKey },
      });

      if (response && response.status === "success" && response.data) {
        bannersByPage.value[pageKey] = response.data;
      }
    } catch (err: any) {
      console.error(`Failed to fetch banners for ${pageKey}:`, err);
      error.value = err.message || "Gagal mengambil data banner";
    } finally {
      isLoading.value = false;
    }
  };

  const getBanners = (pageKey: string): IBanner[] => bannersByPage.value[pageKey] || [];

  return {
    bannersByPage,
    isLoading,
    error,
    fetchBanners,
    getBanners,
  };
});
