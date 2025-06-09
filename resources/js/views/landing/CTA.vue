<template>
    <UPageCTA title="Optimize your hotel management today"
        description="Join hundreds of hotels that have already transformed their operations with our management system."
        variant="soft" :links="links" />


</template>
<script>
export default {
    data() {
        return {
            links: [{
                label: 'Start free trial',
                color: 'neutral'
            }, {
                label: 'Request demo',
                color: 'neutral',
                variant: 'subtle',
                trailingIcon: 'i-lucide-arrow-right'
            }]
        }
    }

}
</script>
<style lang="">

</style>