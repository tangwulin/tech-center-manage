<script lang="ts" setup></script>

<template>
  <pro-input :title="$t('pages.system.menu.routePath')" path="path" required />
  <pro-input :title="$t('pages.system.menu.menuTitleLabel')" path="meta.title" required />
  <pro-input :title="$t('pages.system.menu.menuI18nKey')" path="meta.titleI18nKey" />
  <pro-iconify-icons :title="$t('pages.system.menu.menuIcon')" path="meta.icon" />
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
</template>
