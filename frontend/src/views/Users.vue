<template>
  <main>
    <h2>Todos os usuários</h2>
    <div v-for="user in users" :key="user.id"> </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((data) => this.users = data)
      .catch(error => console.error(error.message));
  }
}
</script>

<style>

</style>