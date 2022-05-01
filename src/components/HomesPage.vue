<template>
    <div>
        <div v-if="!getUsername">
            <LoginPage/>
            </div>
        <div v-else>
            <ChatPage/>
        </div>
    </div>
</template>

<script>
import LoginPage from "./LoginPage.vue";
import ChatPage from "./ChatPage.vue";
import {mapGetters} from "vuex";

export default {
    name:"HomePage",
    components:{
        LoginPage,
        ChatPage
    },
    computed : {...mapGetters(["getUsername"])},

}
</script>

<style scoped>
</style>