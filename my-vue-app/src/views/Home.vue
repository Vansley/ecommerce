<template>
    <div class="home">
      <h1>Hello World</h1>
      <Button label="Click Me"></Button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Button from 'primevue/button';
  
  export default defineComponent({
    name: 'HomePage', // Alteração do nome do componente
    components: {
      Button
    }
  });
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  </style>
  