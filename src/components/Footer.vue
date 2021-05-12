<template>
    <div class="footer">
        <div class="footer-container">
            <div class="footer-1">
                <img src="yingtu3.png" alt="">
                <div class="footer-icon">
                    <a href="https://wa.me/qr/BRPLFPBHPWWXI1" target="_blank" class="icon">
                        <img src="whatsapp.png" alt="">
                    </a>
                    <a href="https://www.instagram.com/muhiat_?r=nametag" target="_blank" class="icon">
                        <img src="instagram.png" alt="">
                    </a>
                    <div class="demo-image__preview">
                        <el-image
                            style="width: 24px; height: 24px"
                            :src="url"
                            :preview-src-list="srcList">
                        </el-image>
                    </div>
                </div>
                <p class="footer-1-p">©2010-2021 Yingtu.com</p>
            </div>
            <ul class="footer-2">
                <li class="Friends-chain">
                    <p>友链:</p>
                    <a href="https://www.dgtle.com/" target="_blank">数字尾巴</a>
                    <a href="https://www.ruanyifeng.com/" target="_blank">阮一峰</a>
                    <br>
                    <a href="https://www.liaoxuefeng.com/" target="_blank">廖雪峰</a>
                    <a href="https://element.eleme.io/" target="_blank">Element</a>
                </li>
                <li class="Cooperation">
                    <p>商务合作</p>
                    <a href="#">联系我们</a>
                    <br>
                    <a href="#">为什么选择音图？</a>
                </li>
                <li class="about">
                    <p>关于我们</p>
                    <a href="#">关于音图</a>
                    <a href="#">客户端下载</a>
                    <a href="#">软件许可及服务协议</a>
                    <a href="#">隐私保护政策</a>
                    <a href="#">社区准则</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            url: 'weichat.png',
            srcList: [
                'QR-code.png',
            ]
        }
    }
}
</script>

<style scoped>

.footer {
    width: 100%;
    height: 350px;
    background-color: #282d36;
}

.footer-container {
    width: 1200px;
    height: 100%;
    margin: 0 auto 0 auto;
    display: flex;
    justify-content: space-between;
}

.footer-1 {
    height: 190px;
    margin-top: 60px;

}

.footer-1 img {
    width: 150px;
    height: 64px;
}

.footer-icon {
    display: flex;
    margin: 20px 0 10px 0;
}

.demo-image__preview {
    width: 40px;
    height: 40px;
    background: #3d424a;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.icon {
    width: 40px;
    height: 40px;
    background: #3d424a;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 8px;
}

.icon img {
    width: 24px;
    height: 24px;
}

.footer-1-p {
    color: #999;
    font-size: 14px;
}

.footer-2 {
    display: flex;
    justify-content: space-between;
    margin: 60px 0 0 0;
}

.Friends-chain {

}

.Friends-chain p {
    color: white;
    margin-bottom: 18px;
    font-weight: 900;
}

.Friends-chain a {
    display: inline-block;
    margin: 0 15px 15px 0;
    color: #999;
    font-size: 16px;
    font-weight: 900;
}

.Cooperation {
    margin-left: 150px;
}

.Cooperation p {
    color: white;
    margin-bottom: 18px;
    font-weight: 900;
}

.Cooperation a {
    display: inline-block;
    margin: 0 15px 15px 0;
    color: #999;
    font-size: 12px;
}

.about {
    display: flex;
    flex-direction: column;
    margin-left: 150px;
}

.about p {
    color: white;
    margin-bottom: 18px;
    font-weight: 900;
}

.about a {
    display: inline-block;
    margin: 0 15px 15px 0;
    color: #999;
    font-size: 12px;
}



</style>
