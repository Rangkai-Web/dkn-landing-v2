import { defineStore } from "pinia";
import { ref } from "vue";

export interface IRecording {
  id: number;
  tag: string;
  title: string;
  desc: string;
  target: string;
  url: string;
  icon: string;
  image_full_url: string;
}

export interface IFreeWebinar {
  id: number;
  cat: string;
  code: string;
  title: string;
  desc: string;
  target: string;
  format: string;
  gradient: string;
  icon: string;
  waUrl: string;
  button_name: string;
  image_full_url: string;
}

export interface IPaidWebinar {
  id: number;
  tag: string;
  title: string;
  desc: string;
  outcomes: string[];
  meta: { icon: string; text: string }[];
  price: string;
  waUrl: string;
  button_name: string;
  image_full_url: string;
  cta_url: string;
  youtube_url?: string;
}

export const useWebinarStore = defineStore("webinar", () => {
  const recordings = ref<IRecording[]>([]);
  const freeWebinars = ref<IFreeWebinar[]>([]);
  const paidWebinars = ref<IPaidWebinar[]>([]);
  
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const config = useRuntimeConfig();
  const apiBase = config.public.apiBaseUrl;

  const fetchRecordings = async () => {
    if (recordings.value.length > 0) return;
    isLoading.value = true;
    error.value = null;
    try {
      const data = await $fetch<any>("webinars/recordings", { baseURL: apiBase });
      if (data?.status === "success" && data.data) {
        recordings.value = data.data;
      }
    } catch (err: any) {
      console.error("Failed to fetch recordings:", err);
      error.value = err.message || "Gagal mengambil data recording";
    } finally {
      isLoading.value = false;
    }
  };

  const fetchFreeWebinars = async () => {
    if (freeWebinars.value.length > 0) return;
    isLoading.value = true;
    error.value = null;
    try {
      const data = await $fetch<any>("webinars/free", { baseURL: apiBase });
      if (data?.status === "success" && data.data) {
        freeWebinars.value = data.data;
      }
    } catch (err: any) {
      console.error("Failed to fetch free webinars:", err);
      error.value = err.message || "Gagal mengambil data webinar gratis";
    } finally {
      isLoading.value = false;
    }
  };

  const fetchPaidWebinars = async () => {
    if (paidWebinars.value.length > 0) return;
    isLoading.value = true;
    error.value = null;
    try {
      const data = await $fetch<any>("webinars/paid", { baseURL: apiBase });
      if (data?.status === "success" && data.data) {
        paidWebinars.value = data.data;
      }
    } catch (err: any) {
      console.error("Failed to fetch paid webinars:", err);
      error.value = err.message || "Gagal mengambil data webinar berbayar";
    } finally {
      isLoading.value = false;
    }
  };

  const fetchAll = async () => {
    await Promise.all([fetchRecordings(), fetchFreeWebinars(), fetchPaidWebinars()]);
  };

  return {
    recordings,
    freeWebinars,
    paidWebinars,
    isLoading,
    error,
    fetchRecordings,
    fetchFreeWebinars,
    fetchPaidWebinars,
    fetchAll
  };
});
