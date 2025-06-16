import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faProjectDiagram, faBriefcase, faCode, faEnvelope, faArrowRight, faExternalLinkAlt, faServer } from '@fortawesome/free-solid-svg-icons'; // Asegúrate de añadir faArrowRight, etc.
import { faGithub, faGolang, faPython } from '@fortawesome/free-brands-svg-icons';

library.add(faHome, faProjectDiagram, faBriefcase, faCode, faEnvelope, faArrowRight, faExternalLinkAlt, faGithub, faGolang, faPython, faServer);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');