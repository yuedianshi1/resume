<template> 

    <div class="tit">
      {{title}}
    </div>
    <div class = "content ">
        <div v-if="location" class="location">{{ location }}</div>
        <div v-if="date" class="date">{{ date }}</div>
        <div class = 'txt'> {{text}} </div>
    </div>
    
  </template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '' 
    },
    text: {
      type: String,
      default: '' 
    },
    date: {
      type: String,
      default: '' 
    },
    location: {
      type: String,
      default: '' 
    }
  }
}
</script>

<style scoped>
.tit{
    font-size:24px;
}
.date {
  font-size: 12px;
  color: gray
}
.location {
    font-size:18px;
}
.txt {
  font-size: 14px;
 
}
.content{margin-left: 20px;}
</style>