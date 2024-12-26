import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './styles.css';
import en from './locales/en.json';
import cn from './locales/cn.json';
import { createI18n } from 'vue-i18n';
const i18n = createI18n({
    locale: 'cn',
    fallbackLocale: 'en',
    messages: {
      en,
      cn
    }
  })
createApp(App).use(i18n).mount('#app')
