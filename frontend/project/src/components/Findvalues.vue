<template>
  <div>
    <h1>Test</h1>
    <p>Vue.JS and Bootstrap </p>
    <p> - Please use Bootstrap for CSS</p>
    <p>- Please create Top bar, body, and footer for every page components</p>
    <p>- Please create a new page for showing results from your API finding X, Y, Z value</p>
    <p>- One simple static page for your CV</p>

  
  <div  class="  d-flex align-items-center justify-content-center"
  style="bottom: 0; overflow-y: auto; margin-top: 30px;" >

  <b-card
    title="Find number "
    
    img-alt="Image"
    img-top
    tag="article"
    style="width: 400px;"
    class="mb-2"
  >
    <b-card-text>
      Value : {{ this.data }}
    </b-card-text>

    <b-button @click="getData()" variant="primary">Go value</b-button>
  </b-card>
</div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  data(){
    return{
      data:''
    }
     
  },
 methods:{
  getData(){
    axios
      .get("http://localhost:3000/sequence")
      .then(response => {
        this.data = response.data;
        console.log(this.data)
      })
      .catch(err => {
        console.log(err);
      });
  }

 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
