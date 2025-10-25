<script lang="ts" setup>
import { useNotification } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { createProForm } from 'pro-naive-ui'
import { computed } from 'vue'
import { $t } from '@/locales/locales'
import { useAppStore } from '@/store/use-app-store'
import { useThemeStore } from '@/store/use-theme-store'
import { useUserStore } from '@/store/use-user-store'
import IKun from './ikun.vue'

const userStore = useUserStore()
const notification = useNotification()
const { title } = storeToRefs(useAppStore())
const { isDark } = storeToRefs(useThemeStore())
const { loginLoading: loading } = storeToRefs(userStore)

const via = computed(() => {
  return isDark.value ? '#07070915' : '#D5E6FF'
})

const form = createProForm({
  onSubmit: async (values) => {
    try {
      const user = await userStore.login(values)
      notification.success({
        title: $t('pages.login.loginSuccess'),
        content: `${$t('pages.login.welcomeBack')}，${user.name}`,
        duration: 2000
      })
    } catch (error: any) {
      notification.error({
        title: $t('pages.login.loginFailed'),
        content: error.message,
        duration: 2000
      })
    }
  }
})
</script>

<template>
  <div class="h-screen w-full flex bg-white dark:bg-dark-900">
    <!-- 左侧区域 -->
    <div class="hidden lg:flex w-[62%] relative overflow-hidden">
      <!-- 主背景 -->
      <div
        :style="{
          background: `linear-gradient(154deg,#07070915 30%,${via} 60%,#07070915 10%)`
        }"
        class="absolute inset-0 blur-2xl"
      />
      <div class="relative z-10 w-full flex flex-col">
        <div class="flex items-center gap-3 p-8">
          <img alt="Logo" class="w-8 h-8" src="@/assets/logo.svg" />
          <span class="text-xl font-semibold text-gray-800 dark:text-gray-100">{{ title }}</span>
        </div>
        <div class="flex-grow flex items-center justify-center">
          <div class="w-[85%] max-w-[480px] mt-[-100px]">
            <div class="login-illustration relative">
              <div class="relative z-10">
                <i-kun />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧登录区域 -->
    <div class="w-full lg:w-[38%] flex flex-col bg-white dark:bg-dark-800">
      <div class="flex-grow flex items-center justify-center">
        <div class="w-full max-w-[420px] px-6 lg:px-12">
          <div class="lg:hidden flex items-center justify-center gap-2 mb-12">
            <img alt="Logo" class="w-8 h-8" src="@/assets/logo.svg" />
            <span class="text-xl font-semibold text-gray-900 dark:text-white">{{ title }}</span>
          </div>

          <div class="mb-12">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {{ $t('pages.login.accountLogin') }}
            </h1>
            <p class="mt-3 text-base text-gray-500 dark:text-gray-400">
              {{ $t('pages.login.subTitle') }}
            </p>
          </div>

          <pro-form :form="form" :loading="loading" label-placement="left" size="large">
            <pro-input :placeholder="$t('pages.login.usernamePlaceholder')" path="email" required />
            <pro-password
              :field-props="{
                showPasswordOn: 'click'
              }"
              :placeholder="$t('pages.login.passwordPlaceholder')"
              path="password"
              required
            />
            <div class="flex justify-between items-center mb-6">
              <pro-checkbox :show-feedback="false" path="rememberMe" size="small">
                {{ $t('pages.login.rememberMe') }}
              </pro-checkbox>
              <n-button text type="primary">
                {{ $t('pages.login.forgotPassword') }}
              </n-button>
            </div>

            <n-button :loading="loading" block size="large" type="primary" @click="form.submit">
              {{ loading ? $t('pages.login.loginButtonLoading') : $t('pages.login.loginButton') }}
            </n-button>
            <div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              {{ $t('pages.login.noAccount') }}
              <n-button class="font-medium" text type="primary">
                {{ $t('pages.login.register') }}
              </n-button>
            </div>
          </pro-form>
        </div>
      </div>
      <div class="p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2025 {{ title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-illustration {
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1));
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
