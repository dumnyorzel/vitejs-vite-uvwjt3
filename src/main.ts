import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import InputText from 'primevue/inputtext';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-teal/theme.css';
import '/node_modules/primeflex/primeflex.css';

const app = createApp(App);
app.use(PrimeVue);
app.component('InputText', InputText);
app.mount('#app');
