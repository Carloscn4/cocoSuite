<template lang="">
    <RoomStats />
    <div>
        <h1 class="text-2xl font-bold mb-4">Dashboard Overview</h1>
        <p>Welcome to the dashboard! Here you can find an overview of your room statistics, bookings, and more.</p>
    </div>
</template>
<script>
import RoomStats from './Dashboard/RoomStats.vue';

export default {
    components: {
        RoomStats,
    },

}
</script>