<template>
  <div>
    <h2>{{user.name}} {{user.lastName}}</h2>
    <p>{{user.email}}</p>
    <p>{{user.cpf}}</p>
    <p>{{user.age}}</p>
    <p>{{user.motherName}}</p>
    <p>{{user.fatherName}}</p>
    <button @click.prevent="renderSignupForm">Atualizar informações</button>
    <div v-if="isUpdate">
      <SignupFormVue :updateUser="updateUser" :params="this.$route.params" v-bind:is="SignupFormVue" />
      <h1>TRUE</h1>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import axios from 'axios'
import SignupFormVue from '../components/SignupForm.vue'

export default {
  components: {
    SignupFormVue
  },
  props: ['id'],
  data() {
    return {
      route: useRoute(),
      user: {},
      isUpdate: false,
    }
  },
  mounted() {
    axios(`http://localhost:3001/users/${this.$route.params.id}`)
      .then((res) => res.data)
      .then((data) => this.user = data)
      .then(console.log)
      .catch(error => console.log(error.message))
  },
  methods: {
    renderSignupForm() {
      if (this.isUpdate) {
        this.isUpdate = false;
      } else {
        this.isUpdate = true;
      }
    },
    updateUser(payload) {
      axios.put(`http://localhost:3001/users/${this.$route.params.id}`, payload)
      .then((res) => res.data)
      .then((data) => this.user = data)
      .then(console.log)
      .catch(error => console.log(error.message))
    },
  }
}
</script>

<style>

</style>