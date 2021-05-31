<template>
    <div class="code">
        <navbar/>
        <div class="active-title">
            <div class="title-box">
                <h1>编程</h1>
                <el-divider direction="vertical"></el-divider>
                <p>你的生活美文</p>
            </div>
        </div>
        <Newest/>
        <div class="code-container">
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
            <MediumArticle/>
        </div>
        <LoadMore/>
        <Backtop/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import MediumArticle from "@/components/MediumArticle";
import Backtop from "@/components/Backtop";
import Footer from "@/components/Footer";
import LoadMore from "@/components/LoadMore";
import Newest from "@/components/Newest";
export default {
    name: "Code",
    components: {Newest, LoadMore, Footer, Backtop, MediumArticle, Navbar}
}
</script>

<style scoped>

.code {

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

.code-container {
    width: 1200px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}


</style>
