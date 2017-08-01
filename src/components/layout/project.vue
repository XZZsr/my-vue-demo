<template>
    <div class="project">
        <el-row>
            <el-menu mode="horizontal">
                <el-menu-item index="1">
                    <router-link :to="{name:'project.detail',query:{id}}">项目简介</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link :to="{name:'permissions.index',query:{id}}">菜单管理</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link :to="{name:'role',params:{id: id}}">角色管理</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link :to="{name:'users',params:{id: id}}">用户管理</router-link>
                </el-menu-item>
                <el-menu-item index="5">
                    <router-link :to="{name:'token',params:{id: id}}">开发者配置</router-link>
                </el-menu-item>
            </el-menu>
        </el-row>
        <el-row>
            <router-view></router-view>
        </el-row>
    </div>
</template>

<script>
	export default{
		computed:{
            id(){
                return this.$route.query.id || 0
            }
        }
	}
</script>

<style lang="scss" scoped>
    .project {
        .router-link-active{
        color: #20A0FF !important;
        }
    }
    .el-menu--horizontal .el-menu-item a, .el-menu--horizontal .el-menu-item a:hover{
        display: block;
        text-decoration: none;
    }
	.el-menu--horizontal .el-menu-item{
		cursor: default !important;
	}
</style>
