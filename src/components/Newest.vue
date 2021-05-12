<template>
    <div class="newest">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" class="release">最新发布</el-menu-item>
            <el-menu-item index="2" class="release">首页推荐</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'Newest',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>

.newest {
    width: 1200px;
    margin: 32px auto 32px auto;
    display: flex;
    justify-content: center;
}

.el-menu-demo {
    width: 192px;
    background-color: #ecf0f2;
    color: grey;
    border-bottom: grey;
}

.release {
    font-weight: 900;
}


</style>
