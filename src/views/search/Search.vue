<script>

</script>
<template>
    <div class="search">
        <h2>开始时间：{{ $route.query.startDate }}</h2>
        <h2>结束时间：{{ $route.query.endDate }}</h2>
        <h2 >当前城市：{{ $route.query.currentCity || $route.query.hotSuggests }}</h2>
    </div>
</template>
<style lang="scss" scoped>

</style>