import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // ou qualquer outro tema que preferir
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Cria a instância do Pinia
const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(PrimeVue);

app.mount('#app');
