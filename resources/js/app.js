import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


import {createApp} from 'vue';

const app = createApp({
    el: '#app',

    data() {
        return {
            messages: []
        };
    },

    created() {
        this.fetchMessages();
        console.log('fetchMessages');
        Echo.private('chat')
            .listen('MessageSent', (e) => {
                console.log('1111');
                console.log(e.message.message);
                this.messages.push({
                    message: e.message.message,
                    user: e.user
                });
            });
    },

    methods: {
        fetchMessages() {
            axios.get('/messages').then(response => {
                this.messages = response.data;
            });
        },
        addMessage(message) {
            this.messages.push(message);

            axios.post('/messages', message).then(response => {
            });
        }
    }
});

import ChatMessages from "@/components/ChatMessages.vue";
import ChatForm from "@/components/ChatForm.vue";

app.component('chat-messages', ChatMessages);
app.component('chat-form', ChatForm);

app.mount('#app');
