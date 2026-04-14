import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#26A69A',
          accent: '#9C27B0',
          error: '#C10015',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    }
  },
  locale: {
    locale: 'ru',
    fallback: 'ru',
    messages: {
      ru: {
        itemsPerPage: 'Строк на странице',
        noDataText: 'Нет данных',
        loadingText: 'Загрузка...',
        dataFooter: {
          itemsPerPageText: 'Строк на странице',
          itemsPerPageAll: 'Все',
          pageText: 'Страница'
        }
      }
    }
  }
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
