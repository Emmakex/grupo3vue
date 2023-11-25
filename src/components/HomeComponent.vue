<script>
import RecentTasks from './RecentTasks.vue';
import { ref, reactive, onMounted } from 'vue';
import * as _dayjs from 'dayjs';
const dayjs = _dayjs;
export default {
    components: {
        RecentTasks
    },
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
}
</script>

<template>
        <section
        class="col-9 col-lg-10 center-section row justify-content-center"
      >
        <!--Recent Task-->
        <RecentTasks :array="filtertasksArray" />
        <!-- /Recent tasks -->
        <!--Calendar-->
        
        <!--/Calendar-->
        <!--Task sumary-->
        
        <!--/Task sumary-->
      </section>
      <!-- /Section right -->
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
