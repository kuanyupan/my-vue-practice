<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <!-- use data binding and vue will look for the friends property in the data -->
    <!-- 這樣就不需要在AllFriends.vue和OnlineFriends.vue裡的data都放friends -->
    <AllFriends :friends="friends" @delete="deleteFriend" />
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
    // Navbar: Navbar = Navbar(ES6)
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
  },
  methods: {
    // take the data pass from AllFriends.vue -> this.$emit('delete', {name}) -> {name}
    deleteFriend(payload) {
      console.log(payload);
      // The filter() method creates an array filled with all array elements that pass a test (provided as a function)
      this.friends = this.friends.filter(friend => {
        // return true -> keep friend inside the array
        // return false -> filter friend out of the array
        return friend.name !== payload.name
      })
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
