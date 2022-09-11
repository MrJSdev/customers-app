<template>
  <q-menu auto-close>
    <q-list style="min-width: 10rem">
      <!-- Reset Button -->
      <div class="text-right">
        <q-btn
          @click="$emit('update:modelValue', '')"
          no-caps
          dense
          unelevated
          flat
          text-color="secondary"
          label="Reset"
        />
      </div>

      <!-- Options list -->
      <template v-for="option in options" :key="option">
        <slot name="option-item" v-bind="option">
          <q-item
            :class="{ 'text-green': option === modelValue }"
            @click="$emit('update:modelValue', option)"
            clickable
            class="q-py-sm"
            dense
          >
            {{ option }}
          </q-item>
        </slot>
      </template>
    </q-list>
  </q-menu>
</template>

<script lang="ts" setup>
defineProps<{
  options: string[];
  modelValue: string | undefined;
}>()

defineEmits(['update:modelValue'])
</script>
