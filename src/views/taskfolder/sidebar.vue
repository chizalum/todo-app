<template>
   <div class="sidebar">
      <h3 id="task">TaskMe</h3>
      <hr class="rule">
      <h4 @click="activeTab = 'tasks'" id="second">Tasks</h4>
      <h4 @click="activeTab = 'newTask'" id="add">Add new Task</h4>
      <hr class="horizontal">
      <hr class="bottom">
      <h4 id="favour">Favour Felix</h4>
    </div>
</template>