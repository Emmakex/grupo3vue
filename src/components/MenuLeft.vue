<script>
export default {
    computed: {
        activeRoute() {
            return this.$route.path;  // Utiliza $route.path para obtener la ruta actual
        }
    }
}
</script>

<template>
    <div class="menu-left">
        <div class="row flex-nowrap container-fluid">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <!-- menu -->
            <div
                class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
            >
                <ul
                class="nav nav-pills flex-column mb-4 align-items-center align-items-sm-start"
                id="menu"
                >
                <!-- menu home -->
                <li class="nav-item">
                    <router-link to="/home" class="nav-link align-middle px-0">
                        <span :class="{ 'active': $route.path === '/home' }">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-house active"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"
                        />
                        </svg>
                    </span>
                    <p class="ms-1 d-none d-sm-inline active">Home</p>
                    </router-link>
                </li>
                <!-- /menu home -->
                <!-- menu tasks -->
                <li class="nav-item">
                    <router-link to="/taskslist" class="nav-link px-0 align-middle">
                        <span :class="{ 'active': $route.path === '/taskslist' }">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-list-task"
                        viewBox="0 0 16 16"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                        />
                        <path
                            d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                        />
                        </svg>
                    </span>
                    <span class="ms-1 d-none d-sm-inline">Tasks</span>
                    </router-link>
                </li>
                <!-- /menu tasks -->
                <!-- menu calendar -->
                <li class="nav-item">
                    <router-link to="/calendar" href="#" class="nav-link px-0 align-middle">
                    
                        <span :class="{ 'active': $route.path === '/calendar' }">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-calendar-week"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
                        />
                        <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                        />
                        </svg>
                    </span>
                    <span class="ms-1 d-none d-sm-inline">Calendar</span>
                    </router-link>
                </li>
                <!-- /Menu calendar -->
                </ul>
            </div>
            </div>
            <!-- /menu -->
        </div>
    </div>
</template>

<style>
/* Styles left menu */
.calendarContainer {
    max-width: none;
    --bs-gutter-x: 0;
}
.menu-left {
background-color: #1C1E2D;
}
.menu-left li {
width: max-content;
}
.menu-left .nav-link {
display: inline-block;
color: #9FA8C7;
}
.menu-left span {
color: #9FA8C7;
padding: 0.1rem 0.4rem 0.5rem;
}
span.active {
    color: #fff; /* Texto blanco para el elemento activo */
    background-color: #3360FF; /* Fondo azul para el elemento activo */
}

  /* /End styles left menu  */
</style>