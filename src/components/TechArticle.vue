<template>
    <div class="tech-article">
        <img src="tech.jpeg" alt="" class="img-tech">
        <h1>来自北欧的云淡风轻 来自瑞典Urbanears Plattan 2 </h1>
        <p class="tech-p1">感谢尾巴的临幸，第二次参加尾巴的众测。接着说说今天的主角，
            提到&nbsp;Urbanears或许有用户会感到陌生，母公司&nbsp;Zound（尚音电子）。</p>
        <p class="tech-p2">音图 · 10小时前</p>
    </div>
</template>

<script>
export default {
    name: "TechArticle"
}
</script>

<style scoped>

.tech-article {
    width: 384px;
    height: 448px;
    background-color: #fff;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 24px;
}

.tech-article:hover {
    background: #ffffff;
    overflow: hidden;
    display: inline-block;
    -webkit-transition: all .4s linear;
    box-shadow: 0 15px 15px 0 rgba(15, 34, 64, .1);
}

.img-tech {
    width: 100%;
    height: 256px;
    display: block;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
}

.tech-article h1 {
    margin: 20px 20px 10px 20px;
    font-size: 18px;
    color: #333333;
    display: block;
    font-weight: bold;
    padding: 0;
}

.tech-article h1:hover {
    color: #5daadc;
    -webkit-transition: all .4s linear;
}

.tech-p1 {
    font-size: 16px;
    color: #3F3F3F;
    line-height: 20px;
    font-family: PingFangSC-Regular;
    margin: 0 20px 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.tech-p2 {
    margin: 20px;
    font-size: 13px;
    color: #BCBCBC;
    font-family: "Audiowide", sans-serif;
}

</style>
