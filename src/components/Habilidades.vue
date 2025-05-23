<script setup>
import { ref } from 'vue';

// Creamos un diccionario que las llaves sean los nombres de las habilidades y los valores sean los porcentajes
const habilidades = {
    "Frontend": {
        "Porcetaje": 50,
        "Habilidades": {
            "HTML": "co-html5-shield",
            "CSS": "co-css3-shiled",
            "JavaScript": "si-javascript",
            "Vue": "co-vue-js",
            "React": "co-react",
            "tailwind": "si-tailwindcss",
            "Bootstrap": "fa-bootstrap",
            "vitest": "si-vite",
            "Jest": "co-jest",
        }
    },
    "Backend": {
        "Porcetaje": 40,
        "Habilidades": {
            "JavaScript": "si-javascript",
            "Go": "co-go",
            "Rust": "co-rust",
            "C#": "si-csharp",
            "Python": "si-python",
            "MySQL": "co-mysql",
            "PostgreSQL": "co-postgresql",
            "MongoDB": "si-mongodb",
            "DynamoDB": "si-amazondynamodb",
            "Docker": "si-docker",
            "Kubernetes": "si-kubernetes",
            "Nginx": "si-nginx",
            "Express": "si-express",
            "FastAPI": "si-fastapi"
        }
    },
    "Videojuegos": {
        "Porcetaje": 30,
        "Habilidades": {
            "Unity": "co-unity",
            "Unreal Engine": "co-unreal-engine",
            "C++": "si-cplusplus",
            "Blender": "co-blender",
            "Photoshop": "si-adobephotoshop",
            "Audacity": "si-audacity",
        }
    },
    "Control de Versiones": {
        "Porcetaje": 30,
        "Habilidades": {
            "Git": "co-git",
            "GitHub": "si-github",
            "GitLab": "si-gitlab",
        }
    },
    "Computacion en la nube": {
        "Porcetaje": 20,
        "Habilidades": {
            "AWS": "co-amazon-aws",
            "Azure": "si-microsoftazure",
        }
    }
};

const activeSkill = ref(Object.keys(habilidades)[0]);

function setActiveSkill(skill) {
    activeSkill.value = skill;
}

function splitArray(array) {
    const chunk = array.length % 2 === 0 ? 2 : 3;
    return array.reduce((acc, item, index) => {
        const chunkIndex = Math.floor(index / chunk);
        if (!acc[chunkIndex]) {
            acc[chunkIndex] = [];
        }
        acc[chunkIndex].push(item);
        return acc;
    }, []);
}
</script>

<style>
@import '../assets/CssStyles/habilities.css';
</style>

<template>
    <section id="habilidades" class="habilidades_section dark:bg-gray-900">
        <h2 class="habilidad_title dark:text-white">Habilidades</h2>
        <div class="habilidades_container">
            <button v-for="(value, key) in habilidades" :key="key" class="habilidad" @click="setActiveSkill(key)">
                <p>{{ key }}</p>
            </button>
        </div>
        <hr class="mt-2 border-t border-gray-100">
        <Transition
        mode="out-in"
        enter-active-class="transition-opacity duration-500 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        >
        <div
            v-if="habilidades[activeSkill]"
            :key="activeSkill"
            class="habilidades_display"
        >
            <h3 class="habilidad_title dark:text-white">{{ activeSkill }}</h3>
            <div
            v-for="(chunk, index) in splitArray(Object.entries(habilidades[activeSkill].Habilidades))"
            :key="index"
            class="habilidades_examples dark:text-white"
            >
            <div
                v-for="([key, value]) in chunk"
                :key="key"
                class="inline-flex items-center gap-2"
            >
                <v-icon :name="value" />
                <p>{{ key }}</p>
            </div>
            </div>
        </div>
        </Transition>
    </section>
</template>
