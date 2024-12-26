<template> 

    <div class = "jobtitle">
      {{jobTitle}}
    </div>
  <div class = "location">{{location}}</div>
  <div  class = "date" >{{date}}</div>
  <div  class = "txt">{{ text }}</div>

  </template>
 
  <script>


  export default {
    
    props: {
      jobTitle:String,
      location: String,
      date: String,
      text: String
    }
  }


  </script>

<style scoped>
.jobtitle {
  font-size: 18px;
  
}

.location {
  font-size: 14px;
 
}
.date {
  font-size: 12px;
 
}
.txt {
  font-size: 14px;
 
}
</style>