<template>
    <div class="classic">
        <p>经典语录:</p>
        <el-button class="classic-button" plain @click="open">刘嘉</el-button>
        <el-button class="classic-button" plain @click="open1">天下足球</el-button>
        <el-button class="classic-button" plain @click="open2">天下足球</el-button>
        <el-button class="classic-button" plain @click="open3">天下足球</el-button>
        <el-button class="classic-button" plain @click="open4">弗格森</el-button>
        <el-button class="classic-button" plain @click="open5">马拉多纳</el-button>
        <el-button class="classic-button" plain @click="open6">温格</el-button>
        <el-button class="classic-button" plain @click="open7">坎通纳</el-button>
        <el-button class="classic-button" plain @click="open8">兰帕德</el-button>
        <el-button class="classic-button" plain @click="open9">克鲁伊夫</el-button>
        <el-button class="classic-button" plain @click="open10">古利特</el-button>
        <el-button class="classic-button" plain @click="open11">詹姆斯</el-button>
    </div>
</template>

<script>
export default {
    name: "Classic",
    methods: {
        open() {
            this.$notify({
                message: '当时光的列车缓缓驶过酋长球场，32岁的亨利就坐在那里，深情的目光望过去，都是自己22岁的影子，渐行渐远的车辙，' +
                    '默默带走了属于4座城市的喧嚣，却指引着一路跟随的人们去追寻那段逝去的时光，当岁月含泪悄悄转身，' +
                    '37岁的亨利就在那里，深情的目光望去，试图回到原点，那个出发的站台，记起自己背起行囊时，那17岁的样子。',
                showClose: true,
                title:'刘嘉',
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open1() {
            this.$notify({
                message: '因为已经坚持得太久太辛苦，所以梦断时才会更加心痛。',
                title:'天下足球',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open2() {
            this.$notify({
                message: '岁月你别催，该来的我不推；岁月你别催，走远的仍要追。当不得不说再见的时候，挥别的那一刻就如同流水的光阴，谁能抵得过，谁能叹息、奈何。',
                title:'天下足球',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open3() {
            this.$notify({
                message: '他是宠儿，也是弃儿\n' +
                    '他被追逐，也被放逐\n' +
                    '他在失重中重获尊重，更在尊重中获得更多的尊重\n' +
                    '他将离开，也永远不会离开\n' +
                    '他叫大卫 贝克汉姆\n' +
                    '他是一个牵动世界的人，而这次，他是一个动人的球员。',
                title:'天下足球',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open4() {
            this.$notify({
                message: '我的一生永不满足于平局。' +
                    '(I’ve never played for a draw in my life.)',
                title:'弗格森',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open5() {
            this.$notify({
                message: '我的人生非黑即白，从来没有灰色地带。' +
                    '(I am black or white, I\'ll never be grey in my life.)',
                title:'马拉多纳',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open6() {
            this.$notify({
                message: '如果你不相信你能成功，那你真是一点机会都没有了。' +
                    '(If you do not believe you can do it, then you have no chance at all.)',
                title:'温格',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open7() {
            this.$notify({
                message: '我对我的成就感到骄傲，但生活不能建立在回忆之上。' +
                    '(I\'m proud of what I achieved there, but a life built on memories is not much of a life.)',
                title:'坎通纳',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open8() {
            this.$notify({
                message: '进球得来不易。没人会送你进球。' +
                    '(Goals never come easy. No one gives you goals.)',
                title:'兰帕德',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open9() {
            this.$notify({
                message: '足球很简单。但想要踢得简单很难。' +
                    '(Soccer is simple. But it is difficult to play simple.)',
                title:'克鲁伊夫',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open10() {
            this.$notify({
                message: '只有当你退出了，才能停止学习。' +
                    '(You only stop learning when you quit.)',
                title:'古利特',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
        open11() {
            this.$notify({
                message: '当你去超级市场购物，那个收钱的女人也在想，‘失误的守门员’，这种滋味是不好受的。”——1997年，' +
                    '效力利物浦时经常失误的门将大卫-詹姆斯如是说。' +
                    '(I’d been ill and hadn’t trained for a week. Plus I was out of the side for three weeks before that.' +
                    ' So I wasn’t sharp. I got cramp before half-time as well. But I’m not one to make excuses.)',
                title:'詹姆斯',
                showClose: true,
                offset: 100,
                duration: 15000,
                position: 'top-left',
            });
        },
    }
}
</script>

<style scoped>

.classic {
}

.classic-button {
    background-color: #ecf0f2;
    border-color: #ecf0f2;
}

.classic-button:hover {
    background-color: #ecf0f2;
    border-color: #ecf0f2;
}


</style>
