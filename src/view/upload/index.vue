<template>
   <div class='index'>
     <input type="text">
   </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'index',
        title: '',
        inject: ['reload'],
        components: {},
        computed: {
            ...mapState({
                // showLoader: state => state.vux.showLoader,
            })
        },
        props: {
            Data: {
                type: Object,
                twoWay: true,
                default: () => ({})
            }
        },
        data() {
            return {
                test: ''
            }
        },
        updated() {
        },
        mounted() {
        },
        methods: {},
        watch: {},
        destroyed() {
        }
    }
</script>

<style scoped lang="less">

</style>
