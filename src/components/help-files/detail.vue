<template>
    <div class="help-files-detail">
        {{item}}
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
	export default {
        computed: {
            ...mapGetters({
                item: 'helpFiles/item',
            }),
        },
        methods:{
            get(){
                let id = this.$route.query.id || 0
                this.$store.dispatch('helpFiles/show',{id})
            }
        },
        mounted(){
            this.get()
        }
    }
</script>
<style lang="scss">

</style>
