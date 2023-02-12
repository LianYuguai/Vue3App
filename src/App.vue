<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<!-- <template>
  <IxDrawerProvider ref="drawerProviderRef">
    <IxModalProvider ref="modalProviderRef">
      <IxNotificationProvider>
        <IxMessageProvider>
          <router-view />
        </IxMessageProvider>
      </IxNotificationProvider>
    </IxModalProvider>
  </IxDrawerProvider>
</template> -->
<template>
  <div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100vh;
}
</style>
