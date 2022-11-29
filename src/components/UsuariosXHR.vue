<template>
   <section>

    <div class="jumbotron">
      <h2>2C) Usuarios XHR</h2>
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
          <td>{{ usuario.phonenumber }}</td>
        </tr>
      </tbody>
    </table>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-usuarios-xhr',
    props: [],
    mounted () {
      this.getPostXHR()
    },
    data () {
      return {
        url: 'https://6385a8a1beaa64582664a33a.mockapi.io/usuarios1',
        posts: []
      }
    },
    methods: {
      getPostXHR() {
        const xhr = new XMLHttpRequest()
        xhr.open('get', this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
            this.posts = respuesta
          }
        })
        xhr.send()
      }

    },
    computed: {

    }
}

</script>

<style scoped lang="css">
.jumbotron {
    background-color:crimson;
    color: white;
  }

  hr {
    background-color: #bbb;
  }
  h2{
    text-align: center;
  }
</style>
