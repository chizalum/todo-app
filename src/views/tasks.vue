<template>
  <div>
    <div>
    <div class="sidebar">
      <h3 id="task">TaskMe</h3>
      <hr class="rule">
      <h4 id="second">Tasks</h4>
      <h4 id="add">Add new Task</h4>
      <hr class="horizontal">
      <hr class="bottom">
      <h4 id="favour">Favour Felix</h4>
    </div>
    <h3 id="third">Tasks</h3>
    <div class="box">
      <h4 id="brush">Brush my hair</h4>
      <h4 class="status" id="stat1">Status: In-Progress</h4>
      <div class="progress">
        <h4 class="move">In-progress</h4>
      </div>
      <div class="done">
        <h4 class="finished">Done</h4>
      </div>
      <h4 id="delete">Delete</h4>
    </div>
    <div class="box2">
      <h4 id="brush">Wash my hair</h4>
      <h4 class="status" id="stat1">Status: Done   </h4>
      <div class="progress">
        <h4 class="move">In-progress</h4>
      </div>
      <div class="done">
        <h4 class="finished">Done</h4>
      </div>
      <h4 id="delete">Delete</h4>
    </div>
  </div>
  </div>
</template>

<style scoped>

.sidebar{
width: 241px;
height: 506px;
left: 0px;
top: 0px;
bottom: 0;
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
height: 0px;
left: 1px;
top: 70px;
margin-top: 19.41px;
margin-bottom: 20px;
border: 2px solid #B60000;
}

hr.horizontal{
position: absolute;
width: 236px;
height: 0px;
left: 1px;
top: 177px;
margin-top: 20px;
border: 2px solid #B60000;
}

hr.bottom{
position: absolute;
width: 236px;
height: 0px;
left: 1px;
bottom: 52px;
border: 2px solid #B60000;
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
margin-bottom: 14px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #000000;
}

#third{
position: absolute;
width: 69px;
height: 29px;
left: 271px;
top: 28px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #000000;
}

.box{
position: absolute;
width: 539px;
height: 128px;
left: 271px;
top: 104px;
background: #FFFFFF;
box-shadow: 0px 4px 4px -1px rgba(0, 0, 0, 0.25);
border-radius: 11.9904px;
}

#brush{
position: absolute;
width: 127px;
height: 22px;
margin-left: 35px;
margin-left: 33px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #756B6B;
}

#stat1{
position: absolute;
width: 126px;
height: 16px;
margin-left: 35px;
margin-top: 59px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #B60000;
}

.progress{
position: absolute;
width: 97px;
height: 34px;
margin-left: 333px;
margin-top: 30px;
background: linear-gradient(0deg, #FFCFCF, #FFCFCF), #FFCFCF;
}

.move{
position: absolute;
width: 75px;
height: 16px;
margin-left: 17px;
margin-top: 10px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #000000;
}

.done{
position: absolute;
width: 97px;
height: 34px;
margin-left: 430px;
margin-top: 30px;
background: linear-gradient(0deg, #B60000, #B60000), #FFCFCF;
}

.finished{
position: absolute;
width: 38px;
height: 16px;
margin-left: 35px;
margin-top: 10px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
}

#delete{
position: absolute;
width: 40px;
height: 16px;
margin-left: 410px;
margin-top: 74px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #756B6B;
}

.box2{
position: absolute;
width: 539px;
height: 128px;
left: 271px;
top: 247px;
background: #FFFFFF;
box-shadow: 0px 4px 4px -1px rgba(0, 0, 0, 0.25);
border-radius: 11.9904px;
}
</style>
