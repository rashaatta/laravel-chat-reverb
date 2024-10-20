<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Chats') }}
        </h2>
    </x-slot>

    <div class="py-12" >
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="flex flex-col h-full w-full max-w-md mx-auto bg-white shadow-lg rounded-lg" id="app">
                <!-- Chat Header -->
                <div class="bg-blue-600 text-white p-4 rounded-t-lg">
                    <h2 class="text-lg font-semibold">Chat</h2>
                </div>
                <div class="panel-body">
                    <chat-messages :messages="messages"></chat-messages>
                </div>
                <div class="panel-footer">
                    <chat-form v-on:messagesent="addMessage" :user="{{ Auth::user() }}"></chat-form>
                </div>

            </div>
        </div>
    </div>
</x-app-layout>
