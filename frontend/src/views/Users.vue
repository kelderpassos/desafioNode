<template>
  <main>
    <h2>Todos os usuários</h2>
    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    const token = JSON.parse(localStorage.getItem('token'));

    const config = {
      headers: {
        authorization: token
      },
    }
    axios('http://localhost:3001/users', config)
      .then((res) => this.users = res.data)
      .catch(error => console.error(error.message));
  },
  methods: {

  }
}
</script>

<style>

</style>