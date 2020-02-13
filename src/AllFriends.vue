<template>
    <div id="all-friends">
        <h2>All Friends</h2>
        <!-- need key value property(attribute) with a unique value that can identify -->
        <div v-for="(friend, index) in friends" :key="index">
            <span @click="unfriends(friend.name)">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "AllFriends",
    // recieve properties from App.vue
    props: ['friends'],
    data() {
        return {
            
        }
    },
    methods: {
        unfriends(name) {
            // a method that we can make a custom event from this component
            // 'delete' -> custom event
            // {name} = {name : name} (ES6)
            this.$emit('delete', {name})
        }
    }
}
</script>
