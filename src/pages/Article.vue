<template>
    <div class="article">
        <navbar/>
        <div class="active-title">
            <div class="title-box">
                <h1>文章</h1>
                <el-divider direction="vertical"></el-divider>
                <p>你的生活美文</p>
            </div>
        </div>
        <div class="active-box">
            <div class="block">
                <el-carousel :interval="5000" class="active-carousel">
                    <el-carousel-item class="carousel-item">
                        <img src="tu2.jpeg" alt="" class="active-img">
                    </el-carousel-item>
                    <el-carousel-item class="carousel-item">
                        <img src="yenefe.jpg" alt="" class="active-img">
                    </el-carousel-item>
                    <el-carousel-item class="carousel-item">
                        <img src="tu3.jpeg" alt="" class="active-img">
                    </el-carousel-item>
                    <el-carousel-item class="carousel-item">
                        <img src="Texture2.jpeg" alt="" class="active-img">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <News/>
        </div>
       <Newest/>
        <div class="active-container">
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
            <SmallArticle/>
        </div>
        <LoadMore/>
        <Backtop/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import News from "@/components/News"
import SmallArticle from "@/components/SmallArticle";
import Backtop from "@/components/Backtop";
import Footer from "@/components/Footer";
import LoadMore from "@/components/LoadMore";
import Newest from "@/components/Newest";

export default {
    name: "Article",
    components: {Newest, LoadMore, Footer, Backtop, SmallArticle, Navbar,News},
}
</script>

<style scoped>

.article {
    background-color: #ecf0f2;
}

.active-title {
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

.active-box {
    width: 1200px;
    margin: 64px auto 0 auto;
    display: flex;
    justify-content: space-between;
}

.block {
    width: 646px;
    height: 320px;
}

.active-carousel {
    width: 646px;
    height: 320px;
}

.carousel-item {
    width: 646px;
    height: 320px;
}

.active-img {
    width: 646px;
    height: 320px;
    border-radius: 8px;
}

.active-container {
    width: 1200px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}



</style>
