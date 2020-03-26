<template>
<div class="home container">
    <img alt="Vue logo" src="../assets/logo.png">
    <Welcome msg="Welcome" />
    <div class="bg-info text-white" style="text-align: left">
        <ol class="ordered-list">
            <li v-for="item in products" :key="item.id"> {{ item.productName }} </li>
        </ol>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import axios from 'axios';
import serverDetails from '../constants';

export default {
    name: 'HomePage',
    components: {
        Welcome
    },
    created() {
      this.getProducts();
    },
    data() {
      return {
        products: null,
      }
    },
    methods: {
        getProducts() {
          this.error = null;
          this.loading = true;
          let url = serverDetails.url;
          let params = serverDetails.params;
          axios.get(`${url}product`, {
                  params
              })
              .then(response => {
                  this.loading = false;
                  this.products = response.data;
                  console.log('promise has resolved', response.data);
              })
              .catch(error => {
                  this.loading = false;
                  this.error = error.toString();
                  console.log(error);
              })
        },
    }
}
</script>

<style scoped>
.home {
    text-align: center;
}
</style>
