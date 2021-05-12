<template>
    <div class="container">
        <div class="container-box1">
            <News/>
            <div class="box2">
                <div class="box2-small">
                    <div class="small-box1">
                        <img src="code.png" alt="">
                        <div class="small-box-a">
                            <p># code</p>
                        </div>
                    </div>
                    <div class="small-box2">
                        <img src="tech1.jpg" alt="">
                        <div class="small-box-a">
                            <p># tech</p>
                        </div>
                    </div>
                </div>
                <router-link to="article">
                    <div class="small-box3">
                        <img src="Article.jpg" alt="">
                        <div class="small-box-b">
                            <p># Article</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <router-link to="/soccer">
                <div class="box3">
                    <img src="Soccer.png" alt="">
                    <div class="small-box-c">
                        <p># Soccer</p>
                    </div>
                </div>
            </router-link>
            <div>
            </div>
        </div>

        <div class="container-box2">
            <div class="side-box1">
                <MediumArticle/>
                <SmallArticle/>
                <SmallArticle/>
                <MediumArticle/>
            </div>
            <div class="side-box2">
                <BigArticle/>
            </div>
        </div>
        <div class="container-box3">
            <div class="side-box">
                <div class="tech"><p>tech</p></div>
                <productbox/>
                <productbox/>
                <productbox/>
                <productbox/>
                <div class="more-products">
                    <p class="more-p">更多新品</p>
                    <p class="el-icon-arrow-right"></p>
                </div>
            </div>
            <div class="box-middle">
                <BigArticle/>
            </div>
            <div class="side-box">
                <div class="tech"><p>tech</p></div>
                <productbox/>
                <productbox/>
                <productbox/>
                <productbox/>
                <div class="more-products">
                    <p class="more-p">更多新品</p>
                    <p class="el-icon-arrow-right"></p>
                </div>
            </div>
        </div>
        <div class="container-box2">
            <div class="side-box1">
                <BigArticle/>
            </div>
            <div class="side-box2">
                <SmallArticle/>
                <MediumArticle/>
                <MediumArticle/>
                <SmallArticle/>
            </div>
        </div>
    </div>
</template>

<script>
import BigArticle from "@/components/BigArticle";
import Productbox from "@/components/Productbox";
import News from "@/components/News";
import MediumArticle from "@/components/MediumArticle";
import SmallArticle from "@/components/SmallArticle";

export default {
    name: "Container",
    components: {SmallArticle, MediumArticle, News, Productbox, BigArticle,},
}
</script>

<style scoped>
.container {
    width: 1200px;
    margin: 0 auto;
    position: relative;
}

.container-box1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;

}

.box2 {
    width: 300px;
    height: 320px;
    margin: 0 24px;
}

.box2-small {
    display: flex;
    margin-bottom: 12px;
}

.small-box1 {
    width: 144px;
    height: 200px;
    margin-right: 12px;
    cursor: pointer;
    position: relative;
}

.small-box1 img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.small-box-a {
    border-radius: 16px;
    background-color: black;
    position: absolute;
    right: 6px;
    top: 170px;
    opacity: 0.4;
}

.small-box-a p {
    color: white;
    opacity: 1;
    font-family: "Audiowide", sans-serif;
    padding: 4px 6px;
}

.small-box2 {
    width: 144px;
    height: 200px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
}

.small-box2 img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
}

.small-box3 {
    width: 100%;
    height: 108px;
    cursor: pointer;
    position: relative;
}

.small-box3 img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
}

.small-box-b {
    border-radius: 16px;
    background-color: black;
    position: absolute;
    top: 80px;
    right: 8px;
    opacity: 0.4;
}

.small-box-b p {
    color: white;
    font-family: "Audiowide", sans-serif;
    padding: 4px 6px;
}

.box3 {
    width: 320px;
    height: 320px;
    border-radius: 8px 0 8px 8px;
    cursor: pointer;
    position: relative;
}

.box3 img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
}

.small-box-c {
    border-radius: 16px;
    background-color: black;
    position: absolute;
    top: 292px;
    right: 8px;
    opacity: 0.4;
}

.small-box-c p {
    color: white;
    font-family: "Audiowide", sans-serif;
    padding: 4px 6px;
}
/**/
.container-box2 {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
}

.side-box1 {
    margin-right: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}

.side-box2 {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}

.container-box3 {
    margin-top: 24px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}
.side-box {
    width: 242px;
    height: 560px;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
}

.tech {
    width: 64px;
    opacity: 0.5;
    background-color: grey;
    border-radius: 16px;
    margin: 0 0 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tech p {
    color: white;
    opacity: 1;
    font-family: "Audiowide", sans-serif;
    padding: 4px 6px;
}

.more-products {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 0px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
    color: #A1C6DD;
}

.more-p {
    font-size: 13px;
    line-height: 13px;
    color: #A1C6DD;
    font-weight: bold;
}

.box-middle {
    width: 588px;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}

</style>
