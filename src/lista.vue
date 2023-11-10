<script>
import { ref, reactive, onMounted } from 'vue';
export default{
    data() {
    return {
        nombresLista: {
            task1: {
                name: "",
                description: "",
                status: "",
                date: ""

            }
        }
    }
    },
    methods:{
        
    },
}
</script>
<template>
    <div class="task-menu">
        <div>
        <h2>Task Summary</h2>
        </div>
        <ul>
        <li class="titulos">
            <div>TASK NAME</div>
            <div>TASK DESCRIPTION</div>
            <div>STATUS</div>
            <div>DUE DATE</div>
        </li>
        <li>
            <div class="colorTask">Agency landingpage</div>
            <div class="colorTask">Agency landingpage</div>
            <div class="colorToDo">To Do</div>
            <div class="colorTask">Nov 30 2021</div>
        </li>
        </ul>
    </div>
</template>
<style scoped>

</style>