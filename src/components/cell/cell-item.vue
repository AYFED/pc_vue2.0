<template>
    <div class="ay-cell-item">
        <div class="ay-cell-icon">
            <slot name="icon"></slot>
        </div>
        <div class="ay-cell-main">
            <div class="ay-cell-title"><slot>{{ title }}</slot></div>
            <div class="ay-cell-label"><slot name="label">{{ label }}</slot></div>
        </div>
        <div class="ay-cell-footer">
            <span class="ay-cell-extra"><slot name="extra">{{ extra }}</slot></span>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            extra: {
                type: String,
                default: ''
            },
        }
    };
</script>