<template>
    <div>
        <h1>your team choose number: {{ $route.params.teamId }}</h1>
        <button @click="goHome">Go Home</button>
    </div>
</template>
<script>
    export default{
        watch: {
            '$route' (to,from) {
                // alert(from.params.teamId);
                // alert(to.params.teamId);
            }
        },
        created(){
            // alert(this.$route.params.teamId);
        },
        methods: {
            goHome () {
                console.log(this.$router);
                this.$router.push('/');
            }
        }
    }
</script>