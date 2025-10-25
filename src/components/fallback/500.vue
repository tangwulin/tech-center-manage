<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'

const vars = useThemeVars()
</script>

<template>
  <svg class="size-full" viewBox="0 0 400 320">
    <defs>
      <linearGradient id="errorGradient500" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop :style="{ 'stop-color': vars.errorColor }" offset="0%" style="stop-opacity: 1" />
        <stop
          :style="{ 'stop-color': vars.errorColorHover }"
          offset="100%"
          style="stop-opacity: 1"
        />
      </linearGradient>
      <linearGradient id="serverGradient500" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop :style="{ 'stop-color': vars.primaryColor }" offset="0%" style="stop-opacity: 1" />
        <stop :style="{ 'stop-color': vars.primaryColor }" offset="100%" style="stop-opacity: 1" />
      </linearGradient>
      <linearGradient id="warningGradient500" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop :style="{ 'stop-color': vars.warningColor }" offset="0%" style="stop-opacity: 1" />
        <stop
          :style="{ 'stop-color': vars.warningColorHover }"
          offset="100%"
          style="stop-opacity: 1"
        />
      </linearGradient>
      <filter id="errorGlow500" height="200%" width="200%" x="-50%" y="-50%">
        <feGaussianBlur result="coloredBlur" stdDeviation="4" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- 装饰性几何图形 -->
    <circle :fill="vars.errorColor" cx="80" cy="80" opacity="0.06" r="30" />
    <circle :fill="vars.warningColor" cx="320" cy="240" opacity="0.06" r="25" />
    <rect
      :fill="vars.errorColorHover"
      height="15"
      opacity="0.08"
      rx="3"
      transform="rotate(45 337.5 57.5)"
      width="15"
      x="330"
      y="50"
    />

    <!-- 现代化服务器错误场景 -->
    <g transform="translate(200, 160)">
      <!-- 服务器主体 -->
      <rect
        fill="url(#serverGradient500)"
        filter="url(#errorGlow500)"
        height="70"
        opacity="0.7"
        rx="12"
        width="100"
        x="-50"
        y="-35"
      />

      <!-- 服务器面板 -->
      <rect :fill="vars.borderColor" height="8" opacity="0.6" rx="4" width="80" x="-40" y="-25" />
      <rect :fill="vars.borderColor" height="8" opacity="0.6" rx="4" width="80" x="-40" y="-12" />
      <rect :fill="vars.borderColor" height="8" opacity="0.6" rx="4" width="80" x="-40" y="1" />
      <rect :fill="vars.borderColor" height="8" opacity="0.6" rx="4" width="80" x="-40" y="14" />

      <!-- 错误指示灯 -->
      <circle
        cx="-30"
        cy="-21"
        fill="url(#errorGradient500)"
        filter="url(#errorGlow500)"
        opacity="0.8"
        r="3"
      />
      <circle
        cx="-20"
        cy="-21"
        fill="url(#errorGradient500)"
        filter="url(#errorGlow500)"
        opacity="0.8"
        r="3"
      />
      <circle cx="-10" cy="-21" fill="url(#warningGradient500)" opacity="0.6" r="3" />

      <circle
        cx="-30"
        cy="-8"
        fill="url(#errorGradient500)"
        filter="url(#errorGlow500)"
        opacity="0.8"
        r="3"
      />
      <circle cx="-20" cy="-8" fill="url(#warningGradient500)" opacity="0.6" r="3" />
      <circle
        cx="-10"
        cy="-8"
        fill="url(#errorGradient500)"
        filter="url(#errorGlow500)"
        opacity="0.8"
        r="3"
      />
      <!-- 错误波纹效果 -->
      <circle
        cx="15"
        cy="0"
        fill="none"
        opacity="0.3"
        r="25"
        stroke="url(#errorGradient500)"
        stroke-width="2"
      />
      <circle
        cx="15"
        cy="0"
        fill="none"
        opacity="0.2"
        r="32"
        stroke="url(#errorGradient500)"
        stroke-width="1"
      />
    </g>

    <!-- 错误信号和警告 -->
    <g transform="translate(120, 140)">
      <polygon fill="url(#warningGradient500)" opacity="0.6" points="0,-12 10,8 -10,8" />
      <text
        fill="#ffffff"
        font-family="Inter, system-ui, sans-serif"
        font-size="10"
        font-weight="700"
        text-anchor="middle"
        x="0"
        y="3"
      >
        !
      </text>
    </g>

    <g transform="translate(280, 140)">
      <circle cx="0" cy="0" fill="url(#errorGradient500)" opacity="0.5" r="12" />
      <text
        fill="#ffffff"
        font-family="Inter, system-ui, sans-serif"
        font-size="12"
        font-weight="700"
        text-anchor="middle"
        x="0"
        y="4"
      >
        ×
      </text>
    </g>

    <!-- 现代化数据流中断效果 -->
    <g transform="translate(150, 240)">
      <rect :fill="vars.errorColor" height="3" opacity="0.4" rx="1.5" width="20" x="0" y="0" />
      <rect :fill="vars.errorColor" height="3" opacity="0.3" rx="1.5" width="15" x="25" y="0" />
      <rect :fill="vars.errorColor" height="3" opacity="0.2" rx="1.5" width="10" x="45" y="0" />

      <rect :fill="vars.warningColor" height="3" opacity="0.3" rx="1.5" width="25" x="0" y="6" />
      <rect :fill="vars.warningColor" height="3" opacity="0.2" rx="1.5" width="20" x="30" y="6" />
    </g>
    <path
      :fill="vars.primaryColor"
      d="M0,290 Q100,280 200,290 T400,290 L400,320 L0,320 Z"
      opacity="0.05"
    />
  </svg>
</template>
