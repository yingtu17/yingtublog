<template>
    <div class="soccer">
        <Navbar/>
        <div class="active-title">
            <div class="title-box">
                <h1>足球</h1>
                <el-divider direction="vertical"></el-divider>
                <p>还记得儿时的梦吗</p>
            </div>
        </div>
        <div class="container">
            <h1 class="Quotations">You have to fight to reach your dream. You have to sacrifice and work hard for it.
                <br>
                为了实现梦想，你必须奋斗；你必须做出牺牲，必须为之努力。</h1>
            <p class="Author">—— 梅西</p>
            <Classic/>
            <Newest/>
            <div class="container-box1">
                <BigArticle/>
                <BigArticle/>
                <BigArticle/>
                <BigArticle/>
                <BigArticle/>
                <BigArticle/>
                <BigArticle/>
                <BigArticle/>
                <BigArticle/>
                <BigArticle/>
            </div>
        </div>
        <LoadMore/>
        <Backtop/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import BigArticle from "@/components/BigArticle";
import Backtop from "@/components/Backtop";
import Footer from "@/components/Footer";
import LoadMore from "@/components/LoadMore";
import Newest from "@/components/Newest";
import Classic from "@/components/Classic";
export default {
    name: "Soccer",
    components: {
        Classic,
        Newest,
        LoadMore,
        Footer,
        Backtop,
        BigArticle,
        Navbar
    },
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    }
}
</script>

<style scoped>


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

.container {
    width: 1200px;
    margin: 32px auto 0 auto;
}

.Quotations {
    text-align: center;
    line-height: 24px;
    font-family: "Trirong", serif;
}

.Author {
    text-align: right;
    margin: 24px 128px 64px 0;
}

.container-box1 {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}



</style>
