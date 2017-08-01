<template>
    <header class="admin-header">
		<el-row>
			<el-col :span="16" :xs="24">
				<el-menu theme="dark" class="el-menu-demo" mode="horizontal" :default-active="activeIndex">
                    <div class="el-menu-item no-hover">
                        <span class="admin-title">车城权限管理系统</span>
                    </div>
                    <el-menu-item index="1">
                        项目管理
                    </el-menu-item>
                    <el-menu-item index="2">
                        组织架构
                    </el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="8" :xs="24">
				<div class="pull-right admin-info">
					<el-dropdown trigger="click">
						<span class="el-dropdown-link userName">
							{{name}}<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
                        <el-button type="text" @click="login">登陆</el-button>
						<el-dropdown-menu>
							<el-dropdown-item>
								<span class="loginout">退出登录</span>
		                    </el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-col>
		</el-row>
	</header>
</template>
<script>
    import {mapGetters} from 'vuex'
    import axios from 'axios'
    export  default{
        computed: mapGetters({
            user: 'auth/user',
        }),
        data(){
            return{
                name: '张阿仁',
                activeIndex: '1'
            }
        },
        methods: {
           login(){
               axios.post('login',{
                    account: 'admin@admin.com',
                    password: 'admin2108'
                }).then(response => {

                    // get body data
                    this.someData = response.body;

                }, response => {
                    // error callback
                });
           }
        }
    }
</script>
<style lang="scss">
    .admin-header{
        padding: 0 30px;
        margin-bottom: 20px;
        background-color: #324157;

        .admin-title{
            color: #bfcbd9;
            line-height: 60px;
            font-size: 18px;
        }
        .no-hover:hover,
        .no-hover{
            border: none;
        }
        .pull-right{
            float: right;
        }
        .admin-info{
            padding: 0 20px;
            color: #bfcbd9;
            line-height: 60px;

            .el-dropdown{
                color: #9d9d9d;
            }
        }
    }
</style>