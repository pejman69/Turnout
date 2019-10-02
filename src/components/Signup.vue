<template>
<div class="form-inline">
  <div class="form-group">
    <h3>Sign up</h3>
    <input type="text" placeholder="email" class="form-control" v-model="email" />
    <input type="password" placeholder="password" class="form-control" v-model="password" />
    <br>
    <br>
    <button class="btn btn-primary" @click="signUp">Sign Up</button>
  </div>
  <br>
  <br>
  <router-link to="/signin">Already a user? Sign In</router-link>
  <br>
  <br>
  <p>{{error.message}}</p>
</div>
</template>
<script>
import {
  firebaseApp
} from '../firebaseApp'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>
