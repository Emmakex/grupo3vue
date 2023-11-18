<script>
export default {
  data() {
    return {
   }
}
};
</script>

<template>
    <h2 class="text-white ms-3">Recent Task</h2>
    <div class="col-xl-7 recent-task">
        <div v-for="(task, key) in filtertasks" class="tasks col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg>
                    <span class="ms-2">{{ task.date }}</span>
                    </h5>
                    <p class="card-text">{{ task.name }}</p>
                </div>
                <div class="card-footer">
                    <p :class="task.status">{{ formatStatus(task.status) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>