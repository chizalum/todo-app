<template>
    <div>
      <h1 id="new">Add new Task</h1>
      <hr id="break">
      <figure>
      <img src="@/assets/OBJECTS.png" alt="" id="image">
      <figcaption>Start by creating a new task</figcaption>
      </figure>
      <button id="link" @click="$emit('someEvent', 'newTask')"><span id="linktext">ADD TASK</span></button>
      <img src="@/assets/tick.png" alt="" id="ticker">
    </div>
</template>

<script>
export default {
  name: 'HomeView', 
  components: {},

  data(){
    return {
    }
  },

  methods:{
  }
};

</script>


<style scoped>

#image{
position: absolute;
left: 389.69px;
right: 136px; 
top: 94px;
width: 315px;
height: 275px;
}

#new{
position: absolute;
width: 178.71px;
height: 31px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 25.5294px;
line-height: 31px;
color: #A8A8A8;
left: 271px;
top: 28px;
}

hr#break{
position: absolute;
width: 535px;
height: 0px;
border: 1px solid #FAFAFA;
top: 70px;
left: 271px;
width: 535px;
}

figcaption{
position: absolute;
width: 219px;
height: 18.62px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 15.4135px;
line-height: 19px;
color: #756B6B;
left: 389px;
top: 389px;
width: 315px;
text-align: center;
}

#link{
position: absolute;
width: 168.04px;
height: 38.02px;
background: #B60000;
border-width: 0;
border-radius: 2.99759px;
top: 425.98px;
left: 465.75px;
cursor: pointer;
}

#linktext{
width: 120.51px;
height: 21.56px;
font-family: 'Segoe UI';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 24px;
color: #FAFAFA
}

#ticker{
position: absolute;
width: 18px;
height: 7px;
top: 164px;
left: 17px;
}
</style>