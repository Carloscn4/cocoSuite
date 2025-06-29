<template>
    <section class="bg-gray-900">
        <div class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><UFooterColumns :columns="columns" class="p-10 text-gray-300 font-xl ">
            <template #left>
                <div class="flex flex-row">
                    <UIcon name="i-heroicons-building-office" class="w-6 h-6 text-primary-300" />
                    <h2 class="font-bold text-xl text-white">Cocofy</h2>
                </div>

                <p class="text-sm w-2/3 text-gray-400">Comprehensive hotel management system that simplifies your daily operations.
                </p>
                <div>
                </div>
            </template>
        </UFooterColumns>
        <USeparator orientation="horizontal" class="px-10" />
        <p class="text-muted text-sm px-10 py-2"> © {{ new Date().getFullYear() }} Cocofy. All rights reserved</p></div>
        
    </section>

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
                }, {
                    label: 'Company',
                    children: [{
                        label: 'About Us',
                        to: '#'
                    }, {
                        label: 'Contact',
                        to: '#'
                    }, {
                        label: 'Blog',
                        to: '#'
                    }]
                }

            ]

        }
    }
}
</script>
<style lang="">

</style>