<template>
    <UFooterColumns :columns="columns" class="p-10">
        <template #left>
            <div class="flex flex-row"><UIcon name="i-heroicons-building-office" class="w-6 h-6 text-primary-500" />
            <h2 class="font-bold text-xl">Cocofy</h2></div>
            <div><p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
</div>
        </template>
    </UFooterColumns>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                {
                    label: "Products",
                    children: [
                        {
                            label: 'Features',
                            to: '#features',
                        },
                        {
                            label: 'Benefits',
                            to: '#benefits',
                        },
                        {
                            label: 'Pricing',
                            to: '#pricing',
                        },
                        {
                            label: 'Contact',
                            to: '#contact',
                        }
                    ]
                },{
                    label:'Company',
                    children:[{
                        label:'About Us',
                        to:'#'
                    },{
                        label:'Contact',
                        to:'#'
                    },{
                        label:'Blog',
                        to:'#'
                    }]
                }

            ]

        }
    }
}
</script>
<style lang="">

</style>