import { defineStore } from "pinia";
import { ref } from "vue";

export interface IFaq {
  id: number;
  question: string;
  answer: string;
  icon: string;
  order: number;
}

export const useFaqStore = defineStore("faq", () => {
  const faqs = ref<IFaq[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchFaqs = async () => {
    if (faqs.value.length > 0) return;

    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.apiBaseUrl;

      const data = await $fetch<any>("faqs", {
        baseURL: baseUrl,
      });

      if (data && data.status === "success" && data.data) {
        faqs.value = data.data.map((item: any) => ({
          id: item.id,
          question: item.question,
          answer: item.answer,
          icon: item.icon || "lucide:info",
          order: item.order || 0,
        }));
      }
    } catch (err: any) {
      console.error("Failed to fetch FAQs:", err);
      error.value = err.message || "Gagal mengambil data FAQ";
      faqs.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  return {
    faqs,
    isLoading,
    error,
    fetchFaqs,
  };
});
