<script>
import { useUserStore } from '../stores/userStore'; // Importar useUserStore
import * as _dayjs from 'dayjs';
const dayjs = _dayjs;

export default {
    data() {
        return {
            datos: dayjs().format('dddd, DD MMMM YYYY'), // Fecha actual
            userStore: useUserStore(),
        };
    },
    computed: {
        currentUser() {
            return this.userStore.currentUser; // Devuelve el usuario actual
        }
    }
}
</script>

<template>
<!-- navbar -->
<nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
<div class="container-fluid">
    <!-- logo -->
    <div class="logo ms-2">
    <a class="navbar-brand" href="/home">
        <img
        src="/logo.svg"
        alt="Go For It"
        width="100"
        />
    </a>
    </div>
    <div>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    </div>
    <div
    class="collapse flexGrow0 navbar-collapse"
    id="navbarSupportedContent"
    >
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- menú de usuario -->
        <li class="user-name my-auto">
            <img
            src="/jacinta.jpg"
            alt="user"
            width="30"
            height="30"
            class="rounded-circle"
            />
            <span class="d-none d-sm-inline mx-1">{{ currentUser ? currentUser.name : 'Guest' }}</span> <!-- Nombre de usuario dinámico -->
        </li>
        <li class="nav-item date mx-5">
        {{ datos }}
        </li>
        <li>
        <div class="search">
            <form class="d-flex form-search" role="search">
            <div class="input-group">
                <input
                class="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                />
                <span class="input-group-text">
                <button class="btn btn-search" type="submit">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                    >
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                    </svg>
                </button>
                </span>
            </div>
            </form>
        </div>
        </li>
    </ul>
    </div>
</div>
</nav>
</template>

<style scoped>
/* Header Styles */
nav {
    background-color: #272A3E !important;
}
span.navbar-toggler-icon{
filter: invert(100%);
}
form.d-flex.form-search{
width: 100%;
}
.form-control, .input-group-text {
background-color: #181A21;
color: #fff;
border: none;
}
.form-control::placeholder, a.nav-link, a.navbar-brand, p {
color: #fff;
}
.navbar-nav {
width: 100%;
justify-content: flex-end;
}
.btn-search {
color: #fff;
}
.date {
color: #fff;
font-size: 0.8rem;
display: flex;
justify-content: center;
padding: 1em;
}
.flexGrow0{
flex-grow: 0;
} 
.user-name{
    color: #fff;
}
@media (max-width: 992px) {
  .user-name {
    text-align: center;
}
}

/* /End styles header */
</style>
