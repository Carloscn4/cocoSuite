<template lang="">
    <section id="features" class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                    Everything you need to manage your hotel
                </h2>
                <p
                    class="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                >
                    Our comprehensive hotel management system provides all the
                    tools you need to optimize your daily operations.
                </p>
            </div>

            <div>
                <UPageGrid>
                    <UPageCard
                        v-for="(card, index) in cards"
                        ::key="index"
                        v-bind="card"
                    ></UPageCard>
                </UPageGrid>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: "Intuitive Dashboard",
                    description:
                        "Visualize the status of all your hotel rooms at a glance with our customizable dashboard.",
                    icon: "ri-hotel-line",
                },
                {
                    title: "Availability Control",
                    description:
                        "Easily manage available, occupied, reserved, or maintenance rooms with clear visual indicators.",
                    icon: "ri-hotel-bed-line",
                },
                {
                    title: "Cleaning Status",
                    description:
                        "Monitor which rooms are clean or require cleaning service to maintain the quality of your service.",
                    icon: "ri-task-line",
                },
                {
                    title: "Reservation Management",
                    description:
                        "Manage all your reservations in one place, with automatic alerts and overbooking prevention.",
                    icon: "ri-calendar-check-line",
                },
                {
                    title: "Reports and Statistics",
                    description:
                        "Get valuable data on occupancy, revenue, and hotel performance to make informed decisions.",
                    icon: "ri-bar-chart-line",
                },
                {
                    title: "User Management",
                    description:
                        "Control user access and permissions to ensure that each team member has the right tools.",
                    icon: "ri-user-settings-line",
                },
            ],
        };
    },
};
</script>
<style lang=""></style>
