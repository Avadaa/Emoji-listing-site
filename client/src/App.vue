<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
window.$ = require("jquery");
window.JQuery = require("jquery");

export default {
  name: "App"
};
</script>

<style lang="scss">
html {
  // Firefox
  scrollbar-color: rgb(121, 174, 197) rgb(166, 230, 255);
}
body {
  background: rgb(205, 241, 255);
}

#emoji-list,
#emojis {
  background: #cdf1ff;
}

#side-panel {
  background: rgb(166, 230, 255);
}

.emoji {
  border: 2px solid rgb(205, 241, 255);

  &:hover {
    border: 2px solid white;
  }
}
#groups {
  background: rgb(205, 241, 255);
}
#search input {
  background: rgb(205, 241, 255);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  /*Scrollbar*/
  ::-webkit-scrollbar-thumb {
    //background: rgb(0, 135, 189);
    border-radius: 10px;

    &:hover {
      background: rgb(49, 151, 192);
    }
  }

  ::-webkit-scrollbar {
    width: 17px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px 0 10px 10px;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(166, 230, 255);
}

::-webkit-scrollbar-thumb {
  background: rgb(121, 174, 197);
}
</style>
