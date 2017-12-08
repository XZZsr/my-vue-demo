<template>
    <img :src="src">
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'png'
            }
        },
        computed: {
            src() {
                return './static/icon/' + this.name + '.' + this.type
            }
        }
    }
</script>