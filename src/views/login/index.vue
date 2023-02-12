<template>
  <div class="login-box">
    <h1>东电电子</h1>
    <el-form ref="formRef" :model="formData" :rules="rules" class="demo-form">
      <el-form-item prop="username">
        <el-input v-model="formData.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="formData.password" placeholder="请输入密码" :type="passwordVisible ? 'text' : 'password'">
          <template #suffix>
            <div @click="passwordVisible = !passwordVisible">
              <el-icon v-if="!passwordVisible">
                <IEpView />
              </el-icon>
              <el-icon v-else>
                <IEpHide />
              </el-icon>
            </div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">
          登录
        </el-button>
        <el-button type="primary" @click="onTest">
          测试
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

import { loginAPI } from '@/api/user'
import { useRouter } from 'vue-router'
import { usePermissionStore } from '@/store'
import { initDynamicRoutes } from '@/router/permission'
import type { FormInstance, FormRules } from 'element-plus'
// import { ElMessage } from 'element-plus'
const router = useRouter()
const formRef = ref<FormInstance>()

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '密码长度为6~18位', trigger: 'blur' }
  ]
})
const passwordVisible = ref(false)
const formData = reactive({
  username: '',
  password: ''
})

const login = async () => {
  const validate = await formRef.value?.validate()
  if (validate) {
    const res = await loginAPI({
      passport: formData.username,
      password: formData.password
    })
    console.log('login data', res.data)
    if (res.code !== '0') {
      return
    }
    const permissionStore = usePermissionStore()
    localStorage.setItem('token', res.data.token)
    permissionStore.setRole(String(res.data.user.role))
    initDynamicRoutes(router)
    router.replace('/home')
  }
  return false
}
const onTest = () => {
  console.log('test ****')
  ElMessage({ type: 'info', message: 'this is message' })
}
</script>

<style lang="less" scoped>
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 0;
}

.demo-form {
  min-width: 300px;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}
</style>
