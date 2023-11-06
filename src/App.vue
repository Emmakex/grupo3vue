<script>
  export default{
      data() {
        return {
          datos: this.mostrarFechayhora() //variable para mostrar la fecha en el nav
        }
      },
      methods:{
          mostrarFechayhora: function () {
            const fullDate = new Date(); // Guarda la fecha
            const date = fullDate.getDate(); // Guarda el día del mes en número
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Array con los días de la semana, para guardar en el string el día que es
            const day = days[fullDate.getDay()]; // Guarda en una variable el string con el día de la semana
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Array con los meses
            const month = months[fullDate.getMonth()]; // Guarda en una variable el string del mes que es
            const year = fullDate.getFullYear(); // Guarda en una variable el año
            const dateCompleted = `${day}, ${date} ${month} ${year}`; // Crea el string para mostrar en el nav
            
            return dateCompleted;
          }
      },
      mounted () {
        this.mostrarFechayhora()
      }  
    }
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="logo col-2 ms-2">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="search col-5">
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
        <div class="collapse navbar-collapse ms-2 col-3" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item date mx-5">
              {{ datos }}
            </li>
            <li class="nav-item dropdown me-5">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Jacinta
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item date mx-2 my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div class="container">
      <section class="col-2 menu-left">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tasks</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Calendar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped>
/* Header Styles */
  nav {
    background-color: #272A3E !important;
  }
  .form-control, .input-group-text {
    background-color: #181A21;
    color: #fff;
    border: none;
  }
  .form-control::placeholder, a.nav-link, a.navbar-brand {
    color: #fff;
  }
  .navbar-nav {
    width: 100%;
    justify-content: flex-end;
  }
  .btn-search {
    color: #fff;
  }
  .nav-item {
    width: 33%;
  }
  .date {
    color: #9CA1C2;
    width: 20%;
    font-size: 0.8rem;
    justify-content: flex-start;
  }
  .dropdown {
    width: 50%;
    text-align: right;
  }
  .bi-bell {
    color: #BDC5E0;
  }
/* /End styles header */

/* Styles main */
  /* Styles left menu */
  .menu-left {
    background-color: #1C1E2D;
  }
</style>
