<template>

    <SignupForm />

</template>

<script>
  import LoginForm from './components/LoginForm.vue';
  import SignupForm from './components/SignupForm.vue';

  export default {
    name: 'App',
    components: {
      SignupForm
    }
  }
</script>

<style>
  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
</style>