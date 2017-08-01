<template>
    <div class="project_detail">
        <el-row>
            <el-card class="box-card">
                <el-col :span="12" :xs="24">
                    <label width="100">项目名称：</label>
                    {{item.name}}
                </el-col>
                <el-col :span="12" :xs="24">
                    <label width="100">管理员：</label>
                    <span v-if="item.admin != undefined">
                        {{item.admin.name}}
                    </span>
                </el-col>
                <el-col :span="12" :xs="24">
                    <label width="100">所属部门：</label>
                    <span v-if="item.admin!=undefined && item.admin.organization != undefined">
                        {{item.admin.organization.name}}
                    </span>
                    
                </el-col>
                <el-col :span="12" :xs="24">
                    <label width="100">创建时间：</label>
                    {{item.created_at}}
                </el-col>
                <el-col :span="24">
                    <label width="100">描述：</label>
                    {{item.description}}
                </el-col>
            </el-card>
        </el-row>
         <el-row>
            <el-table :data="tableData">
                <el-table-column
                prop="date"
                label="日期"
                min-width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="登录用户"
                min-width="180">
                </el-table-column>
                <el-table-column
                prop="roles"
                label="角色"
                min-width="180">
                </el-table-column>
                <el-table-column
                prop="ip"
                label="登陆ip"
                min-width="180">
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        computed: mapGetters({
            item: 'projects/item',
        }),
        data(){
            return{
                tableData: []
            }
        },
        methods:{
            get(){
                let id = this.$route.query.id || 0
                console.log(id)
                this.$store.dispatch('projects/show',{id})
            }   
        },
        mounted(){
           this.get() 
        }
    }
</script>
<style lang="scss">
    .project_detail{
        .box-card{
        }
        .el-card__body{
            overflow: hidden;
        }
    }
</style>