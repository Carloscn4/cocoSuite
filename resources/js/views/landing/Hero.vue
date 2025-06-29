<template lang="">
    <div class="w-full">
        <section class="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
           <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row items-center gap-12">
                    <div class="flex-1 space-y-8">
                        <UBadge color="primary" class="px-3" variant="soft">#1 Hotel Managment Software</UBadge>
                        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            <span class="text-primary-500">Simply and efficient</span> room management    
                        </h1>
                        <p class="text-xl text-gray-600 dark:text-gray-300">
                            Optimize your hotel management with our intuitive system that allows you to control room status, reservations, and cleaning in real time.
                        </p>
                        <div class ='flex flex-wrap gap-4'>
                            <UButton
                                color="primary"
                                variant="solid"
                                label="Get Started Now"
                                class="px-6 py-3 text-lg font-semibold cursor-pointer"
                            />
                            <UButton
                                color="info"
                                variant="soft"
                                label="Watch Demo"
                                class="px-6 py-3 text-lg font-semibold cursor-pointer"
                            />

                        </div>
                    </div>
                    
                        <div class="flex-1">
                            <img src="images/hero-image.webp" alt="Hero Image" class="rounded-lg shadow-xl" />
                        </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>