
<script setup>
import { ref } from 'vue'
import Qrcode from 'qrcode.vue'
import { ElContainer, ElRow, ElCol, ElButton, ElIcon } from 'element-plus'
import { Location, Connection, Share, Download, UserFilled, View, VideoCamera, Sunrise, Document, DocumentAdd } from "@element-plus/icons-vue";

import { useProfileStore } from "../store/profile";

const storeProfile =  useProfileStore()



const qrValue = ref(storeProfile.prof.url)
const color = ref('#4e22ff')




</script>
<template>
        <el-row class="row w-2/3 flex flex-col justify-center items-center p-6 bg-white border-solid border border-gray-300 rounded-lg absolute">
            <span class="logo bg-zinc-100 flex justify-center items-center text-7xl font-extrabold my-4">AC</span>
            <span class="text-blue-900 font-bold text-xl my-1"> {{ storeProfile.prof.name }}</span>
            <span class="text-gray-600 my-5"> {{ storeProfile.prof.dom }}</span>
            <span class="text-gray-400 font-bold text-lg my-1">  {{ storeProfile.prof.type }}</span>
            <span class="text-lime-400 my-5"> {{ storeProfile.prof.status }}</span>
            <!-- TODO: PONER EL PUNTO AL LADO DE EMPRESA ACTIVA -->
            <span class="text-gray-600 my-1"> <el-icon><Location /></el-icon>  {{ storeProfile.prof.location }}</span>
            <!-- TODO: PONER EL ICONO DE GPS -->
            <span class="text-gray-600 my-1"> <span>* * * * * </span>( {{ storeProfile.prof.reviews }})</span>
            <!-- TODO: PONER LOS ICONOS DE LAS ESTRELLAS -->
            <span class="text-blue-900 my-1"> <span>* * * * * </span> F I X IN</span>
            <!-- TODO: PONER LOS ICONOS DE LAS ESTRELLAS -->
            <span class="text-rose-500 text-xs my-2"> <el-icon><Connection /></el-icon> {{ storeProfile.prof.url }}</span>
            <div class="foto my-4">
                <img src="../../public/foto.jpg" alt="foto de perfil" srcset=""
                    class="object-cover h-full w-full object-center">
            </div>
            <qrcode :text="qrValue" class="codigo-qr my-4" :foreground-color="color"></qrcode>
            <div class="btn-group flex flex-col w-full">
                <button class="btn-share my-3 mx-auto w-full border-none text-white h-8 rounded-lg text-xs"> <el-icon><Share /></el-icon>Compartir
                    Perfil</button>
                <!-- TODO: PONER LOS ICONOS DE la flecha -->
                <button
                    class="btn-download my-3 mx-auto w-full h-8 border border-solid border-gray-300 rounded-lg overflow-hidden flex justify-start items-center text-xs"><span
                        class="flex items-center justify-center h-full me-2 text-white"><el-icon><Download /></el-icon></span>Descargar resumen</button>
            </div>
            <div class="more-info w-full divide-y">
                <div class="h-8 flex justify-between items-center text-xs uppercase my-2"><span><el-icon><UserFilled /></el-icon> Talentos</span> {{ storeProfile.prof.talents }}</div>
                <div class="h-8 flex justify-between items-center text-xs uppercase my-2"><span><el-icon><View /></el-icon> Vistas del Perfil</span> {{ storeProfile.prof.views }}
                </div>
                <div class="h-8 flex justify-between items-center text-xs uppercase my-2"><span><el-icon><VideoCamera /></el-icon> Pitches Recibidos</span>{{ storeProfile.prof.pitches }}
                </div>
                <div class="h-8 flex justify-between items-center text-xs uppercase my-2"><span><el-icon><Sunrise /></el-icon> Exhibiciones</span>{{ storeProfile.prof.exh }}
                </div>
                <div class="h-8 flex justify-between items-center text-xs uppercase my-2"><span><el-icon><DocumentAdd /></el-icon> Vacantes</span>{{ storeProfile.prof.vacancies }}</div>
                <div class="h-8 flex justify-between items-center text-xs uppercase my-2"><span><el-icon><Document /></el-icon> Contenidos</span>{{ storeProfile.prof.content }}</div>

            </div>
        </el-row>
</template>

<style scoped>
.row{
    top: -10rem;
    left: 8rem;
}

.logo {
    width: 10rem;
    height: 10rem;
    color: var(--blue-main);
    border-radius: 50%;
}

.foto {
    width: 100%;
    height: 15rem;
    overflow: hidden;
    border-radius: 10px;

}

.codigo-qr {
    width: 600px;
    height: 600px;
}

.btn-group .btn-share {
    background-color: var(--btn-primary);
}

.btn-download span {
    background-color: var(--btn-primary);
    width: 20%;
}</style>