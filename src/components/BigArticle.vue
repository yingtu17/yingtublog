<template>
    <div class="big">
        <img src="CampNou.jpeg" alt="">
        <div class="title">
            <p>Soccer</p>
        </div>
        <div class="big-box">
            <p class="big-box-pa">在诺坎普 看台是与球场一起呼吸的。</p>
            <p class="big-box-pb">加泰罗尼亚的巴萨球迷最引以为自豪的一句话：在诺坎普，看台是与球场一起呼吸的。</p>
        </div>
        <div class="big-box1">
            <p>03.05.2021</p>
            <div class="big-box2">
                <p>音图 · </p>
                <p> 10小时前</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BigArticle'
}
</script>
<style scoped>

.big {
    width: 588px;
    height: 600px;
    background-color: #fff;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
}

.big:hover {
    color: gray;
    -webkit-transition: all 0.5s linear;
    -moz-box-shadow: 0px 10px 20px #808080;
    -webkit-box-shadow: 0px 10px 20px #808080;
    box-shadow: 0px 10px 20px #808080;
}

.big img {
    width: 100%;
    height: 60%;
    border-radius: 8px 8px 0 0;
    display: block;
    object-fit: cover;
}

.big-box {
    padding: 32px 48px 64px 48px;
}

.big-box-pa {
    font-size: 26px;
    color: #0F2540;
    font-weight: bolder;
    margin: 0 0 10px 0;
    line-height: 36px;
}

.big-box-pa:hover {
    color: #5daadc;
    -webkit-transition: all 0.5s linear;
}

.big-box-pb {
    font-size: 16px;
    color: #BCBCBC;
    line-height: 24px;
}

.title {
    border-radius: 16px;
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(0,0,0,0.5);
    opacity: 0.8;
}

.title p {
    color: white;
    font-family: "Audiowide", sans-serif;
    padding: 4px 6px;
}

.big-box1 {
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
}


.big-box1 p {
    font-size: 16px;
    color: #BCBCBC;
    line-height: 24px;
    font-family: "Audiowide", sans-serif;
}

.big-box2 {
    display: flex;
}


</style>
