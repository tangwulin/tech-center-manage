<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'

const vars = useThemeVars()
</script>

<template>
  <svg class="size-full" viewBox="0 0 400 320">
    <defs>
      <linearGradient id="lockGradient403" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop :style="{ 'stop-color': vars.warningColor }" offset="0%" style="stop-opacity: 1" />
        <stop
          :style="{ 'stop-color': vars.warningColorHover }"
          offset="100%"
          style="stop-opacity: 1"
        />
      </linearGradient>
      <linearGradient id="shieldGradient403" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop :style="{ 'stop-color': vars.primaryColor }" offset="0%" style="stop-opacity: 1" />
        <stop
          :style="{ 'stop-color': vars.primaryColorHover }"
          offset="100%"
          style="stop-opacity: 1"
        />
      </linearGradient>
      <filter id="shadow403" height="200%" width="200%" x="-50%" y="-50%">
        <feDropShadow dx="0" dy="4" flood-color="#000000" flood-opacity="0.1" stdDeviation="8" />
      </filter>
    </defs>

    <!-- 装饰性几何图形 -->
    <circle :fill="vars.primaryColor" cx="80" cy="80" opacity="0.08" r="40" />
    <circle :fill="vars.warningColor" cx="320" cy="240" opacity="0.08" r="30" />
    <rect
      :fill="vars.successColor"
      height="20"
      opacity="0.1"
      rx="4"
      transform="rotate(45 340 60)"
      width="20"
      x="330"
      y="50"
    />

    <!-- 主要插图 - 现代化盾牌和锁 -->
    <g transform="translate(200, 180)">
      <!-- 盾牌背景 -->
      <path
        d="M-50,-40 Q-50,-60 -30,-60 L30,-60 Q50,-60 50,-40 L50,20 Q50,40 30,50 L0,60 L-30,50 Q-50,40 -50,20 Z"
        fill="url(#shieldGradient403)"
        filter="url(#shadow403)"
        opacity="0.9"
      />

      <!-- 盾牌高光 -->
      <path
        d="M-40,-50 Q-40,-55 -25,-55 L25,-55 Q40,-55 40,-50 L40,15 Q40,25 30,30 L0,35 L-30,30 Q-40,25 -40,15 Z"
        fill="url(#shieldGradient403)"
        opacity="0.3"
      />

      <!-- 锁图标 -->
      <g transform="translate(0, -10)">
        <!-- 锁体 -->
        <rect
          fill="url(#lockGradient403)"
          filter="url(#shadow403)"
          height="20"
          rx="4"
          width="24"
          x="-12"
          y="0"
        />
        <!-- 锁环 -->
        <path
          d="M-8,-15 Q-8,-25 0,-25 Q8,-25 8,-15"
          fill="none"
          stroke="url(#lockGradient403)"
          stroke-linecap="round"
          stroke-width="4"
        />
        <!-- 锁孔 -->
        <circle cx="0" cy="10" fill="#ffffff" opacity="0.9" r="3" />
        <rect fill="#ffffff" height="6" opacity="0.9" width="2" x="-1" y="10" />
      </g>

      <!-- 装饰性光效 -->
      <circle cx="-20" cy="-20" fill="#ffffff" opacity="0.6" r="3" />
      <circle cx="25" cy="-15" fill="#ffffff" opacity="0.4" r="2" />
      <circle cx="-15" cy="25" fill="#ffffff" opacity="0.5" r="2" />
    </g>

    <!-- 现代化警告元素 -->
    <g transform="translate(120, 120)">
      <circle :fill="vars.warningColor" cx="0" cy="0" opacity="0.2" r="16" />
      <circle :fill="vars.warningColor" cx="0" cy="0" opacity="0.4" r="12" />
      <text
        :fill="vars.warningColor"
        font-family="Inter, system-ui, sans-serif"
        font-size="14"
        font-weight="700"
        text-anchor="middle"
        x="0"
        y="4"
      >
        !
      </text>
    </g>

    <g transform="translate(280, 120)">
      <circle :fill="vars.errorColor" cx="0" cy="0" opacity="0.2" r="14" />
      <circle :fill="vars.errorColor" cx="0" cy="0" opacity="0.4" r="10" />
      <text
        :fill="vars.errorColor"
        font-family="Inter, system-ui, sans-serif"
        font-size="12"
        font-weight="700"
        text-anchor="middle"
        x="0"
        y="3"
      >
        ×
      </text>
    </g>

    <!-- 底部装饰线条 -->
    <path
      :stroke="vars.primaryColor"
      d="M50,280 Q200,270 350,280"
      fill="none"
      opacity="0.3"
      stroke-width="2"
    />
    <path
      :stroke="vars.warningColor"
      d="M80,290 Q200,285 320,290"
      fill="none"
      opacity="0.2"
      stroke-width="1"
    />
    <!-- 底部波浪装饰 -->
    <path
      :fill="vars.primaryColor"
      d="M0,290 Q100,280 200,290 T400,290 L400,320 L0,320 Z"
      opacity="0.05"
    />
  </svg>
</template>
