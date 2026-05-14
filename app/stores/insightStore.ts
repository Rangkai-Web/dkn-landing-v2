import { defineStore } from "pinia";
import { ref } from "vue";

export interface IInsight {
  id: number;
  category: string;
  title: string;
  description: string;
  button_text?: string;
  button_link?: string;
  icon_type?: "trend" | "user" | "shield" | "monitor" | "zap" | "info";
}

export const useInsightStore = defineStore("insight", () => {
  const insights = ref<IInsight[]>([]);

  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchInsights = async () => {
    // Only fetch if we don't have data yet
    if (insights.value.length > 0) return;

    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const data = await $fetch<IInsight[]>("business-insights", {
        baseURL: config.public.apiBaseUrl,
      });

      if (data) {
        insights.value = data;
      }
    } catch (err: any) {
      console.error("Failed to fetch insights:", err);
      error.value = err.message || "Gagal mengambil data insight";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    insights,
    isLoading,
    error,
    fetchInsights,
  };
});
