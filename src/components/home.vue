<template>
  <div>hello {{user}}!</div>
</template>
<script>
  export default {
    name: "home",
    data(){
      return{
        user:sessionStorage.user,
      }
    }
  }
</script>
