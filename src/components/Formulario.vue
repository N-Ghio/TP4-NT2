<template>
  <section>
    <div class="jumbotron">
      <h2>1) Formulario Vue-form</h2>
      <hr />
      <br />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- ------------------------------------------------------- -->
        <!-- Campo Nombre -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            class="form-control"
            type="text"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            name="nombre"
            autocomplete="off"
          />

          <!-- Validación Nombre -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo debe poseer menos de {{ nombreMaxLength }} caracteres.
            </div>
          </field-messages>
        </validate>
        <br />

        <!-- ------------------------------------------------------- -->
        <!-- Campo Edad -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input
            id="edad"
            class="form-control"
            type="number"
            v-model.number="formData.edad"
            required
            name="edad"
            autocomplete="off"
            :min="edadMin"
            :max="edadMax"
          />
          <!-- Validación Edad -->
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima debe ser {{ edadMin }} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima debe ser {{ edadMax }} años.
            </div>
          </field-messages>
        </validate>
        <br />

        <!-- ------------------------------------------------------- -->
        <!-- Campo Email -->
        <validate tag="div">
          <label for="email">Email</label>
          <input
            id="email"
            class="form-control"
            type="email"
            v-model="formData.email"
            required
            name="email"
            autocomplete="off"
          />
          <!-- Validación Email-->
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="email" class="alert alert-danger mt-1">
              Debe ingresar un email válido
            </div>
          </field-messages>
        </validate>
        <br />

        <!-- ------------------------------------------------------- -->
        <!-- Botón de envío -->
        <button class="btn btn-success my-3" :disabled="formState.$invalid">
          Enviar
        </button>
      </vue-form>

     
      <!-- ------------------------------------------------------- -->
      <!-- Tabla registros -->
      <div class="table-responsive">
        <h2>Tabla De Registros</h2>
        <br />
        <br />

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          
          <tbody>
            <tr v-for="(registro, index) in registros" :key="index">
              <td>{{ registro.nombre }}</td>
              <td>{{ registro.edad }}</td>
              <td>{{ registro.email }}</td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>  
  </section>
</template>

<script>
export default {
  name: "src-componentes-formulario",
  props: [],
  mounted() {},
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
      nombreMinLength: 5,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,
      registros: [{}],
    };
  },
  methods: {
    enviar() {
      console.log({ ...this.formData });
      let registro = {
        nombre: this.formData.nombre,
        edad: this.formData.edad,
        email: this.formData.email,
      };
      this.registros.push(registro);
      this.formData = this.getInitialData();
      this.formState._reset();
    },

    getInitialData() {
      return {
        nombre: null,
        edad: null,
        email: null,
      };
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
h2 {
  text-align: center;
}
</style>