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
  <!--Calendar-->
  <div class="col-md-12 col-xl-5 container mt-5 px-4">
    <div class="row calendarContainer">
      <div class="col">
        <h4 class="text-center mb-3">
          {{ monthNames[calendar.month] }} {{ calendar.year }}
        </h4>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <button @click="prevMonth" class="btn btn-sm btn-primary">
            &lt; Prev
          </button>
          <button @click="nextMonth" class="btn btn-sm btn-primary">
            Next &gt;
          </button>
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
          <div
            class="col calendar-day"
            v-for="(day, index) in week"
            :key="index"
          >
            {{ day }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/Calendar-->
</template>
