<template>
    <span>
        <a v-if="to" :href="linkUrl" :target="target" :class="linkClasses" @click="handleCheckClick">
            <slot></slot>
        </a>
        <span v-else :class="linkClasses">
            <slot></slot>
        </span>
        <span :class="separatorClasses" v-html="separator" v-if="!showSeparator"></span>
        <span :class="separatorClasses" v-else>
            <slot name="separator"></slot>
        </span>
    </span>
</template>
<script>
    import mixinsLink from '../../mixins/link';
    const prefixCls = 'ay-breadcrumb-item';

    export default {
        name: 'BreadcrumbItem',
        mixins: [ mixinsLink ],
        props: {

        },
        data () {
            return {
                separator: '',
                showSeparator: false
            };
        },
        computed: {
            linkClasses () {
                return `${prefixCls}-link`;
            },
            separatorClasses () {
                return `${prefixCls}-separator`;
            }
        },
        mounted () {
            this.showSeparator = this.$slots.separator !== undefined;
        }
    };
</script>
