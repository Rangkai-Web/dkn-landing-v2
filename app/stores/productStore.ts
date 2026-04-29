import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  price: string;
  // Extra fields for UI with dummy data
  type: 'buku' | 'ebook' | 'toolkit';
  meta: string[];
  author?: {
    name: string;
    role: string;
    initials: string;
  };
  isFeatured?: boolean;
}

export const useProductStore = defineStore("product", () => {
  // State
  const products = ref<IProduct[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);
  const currentPage = ref(1);
  const perPage = 8;

  // Helper to get dummy data based on title/id
  const getDummyExtras = (item: any): Partial<IProduct> => {
    const title = item.title.toLowerCase();
    
    // Logic to guess type
    let type: IProduct['type'] = 'ebook';
    if (title.includes('notion') || title.includes('template') || title.includes('toolkit')) {
      type = 'toolkit';
    } else if (title.includes('buku') || title.includes('hardcover')) {
      type = 'buku';
    }

    // Dummy meta based on type
    let meta: string[] = [];
    if (type === 'ebook') meta = ['60+ Halaman', 'Format PDF', 'Akses Instan'];
    if (type === 'toolkit') meta = ['Siap Pakai', 'Template Digital', 'Akses Selamanya'];
    if (type === 'buku') meta = ['200+ Halaman', 'Fisik & Digital', 'Gratis Ongkir'];

    // Dummy author
    const authors = [
      { name: 'Siti Rahayu, S.E., MM', role: 'Senior Trainer', initials: 'SR' },
      { name: 'Rehan Prabowo, S.Psi., MBA.', role: 'Digital Strategist', initials: 'AP' },
    ];
    const author = authors[item.id % authors.length];

    return {
      type,
      meta,
      author,
      isFeatured: item.id === 36, // Let's make id 36 featured for now
    };
  };

  // Actions
  const fetchProducts = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.apiBaseUrl;

      const data = await $fetch<any>("products", {
        baseURL: baseUrl,
      });

      if (data && data.data) {
        products.value = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.image,
          link: item.link,
          price: item.price,
          ...getDummyExtras(item)
        }));
      }
    } catch (err: any) {
      console.error("Failed to fetch products:", err);
      error.value = err.message || "Gagal mengambil data produk";
      products.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  // Getters
  const productsByType = computed(() => {
    return {
      buku: products.value.filter(p => p.type === 'buku'),
      ebook: products.value.filter(p => p.type === 'ebook'),
      toolkit: products.value.filter(p => p.type === 'toolkit'),
    };
  });

  const featuredProduct = computed(() => products.value.find(p => p.isFeatured));

  return {
    products,
    isLoading,
    error,
    currentPage,
    perPage,
    productsByType,
    featuredProduct,
    fetchProducts,
  };
});

