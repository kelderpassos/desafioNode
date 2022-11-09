<template>
  <div>
    <h3>Acesse a plataforma</h3>
    <form>
      <div>
        <label for="email">E-mail</label>
          <input type="email" name="email" required v-model="email">
        
      </div>
      <div>
        <label for="password">Password</label>
          <input type="password" name="password" required v-model="password">        
      </div>
    </form>
    <button @click.prevent="submitForm">Acessar</button>
    <button type="button">Registrar</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginForm',
  data() {
    return {
      email:'',
      password:'',
      baseUrl: 'http://localhost:3001/',
      token: ''
    }
  },
  methods: {
    submitForm() {
      console.log(`${this.baseUrl}/login`);
      axios.post(`http://localhost:3001/login`, { email: this.email, password: this.password })
        .then((res) => {
          const token = JSON.stringify(res.data);
          localStorage.setItem('token', token);

          this.$router.push('/users');          
        });

      // fetch('http://localhost:3001/users')
    }
  }
}
</script>