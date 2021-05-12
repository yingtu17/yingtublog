<template>
    <div class="medium">
        <img src="tu5.jpeg" alt="">
        <div class="medium-box">
            <div class="title"><p>Code</p></div>
            <div>
                <p class="medium-p1">SpaceX 星际飞船 SN15 试飞成功 顺利着陆</p>
                <p class="medium-p2">音图 · 10小时前</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MediumArticle"
}
</script>

<style scoped>

.medium {
    width: 282px;
    height: 288px;
    border-radius: 8px;
    background-color: #fff;
    cursor: pointer;
    position: relative;
}


.medium img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 8px;
    object-fit: cover;
}

.medium img:hover {

}

.medium-box {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 20px;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border-radius: 8px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.3);
}

.title {
    width: 56px;
    border-radius: 100px;
    background: rgba(0,0,0,0.5);
    opacity: 0.9;
}

.title p {
    color: white;
    font-family: "Audiowide", sans-serif;
    padding: 4px 6px;
}

.medium-p1 {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.medium-p2 {
    margin-top: 10px;
    font-size: 13px;
    color: #FFFFFF;
    line-height: 18px;
    font-family: "Audiowide", sans-serif;
}




</style>
