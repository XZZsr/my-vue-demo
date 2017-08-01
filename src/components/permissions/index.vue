<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" :xs="24">
                <tree></tree>
            </el-col>
            <el-col :span="18" :xs="24">
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import tree from './tree'
    export default{
        computed: mapGetters({
            list: 'projects/list',
        }),
        mounted(){
            
        },
        methods:{
            
        },
        components: {
            tree
        }
    }
</script>
<style lang="scss">

</style>