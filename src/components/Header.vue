<script setup>
import { ElContainer, ElRow, ElCol, ElButton, ElProgress, ElIcon } from 'element-plus'
import { Message, Bell, User, Plus, Avatar, ArrowDown} from "@element-plus/icons-vue";
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const porcentaje = ref(80);


</script>
<template>
    <el-container class="cont">
        <el-row class="row row1 mx-auto h-auto md:h-14">
            <el-col :xs="24" :sm="4" class="col1 text-white font-bold text-lg flex items-center justify-start">
                TalentPitch
            </el-col>
            <el-col :xs="24" :sm="20" class="col1 flex items-center justi">
                <nav class="nav w-full flex justify-evenly">
                    <div class="btn-group btn-group1 ">
                        <el-button link class="btn">Conéctate</el-button>
                        <el-button link class="btn">Mi muro</el-button>
                        <el-button link class="btn">Mis listas</el-button>
                        <el-button link class="btn">Aprende</el-button>
                    </div>
                    <div class="btn-group btn-group1 ">
                        <el-button class="btn btn-start">Comenzar +</el-button>
                        <el-button link :icon="Message" class="btn" />
                        <el-button link :icon="Bell" class="btn" />
                        <el-button circle :icon="Avatar" class="btn1" />
                        <el-button link :icon="ArrowDown" class="btn" />
                       
                    </div>
                </nav>
            </el-col>
        </el-row>
    </el-container>
    <el-container>
        <el-row class="banner w-full h-40">
        </el-row>
    </el-container>
    <el-row class="row2 mx-auto flex justify-end h-14">
        <el-col :xs="24" :md="17" class="progressive flex flex-col justify-between">
            <div class="w-full px-8 py-2 flex justify-between ">
                <div class="progress-container">
                    <span class="progress-text text-sm">Match con la cultura <span class="text-lime-600">{{ porcentaje }}%</span></span>
                    <el-progress class="custom-progress" :percentage="porcentaje" status="success"
                    :color="'rgba(139, 195, 74, 1)'" />
                </div>
                <div class="btn-group w-1/3 ">
                    <button class="btn btn-send mx-1 rounded-md h-8 px-4 text-sm text-white">Enviar Pitch</button>
                    <button link class="btn btn-contact mx-1 rounded-md h-8 px-4 text-sm text-pink-600"><el-icon>
                            <User />
                        </el-icon> <el-icon>
                            <Plus />
                        </el-icon>
                        Seguir</button>
                </div>
            </div>
            <nav class="flex justify-start w-full px-8">
                <RouterLink to="/" exact class="link link-home text-gray-400 font-bold me-4 text-sm pe-2">Perfil
                </RouterLink>
                <RouterLink to="/vacancies" exact class="link link-about text-gray-400 font-bold me-4 text-sm px-2">Vacantes
                </RouterLink>
                <RouterLink to="/lists" exact class="link link-lists text-gray-400 font-bold me-4 text-sm px-2">Listas
                </RouterLink>
            </nav>
        </el-col>
    </el-row>
</template>


<style scoped>
.cont {
    background-color: var(--gray);

}

.row1 {
    width: 90%;
    max-width: 1200px;
}

.el-col {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.nav .btn {
    color: var(--blue-main);
    border: none;
}
.btn1{
    background-color: var(--blue-main);
    color: white;
    border: none;
}
.btn-start,
.btn-send {
    background-color: var(--btn-primary);
}

.btn-start:hover,
.btn-send:hover,
.btn-contact:hover {
    background-color: var(--btn-primary-hover);
    color: white;

}

.btn-contact {
    border: solid 2px var(--btn-primary);
}

.banner {
    background-image: url("../../public/banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

@media (max-width: 768px) {
    .banner {
        display: none;
    }
}

.progressive {
    display: flex;
    justify-content: space-between;
}

.row2 {
    max-width: 1200px;
}

.router-link-active {
    color: var(--btn-primary);
    border-bottom: solid 2px #de1c7d;
}

.progress-container {
  display: flex;
  align-items: center;
}

.progress-text {
  margin-right: 10px;
}

.custom-progress {
  width: 200px;
}
</style>