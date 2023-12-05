<script>
import { ref, reactive, onMounted } from 'vue';
import * as _dayjs from 'dayjs';
const dayjs = _dayjs;

export default {
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
                        week.push({ day: '', isToday: false });
                    } else if (date > days) {
                        week.push({ day: '', isToday: false });
                    } else {
                        let dayDate = new Date(calendar.year, calendar.month, date);
                        let isToday = dayjs(dayDate).isSame(dayjs(), 'day');
                        week.push({ day: date, isToday: isToday });
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

        return { monthNames, calendar, prevMonth, nextMonth };
    },
}
</script>


<template>
  <!--Calendar-->
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
          :class="{ 'highlight-today': day.isToday }"
        >
          {{ day.day }}
        </div>
      </div>
    </div>
  </div>
  <!--/Calendar-->
</template>

<style scoped>
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

/* Estilo para resaltar el día actual */
.highlight-today {
      background-color: #3261FF;
      color: white;
  }
/* / End Styles Calendar */
</style>