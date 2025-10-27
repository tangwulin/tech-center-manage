<script lang="ts" setup>
import { ref } from 'vue'
import { NButton, NCard, NDropdown, NGi, NGrid, NIcon, NList, NListItem, NTag } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { usePagination } from 'alova/client'
import type { ApiResultOfQueryVideosForManageResponse } from '@/api/globals'

// 定义视频状态类型
type VideoStatus = 'all' | 'draft' | 'pending' | 'rejected' | 'published'

// 视图模式：list(列表) 或 card(卡片)
const viewMode = ref<'list' | 'card'>('card')

// 当前选中的视频状态分类
const currentStatus = ref<VideoStatus>('all')

const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

// 状态选项
const statusOptions = [
  { label: '全部', key: 'all' },
  { label: '草稿', key: 'draft' },
  { label: '待审核', key: 'pending' },
  { label: '被拒绝', key: 'rejected' },
  { label: '已发布', key: 'published' }
]

// 状态标签配置
const statusTags = new Map<VideoStatus, { type: string; text: string }>([
  ['draft', { type: 'default', text: '草稿' }],
  ['pending', { type: 'warning', text: '待审核' }],
  ['rejected', { type: 'error', text: '被拒绝' }],
  ['published', { type: 'success', text: '已发布' }]
])

type TagTypes = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error' | undefined

const { loading, data, page, pageSize, pageCount } = usePagination(
  // Method实例获取函数，它将接收page和pageSize，并返回一个Method实例
  (page, pageSize) =>
    Apis.Content.QueryVideosForManage({
      data: {
        limit: pageSize,
        offset: (page - 1) * pageSize,
        keyword: null,
        status: currentStatus.value === 'all' ? null : currentStatus.value
      }
    }),
  {
    // 请求前的初始数据（接口返回的数据格式）
    initialData: {
      code: 200,
      message: '操作成功',
      data: {
        total: 0,
        data: []
      }
    },
    initialPage: 1, // 初始页码，默认为1
    initialPageSize: 20, // 初始每页数据条数，默认为20
    total: (dto: ApiResultOfQueryVideosForManageResponse) => dto.data?.total ?? 0,
    data: (dto: ApiResultOfQueryVideosForManageResponse) => dto.data?.data ?? [],
    watchingStates: [currentStatus]
  }
)

function formatNumber(number: number): string {
  if (number >= 10000) {
    return (number / 10000).toFixed(1) + '万'
  }
  return number.toString()
}
</script>

<template>
  <div class="p-24px h-full box-border">
    <!-- 页面标题 -->
    <div class="mb-24px">
      <h1 class="text-2xl font-bold">视频管理</h1>
      <p class="text-gray-500 dark:text-gray-400 mt-2">管理你的视频内容</p>
    </div>

    <n-tabs type="line" animated v-model:value="currentStatus">
      <template #suffix>
        <div class="flex items-center text-gray-500">
          <span v-if="viewMode == 'card'"> 卡片视图 </span>
          <span v-else> 列表视图 </span>
          <n-switch
            :round="false"
            v-model:value="viewMode"
            checkedValue="list"
            uncheckedValue="card"
            class="ml-2"
          >
            <template #checked-icon>
              <n-icon>
                <icon icon="mdi:format-list-bulleted" />
              </n-icon>
            </template>
            <template #unchecked-icon>
              <n-icon>
                <icon icon="mdi:view-grid" />
              </n-icon>
            </template>
          </n-switch>
        </div>
      </template>
      <n-tab v-for="item in statusOptions" :name="item.key" :tab="item.label" />
    </n-tabs>
    <div class="m-4">
      <n-spin :show="loading">
        <n-empty v-if="data.length === 0"> </n-empty>
        <div v-else>
          <!-- 视频列表 -->
          <div v-if="viewMode === 'list'">
            <n-list bordered>
              <n-list-item
                v-for="video in data"
                :key="video.id"
                class="hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div class="flex items-center justify-between">
                  <!-- 视频信息 -->
                  <div class="flex items-center gap-4">
                    <!-- 封面占位 -->
                    <div
                      class="bg-gray-200 dark:bg-gray-700 w-16 h-16 rounded flex items-center justify-center"
                    >
                      <icon icon="mdi:video" class="text-2xl text-gray-400" />
                    </div>
                    <div>
                      <div class="font-medium">{{ video.title }}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <n-time
                          :time="new Date(video.createdAt!)"
                          :type="
                            new Date(video.createdAt!) < sevenDaysAgo ? 'datetime' : 'relative'
                          "
                        />
                        ·
                        <n-tag
                          :type="statusTags.get(video.status as VideoStatus)?.type as TagTypes"
                          size="small"
                        >
                          {{ statusTags.get(video.status as VideoStatus)?.text }}
                        </n-tag>
                      </div>
                    </div>
                  </div>

                  <!-- 统计信息 -->
                  <div class="flex items-center gap-6">
                    <div class="text-center">
                      <div class="text-sm text-gray-500 dark:text-gray-400">播放量</div>
                      <div class="font-medium">{{ formatNumber(video.viewCount!) }}</div>
                    </div>
                    <div class="text-center">
                      <div class="text-sm text-gray-500 dark:text-gray-400">点赞数</div>
                      <div class="font-medium"><!--{{ formatNumber(video.likes) }}--></div>
                    </div>
                    <n-dropdown
                      trigger="hover"
                      :options="[
                        { label: '编辑', key: 'edit' },
                        { label: '删除', key: 'delete' }
                      ]"
                    >
                      <n-button text>
                        <icon icon="mdi:dots-vertical" class="text-xl" />
                      </n-button>
                    </n-dropdown>
                  </div>
                </div>
              </n-list-item>

              <!-- 添加视频项 -->
              <n-list-item class="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                <div class="flex items-center justify-center gap-2 text-primary">
                  <icon icon="mdi:plus" class="text-xl" />
                  <span>上传视频</span>
                </div>
              </n-list-item>
            </n-list>
          </div>

          <!-- 卡片视图 -->
          <div v-else>
            <n-grid :cols="4" item-responsive responsive="screen">
              <!-- 视频卡片 -->
              <n-gi v-for="video in data" :key="video.id" class="p-4">
                <n-card hoverable class="h-full" content-style="padding: 0;">
                  <div class="relative">
                    <!-- 封面 -->
                    <div
                      class="bg-gray-200 dark:bg-gray-700 aspect-video rounded-t flex items-center justify-center"
                    >
                      <icon icon="mdi:video" class="text-4xl text-gray-400" />
                    </div>

                    <!-- 状态标签 -->
                    <div class="absolute top-2 right-2">
                      <n-tag
                        :type="statusTags.get(video.status as VideoStatus)?.type as TagTypes"
                        size="small"
                      >
                        {{ statusTags.get(video.status as VideoStatus)?.text }}
                      </n-tag>
                    </div>
                  </div>

                  <div class="p-3">
                    <div class="font-medium truncate">{{ video.title }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400 mt-2 flex justify-between">
                      <div>
                        <n-time
                          :time="new Date(video.createdAt!)"
                          :type="
                            new Date(video.createdAt!) < sevenDaysAgo ? 'datetime' : 'relative'
                          "
                        />
                      </div>
                      <span>{{ formatNumber(video.viewCount!) }} 播放</span>
                    </div>
                    <div class="flex justify-between mt-3">
                      <span class="text-sm"
                        ><!--{{ formatNumber(video.likes) }}-->
                        点赞</span
                      >
                      <n-dropdown
                        trigger="hover"
                        :options="[
                          { label: '编辑', key: 'edit' },
                          { label: '删除', key: 'delete' }
                        ]"
                      >
                        <n-button text size="small">
                          <icon icon="mdi:dots-vertical" />
                        </n-button>
                      </n-dropdown>
                    </div>
                  </div>
                </n-card>
              </n-gi>

              <!-- 添加视频卡片 -->
              <n-gi class="p-4">
                <n-card
                  hoverable
                  class="h-full cursor-pointer flex flex-col items-center justify-center"
                  content-style="padding: 24px;"
                >
                  <div class="flex flex-col items-center justify-center text-primary">
                    <icon icon="mdi:plus-circle-outline" class="text-4xl" />
                    <div class="mt-2 font-medium">上传视频</div>
                  </div>
                </n-card>
              </n-gi>
            </n-grid>
          </div>
        </div>
      </n-spin>
    </div>
    <div class="flex flex-row-reverse">
      <n-pagination
        v-model:page="page"
        v-model:pageSize="pageSize"
        :pageCount="pageCount"
        show-size-picker
        :page-sizes="[10, 20, 50, 100]"
      />
    </div>
  </div>
</template>

<style scoped>
/* 使用 UnoCSS 类名，无需额外编写 CSS */
</style>
