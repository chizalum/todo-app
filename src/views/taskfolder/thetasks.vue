<template>
   <div class="sidebar">
      <h3 id="task">Task<span id="me">Me</span></h3>
      <hr class="rule">
      <div>
      <h4 @click="activeTab = 'tasks'" id="second">Tasks</h4>
      </div>
      <div>
      <h4 @click="activeTab = 'newTask'" id="add">Add new Task</h4>
      </div>
      <hr class="horizontal">
      <hr class="bottom">
      <h4 id="favour">Favour Felix</h4>
    </div>
    <tasks v-if="activeTab === 'tasks'" :tasks = "tasks"></tasks>
    <newtask v-if="activeTab === 'newTask'" :tasks = "tasks" :task = "task"></newtask>
    <addtask v-if="activeTab === 'addTask'" @some-event="callBack"></addtask>
</template>
    
<script>
import tasks from './tasks.vue'
import newtask from './newtask.vue'
import addtask from './addtask.vue'
export default {
  name: 'thetasks',
  components: {
      newtask: newtask,
      tasks: tasks,
      addtask: addtask,
  },
   data(){
    return {
      task: 'huihuh',
      activeTab: 'addTask',
      tasks: [
        {
          name: 'wake up',
          status: "In-Progress",
        },
        {
          name: 'Go jogging',
          status: "In-Progress",
        },
      ],
    }
  },
  methods: {
    callBack : function(updatedScreen){
      this.activeTab = updatedScreen
    }
  }
}
</script>

<style scoped>
#me{
color: #B60000;  
}

.sidebar{
width: 241px;
height: 100%;
left: 0px;
top: 0px;
bottom: 0;
position: fixed;
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
height: 0px;
left: 1px;
top: 70px;
margin-top: 19.41px;
margin-bottom: 20px;
border: 1px solid #B60000;
}

hr.horizontal{
position: absolute;
width: 236px;
height: 0px;
left: 1px;
top: 177px;
margin-top: 20px;
border: 1px solid #B60000;
}

hr.bottom{
position: absolute;
width: 236px;
height: 0px;
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
cursor: pointer;
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
background: none;
border: none;
cursor: pointer;
}

#favour{
position: absolute;
width: 86px;
height: 17px;
left: 9px;
bottom: 14px;
margin-bottom: 14px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #000000;
}

.now{
  margin-left: 70%;
  margin-top: 60%;
}

.wow{
  margin-left: 70%;
  margin-top: 60%;
}

#tick{
position: absolute;
width: 18px;
height: 7px;
top: 113px;
left: 17px;
}

#ticker{
position: absolute;
width: 18px;
height: 7px;
top: 164px;
left: 17px;
}
</style>