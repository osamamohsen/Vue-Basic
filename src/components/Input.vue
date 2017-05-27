<template>
    <div>
        <h2>Welcome in Vue JS wsd</h2>
        <input type="text" :value="msg" @input="changeMessage"/>
        <h4>{{ message }}</h4>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default{
        props: ['msg'],
        data () {
            return {
                message: ''
            }
        },
        methods: {
            changeMessage(event){
                this.message = event.target.value;
                this.$emit('messageChanged',this.message);
            }
        }
    }
</script>