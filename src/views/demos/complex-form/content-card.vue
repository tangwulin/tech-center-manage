<script lang="ts" setup>
import { $t } from '@/locales/locales'
</script>

<template>
  <pro-card :title="$t('pages.demos.complexForm.contentInfo.title')">
    <div class="grid-cols-responsive gap-x-24px">
      <pro-input
        :title="$t('pages.demos.complexForm.contentInfo.contentTitle')"
        path="contentTitle"
        required
      />
      <pro-select
        :field-props="{
          options: [
            { label: $t('pages.demos.complexForm.contentInfo.categoryTech'), value: 'tech' },
            { label: $t('pages.demos.complexForm.contentInfo.categoryProduct'), value: 'product' },
            { label: $t('pages.demos.complexForm.contentInfo.categoryGuide'), value: 'guide' },
            { label: $t('pages.demos.complexForm.contentInfo.categoryOther'), value: 'other' }
          ]
        }"
        :title="$t('pages.demos.complexForm.contentInfo.category')"
        path="category"
        required
      />
      <pro-select
        :field-props="{
          multiple: true,
          options: [
            { label: $t('pages.demos.complexForm.contentInfo.tagVue'), value: 'vue' },
            { label: $t('pages.demos.complexForm.contentInfo.tagReact'), value: 'react' },
            { label: $t('pages.demos.complexForm.contentInfo.tagJavaScript'), value: 'javascript' },
            { label: $t('pages.demos.complexForm.contentInfo.tagTypeScript'), value: 'typescript' },
            { label: $t('pages.demos.complexForm.contentInfo.tagCSS'), value: 'css' },
            { label: $t('pages.demos.complexForm.contentInfo.tagHTML'), value: 'html' }
          ]
        }"
        :title="$t('pages.demos.complexForm.contentInfo.tags')"
        path="tags"
        required
      />
      <pro-date-time
        :field-props="{
          valueFormat: 'yyyy.MM.dd HH:mm:ss'
        }"
        :title="$t('pages.demos.complexForm.contentInfo.publishTime')"
        path="publishTime"
        required
      />
      <pro-form-list
        :title="$t('pages.demos.complexForm.contentInfo.dynamicList')"
        class="col-span-1 md:col-span-1 lg:col-span-2"
        only-show-first-item-label
        path="dynamicList"
        required
      >
        <pro-input
          :title="$t('pages.demos.complexForm.contentInfo.itemName')"
          path="name"
          required
        />
        <pro-digit
          :field-props="{
            min: 0
          }"
          :title="$t('pages.demos.complexForm.contentInfo.itemValue')"
          path="value"
          required
        />
      </pro-form-list>
      <pro-wang-editor
        :title="$t('pages.demos.complexForm.contentInfo.content')"
        class="col-span-1 md:col-span-2 lg:col-span-3"
        path="content"
        required
      />
    </div>
  </pro-card>
</template>
