<script>
import { useUserStore } from '../stores/userStore'; // Importing the user store from Pinia

export default {
        props: {
            array: Array,
        },
        methods: {
            formatStatus(status) {
            }
        },
        mounted() {
            const userStore = useUserStore();
            userStore.fetchContacts()
            console.log(userStore.contacts);
        }
};
</script>

<template>
    <h2 class="text-white ms-3">Recent Task</h2>
    <div class="recent-task">
        <div v-for="(task, key) in array" class="tasks col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg>
                    <span class="ms-2">{{ task.email }}</span>
                    </h5>
                    <p class="card-text">{{ task.name }}</p>
                </div>
                <div class="card-footer">
                    <p :class="task.status">{{ formatStatus(task.phone) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.task-menu h2 {
    color: #fff;
    margin-top: 2rem;
    font-size: 24px;
    }
.tasks .card, .task-menu {
    background-color: #23273C;
    border-radius: 10px;
    padding: 0;
    margin-bottom: 20px;
    color: #fff;
}
.task-2 {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
}
.card-title {
    width: fit-content;
    padding: 0.6rem 0.8rem;
    margin-bottom: 1.5rem;
    color: #fff;
    background-color: #E1546E;
    border-radius: 40px;
    font-size: 16px;
}
.card-footer {
    color: #ADB5CF;
}

@media (min-width: 768px) {
.recent-task {
    display: flex;
    flex-direction: row;
}
.card {
    margin-right: 2rem;
    }
}
</style>