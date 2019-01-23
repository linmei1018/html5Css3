<template>
  <div class="Login">
    <h3 v-if="!login">欢迎登陆！</h3>
    <h3 v-else>请填写一下信息！</h3>
    <Form ref="formCustom" :model="formCustom" :rules="ruleValidate" :label-width="80">
      <FormItem label="用户名:" prop="user">
        <i-input type="text" v-model.trim="formCustom.user" ></i-input>
      </FormItem>
      <FormItem label="密码:" prop="passwd">
        <i-input type="password" v-model.trim="formCustom.passwd" :maxlength="16"></i-input>
      </FormItem>
      <FormItem label="确认密码:" prop="passwdCheck" v-show="login">
        <Input type="password" v-model.trim="formCustom.passwdCheck" :maxlength="16"></Input>
      </FormItem>
      <FormItem v-if="login">
        <Button type="primary" @click="sure('formCustom')">确定</Button>
        <Button @click="handleReset('formCustom')" style="margin-left: 8px">取消</Button>
      </FormItem>
      <FormItem v-else>
        <Button type="primary" @click="handleSubmit('formCustom')">登陆</Button>
        <Button @click="register('formCustom')" style="margin-left: 8px">注册</Button>
      </FormItem>
    </Form>
  </div>

</template>
<script>
  export default {
    name: "login",
    data () {
      //密码校验
      const valideRePassword = (rule, value, callback) => {
        if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入密码不一致'));
        } else {
          callback();
        }
      };
      return {
        login: false ,
        formCustom: {
          user: '',
          passwd: '',
          passwdCheck:''
        },

        ruleValidate: {
          user: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
          passwd: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, message: '密码长度在6~16位之间', trigger: 'blur'},
          ],
          passwdCheck: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度在6~16位之间', trigger: 'blur'},
            { validator: valideRePassword, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      //登陆
      handleSubmit(name){
        this.$refs[name].validate((valid) => {
          if (valid) {
          }else{
            if(this.formCustom.user!==''||this.formCustom.passwd!==''){
              this.$router.push({name:'Home'});
            }
            
          }
        })
      },
      //注册
      register(name){
        this.login = true;
        this.$refs[name].resetFields();
      },
      //确定
      sure(name){
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.login = false;
            this.$refs[name].resetFields();
          }
        })

      },
     //取消
      handleReset (name) {
        this.login = false;
        this.$refs[name].resetFields();
      }
    }
  }
</script>
<style>
  .Login{
    width:20%;
    margin:0 auto;
  }
  h3{
    margin-bottom:20px;
  }
</style>
