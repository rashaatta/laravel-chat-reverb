<template>
    <ul class="chat">
        <li class="left clearfix" v-for="message in messages">
            <div id="chat" class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
                <!-- Message (sent) -->
                <div class="flex justify-start">

                    <div class="bg-gray-300 text-black rounded-lg p-3 max-w-xs">
                        <div class="flex justify-start">
                            <img src="../../../public/avatar.png" class="rounded" height="25" width="25"/>
                            <strong>{{ message.user.name }}</strong>
                        </div>
                        <p class="padding-left">{{ message.message }}</p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['messages']
};


</script>
<style scoped>
.padding-left {
    padding-left: 25px;
}
</style>
