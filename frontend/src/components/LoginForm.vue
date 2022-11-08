<template>
  <div>
    <h3>Acesse a plataforma</h3>
    <form>
      <label for="email">E-mail
        <input type="email" name="email" required v-model="email">
      </label>
      <label for="password">Password
        <input type="password" name="password" required v-model="password">
      </label>
    </form>
    <button type="button" @click="submitForm">Acessar</button>
    <button type="button">Registrar</button>
    </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      
    }
  },
  methods: {
    submitForm() {

    }
  }
}
</script>