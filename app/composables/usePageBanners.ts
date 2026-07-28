import { useBannerStore } from "@/stores/bannerStore";

export interface IBannerFallback {
  alt: string;
  bg: string;
}

export interface IBannerItem {
  key: string;
  image: string | null;
  bg: string;
  alt: string;
  link: string | null;
}

export function usePageBanners(pageKey: string, fallback: IBannerFallback[]) {
  const bannerStore = useBannerStore();

  onMounted(() => {
    bannerStore.fetchBanners(pageKey);
  });

  const items = computed<IBannerItem[]>(() => {
    const banners = bannerStore.getBanners(pageKey);

    if (banners.length > 0) {
      return banners.map((b) => ({
        key: `banner-${b.id}`,
        image: b.image_full_url,
        bg: "",
        alt: b.alt_text || "",
        link: b.link_url,
      }));
    }

    return fallback.map((f, idx) => ({
      key: `placeholder-${idx}`,
      image: null,
      bg: f.bg,
      alt: f.alt,
      link: null,
    }));
  });

  return { items };
}
