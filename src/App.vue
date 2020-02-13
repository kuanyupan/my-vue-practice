<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <!-- use data binding and vue will look for the friends property in the data -->
    <!-- 這樣就不需要在AllFriends.vue和OnlineFriends.vue裡的data都放friends -->
    <AllFriends :friends="friends" />
    <OnlineFriends :friends="friends"/>
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'

export default {
  name: 'app',
  components: {
    Navbar,
    AllFriends,
    OnlineFriends
  },
  data () {
    return {
      title: 'My first Vue app~~ Yeah!',
      friends: [
                {name: "kuanyu", online: false},
                {name: "angela", online: true},
                {name: "baal", online: false},
                {name: "megan", online: true}
              ]
    }
  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
