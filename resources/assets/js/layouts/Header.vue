<template>
   <header>
       <b-navbar class="js-navbar-scroll navbar-dark pt-2 pt-lg-7" fixed="top" toggleable="lg" variant="faded">
           <div class="container-fluid">
               <b-navbar-brand href="/">
                   Bulveyz
               </b-navbar-brand>

               <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

               <b-collapse is-nav id="nav_collapse">
                   <b-navbar-nav class="ml-auto mt-1 mt-lg-0">
                       <b-nav-item class="mr-3" href="/">Home</b-nav-item>
                       <b-nav-item class="mr-3" href="/catalog">Catalog</b-nav-item>
                       <b-nav-item class="mr-3" href="/order">Order</b-nav-item>
                       <b-nav-item href="/contacts">Contacts</b-nav-item>
                   </b-navbar-nav>

                   <b-navbar-nav class="ml-auto mt-1 mt-lg-0">
                       <b-nav-item class="mr-3" href="/login">Login</b-nav-item>
                   </b-navbar-nav>

                   <div>
                       <b-button class="btn-jump" variant="primary" href="/register">SignUp Free</b-button>
                   </div>
               </b-collapse>
           </div>
       </b-navbar>
   </header>

</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>