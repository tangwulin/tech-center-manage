<script lang="ts" setup>
import { useProRequest } from '@/composables/use-pro-request'
import { translateOptions } from '@/utils/common'
import { Api } from '../index.api'
import { genderOptions, statusOptions } from '../utils/constants'

const { data: roleOptions } = useProRequest(async () => {
  const res = await Api.roleList()
  return res.data.map((item) => ({
    value: item.id,
    label: item.name
  }))
})
</script>

<template>
  <pro-input
    :title="$t('pages.system.user.username')"
    :tooltip="$t('pages.system.user.usernameTooltip')"
    path="username"
    required
  />
  <pro-input :title="$t('pages.system.user.nickname')" path="nickname" required />
  <pro-radio-group
    :field-props="{
      options: translateOptions(genderOptions)
    }"
    :title="$t('pages.system.user.gender')"
    path="gender"
    required
  />
  <pro-password
    :field-props="{
      showPasswordOn: 'click'
    }"
    :title="$t('pages.system.user.password')"
    path="password"
    required
  />
  <pro-select
    :field-props="{
      options: roleOptions,
      multiple: true
    }"
    :title="$t('pages.system.user.role')"
    path="roleIds"
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
  <pro-input :title="$t('pages.system.user.email')" path="email" />
  <pro-input :title="$t('pages.system.user.phone')" path="phone" />
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
