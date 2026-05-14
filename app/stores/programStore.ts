import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface IProgram {
  id: number;
  category: string;
  code: string;
  title: string;
  desc: string;
  outcomes: string[];
  duration: string;
  target: string;
  wa_text: string;
  is_signature: boolean;
  button_name: string;
  button_link: string;
}

export const useProgramStore = defineStore("program", () => {
  const categories = ref([
    "Semua Program",
    "Leadership",
    "Soft Skills",
    "Sales & Service",
    "Banking & Risk",
    "Strategy & Finance",
    "★ Signature",
  ]);

  const programs = ref<IProgram[]>([]);
  const selectedCategory = ref("Semua Program");
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchPrograms = async () => {
    // Only fetch if we don't have data yet
    if (programs.value.length > 0) return;

    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const data = await $fetch<IProgram[]>("katalog-program", {
        baseURL: config.public.apiBaseUrl,
      });

      if (data) {
        programs.value = data;
      }
    } catch (err: any) {
      console.error("Failed to fetch programs:", err);
      error.value = err.message || "Gagal mengambil data katalog program";
    } finally {
      isLoading.value = false;
    }
  };

  const filteredPrograms = computed(() => {
    if (selectedCategory.value === "Semua Program") return programs.value;
    if (selectedCategory.value === "★ Signature") {
      return programs.value.filter((p) => p.is_signature);
    }
    return programs.value.filter((p) => p.category === selectedCategory.value);
  });

  const setCategory = (cat: string) => {
    selectedCategory.value = cat;
  };

  return {
    categories,
    selectedCategory,
    programs,
    filteredPrograms,
    isLoading,
    error,
    fetchPrograms,
    setCategory,
  };
});
