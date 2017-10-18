<template>
    <div>
        {{item}}
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        computed: {
            ...mapGetters({
                item: 'test/item',
            }),
        },
        mounted(){

        },
        methods:{

        },
        watch:{
            $route(){
                console.log(this.$route.query)
            }
        }
    }
</script>
<style lang="scss">

</style>
