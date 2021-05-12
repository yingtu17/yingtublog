<template>
    <div class="tech">
        <Navbar/>
        <div class="tech-title">
            <div class="title-box">
                <h1>科技</h1>
                <el-divider direction="vertical"></el-divider>
                <p>你的生活科技</p>
            </div>
        </div>
        <div class="tech-box">
            <el-carousel :interval="5000" arrow="never" class="tech-carousel">
                <el-carousel-item class="tech-item">
                    <img src="tu2.jpeg" alt="" class="tech-img">
                </el-carousel-item>
                <el-carousel-item class="tech-item">
                    <img src="tu3.jpeg" alt="" class="tech-img">
                </el-carousel-item>
                <el-carousel-item class="tech-item">
                    <img src="tu5.jpeg" alt="" class="tech-img">
                </el-carousel-item>
                <el-carousel-item class="tech-item">
                    <img src="tu2.jpeg" alt="" class="tech-img">
                </el-carousel-item>
            </el-carousel>
        </div>
        <Newest/>
        <div class="content">
            <TechArticle/>
            <TechArticle/>
            <TechArticle/>
            <TechArticle/>
            <TechArticle/>
            <TechArticle/>
        </div>
        <LoadMore/>
        <Backtop/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Backtop from "@/components/Backtop";
import Footer from "@/components/Footer";
import TechArticle from "@/components/TechArticle";
import LoadMore from "@/components/LoadMore";
import Newest from "@/components/Newest";
export default {
    name: "Tech",
    components: {Newest, LoadMore, TechArticle, Footer, Backtop, Navbar},
}
</script>

<style scoped>

.tech {
    background-color: #ecf0f2;
}

.tech-title {
    width: 100%;
    height: 80px;
    margin-top: 60px;
    background-color: #fff;
}

.title-box {
    width: 1200px;
    height: 80px;
    margin: 0 auto 0 auto;
    display: flex;
    align-items: center;
}

.title-box h1 {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #424E66;
    line-height: 24px;
    display: inline-block;
}

.title-box p {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #666666;
    line-height: 24px;
}

.tech-box {
    width: 1200px;
    height: 510px;
    margin: 0 auto 0 auto;
}

.tech-carousel {
    height: 510px;
}

.tech-item {
    height: 510px;
}

.tech-img {
    width: 100%;
    height: 100%;
}

.content {
    width: 1200px;
    margin: 32px auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}



</style>
