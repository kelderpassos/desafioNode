<template>
    <div>
      <h1 v-if="userCreated">{{userCreated}}</h1>
      <form @submit.prevent="submitForm">
        <div>
            <label for="">Nome:</label>
            <input type="text" required name="nome" v-model="personalInfo.name" placeholder="Primeiro Nome">
            
            <label for="">Sobrenome:</label>
            <input type="text" required name="Sobrenome" v-model="personalInfo.lastName" placeholder="Sobrenome completo">
          
            <label for="">Idade:</label>
            <input type="number" required name="idade" v-model="personalInfo.age" placeholder="Idade">
          
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
        </div>
        
        
        <div>
          <label for="">CEP</label>
          <input type="number" maxlength="8" required name="CEP" v-model="personalInfo.address.zipCode" @keyup="getCep" placeholder="somente números">
       
          <label for="">Endereço</label>
          <input type="text" required name="endereço" v-model="personalInfo.address.addressName" placeholder="Endereço">
          
          <label for="">Número</label>
          <input type="number" required name="numero" v-model="personalInfo.address.addressNumber">
       
          <label for="">Tipo</label>
            <select required v-model="personalInfo.address.addressType">
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
            </select>
        
          <label for="">Bairro</label>
          <input type="text" required name="bairro" v-model="personalInfo.address.neighborhood" placeholder="Bairro">
      
          <label for="">Complemento</label>
          <input type="text" name="complemento" v-model="personalInfo.address.complement" placeholder="Complemento">
      
          <label for="">Cidade</label>
          <input type="text" required name="cidade" v-model="personalInfo.address.city" placeholder="Cidade">

          <label for="">Estado</label>
          <input type="text" required name="estado" v-model="personalInfo.address.state" placeholder="Estado">
    
        </div>
        <button>Enviar</button>
      </form>
      <router-link :to="{ name: 'LoginForm' }">
        <button>Voltar</button>
      </router-link>

    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {        
        personalInfo: {
          name: '',
          lastName: '',
          age: '',
          cpf: '',
          email: '',
          password: '',
          motherName: '',
          fatherName: '',
          address: {
            zipCode: '',
            addressName: '',
            addressNumber: '',
            addressType: '',     
            neighborhood: '',
            complement: '',
            city: '',
            state: '',
            country: 'Brazil'
          },
        },
        shortPassword: '',
        userCreated: '',

        baseUrl: 'https://viacep.com.br/ws/'
      }
    },
    methods: {
      async getCep() {
        const baseUrl = `${this.baseUrl}${this.personalInfo.address.zipCode}/json/`;
        console.log(baseUrl);
        const response = await fetch(baseUrl);
        const { logradouro, bairro, localidade, uf } = await response.json();
        this.personalInfo.address.addressName = logradouro;     
        this.personalInfo.address.neighborhood = bairro;        
        this.personalInfo.address.city = localidade;
        this.personalInfo.address.state = uf;
      },
      async submitForm() {
        this.shortPassword = this.personalInfo.password.length > 7 ? '' : 'A senha deve conter mais que 7 characteres'
        
        await axios.post(`http://localhost:3001/signup`, this.personalInfo)
          .then(({ status }) => {
            if (status === 201) this.userCreated = 'Usuário criado';
          });
        
          this.personalInfo = {
            name: '',
            lastName: '',
            age: '',
            cpf: '',
            email: '',
            password: '',
            motherName: '',
            fatherName: '',
            address: {
              zipCode: '',
              addressName: '',
              addressNumber: '',
              addressType: '',     
              neighborhood: '',
              complement: '',
              city: '',
              state: '',
              country: 'Brazil'
            },
          };          
        },
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