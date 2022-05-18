<template>
<div>
    <h1 id="new">Add New Task</h1>
    <hr class="top">
    <input type="text" placeholder="What is the name of your task?" id="in" v-model="task">
    <hr class="first">
    <h3 id="ongoing">Task is ongoing</h3>
    <hr class="next">
    <button id="btn" @click="submitTask"> <span id="reg">REGISTER </span></button>
    <img src="@/assets/tick.png" alt="" id="ticker">
  </div>
</template>

<script>

export default {
  props: ['task', 'tasks'],
  data(){
    return{
      editedTask: null,
    }
  },

  methods: {
    submitTask(){
      if(this.task.length === 0) return;
      
      if(this.editedTask === null){
        this.tasks.push({
          name: this.task,
          status: 'In-Progress'
        });
        }else{
          this.tasks[this.editedTask].name =this.task;
          this.editedTask = null;
        }
          this.task = ' ';
    },
  }
}
</script>


<style scoped>

body{ 
margin: 0 !important; 
padding: 0 !important;
}

.sidebar{
width: 241px;
left: 0px;
top: 0px;
bottom: 0px;
position: absolute;
height: 100%;
background: #FFCFCF;
}

#task{
position: absolute;
width: 90px;
height: 26.59px;
left: 30px;
top: 24px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 22.7922px;
line-height: 28px;
color: #756B6B;
}

hr.rule{
position: absolute;
width: 236px;
left: 1px;
top: 70px;
border: 1px solid #B60000;
}

hr.horizontal{
position: absolute;
width: 236px;
left: 1px;
top: 177px;
border: 1px solid #B60000;
}

hr.bottom{
position: absolute;
width: 236px;
left: 1px;
bottom: 52px;
border: 1px solid #B60000;
}

#second{
position: absolute;
width: 40px;
height: 17px;
left: 48px;
top: 90px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #000000;
}

#add{
position: absolute;
width: 98px;
height: 17px;
left: 48px;
top: 141px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #000000;
}

#favour{
position: absolute;
width: 86px;
height: 17px;
left: 9px;
bottom: 14px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #000000;
}

#new{
position: absolute;
width: 171px;
height: 29px;
left: 271px;
top: 28px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #000000;
}

#in{
position: absolute;
width: 192px;
height: 16px;
left: 271px;
top: 111px;
font-family: 'Segoe UI';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
color: #000000;
border: none;
}

#ongoing{
position: absolute;
width: 192px;
height: 16px;
left: 271px;
top: 170px;;
font-family: 'Segoe UI';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 19px;
color: #000000;
border: none;
}

hr.top{
position: absolute;
top: 70px;
left: 271px;
width: 535px;
height: 0px;
border: 1px solid #FAFAFA;
}

hr.first{
position: absolute;
top: 141px;
left: 273px;
width: 538px;
border: 1px solid #B60000;
}

hr.next{
position: absolute;
top: 193px;
left: 273px;
width: 538px;
border: 1px solid #B60000;
}

#btn{
position: absolute;
width: 541px;
height: 30px;
left: 271px;
top: 232px;
background: #B60000;
border-radius: 2.99759px;
border-width: 0;
}

#reg{
width: 66.28px;
height: 16px;
font-family: 'Segoe UI';
font-style: normal;
font-weight: 700;
font-size: 13.4892px;
line-height: 18px;
color: #FAFAFA;
}

#ticker{
position: absolute;
width: 18px;
height: 7px;
top: 164px;
left: 17px;
}
</style>

