<template>

  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">

      <!-- ruta root -->
      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio/Formulario</a>
        
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <!-- ruta formulario -->
          <li class="nav-item">
            <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>

          <!-- ruta lista-usuarios-axios -->
          <li class="nav-item">
            <router-link to="/axios">
              <a class="nav-link" href="#">Usuarios (Axios)</a>
            </router-link>
          </li>

          <!-- ruta lista-usuarios-fetch -->
          <li class="nav-item">
            <router-link to="/fetch">
              <a class="nav-link" href="#">Usuarios (Fetch)</a>
            </router-link>
          </li>

          <!-- ruta lista-usuarios-xhr -->
          <li class="nav-item">
            <router-link to="/xhr">
              <a class="nav-link" href="#">Usuarios (XML-HttP-Request)</a>
            </router-link>
          </li>

        </ul>
      </div>
    </nav>
  </section>

</template>

<script>
export default {
  name: "src-components-navbar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
</style>
