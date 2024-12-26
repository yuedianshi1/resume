
<script setup>
import { ref } from 'vue'
import { NDivider } from 'naive-ui'
import { NButton } from 'naive-ui'

import Card from './components/card.vue';
import { exp } from './data.js'
import { useI18n } from 'vue-i18n';
import weChat from './components/icons/weChat.vue';
const { locale } = useI18n(); 
const lang = ref('cn')

function switchLang() {
  lang.value = lang.value === 'en' ? 'cn' : 'en';
  locale.value = lang.value;
  
}
</script>
<template >
         <header class="header">
          <h1 class="name">{{ $t('name') }}</h1>
          
          <div class="details">{{ $t('location') }} | {{ $t('phone') }} | <weChat class="weChat"/>: {{ $t('wx') }}</div>
          <div class="intent">{{ $t('intent') }}</div>
          
        </header>
        <main>
              <Card :title="$t('skills')" :text="$t('skills_items')" /><n-divider />
              
              <Card :title="$t('experience')" />
      <div class= "experience_items">
      <div
        v-for="(item, index) in $tm('experience_items', { returnObjects: true })"
        :key="index"
        class="experience-item"
      >
   
        <n-divider class="job-title" title-placement="left">
          {{ item.jobTitle }}
  </n-divider>
        <div class="location">{{ item.location }}</div>
        <div class="date">{{ item.date }}</div>
        <div class="text">{{ item.text }}</div>
        
      </div>
    
    </div>
    <n-divider />
      
    <Card :title="$t('education')" />
    
    <div  v-for="(item, index) in $tm('education_items', { returnObjects: true })"
        :key="index"
        class="education_items">
        <Card :date="item.date" :text="item.text" :location="item.location" />
    </div>
        </main>
        
        
        <NButton   text-color='#000000' color='#ffffff'size='tiny' class="langSwitch" @click="switchLang">
          {{lang === 'cn'? "Switch to English":"切换到中文"}}
        </NButton>
</template>
<style>
.weChat{
  width: 3%;
}


.lang_switch{
  width:500px;
  
}
.location {
  font-size: 14px;
 
}
.date {
  font-size: 12px;
 
}
.text {
  font-size: 14px;
 
}

.name{
  font-size:48px;
}
.experience_items {
  margin-left: 20px;
}

.header {

  width: 100%;
  padding: 10px;

}

.details {
  font-size: 14px;

  margin-top: 15px;
}

.intent{
  font-size: 14px;
}
</style>