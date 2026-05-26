import { defineStore } from "pinia";
import { ref } from "vue";

export interface IPartner {
  id: number;
  name: string;
  skills: string[];
  certs: string[];
}

interface IApiPartner {
  id: number;
  name: string;
  skills: string[] | string;
  certs: string[] | string;
}

interface IPartnerResponse {
  status: string;
  data: IApiPartner[];
}

export const usePartnerStore = defineStore("partner", () => {
  const partners = ref<IPartner[]>([]);

  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchPartners = async () => {
    // Only fetch if we don't have data yet
    if (partners.value.length > 0) return;

    isLoading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const response = await $fetch<IPartnerResponse>("partners", {
        baseURL: config.public.apiBaseUrl,
      });

      if (response && response.status === "success" && response.data) {
        partners.value = response.data.map((p) => {
          let skillsArray: string[] = [];
          if (Array.isArray(p.skills)) {
            skillsArray = p.skills;
          } else if (typeof p.skills === "string") {
            skillsArray = p.skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean);
          }

          let certsArray: string[] = [];
          if (Array.isArray(p.certs)) {
            certsArray = p.certs;
          } else if (typeof p.certs === "string") {
            certsArray = p.certs
              .split(",")
              .map((c) => c.trim())
              .filter(Boolean);
          }

          return {
            id: p.id,
            name: p.name,
            skills: skillsArray,
            certs: certsArray,
          };
        });
      }
    } catch (err: any) {
      console.error("Failed to fetch partners:", err);
      error.value = err.message || "Gagal mengambil data partner & instruktur";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    partners,
    isLoading,
    error,
    fetchPartners,
  };
});
