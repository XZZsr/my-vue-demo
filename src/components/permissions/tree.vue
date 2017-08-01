<template>
    <div>
        <el-tree
          :data="list"
          :props="defaultProps"
          @node-click="handleNode"
          highlight-current
		  node-key="id"
		  :default-expanded-keys="setTreeExpanded"
          >
        </el-tree>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        computed: mapGetters({
            list: 'permissions/list',
            defaultProps: 'permissions/defaultProps'
        }),
        methods:{
            get(){
                let id = this.$route.query.id || 0
                this.$store.dispatch('permissions/get',{id})
            }   
        },
        mounted(){
           this.get() 
        }
    }
</script>
<style lang="scss">
    
</style>