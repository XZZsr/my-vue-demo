<template>
    <div>
        <el-row>
            <h3 class="page-title">我的项目</h3>
        </el-row>
        <el-row>
            <el-button type="primary" size="small" @click="create">新添项目</el-button>
        </el-row>
        <el-row>
            <el-table :data="list" stripe style="width:100%">
                <el-table-column label="序号" type="index" width="80"></el-table-column>
                <el-table-column label="项目名称" prop="name" min-width="180"></el-table-column>
                <el-table-column label="描述" prop="description" min-width="180">
                </el-table-column>
                <el-table-column label="项目管理员" prop="admin.name" min-width="120"></el-table-column>
                <el-table-column label="创建时间" prop="created_at" min-width="180"></el-table-column>
                <el-table-column label="操作" min-width="160">
                    <template scope="scope">
                        <el-button type="text" @click="edit(scope.row.id)">编辑</el-button>
                        <el-button type="text" @click="remove(scope.row.id)">删除</el-button>
                        <el-button type="text">设置</el-button>
                        <!--
                        <el-button size="small" icon="edit" @click="editShow(scope.row.id)" type="primary"></el-button>
                        <el-button size="small" @click="deleteProject(scope.row.id)" icon="delete" type="danger"></el-button>
                        <el-button size="small" @click="setSystem(scope.row.id)" icon="setting" type="info"></el-button>-->
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default{
        computed: mapGetters({
            list: 'projects/list',
        }),
        mounted(){
            this.$store.dispatch('projects/get')
        },
        methods:{
            create(){
                this.$router.push({name: 'projects.create'})
            },
            edit(id){
                this.$router.push({name: 'projects.edit',query:{id}})
            }
        }
    }
</script>
<style lang="scss">

</style>