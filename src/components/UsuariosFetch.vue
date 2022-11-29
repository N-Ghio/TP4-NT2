<template>
 <section>

    <div class="jumbotron">
      <h2>2B) Usuarios Fetch</h2>
      <hr />
      <br />
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Telefono</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(usuario, index) in posts" :key="index">
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.phonenumber}}</td>
        </tr>
      </tbody>
    </table>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-usuarios-fetch',
    props: [],
    mounted () {
      this.getPostFetch()
    },
    data () {
      return {
        url: 'https://6385a8a1beaa64582664a33a.mockapi.io/usuarios1',
        posts: []
      }
    },
    methods: {
      async getPostFetch() {
        try {
          let response = await fetch(this.url)
          let respuesta = await response.json()
          console.log(respuesta)
          this.posts = respuesta
        }
        catch(error) {
           console.error(error)
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.jumbotron {
    background-color:green;
    color: white;
  }

  hr {
    background-color: #bbb;
  }
  h2{
    text-align: center;
  }
</style>
