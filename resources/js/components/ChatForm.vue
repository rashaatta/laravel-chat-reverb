<template>
    <div class="flex items-center p-4 bg-gray-200 rounded-b-lg">
        <input type="text" name="message"
               class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
               placeholder="Type a message..." required v-model="newMessage" @keyup.enter="sendMessage">
        <button type="submit" id="btn-chat" @click="sendMessage"
                class="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none">Send
        </button>
    </div>
</template>

<script>
export default {
    props: ['user'],

    data() {
        return {
            newMessage: ''
        }
    },

    methods: {
        sendMessage() {
            this.$emit('messagesent', {
                user: this.user,
                message: this.newMessage
            });

            this.newMessage = ''
        }
    }
}
</script>
