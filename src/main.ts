import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from './router'

// Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

// Import app css
import './styles/main.css'
import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
})
app.use(router)
app.mount('#app')