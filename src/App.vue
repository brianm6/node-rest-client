<template>
<div id="app" class="container-fluid">
    <!-- <pulse-loader :loading="loading"></pulse-loader> -->
    <div class="row" style="margin-bottom:2em;">
        <div class="col">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
                <span v-show="authorized">
                    | <router-link to="/inventory">Inventory</router-link>
                    | <router-link to="/user">Users</router-link>
                </span>
            </div>
        </div>
        <div class="col float-right">
            <Login />
        </div>
        <!-- <div class="users">
            <div v-if="loading" class="loading">
                Loading...
            </div>

            <div v-if="error" class="error">
                {{ error }}
            </div>
        </div> -->
    </div>
    <router-view />
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Login from '@/components/Login.vue'
import serverDetails from './constants';

export default {
    components: {
        Login
    },
    computed: {
        authorized: () => {
            return true;
        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.getAllUsers();
    },
    data() {
        return {
            loading: false,
            users: null,
            error: null,
        }
    },
    methods: {
        getAllUsers() {
            this.error = this.users = null;
            this.loading = true;
            let url = serverDetails.url;
            let params = serverDetails.params;
            axios.get(`${url}user`, {
                    params
                })
                .then(response => {
                    this.loading = false;
                    this.users = response.data;
                })
                .catch(error => {
                    this.error = error.toString();
                    console.log(error);
                })
        },
    },
    watch: {
        // call again the method if the route changes
        '$route': 'getAllUsers'
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    text-align: left;
    padding-top: 1em;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
