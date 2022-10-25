<template>
  <div class="login-box">
    <h1>东电电子</h1>
    <IxForm class="demo-form" :control="formGroup">
      <IxFormItem placeholder="请输入用户名">
        <IxInput control="passport" prefix="user" />
      </IxFormItem>
      <IxFormItem placeholder="请输入密码">
        <IxInput control="password" prefix="lock" :type="passwordVisible ? 'text' : 'password'">
          <template #suffix>
            <IxIcon :name="passwordVisible ? 'eye-invisible' : 'eye'" @click="passwordVisible = !passwordVisible" />
          </template>
        </IxInput>
      </IxFormItem>
      <IxFormItem>
        <IxButton mode="primary" block @click="login">
          登录
        </IxButton>
      </IxFormItem>
      <IxRow>
        <IxCol span="12" class="text-left">
          <a>忘记密码</a>
        </IxCol>
        <IxCol span="12" class="text-right">
          <a>注册</a>
        </IxCol>
      </IxRow>
    </IxForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Validators, useFormGroup } from '@idux/cdk/forms'
import { loginAPI } from '@/api/user'
import { useRouter } from 'vue-router'
import { usePermissionStore } from '@/store'
import { dynamicRouters, initDynamicRoutes } from '@/router/permission'

const { required, minLength, maxLength } = Validators
const router = useRouter()

const formGroup = useFormGroup({
  passport: ['', required],
  password: ['', [required, minLength(6), maxLength(18)]]
})

const login = async () => {
  if (formGroup.valid.value) {
    const res = await loginAPI({
      passport: formGroup.getValue().passport,
      password: formGroup.getValue().password
    })
    console.log('login data', res.data)
    if (res.code !== '0') {
      return
    }
    const permissionStore = usePermissionStore()
    localStorage.setItem('token', res.data.token)
    permissionStore.setRole(String(res.data.user.role))
    const roleRoutes = dynamicRouters.filter((item) => {
      const meta = item.meta as {role: number[]}
      return meta.role.includes(res.data.user.role)
    })
    permissionStore.setRightList(JSON.stringify(roleRoutes))
    initDynamicRoutes(router)
    router.replace('/home')
  } else {
    formGroup.markAsDirty()
  }
}

const passwordVisible = ref(false)
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
