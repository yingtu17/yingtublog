<template>
    <div class="news">
        <img src="oneplus.png" alt="">
        <p class="news-p1">最近我们一直在说 哈苏自然色彩优化，
            在发布后我们也很想把它做一些总结概括，
            说实话很难。因为它并不强烈，甚至没有太多刻意的标记。
            它只是安静和笃定的呈现，无论什么时候都给你一份最应该、
            也是最恰到好处的答案。</p>
        <p class="news-p2">——刘作虎</p>
    </div>
</template>
<script>
export default {
    name: 'News'
}
</script>
<style scoped>

.news {
    width: 530px;
    height: 320px;
    position: relative;
    cursor: pointer;
}

.news img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.news-p1 {
    font-size: 24px;
    color: white;
    padding: 22px 50px 10px 50px;
    line-height: 34px;
    position: absolute;
    top: 0;
    font-family: PingFangSC-Regular;
}

.news-p2 {
    color: white;
    position: absolute;
    right: 60px;
    top: 260px;
    font-family: PingFangSC-Regular;
}

</style>
