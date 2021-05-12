<template>
    <div class="more">
        <div class="load-more">
            <el-button class="load" type="primary" round>加载更多</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadMore"
}
</script>

<style scoped>

.more {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 48px 0 100px 0;
}

.load-more {
    display: flex;
    justify-content: center;
    align-items: center;
}

.load {
    z-index: 1;
    color: white;
    background: #40a9ff;
    outline: none;
    border: none;
    padding: 16px 32px;
}

.load:hover {
    animation: jelly 0.5s;
}

@keyframes jelly {
    0%,
    100% {
        transform: scale(1, 1);
    }

    33% {
        transform: scale(0.9, 1.1);
    }

    66% {
        transform: scale(1.1, 0.9);
    }
}

</style>
