<template>
  <div class="login-container">
    <form class="login-form">
      <h3>Acesse a plataforma</h3>
      <div>
        <label for="email">E-mail</label>
          <input type="email" name="email" required v-model="email">
        
      </div>
      <div>
        <label for="password">Password</label>
          <input type="password" name="password" required v-model="password">        
      </div>
      <button @click.prevent="submitForm">Acessar</button>
      <router-link :to="{ name: 'SignupForm' }">
          <button>Registrar</button>
      </router-link>
    </form>
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
      token: ''
    }
  },
  methods: {
    submitForm() {
      axios.post(`http://localhost:3001/login`, { email: this.email, password: this.password })
        .then((res) => {
          const token = JSON.stringify(res.data);
          localStorage.setItem('token', token);

          this.$router.push('/users');          
        }).catch(error => console.log(error));
    },
    navigateToRegister() {
      this.$router.push('/signup');
    }
  }
}
</script>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-form h3 {
    margin-bottom: 1rem;
    margin-top: -2rem;
  }

  .login-form {
    margin-top: 3rem;
    padding: 5.8rem;
    width: 35rem;

    border-radius: 10px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .login-form div {
    margin-top: 1rem;
  }

  .login-form label {
    font-weight: bold;
  }
  
  .login-form input {
    outline: none;

    height: 2rem;
    width: 24rem;
    padding-left: 10px;

    border-radius: 2px;
  }

  .login-form button {
    border: none;
    border-radius: 2px;

    height: 2rem;
    width: 24rem;
    padding-left: 10px;
    margin-top: 1rem;

    font-weight: bold;
  }

  .login-form button:hover {
  cursor: pointer;
  background-color: rgb(78, 126, 142);
  transition: background-color 0.1s;
  }

</style>