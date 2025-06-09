<template lang="">
    <UPageSection id="benefits" title="Benefits that will transform your business" orientation="horizontal" :features="benefits" reverse="true">
        <img src="images/benefits-image.webp" width="352"
       alt="Benefits Image" class="rounded-lg shadow-xl w-full mx-auto " />
    </UPageSection>
</template>
<script>
export default {
    data(){
        return{
            benefits: [ {
    title: 'Increase operational efficiency',
    description: 'Reduce time spent on administrative tasks by 40% and focus on providing an excellent experience for your guests.',
    icon: 'ri-speed-line',
  },
  {
    title: 'Maximize your revenue',
    description: 'Optimize room occupancy and avoid losses due to booking errors or poor availability management.',
    icon: 'ri-bar-chart-line',
  },
  {
    title: 'Improve customer satisfaction',
    description: 'Offer faster and more efficient service, with rooms always ready and in perfect condition.',
    icon: 'ri-heart-line',
  },{
    title: 'Make smarter decisions',
    description: 'Use real-time data to optimize prices, plan cleaning staff, and forecast demand.',
    icon: 'ri-brain-line',
  }]
        }
    }
}
</script>