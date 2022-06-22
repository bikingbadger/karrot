import { createApp } from 'vue'
import App from './App.vue'

// state management and routing
import { createPinia } from 'pinia';
import router from './router'

// css
import './assets/tailwind.css'

const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
