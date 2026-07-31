import { defineStore } from "pinia";
import { ref } from "vue";

export interface IFounder {
  id: number;
  name: string;
  role: string | null;
  cred: string | null;
  highlights: string[];
  certs: string[];
  skills: string[];
  imageFullUrl: string | null;
}

interface IApiFounder {
  id: number;
  name: string;
  role: string | null;
  cred: string | null;
  highlights: string[] | string | null;
  certs: string[] | string | null;
  skills: string[] | string | null;
  image_full_url: string | null;
}

interface IFounderResponse {
  status: string;
  data: IApiFounder[];
}

const toArray = (value: string[] | string | null): string[] => {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    return value
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  }
  return [];
};

export const useFounderStore = defineStore("founder", () => {
  const founders = ref<IFounder[]>([]);

  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchFounders = async () => {
    // Only fetch if we don't have data yet
    if (founders.value.length > 0) return;

    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const response = await $fetch<IFounderResponse>("founders", {
        baseURL: config.public.apiBaseUrl,
      });

      if (response && response.status === "success" && response.data) {
        founders.value = response.data.map((f) => ({
          id: f.id,
          name: f.name,
          role: f.role,
          cred: f.cred,
          highlights: toArray(f.highlights),
          certs: toArray(f.certs),
          skills: toArray(f.skills),
          imageFullUrl: f.image_full_url,
        }));
      }
    } catch (err: any) {
      console.error("Failed to fetch founders:", err);
      error.value = err.message || "Gagal mengambil data tim pendiri";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    founders,
    isLoading,
    error,
    fetchFounders,
  };
});
