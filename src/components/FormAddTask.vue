<script></script>
<template>
<!-- Contact Form -->
<section>
<div class="row">
    <form
    @submit.prevent="mostrarForm()"
    method="post"
    class="bg-dark text-white"
    >
    <div class="row">
        <div class="row">
        <label for="name">Task name: </label>
        <div class="">
            <input
            type="text"
            name="name"
            required
            id="name"
            placeholder="Create website for..."
            v-model="taskName"
            />
        </div>
        </div>
        <div class="row">
        <label for="email">Due Date:</label>
        <div class="">
            <input
            type="date"
            name="email"
            required
            id="email"
            placeholder="dd/mm/aaaa"
            v-model="dueDate"
            />
        </div>
        </div>
        <div class="row">
        <label for="message" class="">Task description: </label>
        <div class="">
            <textarea
            name="message"
            rows="5"
            id="message"
            placeholder="Create website for..."
            v-model="taskDescription"
            ></textarea>
        </div>
        </div>
        <div class="row">
        <h5>Status:</h5>
        <div>
            <input
            type="radio"
            name="status"
            id="toDo"
            value="toDo"
            v-model="taskStatus"
            />
            <label for="toDo">To Do </label>
        </div>
        <div>
            <input
            type="radio"
            name="status"
            id="onGoing"
            value="onGoing"
            v-model="taskStatus"
            />
            <label for="onGoing">On Going </label>
        </div>
        <div>
            <input
            type="radio"
            name="status"
            id="finished"
            value="finished"
            v-model="taskStatus"
            />
            <label for="finished">Finished </label>
        </div>
        </div>
        <div class="">
        <input type="submit" value="Send" />
        </div>
    </div>
    </form>
</div>
</section>
<!-- /Contact Form -->
</template>

<style scoped>
/* Styles Form */
form {
    width: 50%;
    margin: auto;
}
</style>
