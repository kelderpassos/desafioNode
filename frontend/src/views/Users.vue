<template>
  <main>
    <h2>Todos os usuários</h2>
    <div>
      <ul v-for="user in users" :key="user.id">
        <li>{{ user.name }}</li>
        <li>{{ user.email }}</li>
        <router-link :to="{ name: 'UserDetails', params: { id: user.id }}">
          <button>Detalhes do usuário</button>
        </router-link>
        <button :id=user.id @click="deleteUser">Deletar usuário</button>
      </ul>
    </div>
    <h3 v-if="userDeleted">{{userDeleted}}</h3>
    <UserList :users="users" key=""/>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      userDeleted: '',
    }
  },
  mounted() {
    this.getUsers();    
  },
  methods: {
    getUsers() {
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
    deleteUser({ target }) { 
      axios.delete(`http://localhost:3001/users/${target.id}`)
        .then(({ status }) => {
          if (status === 200) {
            this.userDeleted = 'Usuário deletado';
            this.getUsers();
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>