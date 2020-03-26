<template>
<div class="login">
    <!-- <form @submit="checkForm" class="form-inline" id="createAdministrator">
        <div class="row">
            <div class="form-group">
                <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter Email" name="email">
            </div>
            <div class="form-group">
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Entert Password" name="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul class="list-group">
            <li v-for="error in errors" v-bind:key="error" class="list-group-item list-group-item-danger">{{ error }}</li>
        </ul>
    </p> -->
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
    margin-top: 1em;
    margin-right: 1em;
    float: right;
}
</style>

<script>
import axios from 'axios';
import jQuery from 'jquery';

export default {
    name: 'Login',
    mounted() {
        console.log('Component mounted.')
    },
    data() {
        return {
            errors: [],
            email: '',
            password: ''
        }
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];
            if (!this.email) {
                this.errors.push('Email required.');
            }
            if (!this.password) {
                this.errors.push('Password required.');
            } else {
                var formContents = jQuery("#createAdministrator").serialize();
                axios.post('/vuelogin', formContents).then((response, status, request) => {
                    console.log(status, request);
                    alert(response.data.user);
                }, () => {
                    console.log('failed');
                });
            }
            e.preventDefault();
        }
    }
}
</script>
