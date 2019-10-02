<template>
<div class="form-inline">
  <div class="form-group">
    <h3>Sign In</h3>
    <input type="text" placeholder="email" class="form-control" v-model="email" />
    <input type="password" placeholder="password" class="form-control" v-model="password" />
    <br>
    <br>
    <button class="btn btn-primary" @click="signIn">Sign In</button>
  </div>
  <br>
  <br>
  <router-link to="/signup">Not a user? Sign up</router-link>
  <br>
  <br>
  <p>{{error.message}}</p>
  <br>
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
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>
