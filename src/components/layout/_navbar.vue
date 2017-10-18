<template>
    <header class="test-header">
        我是头部
    </header>
</template>
<script>
    import {mapGetters} from 'vuex'
    export  default{
        computed: mapGetters({ //获取vuex的getter

        }),
        data(){
            return{

            }
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    .test-header{
        padding: 30px;
        margin-bottom: 20px;
        color: #fff;
        text-align: center;
        background-color: #324157;
    }
</style>
