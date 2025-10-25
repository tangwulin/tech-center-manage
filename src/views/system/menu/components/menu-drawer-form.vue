<script lang="ts" setup>
import { useInjectProDrawerForm } from 'pro-naive-ui'

const form = useInjectProDrawerForm()!
</script>

<template>
  <pro-input :title="$t('pages.system.menu.routePath')" path="path" required />
  <pro-input :title="$t('pages.system.menu.componentPath')" path="component" />
  <pro-input :title="$t('pages.system.menu.menuTitleLabel')" path="meta.title" required />
  <pro-input :title="$t('pages.system.menu.menuI18nKey')" path="meta.titleI18nKey" />
  <pro-iconify-icons :title="$t('pages.system.menu.menuIcon')" path="meta.icon" />
  <pro-select
    :field-props="{
      clearable: true,
      options: [
        { label: $t('pages.system.menu.embedded'), value: 'iframe' },
        { label: $t('pages.system.menu.externalLink'), value: 'newWindow' }
      ]
    }"
    :title="$t('pages.system.menu.linkMode')"
    path="meta.linkMode"
  />
  <pro-input
    :required="!!form.values.value.meta?.linkMode"
    :title="$t('pages.system.menu.linkAddress')"
    path="meta.link"
  />
  <pro-digit
    :field-props="{
      min: 0
    }"
    :title="$t('pages.system.menu.menuOrder')"
    path="meta.order"
  />
  <pro-checkbox :title="$t('pages.system.menu.hideInMenu')" path="meta.hideInMenu" />
  <pro-checkbox :title="$t('pages.system.menu.hideInTabs')" path="meta.hideInTabs" />
  <pro-checkbox :title="$t('pages.system.menu.hideInBreadcrumb')" path="meta.hideInBreadcrumb" />
  <pro-checkbox :title="$t('pages.system.menu.keepAlive')" path="meta.keepAlive" />
  <pro-checkbox :title="$t('pages.system.menu.pageLayout')" path="meta.layout" />
</template>
