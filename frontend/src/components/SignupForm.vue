<template>
    <div>
      <form @submit.prevent="submitForm">
        <label for="">Nome:</label>
        <input type="text" required name="nome" v-model="personalInfo.nome" placeholder="Primeiro Nome">
        
        <label for="">Sobrenome:</label>
        <input type="text" required name="Sobrenome" v-model="personalInfo.sobrenome" placeholder="Sobrenome completo">
        
        <label for="">Idade:</label>
        <input type="text" required name="idade" v-model="personalInfo.idade" placeholder="Idade">
        
        <label for="">CPF:</label>
        <input type="text" required name="cpf" v-model="personalInfo.cpf" placeholder="Somente números">
        
        <label for="">E-mail:</label>
        <input type="email" required name="e-mail" v-model="personalInfo.email" placeholder="Insira seu e-mail">
        
        <label for="">Senha:</label>
        <input type="password" required name="senha" v-model="personalInfo.password" placeholder="Senha com mais de 7 characteres">
        <p v-if="shortPassword">{{shortPassword}}</p>
        
        <label for="">Nome da mãe</label>
        <input type="text" name="nomeNae" v-model="personalInfo.motherName" placeholder="Nome da mãe">
        
        <label for="">Nome do pai</label>
        <input type="text" name="nomePai" v-model="personalInfo.fatherName" placeholder="Nome do pai">
        

        <div>
          <label for="">CEP</label>
          <input type="number" maxlength="8" required name="CEP" v-model="address.cep" @keyup="getCep" placeholder="somente números">
       
          <label for="">Endereço</label>
          <input type="text" required name="endereço" v-model="address.address" placeholder="Endereço">
          
          <label for="">Número</label>
          <input type="text" required name="numero" v-model="address.number" placeholder="Número">
       
          <label for="">Tipo</label>
            <select required v-model="address.type">
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
            </select>
        
          <label for="">Bairro</label>
          <input type="text" required name="bairro" v-model="address.neighborhood" placeholder="Bairro">
      
          <label for="">Complemento</label>
          <input type="text" name="complemento" v-model="address.complement" placeholder="Complemento">
      
          <label for="">Cidade</label>
          <input type="text" required name="cidade" v-model="address.city" placeholder="Cidade">

          <label for="">Estado</label>
          <input type="text" required name="estado" v-model="address.state" placeholder="Estado">
     
          <!-- <label for="">País</label>
          <input type="text" required name="pais" v-model="country" placeholder="País"> -->
    
        </div>
        <button>Send</button>
      </form>

    </div>
</template>

<script>
  

  export default {
    data() {
      return {        
        personalInfo: {
          name: '',
          lastname: '',
          age: '',
          cpf: '',
          email: '',
          password: '',
          shortPassword: '',
          motherName: '',
          fatherName: '',
        },
        address: {
          cep: '',
          address: '',
          number: '',
          type: '',     
          neighborhood: '',
          complement: '',
          city: '',
          state: '',
        },

        baseUrl: 'https://viacep.com.br/ws/'
      }
    },
    methods: {
      async getCep() {
        const baseUrl = `${this.baseUrl}${this.cep}/json/`;
        const response = await fetch(baseUrl);
        const { logradouro, bairro, localidade, uf } = await response.json();
        this.address = logradouro;     
        this.neighborhood = bairro;        
        this.city = localidade;
        this.state = uf;
      },
      submitForm() {
        this.shortPassword = this.password.length > 7 ? '' : 'A senha deve conter mais que 7 characteres'
        console.log(this.address);
        console.log(this.neighborhood);
        console.log(this.city);
        console.log(this.state);
      }
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
  /* div {
    display: flex;
    justify-content: center;    
  } */

  form {
    background-color: white;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 70rem;
    height: 30rem;
    border: solid red 1px;
  }

  label {
    color: black;
    font-weight: bold;
    letter-spacing: 1px;
  }

  input {
    border: none;
    margin-bottom: 1rem;
  }


</style>