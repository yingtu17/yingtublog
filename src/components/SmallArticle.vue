<template>
    <div class="small">
        <img src="newspaper.jpeg" alt="">
        <div class="title"><p>Article</p></div>
        <p class="small-p1">N80对我来说是意义非凡的一台机器，那年暑假攒了2000块，爬了很多文准备入手这台机器，谁知基友来了一句：诺基亚有什么好玩？来玩WM呀！</p>
        <p class="small-p2">音图 · 10小时前</p>
    </div>
</template>
<script>
export default {
    name: 'smallArticle'
}
</script>
<style scoped>

.small {
    width: 282px;
    height: 288px;
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;
    position: relative;
}

.small:hover {
    color: #989898;
    -webkit-transition: all 0.5s linear;
    -moz-box-shadow: 0px 10px 20px #808080;
    -webkit-box-shadow: 0px 10px 20px #808080;
    box-shadow: 0px 10px 20px #808080;
}

.small img {
    width: 262px;
    height: 170px;
    padding: 10px;
    display: block;
    border-radius: 8px;
    object-fit: cover;
}

.title {
    border-radius: 100px;
    background: rgba(0,0,0,0.5);
    opacity: 0.9;
    position: absolute;
    top: 20px;
    left: 20px;
}

.title p {
    color: white;
    font-family: "Audiowide", sans-serif;
    padding: 4px 6px;
}

.small-p1 {
    width: 262px;
    font-size: 16px;
    padding: 0 10px;
    color: #2D3F56;
    line-height: 26px;
    font-family: PingFangSC-Medium;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    max-height: 48px;
}

.small-p2 {
    padding: 14px 10px 8px 10px;
    font-size: 13px;
    color: #BCBCBC;
    font-family: "Audiowide", sans-serif;
}


</style>
