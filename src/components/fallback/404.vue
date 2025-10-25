<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'

const vars = useThemeVars()
</script>

<template>
  <svg class="size-full" viewBox="0 0 400 320">
    <defs>
      <linearGradient id="searchGradient404" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop :style="{ 'stop-color': vars.primaryColor }" offset="0%" style="stop-opacity: 1" />
        <stop
          :style="{ 'stop-color': vars.primaryColorHover }"
          offset="100%"
          style="stop-opacity: 1"
        />
      </linearGradient>
      <linearGradient id="cloudGradient404" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop :style="{ 'stop-color': vars.primaryColor }" offset="0%" style="stop-opacity: 1" />
        <stop :style="{ 'stop-color': vars.primaryColor }" offset="100%" style="stop-opacity: 1" />
      </linearGradient>
      <filter id="glow404" height="200%" width="200%" x="-50%" y="-50%">
        <feGaussianBlur result="coloredBlur" stdDeviation="3" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- 装饰性几何图形 -->
    <circle :fill="vars.primaryColor" cx="70" cy="70" opacity="0.06" r="35" />
    <circle :fill="vars.primaryColor" cx="330" cy="250" opacity="0.08" r="25" />
    <polygon :fill="vars.successColor" opacity="0.08" points="330,40 350,60 330,80 310,60" />

    <!-- 现代化搜索场景 -->
    <g transform="translate(200, 160)">
      <!-- 搜索圆圈 -->
      <circle
        cx="0"
        cy="0"
        fill="url(#searchGradient404)"
        filter="url(#glow404)"
        opacity="0.1"
        r="45"
      />
      <circle
        cx="0"
        cy="0"
        fill="none"
        opacity="0.8"
        r="35"
        stroke="url(#searchGradient404)"
        stroke-width="6"
      />
      <circle cx="0" cy="0" fill="#ffffff" opacity="0.1" r="30" />

      <!-- 搜索手柄 -->
      <line
        opacity="0.8"
        stroke="url(#searchGradient404)"
        stroke-linecap="round"
        stroke-width="8"
        x1="25"
        x2="40"
        y1="25"
        y2="40"
      />

      <!-- 内部问号 -->
      <text
        fill="url(#searchGradient404)"
        font-family="Inter, system-ui, sans-serif"
        font-size="32"
        font-weight="700"
        opacity="0.6"
        text-anchor="middle"
        x="0"
        y="8"
      >
        ?
      </text>
    </g>

    <!-- 浮动的云朵和数据 -->
    <g transform="translate(120, 140)">
      <!-- 云朵1 -->
      <ellipse cx="0" cy="0" fill="url(#cloudGradient404)" opacity="0.6" rx="20" ry="12" />
      <ellipse cx="-8" cy="-5" fill="url(#cloudGradient404)" opacity="0.4" rx="12" ry="8" />
      <ellipse cx="8" cy="-3" fill="url(#cloudGradient404)" opacity="0.5" rx="10" ry="6" />
      <!-- 数据点 -->
      <circle :fill="vars.primaryColor" cx="0" cy="0" opacity="0.7" r="2" />
      <circle :fill="vars.primaryColor" cx="-5" cy="-2" opacity="0.6" r="1" />
      <circle :fill="vars.primaryColorHover" cx="6" cy="1" opacity="0.5" r="1" />
    </g>

    <g transform="translate(280, 160)">
      <!-- 云朵2 -->
      <ellipse cx="0" cy="0" fill="url(#cloudGradient404)" opacity="0.5" rx="18" ry="10" />
      <ellipse cx="-6" cy="-4" fill="url(#cloudGradient404)" opacity="0.3" rx="10" ry="6" />
      <ellipse cx="7" cy="-2" fill="url(#cloudGradient404)" opacity="0.4" rx="8" ry="5" />
      <!-- 数据点 -->
      <circle :fill="vars.successColor" cx="0" cy="0" opacity="0.6" r="1.5" />
      <circle :fill="vars.successColorHover" cx="-4" cy="-1" opacity="0.5" r="1" />
    </g>

    <!-- 现代化装饰元素 -->
    <g transform="translate(150, 240)">
      <rect :fill="vars.primaryColor" height="4" opacity="0.3" rx="2" width="30" x="0" y="0" />
      <rect :fill="vars.primaryColor" height="4" opacity="0.2" rx="2" width="20" x="0" y="8" />
      <rect
        :fill="vars.primaryColorHover"
        height="4"
        opacity="0.25"
        rx="2"
        width="25"
        x="0"
        y="16"
      />
    </g>

    <g transform="translate(220, 250)">
      <rect :fill="vars.successColor" height="4" opacity="0.3" rx="2" width="25" x="0" y="0" />
      <rect :fill="vars.successColorHover" height="4" opacity="0.2" rx="2" width="35" x="0" y="8" />
    </g>

    <!-- 底部波浪装饰 -->
    <path
      :fill="vars.primaryColor"
      d="M0,290 Q100,280 200,290 T400,290 L400,320 L0,320 Z"
      opacity="0.05"
    />
  </svg>
</template>
