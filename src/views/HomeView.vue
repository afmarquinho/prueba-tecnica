<script setup>
import { ElRow, ElCol, ElIcon } from 'element-plus'
import { UserFilled, Trophy, Sunny, Opportunity, Paperclip, Tools, WindPower, Stamp, Key, Suitcase, Coffee, Avatar } from "@element-plus/icons-vue";
import { useProfileStore } from "../store/profile";
const storeProfile = useProfileStore()
</script>


<template>
  <el-row class="mb-5 mx-auto flex justify-start">
    <el-col class="p-5 border border-solid border-gray-300 rounded-lg">
      <div class="title">
        <h2 class="text-blue-800 font-bold text-lg"><el-icon>
            <UserFilled />
          </el-icon> Resumen de la empresa</h2>
      </div>
      <div>
        <h3 class="font-bold">Descripción</h3>
        <p class="text-gray-400"> {{ storeProfile.prof.summary }}</p>
      </div>
      <div class="w-1/2 inline-block my-2">
        <h4 class="font-bold">Correo electrónico</h4>
        <p class="text-gray-400">{{ storeProfile.prof.email }}</p>
      </div>
      <div class="w-1/2 inline-block my-2">
        <h4 class="font-bold">Número de contácto</h4>
        <p class="text-gray-400">{{ storeProfile.prof.phone }}</p>
      </div>
      <div class="w-1/2 inline-block my-2">
        <h4 class="font-bold">Estados deseados buscados</h4>
        <p class="text-gray-400">{{ storeProfile.prof.seach }}</p>
      </div>
      <div class="w-1/2 inline-block my-2">
        <h4 class="font-bold">Rol más buscado</h4>
        <p class="text-gray-400">{{ storeProfile.prof.mainRole }}</p>
      </div>
    </el-col>
  </el-row>

  <el-row class="row1 mb-10 mx-auto flex justify-end">
    <el-col class="col">
      <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
        <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
            <Trophy />
          </el-icon> Áreas de interés</h2>
        <p>
          <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
        </p>
      </div>
      <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
        <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
            <Sunny />
          </el-icon> Vacantes sugeridas poir AI</h2>
        <p>
          <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
        </p>
      </div>
    </el-col>
  </el-row>

  <el-row class="row1 mb-10 mx-auto flex justify-end">
    <el-col class="pt-5 border-t border-solid border-gray-300 relative">
      <div class="title-search px-5 bg-white absolute">
        <h2 class="text-blue-800 font-bold text-lg">Lo que buscamos en el talento</h2>
      </div>
      <div class="skill-cont mb-5">
        <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
          <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
              <Opportunity />
            </el-icon> Conocimientos</h2>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
        </div>
        <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
          <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
              <Paperclip />
            </el-icon> Habilidades
          </h2>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
        </div>
      </div>

      <div class="skill-cont mb-5">
        <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
          <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
              <Tools />
            </el-icon> Herramientas</h2>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
        </div>
        <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
          <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
              <WindPower />
            </el-icon> Idiomas
          </h2>
          <div class="flex justify-start gap-12">
            <span>
              <span class="block font-bold text-xs">Inglés</span>
              <span class="block italic text-xs">Avanzado</span>
            </span>
            <span>
              <span class="block font-bold text-xs">Francés</span>
              <span class="block italic text-xs">Avanzado</span>
            </span>
            <span>
              <span class="block font-bold text-xs">Francés</span>
              <span class="block italic text-xs">Avanzado</span>
            </span>
          </div>
        </div>
      </div>
      <div class="skill-cont">
        <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
          <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
              <Stamp />
            </el-icon> Metodologías</h2>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
        </div>
        <div class="w-1/2 p-5 inline-block"></div>
      </div>
    </el-col>
  </el-row>

  <el-row class="row1 mb-5 mx-auto flex justify-end">
    <el-col class="pt-5 border-t border-solid border-gray-300 relative">
      <div class="title-search px-5 bg-white absolute">
        <h2 class="text-blue-800 font-bold text-lg">Lo que ofrecemos en la empresa</h2>
      </div>
      <div class="skill-cont mb-5">
        <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
          <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
              <Key />
            </el-icon> Beneficios que ofrecemos</h2>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
        </div>
        <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
          <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
              <Suitcase />
            </el-icon> Formas de trabajo que ofrecemos
          </h2>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
        </div>
      </div>

      <div class="skill-cont mb-5">
        <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
          <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
              <Coffee />
            </el-icon> Cultura que ofecemos</h2>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
        </div>
        <div class="w-1/2 p-5 inline-block border border-solid border-gray-300 rounded-lg">
          <h2 class="text-blue-800 font-bold text-lg mb-4"><el-icon>
              <Avatar />
            </el-icon> Comunidades</h2>
          <p>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
            <span class="bg-blue-100 text-blue-400 text-xs px-5 rounded-xl me-4">Copy</span>
          </p>
      </div>
    </div>
  </el-col>
</el-row></template>



<style scoped>.col,
.skill-cont {
  display: flex;
  justify-content: center;
  gap: 20px;
}


.title-search {
  top: -5%;
  z-index: 10;
}</style>
