import { defineStore } from "pinia";
import { ref } from "vue";

export interface IArticle {
  id: number;
  category: string;
  date: string;
  title: string;
  summary: string;
  file_url: string;
  file_full_url: string;
  author_name: string;
  author_role: string;
  author_initial: string;
  read_time: string;
  cta_url: string;
  image_url: string;
  image_full_url: string;
}

export const useArticleStore = defineStore("article", () => {
  const articles = ref<IArticle[]>([]);

  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchArticles = async () => {
    // Only fetch if we don't have data yet
    if (articles.value.length > 0) return;

    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const data = await $fetch<IArticle[]>("articles", {
        baseURL: config.public.apiBaseUrl,
      });

      if (data) {
        articles.value = data;
      }
    } catch (err: any) {
      console.error("Failed to fetch articles:", err);
      error.value = err.message || "Gagal mengambil data artikel";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    articles,
    isLoading,
    error,
    fetchArticles,
  };
});
