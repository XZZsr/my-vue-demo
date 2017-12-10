<template>
    <div class="error-screen">
        <el-card class="box-card">
            <el-row>
                <div class="warn">
                    <div class="title">
                        <my-icon name="500"></my-icon>
                    </div>
                    <div class="sub">对不起，服务器搓搓</div>
                    <div class="step-title">您可以采取以下措施</div>
                    <ul class="step">
                        <li>
                            <my-icon name="cue"></my-icon>
                            检查链接是否错误
                        </li>
                        <li>
                            <my-icon name="cue"></my-icon>
                            <a href="#">联系管理员</a>
                        </li>
                    </ul>
                </div>
            </el-row>
            <el-row>
                <div class="control">
                    <el-button @click="back">返回上一页</el-button>
                    <el-button type="primary" @click="linkIndex">前往首页</el-button>
                </div>
            </el-row>
        </el-card>
    </div>
</template>
<script>
    
	export default {
        methods:{
            back(){
                this.$router.go(-1)
            },
            linkIndex(){
                this.$router.push({name:'demo.demo1'})
            }
        }
    }
</script>
