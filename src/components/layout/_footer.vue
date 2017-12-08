<template>
    <div class="base-footer">
        <div class="footer-content">技术来源：https://github.com/XZZsr</div>
    </div>
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
    .base-footer{
        display: table;
        width: 100%;
        height: 100%;
        border-top: 3px double #E5E5E5;
        text-align: center;

        .footer-content{
            display: table-cell;
            vertical-align: middle;
        }
    }
</style>
