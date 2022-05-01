<template>
    <div>
        <br/>
        <h5>Welcome {{ getUsername }}!</h5>
        <div v-if="messages.length>0" class="messages">
            <div v-for="message in messages" :key="message.key">
                <div class= "each-message">
                    <b>{{message.username}}</b> : <i>{{message.text}}</i>
                </div>
                <br/><br/>
            </div>
        </div>
        <div v-else class="loading">
            <br/><br/>
           <loader-comp/>
        </div>
        <div class="send-text">
            <div class="row">
                    <div class="input-field col s12">
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea id="icon_prefix2" v-model="tobesent" class="materialize-textarea" placeholder="Type your thoughts"></textarea>
                    </div>
                <div class="col s6" v-if="tobesent.length>0">
                    <button type="submit" class="btn waves-effect waves-light" @click="sendMessage" >Send
                    <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import fire from "../fire";
import LoaderComp from "./LoaderComp.vue";

export default {
    name:"ChatPage",
    data() {
        return{
            messages:[],
            tobesent:""
        }
    },
    computed: {...mapGetters(["getUsername"])},
    methods:{
        sendMessage(e) {
            e.preventDefault();
            if (this.tobesent.length>0){
                const msg = {
                    username:this.getUsername,
                    text: this.tobesent
                }
                fire.database().ref('messages').push(msg);
                this.tobesent="";
            }
        }
    },
    components: {
        LoaderComp
    },
    mounted(){

        const items = fire.database().ref('messages'); 
        console.log(items);
        items.on('value',snap => {
            let data = snap.val();
            let messages=[];  // using local since changing states will re-render the DOM

            Object.keys(data).forEach(key=>{
                messages.push({
                    key:key,
                    username:data[key].username,
                    text:data[key].text
                })
            });
            this.messages= messages;
        });
    }
}
</script>

<style scoped>
.messages{
    width:50%;
    height: 60vh;
    margin: auto;
    border-width: 1px;
    border-color: teal;
    border-style: solid;
    overflow: scroll;
}
.send-text{
    width:50%;
    margin: auto;
}
.row{
    display: flex;
}
button{
    margin-top: 2vh;
}
.each-message{
    margin:5px;
    background-color: rgb(204, 222, 215);
    padding: 5px;
    position: absolute;
    border-radius: 5%;
}

</style>

