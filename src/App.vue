<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import './css/github-md.css'
import './css/github.min.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* padding-top: 70px; */
}
body {
  background-color: #ebebeb;
}
.panel-default > .panel-heading {
    background: white;
    text-align: center;
    font-size: 1.5em;
}
.panel-default > .panel-footer {
    background-color: white;
    padding: 20px;
    color: #959595;
}
.panel {
    border: 0;
    font: 400 14px/1.62 Georgia,"Xin Gothic","Hiragino Sans GB","Droid Sans Fallback","Microsoft YaHei",sans-serif;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
    outline: none;
}
</style>
