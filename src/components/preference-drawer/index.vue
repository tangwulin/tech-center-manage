<script lang="tsx" setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { $t } from '@/locales/locales'
import { useAppStore } from '@/store/use-app-store'
import { useLayoutStore } from '@/store/use-layout-store'
import AppPreference from './app-preference.vue'
import LayoutPreference from './layout-preference.vue'
import ThemePreference from './theme-preference.vue'

const itemHeight = 32
const appStore = useAppStore()
const showDropdown = ref(false)
const layoutStore = useLayoutStore()
const dropdownOptions = [
  {
    label: () => $t('common.preference.restoreConfig'),
    key: 'restore'
  }
]
</script>

<template>
  <div>
    <n-drawer
      v-model:show="appStore.showPreferenceDrawer"
      :auto-focus="false"
      :style="{
        '--preference-item-height': itemHeight
      }"
      :width="layoutStore.mobile ? '100%' : 320"
    >
      <n-drawer-content :native-scrollbar="false" :title="$t('common.preference.title')" closable>
        <n-tabs animated type="segment">
          <n-tab-pane :tab="$t('common.preference.theme.title')" name="theme">
            <theme-preference />
          </n-tab-pane>
          <n-tab-pane :tab="$t('common.preference.layout.title')" name="layout">
            <layout-preference />
          </n-tab-pane>
          <n-tab-pane :tab="$t('common.preference.other')" name="other">
            <app-preference />
          </n-tab-pane>
        </n-tabs>
        <template #footer>
          <n-flex class="w-full" justify="space-between">
            <n-button icon-placement="right" @click="appStore.$resetAllPreference">
              {{ $t('common.preference.resetConfig') }}
              <template #icon>
                <n-dropdown
                  :options="dropdownOptions"
                  @select="appStore.$restoreAllPreference"
                  @update:show="showDropdown = $event"
                >
                  <icon icon="tabler:chevron-down" />
                </n-dropdown>
              </template>
            </n-button>
            <n-button type="primary" @click="appStore.$copyAllPreference">
              {{ $t('common.preference.copyConfig') }}
            </n-button>
          </n-flex>
        </template>
      </n-drawer-content>
    </n-drawer>

    <n-float-button
      v-if="layoutStore.mode === 'full-content' || !layoutStore.showNav"
      bottom="40"
      position="fixed"
      right="10"
      @click="appStore.showPreferenceDrawer = true"
    >
      <n-icon>
        <icon icon="uil:setting" />
      </n-icon>
    </n-float-button>
  </div>
</template>

<style scoped>
:deep(.preference-item) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(var(--preference-item-height) * 1px);

  & > span {
    user-select: none;
  }
}
</style>
