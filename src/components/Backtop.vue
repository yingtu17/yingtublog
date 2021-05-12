<template>
    <div v-show="showTop" @click="toTop" class="Back">
        <i class="el-icon-arrow-up"></i>
    </div>
</template>
<script>
export default {
    name: 'Backtop',
    data (){
        return {
            scrollTop: 0,
            time: 0,
            dParams: 20,
            scrollState: 0
        }
    },
    computed:{
        showTop: function(){
            let value = this.scrollTop>500?true:false;
            return value;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.getScrollTop);
    },
    methods: {
        toTop(e) {
            if(this.scrollState){
                return;
            }
            this.scrollState = 1;
            e.preventDefault();
            // eslint-disable-next-line no-unused-vars
            let distance = document.documentElement.scrollTop || document.body.scrollTop, _this = this;
            this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 10);
        },
        gotoTop(distance){
            this.dParams += 20;
            distance = distance>0 ? distance : 0;
            document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
            if(this.scrollTop < 10){
                clearInterval(this.time);
                this.dParams = 20;
                this.scrollState = 0;
            }
        },
        getScrollTop() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        }
    },
}
</script>
<style scoped>

.Back {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #fff;
    position: fixed;
    right: 100px;
    bottom: 100px;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.40);
    cursor: pointer;
    z-index: 5;
}

.Back:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

</style>
