<template>
  <div class="">
    <h1 id="task">Task<span id="me">Me</span></h1>
    <div class="box">
      <input type="text" placeholder="password" id="password">
      <div class="inline">
      <input type="text" placeholder="username" id="username">
      <input type="text" placeholder="password" id="password2">
      </div>
      <input type="text" placeholder="password" id="password3">
      <div id="register">
      <div id="reggy">
      <router-link :to="{ name: 'thetasks'}" tag="button" id="reg" style="text-decoration: inherit;" ><span >REGISTER</span></router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
#me{
color: #B60000;  
}

.box{
position: absolute;
width: 632px;
height: 251px;
left: 50%;
transform: translate(-50%, 0);
top: 136px;
background: #FFCFCF;
border-radius: 11.9904px;
}

#task{
position: absolute;
width: 120.65px;
height: 35.65px;
left: 50%;
transform: translate(-50%, 0);
top: 39px;
font-family: 'Tahoma';
font-style: normal;
font-weight: 700;
font-size: 30.555px;
line-height: 37px;
color: #756B6B;
}

#password{
width: 562px;
height: 29.98px;
margin-left: 34px;
margin-right: 36px;
margin-top: 40px;
background: #FFFFFF;
border: 1.4988px solid #B60000;
box-sizing: border-box;
border-radius: 2.99759px;
}

#username{
width: 282px;
height: 29.98px;
margin-left: 34px;
margin-top: 18.02px;
background: #FFFFFF;
border: 1.4988px solid #B60000;
box-sizing: border-box;
border-radius: 2.99759px;
}

#password2{
width: 272.36px;
height: 29.98px;
margin-left: 8px;
margin-right: 35.64px;
margin-top: 18.02px; 
background: #FFFFFF;
border: 1.4988px solid #B60000;
box-sizing: border-box;
border-radius: 2.99759px;
}

.inline{
display: inline-block;
}

#password3{
width: 562px;
height: 29.98px;
margin-top: 18.02px;
margin-left: 34px;
margin-right: 36px;
background: #FFFFFF;
border: 1.4988px solid #B60000;
box-sizing: border-box;
border-radius: 2.99759px;
}

#register{
width: 562px;
height: 30px;
margin-left: 34px;
margin-right: 36px;
margin-top: 26.02px;
background: #B60000;
border-radius: 2.99759px;
text-align: center;
}

#reg{
width: 68.86px;
height: 16px;
margin-left: 252.14;
font-family: 'Segoe UI';
font-style: normal;
font-weight: 700;
font-size: 13.4892px;
line-height: 18px;
color: #FAFAFA;
margin-top: 7px;
}

#reggy{
  padding-top: 5px;
}
</style>