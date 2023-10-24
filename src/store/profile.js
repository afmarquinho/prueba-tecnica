import { ref } from "vue";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", () => {
  const prof = ref({
    name: "A.C Telecom",
    dom: "@ac-telecom",
    type: "Startup - tecnología",
    status: "Empresa activa",
    location: "Floridablanca - Colombia",
    reviews: "10 Reviews",
    url: "https://www.actelecom.net/telecom",
    talents: 20,
    views: 20,
    pitches: 20,
    exh: 20,
    vacancies: 20,
    content: 20,
    summary:
      "En ac telecom somos expertos en telecomunicaciones con mas de 25 años comprobables en el mercado, brindando empleo a mas de 321 empleados al rededor de todo el mundo",
    email: "ejemplo@ejemplo.com",
    phone: "3001234567",
    search: "Emprendedor, practicas, primer empleo",
    mainRol: "Lider UX",
  });

  return {
    prof,
  };
});
