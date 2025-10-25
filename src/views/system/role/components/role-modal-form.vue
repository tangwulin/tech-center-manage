<script lang="ts" setup>
import { translateOptions } from '@/utils/common'
import { statusOptions } from '../utils/constants'
</script>

<template>
  <pro-input
    :title="$t('pages.system.role.roleName')"
    :tooltip="$t('pages.system.role.roleNameTooltip')"
    path="name"
    required
  />
  <pro-input
    :title="$t('pages.system.role.roleCode')"
    :tooltip="$t('pages.system.role.roleCodeTooltip')"
    path="code"
    required
  />
  <pro-radio-group
    :field-props="{
      options: translateOptions(statusOptions)
    }"
    :title="$t('common.often.status')"
    path="status"
    required
  />
  <pro-textarea
    :field-props="{
      autosize: {
        minRows: 3,
        maxRows: 5
      }
    }"
    :title="$t('common.often.remark')"
    path="remark"
  />
</template>
