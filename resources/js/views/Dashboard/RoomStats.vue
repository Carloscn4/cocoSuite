<template>
    <div class="max-w-7xl mx-auto mt-10">
        <UPageGrid
            class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4"
        >
            <UPageCard
                v-for="(stat, index) in stats"
                :key="index"
                :color="stat.color"
                variant="soft"
                class="text-center"
            >
                <div class="flex flex-col items-center p-4">
                    <div
                        :class="[
                            'flex',
                            'items-center',
                            'justify-center',
                            'w-10',
                            'h-10',
                            'rounded-full',
                            'mb-3',
                            stat.color,
                        ]"
                    >
                        <UIcon :name="stat.icon" class="text-xl" />
                    </div>
                    <h3 class="text-lg font-semibold">{{ stat.title }}</h3>
                    <p class="text-sm text-gray-600">{{ stat.description }}</p>
                </div>
            </UPageCard>
        </UPageGrid>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stats: [
                {
                    description: "Total Rooms",
                    title: 120,
                    icon: "lucide:home",
                    color: "bg-gray-100 text-gray-600",
                },
                {
                    description: "Available Rooms",
                    title: 85,
                    icon: "lucide:check-circle",
                    color: "bg-green-100 text-green-600",
                },
                {
                    description: "Occupied Rooms",
                    title: 35,
                    icon: "lucide:user",
                    color: "bg-blue-100 text-blue-600",
                },
                {
                    description: "Pending Bookings",
                    title: 10,
                    icon: "lucide:calendar",
                    color: "bg-amber-100 text-amber-600",
                },
                {
                    description: "Maintenance",
                    title: 22,
                    icon: "lucide:wrench",
                    color: "bg-red-100 text-red-600",
                },
                {
                    description: "Clean",
                    title: 85,
                    icon: "lucide:check",
                    color: "bg-emerald-100 text-emerald-600",
                },
                {
                    description: "Dirty",
                    title: 12,
                    icon: "lucide:x",
                    color: "bg-rose-100 text-rose-600",
                },
            ],
        };
    },
};
</script>
