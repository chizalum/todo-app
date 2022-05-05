<template>
  <div>
     <div>
    <h1 id="task">TaskMe</h1>
    <div class="box">
    <input type="text" placeholder="Username" id="username">
    <input type="text" placeholder="Password" id="password">
    <p id="register">Register as a new user</p>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>

#task{
position: absolute;
width: 120.65px;
height: 35.65px;
left: 50%;
transform: translate(-50%, 0);
top: 83px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 30.555px;
line-height: 37px;
color: #756B6B;
}

.box{
position: absolute;
width: 383px;
height: 251px;
left: 50%;
transform: translate(-50%, 0);
top: 151px;
background: #FFCFCF;
border-radius: 11.9904px;
}

#username{
width: 279.53px;
height: 29.98px;
background: #FFFFFF;
border: 1.4988px solid #B60000;
box-sizing: border-box;
border-radius: 2.99759px;
margin-right: 52.55px;
margin-left: 50.92px;
margin-top: 50.65px;
}

#password{
width: 279.53px;
height: 29.98px;
background: #FFFFFF;
border: 1.4988px solid #B60000;
box-sizing: border-box;
border-radius: 2.99759px;
margin-right: 52.55px;
margin-left: 50.92px;
margin-top: 26.98px;
}

#register{
width: 113px;
height: 16px;
font-family: 'Segoe UI';
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 16px;
color: #000000;
margin-right: 135px;
margin-left: 135px;
margin-top: 63.42px;
margin-bottom: 34px;

}
</style>