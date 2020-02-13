<template>
    <div id="all-friends">
        <h2>All Friends</h2>
        <!-- need key value property(attribute) with a unique value that can identify -->
        <div v-for="(friend, index) in friends" :key="index">
            <span>{{ friend.name }}</span>
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
    }
}
</script>
