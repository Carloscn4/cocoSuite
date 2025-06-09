<template lang="">
    <section id="pricing" class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                    Plans tailored to your business
                </h2>
                <p
                    class="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                >
                    Choose the plan that best suits your needs and start
                    optimizing your hotel management today. Choose the plan that
                    best suits your hotel's needs, regardless of its size.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <UPricingPlan
                    v-for="plan in plans"
                    :key="plan.name"
                    :title="plan.name"
                    :description="plan.description"
                    :price="plan.price"
                    :features="plan.features"
                    :button="{
                        label: 'Choose Plan',
                        color: plan.popular ? 'primary' : 'neutral',
                        variant: plan.popular ? 'solid' : 'soft',
                    }"
                    :highlight="plan.popular"
                    :badge="plan.popular ? 'Popular' : ''"
                    :scale="plan.popular"
                />
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            plans: [
                {
                    name: "Basic",
                    price: "$29/month",
                    description: "Ideal for small hotels with up to 20 rooms",
                    features: [
                        "Access to basic features",
                        "Email support",
                        "1 user account",
                    ],
                    popular: false,
                },
                {
                    name: "Standard",
                    price: "$49/month",
                    description:
                        "Perfect for medium-sized hotels with up to 100 rooms",
                    features: [
                        "All Basic features",
                        "Priority email support",
                        "Up to 5 user accounts",
                    ],
                    popular: true,
                },
                {
                    name: "Premium",
                    price: "$99/month",
                    description:
                        "Designed for large hotels with unlimited rooms",
                    features: [
                        "All Standard features",
                        "Phone support",
                        "Unlimited user accounts",
                    ],
                    popular: false,
                },
            ],
        };
    },
};
</script>
<style lang=""></style>
