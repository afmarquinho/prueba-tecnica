<script setup>
import { ElRow, ElCol, ElCard, ElCarousel, ElCarouselItem } from 'element-plus'
import { RouterLink } from 'vue-router'
import { useVacanciesStore } from "../store/vacancies";

const storeVacancies = useVacanciesStore()


</script>
<template>
    <main>
        <el-row class="row mb-5 mx-auto flex justify-end">
            <el-col :xs="8" class="col p-5 border border-solid border-gray-300 rounded-lg">
                <div class="title">
                    <h2 class="text-blue-800 font-bold text-lg">Publicadas recientemente</h2>
                </div>
                <el-carousel :interval="4000" type="card" class="h-600">
                    <el-carousel-item v-for="position in storeVacancies.positions" :key="position.id" class="h-600">
                        <div class="card-container flex w-auto">
                            <el-card class="card w-80">
                                <div class="img-container w-full h-24 overflow-hidden">
                                    <div>

                                    </div>
                                    <img :src="position.image" alt="FOTO" class="object-center object-cover">
                                </div>
                                <div class="bg-gray-100 p-2 flex justify-between items-center text-sm"><span>Experticia: {{
                                    position.level_experience }}</span>ico
                                </div>
                                <h2 class="text-blue-800 text-md my-3">{{ position.name }}</h2>
                                <p class="bg-blue-100 text-blue-400 text-sm rounded-2xl px-2">Creado por organización:
                                    {{ position.company_name }}</p>
                                <p class="text-sm my-3">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área
                                    de
                                    conocimiento para generar
                                    valor en uns organización?</p>
                                <div class="references flex justify-between">
                                    <div class="flex flex-col justify-center items-center">
                                        <span
                                            class="rounded-full bg-pink-400 p-1 h-8 w-8 flex justify-center items-center text-white">{{
                                                position.review }}</span>
                                        <span class="text-sm">Vistas</span>
                                    </div>
                                    <div class="flex flex-col justify-center items-center">
                                        <span
                                            class="rounded-full bg-pink-400 p-1 h-8 w-8 flex justify-center items-center text-white">{{
                                                position.comments_count }}</span>
                                        <span class="text-sm">Comentarios</span>
                                    </div>
                                    <div class="flex flex-col justify-center items-center">
                                        <span
                                            class="rounded-full bg-pink-400 p-1 h-8 w-8 flex justify-center items-center text-white">{{
                                                position.pitches_count }}</span>
                                        <span class="text-sm">Pitches</span>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <RouterLink to="/apply-position"
                                    class="link link-apply text-white px-3 py-1 rounded-md flex justify-center items-center w-48 ">
                                    Aplicar a vacante
                                </RouterLink>
                            </el-card>
                        </div>
                    </el-carousel-item>
                </el-carousel>
                
            </el-col>
        </el-row>
    </main>
</template>


<style scoped>
.h-600{
    height: 500px;
}
.link-apply {
    background-color: var(--btn-primary);
}

.link-apply:hover {
    background-color: var(--btn-primary-hover);
}

.card {
    max-height: 600px;
}
</style>