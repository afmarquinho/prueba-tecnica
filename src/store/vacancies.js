import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useVacanciesStore = defineStore("vacancies", () => {
  const positions = ref([]);
  const url =
    "https://data2.talentpitch.co/api/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=10";

  onMounted(async () => {
    try {
      const response = await axios.get(url);
      positions.value = response.data.data
    } catch (error) {
      console.log(error);
    }
  });
  return {
    positions,
  };
});
