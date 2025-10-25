<script lang="ts" setup>
import { createProForm } from 'pro-naive-ui'
import { $t } from '@/locales/locales'

const form = createProForm()
</script>

<template>
  <pro-form :form="form">
    <div class="flex flex-col gap-4">
      <pro-card
        :show-collapse="false"
        :title="$t('pages.demos.icon.remoteSearch1')"
        :tooltip="$t('pages.demos.icon.remoteSearchTooltip1')"
      >
        <pro-iconify-icons :title="$t('pages.demos.icon.singleIcon')" path="icon" />
        <pro-iconify-icons
          :field-props="{
            multiple: true
          }"
          :title="$t('pages.demos.icon.multipleIcon')"
          path="icon-multiple"
        />
      </pro-card>
      <pro-card
        :show-collapse="false"
        :title="$t('pages.demos.icon.remoteSearch2')"
        :tooltip="$t('pages.demos.icon.remoteSearchTooltip2')"
      >
        <pro-iconify-icons2 :title="$t('pages.demos.icon.singleIcon')" path="icon" />
        <pro-iconify-icons2
          :field-props="{
            multiple: true
          }"
          :title="$t('pages.demos.icon.multipleIcon')"
          path="icon-multiple"
        />
      </pro-card>
    </div>
  </pro-form>
</template>
