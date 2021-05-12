<template>
    <div class="product">
        <div class="product-img">
            <img src="tech.jpeg" alt="">
        </div>
        <div class="product-2">
            <p class="product-Brand">来自瑞典Urbanears Plattan 2</p>
            <p class="product-date">上市时间04月15日</p>
            <div class="product-score">暂无评分</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'productbox'
}
</script>
<style scoped>

.product {
    display: flex;
    margin-bottom: 30px;
    cursor: pointer;
}

.product-img img {
    width: 90px;
    height: 90px;
    display: block;
    border-radius: 8px;
    object-fit: cover;
}

.product-2 {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-Brand {
    font-size: 14px;
    color: #0F2540;
    font-family: PingFangHK-Medium;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.product-date {
    font-size: 12px;
    color: #B9B9B9;
    font-family: PingFangHK-Medium;
    padding: 5px 0px;
}

.product-score {
    width: 71px;
    height: 23px;
    border-radius: 12px;
    border: 1px solid #e4e4e4;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #bbbdbf;
    line-height: 23px;
    text-align: center;
}


</style>
