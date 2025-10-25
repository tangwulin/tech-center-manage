<script lang="ts" setup>
import { $t } from '@/locales/locales'
</script>

<template>
  <pro-card :title="$t('pages.demos.complexForm.basicInfo.title')">
    <div class="grid-cols-responsive gap-x-24px">
      <pro-input
        :title="$t('pages.demos.complexForm.basicInfo.username')"
        path="username"
        required
      />
      <pro-input :title="$t('pages.demos.complexForm.basicInfo.email')" path="email" required />
      <pro-input :title="$t('pages.demos.complexForm.basicInfo.phone')" path="phone" required />
      <pro-select
        :field-props="{
          options: [
            { label: $t('common.status.male'), value: 'male' },
            { label: $t('common.status.female'), value: 'female' },
            { label: $t('common.status.other'), value: 'other' }
          ]
        }"
        :title="$t('pages.demos.complexForm.basicInfo.gender')"
        :tooltip="$t('pages.demos.complexForm.basicInfo.gender')"
        path="gender"
        required
      />
      <pro-date
        :field-props="{
          valueFormat: 'yyyy.MM.dd'
        }"
        :title="$t('pages.demos.complexForm.basicInfo.birthDate')"
        path="birthDate"
        required
      />
      <pro-radio-group
        :field-props="{
          options: [
            { label: $t('common.often.enable'), value: 'active' },
            { label: $t('common.often.disable'), value: 'inactive' }
          ]
        }"
        :title="$t('pages.demos.complexForm.basicInfo.status')"
        path="status"
        required
      />
    </div>
  </pro-card>
</template>
