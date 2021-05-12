<template>
    <el-carousel :interval="4000" type="card" height="510px" class="carousel">
        <el-carousel-item  class="carousel-item">
            <img src="tu2.jpeg" alt="" class="carousel-img">
        </el-carousel-item>
        <el-carousel-item  class="carousel-item">
            <img src="yenefe.jpg" alt="" class="carousel-img">
        </el-carousel-item>
        <el-carousel-item  class="carousel-item">
            <img src="tu3.jpeg" alt="" class="carousel-img">
        </el-carousel-item>
        <el-carousel-item  class="carousel-item">
            <img src="Texture2.jpeg" alt="" class="carousel-img">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: "Carousel",

}
</script>

<style scoped>

.carousel {
    width: 100%;
    height: 550px;
    padding: 100px 0 40px 0;
}

.carousel-item {
    width: 960px;
    height: 510px;
}

.carousel-img {
    width: 960px;
    height: 510px;
    border-radius: 8px;
}

</style>
