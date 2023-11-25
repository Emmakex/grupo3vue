<script>
import { ref, reactive, onMounted } from 'vue';
import * as _dayjs from 'dayjs';
const dayjs = _dayjs;
import RecentTasks from "./components/RecentTasks.vue";

  export default{
      data() {
        return {
          datos: dayjs().format('dddd, DD MMMM YYYY'), //variable para mostrar la fecha en el nav
          nombresLista : [
            {
              name: "Agency landingpage",
              description: "Agency landingpage",
              status: "toDo",
              date: "Nov 30 2021",
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "toDo",
              date: "Nov 30 2021"
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "toDo",
              date: "Nov 30 2021"
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "onGoing",
              date: "Nov 30 2021"
            },
            {
              name: "Create website for...",
              description: "Create website for...",
              status: "finished",
              date: "Nov 30 2021"
            },
          ],
            taskName: '',
            taskDescription: '',
            dueDate: '',
            taskStatus: '',
          }
      },
      computed :{
        filtertasksArray(){ // Función para mostrar las tres primeras tareas en Recent Tasks
          return this.nombresLista.slice (0,3)
        }
      },

      methods:{
          formatStatus (status) { // Función para mostrar el string según el status
            if (status === "onGoing") {
              return 'On Going'
            }
            else if (status === "finished") {
              return 'Finished'
            }
            else if (status === "toDo") {
              return 'To Do'
            }
          },
          mostrarForm: function () {
            let dateFormat = dayjs(this.dueDate).format('MMM DD YYYY'); // Le da formato a la fecha de la tarea para la lista
            let taskResume = {name: this.taskName, description: this.taskDescription, date: dateFormat, status: this.taskStatus} // Crea el objeto con la nueva tarea
            
            this.nombresLista.push(taskResume) // Lo añade a la array de tareas
          }
      },
    name: 'CalendarComponent',
    setup() {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      
      const currentDate = ref(new Date());
      const calendar = reactive({
        month: currentDate.value.getMonth(),
        year: currentDate.value.getFullYear(),
        days: []
      });

      const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
      };

      const updateCalendar = () => {
        const firstDay = new Date(calendar.year, calendar.month, 1).getDay();
        const days = daysInMonth(calendar.month, calendar.year);
        calendar.days = [];

        let date = 1;
        for (let i = 0; i < 6; i++) {
          let week = [];
          for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
              week.push('');
            } else if (date > days) {
              week.push('');
            } else {
              week.push(date);
              date++;
            }
          }
          calendar.days.push(week);
        }
      };

      const prevMonth = () => {
        if (calendar.month === 0) {
          calendar.month = 11;
          calendar.year--;
        } else {
          calendar.month--;
        }
        updateCalendar();
      };

      const nextMonth = () => {
        if (calendar.month === 11) {
          calendar.month = 0;
          calendar.year++;
        } else {
          calendar.month++;
        }
        updateCalendar();
      };

      onMounted(updateCalendar);

      return { monthNames, calendar, prevMonth, nextMonth };
  },
  components: { 
    RecentTasks,
  },
}

</script>

<template>
  <header>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <!-- logo -->
        <div class="logo ms-2">
          <a class="navbar-brand" href="#">Logo</a>
        </div>
        <div>
          <!-- menú de usuario -->
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/jacinta.jpg" alt="hugenerd" width="30" height="30" class="rounded-circle">
            <span class="d-none d-sm-inline mx-1">Jacinta</span>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <!-- menú hamburguesa -->
        <div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse flexGrow0 navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item date mx-5">
              {{ datos }}
            </li>
            <li>
              <div class="search">
                <form class="d-flex form-search" role="search">
                  <div class="input-group">
                    <input class="form-control" type="search" placeholder="Search..." aria-label="Search">
                    <span class="input-group-text">
                      <button class="btn btn-search" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
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
  </header>
  <main>
    <div class="container row">
      <!--section left -->
      <section class="col-3 col-lg-2 menu-left">
        <div class="row flex-nowrap container-fluid">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <!-- menu -->
            <span class="fs-5 d-none d-sm-inline">Menu</span>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <ul class="nav nav-pills flex-column mb-4 align-items-center align-items-sm-start" id="menu">  
                <!-- menu home -->
                <li class="nav-item">
                  <a href="#" class="nav-link align-middle px-0">
                    <span class="active">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house active" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                      </svg> 
                    </span>
                    <p class="ms-1 d-none d-sm-inline active">Home</p>
                  </a>
                </li>
                <!-- /menu home -->
                <!-- menu tasks -->
                <li class="nav-item">
                  <a href="#" class="nav-link px-0 align-middle">
                    <span class="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                        <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                      </svg>
                    </span>
                    <span class="ms-1 d-none d-sm-inline">Tasks</span> 
                  </a>
                </li>
                <!-- /menu tasks -->
                <!-- menu calendar -->
                <li class="nav-item">
                  <a href="#" class="nav-link px-0 align-middle">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                      </svg> 
                    </span>
                    <span class="ms-1 d-none d-sm-inline">Calendar</span>
                  </a>
                </li>
                <!-- /Menu calendar -->
                <!-- Menu My Team -->
                <li>
                  <a href="#" class="nav-link px-0 align-middle ">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                      </svg>
                    </span>
                    <span class="ms-1 d-none d-sm-inline">My Team</span>
                  </a>
                </li>
                <!-- /Menu My Team -->
              </ul>
            </div>
          </div>
          <!-- /menu -->
        </div>
      </section>
      <!-- /Section left -->
      <!-- Section right -->
      <section class="col-9 col-lg-10 center-section row justify-content-center">
        <!--Recent Task-->
        <RecentTasks 
          :array="filtertasksArray"
        />
        <!-- <h2 class="text-white ms-3">Recent Task</h2>
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
        </div> -->
        <!--/Recent Task-->
        <!--Calendar-->
        <div class="col-md-12 col-xl-5 container mt-5 px-4">
          <div class="row calendarContainer">
            <div class="col">
              <h4 class="text-center mb-3">{{ monthNames[calendar.month] }} {{ calendar.year }}</h4>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <button @click="prevMonth" class="btn btn-sm btn-primary">&lt; Prev</button>
                <button @click="nextMonth" class="btn btn-sm btn-primary">Next &gt;</button>
              </div>
              <div class="row calendar-header text-center fw-bold">
                <div class="col">Su</div>
                <div class="col">Mo</div>
                <div class="col">Tu</div>
                <div class="col">We</div>
                <div class="col">Th</div>
                <div class="col">Fr</div>
                <div class="col">Sa</div>
              </div>
              <div class="row" v-for="(week, index) in calendar.days" :key="index">
                <div class="col calendar-day" v-for="(day, index) in week" :key="index">
                  {{ day }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--/Calendar-->
        <!--Task sumary-->
        <div class="col-12 task-menu">
          <div>
            <h2>Task Summary</h2>
          </div>
          <ul class="list-group list-group-flush">
            <li class="row titulos">
              <div class="col-3">TASK NAME</div>
              <div class="col-3 text-start">TASK DESCRIPTION</div>
              <div class="col-2 offset-2">STATUS</div>
              <div class="col-2">DUE DATE</div>
            </li>
            <li v-for="(task, key) in nombresLista" class="row text-white" :key="task">
              <div class="col-3">{{ task.name }}</div>
              <div class="col-3 text-start">{{ task.description }}</div>
              <div class="col-2 offset-2" :class="task.status" >{{ formatStatus(task.status) }}</div>
              <div class="col-2">{{ task.date }}</div>
            </li>
          </ul>
        </div>
        <!--/Task sumary-->
      </section>
      <!-- /Section right -->
      <!-- Contact Form -->
      <section>
        <div class="row">
          <form @submit.prevent="mostrarForm()" method="post" class="bg-dark text-white">
            <div class="row">
              <div class="row">
                <label for="name">Task name: </label>
                <div class="">
                    <input type="text" name="name" required id="name" placeholder="Create website for..." v-model="taskName">
                </div>
              </div>
              <div class="row">
                <label for="email">Due Date:</label>
                <div class="">
                    <input type="date" name="email" required id="email" placeholder="dd/mm/aaaa" v-model="dueDate">
                </div>
              </div>            
              <div class="row">
                <label for="message" class="">Task description: </label>
                <div class="">
                    <textarea name="message" rows="5" id="message" placeholder="Create website for..." v-model="taskDescription"></textarea>
                </div>
              </div>
              <div class="row">
                <h5>Status:</h5>
                <div>
                  <input type="radio" name="status" id="toDo" value="toDo" v-model="taskStatus">
                  <label for="toDo">To Do </label>
                </div>
                <div>
                  <input type="radio" name="status" id="onGoing" value="onGoing" v-model="taskStatus">
                  <label for="onGoing">On Going </label>   
                </div>                   
                <div>
                  <input type="radio" name="status" id="finished" value="finished" v-model="taskStatus">
                  <label for="finished">Finished </label>
                </div>
                </div>
                <div class="">
                  <input type="submit" value="Send">
              </div>
            </div>
          </form>
        </div>
      </section>
      <!-- /Contact Form -->
    </div>
  </main>
</template>

<style scoped>
  .container {
    max-width: inherit;
  }
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
/* /End styles header */

/* Styles main */
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
  .active {
    color: #fff !important;
  }
  span.active {
    background-color: #3360FF;
  }
  /* /End styles left menu  */

  /* Styles center-section */
    
    /* Styles list task */
    .titulos {
      color: #ffffff;
      font-weight: 600;
    }
    li.row {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .colorTask {
      color: #CBCEE2;
    }
    .toDo {
      color: #3FDDC0;
    }
    .onGoing {
      color: #69A5FF;
    }
    .finished {
      color: #FF84BF;
    }
    /* / End styles list task */
    /* Styles calendar */
    h4{
      color: #fff;
    }
    .calendar-day {
      height: 50px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #BDC5E0;
    }
    .calendar-header {
      background-color: #f7f7f7;
      padding: 2px 0;
    }
    .calendar-header .col, .calendar-day .col {
      padding: 0;
    }
    /* / End Styles Calendar */

    /* Styles Form */
    form {
      width: 50%;
      margin: auto;
    }
</style>