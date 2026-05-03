import { defineStore } from "pinia";
import { ref } from "vue";

export interface ITraining {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const useTrainingStore = defineStore("training", () => {
  // State
  const trainings = ref<ITraining[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Actions
  const fetchTrainings = async () => {
    // Only fetch if we don't have data yet to avoid redundant calls
    if (trainings.value.length > 0) return;
    
    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const data = await $fetch<any>("trainings", {
        baseURL: config.public.apiBaseUrl
      });

      if (data && data.status === "success" && data.data) {
        trainings.value = data.data;
      }
    } catch (err: any) {
      console.error("Failed to fetch trainings:", err);
      error.value = err.message || "Gagal mengambil data training";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    trainings,
    isLoading,
    error,
    fetchTrainings,
  };
});
