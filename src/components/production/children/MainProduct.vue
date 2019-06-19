<template>
    <div>
        <table width="600px" cellpadding="10px">
            <tr>
                <td><img src="../assets/juyixi.jpg" alt=""></td>
                <td v-on:click="sheld"><img src="../assets/jubingxi.jpg" alt=""></td>
                <td><img src="../assets/jiaotan.jpg" alt=""></td>
            </tr>
            <tr>
                <td><img src="../assets/chunbeng.jpg" alt=""></td>
                <td><img src="../assets/liqing.jpg" alt=""></td>
                <td><img src="../assets/MTBE.jpg" alt=""></td>
            </tr>
        </table>
        <div id="sheld" @click="quik">   </div>
        <div id="msg">
            <img src="imgSelect" alt="" width="400px">
            {{msg.jubingxi}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'MainProduct',
    data(){
        return{
            msg:{
                juyixi:'具有优良的力学性能和加工性能，耐化学腐蚀、耐低温，可以通过吹塑、挤出或者模塑加工成农用膜、包装膜、电线电缆、管材、中空容器和涂层等。',
                jubingxi: '力学性能均衡、抗冲击、耐化学腐蚀、耐应力开裂、耐磨、易加工，可在110℃长期使用，可用于食品包装、服装包装、重型皮带、绳索、家具、吹塑容器、汽车、光纤电缆等。',
                jiaotan: '干馏煤的固体产物，主要用于高炉冶炼，也可用于铸造、制造电石和半水煤气等。',
                chunbeng: '　煤焦化副产品粗苯提纯产物，是重要的基本化工原料，可用作溶剂、合成苯的衍生物、染料、香料、医药、炸药、橡胶、塑料等。',
                liqing: '焦油深加工产品，主要用于生产铝电解槽的预焙阳极块、制造高功率电极棒等。',
                MTBE: '可作为高辛烷值汽油添加剂，常用于无铅汽油和低铅汽油的调合;也可以重新裂解为异丁烯，作为橡胶及其他化工产品的原料;还可用于甲基丙烯醛和甲基丙烯酸的生产。',
            },
            imgSrc: {
                juyixi: '../assets/juyixi.jpg',
                jubingxi: '../assets/jubingxi.jpg',
                jiaotan: '../assets/jiaotan.jpg',
                chunbeng: '../assets/chunbeng.jpg',
                liqing: '../assets/liqing.jpg',
                MTBE: '../assets/MTBE.jpg'
            }
        }
    },
    methods: {
        sheld: function(){
            var s = document.getElementById("sheld");
            s.style.display = "block";

            var m = document.getElementById("msg");
            m.style.display = "block";
        },
        quik: function(){
            var s = document.getElementById("sheld");
            s.style.display = "none";

            var m = document.getElementById("msg");
            m.style.display = "none";
        }
    }
}
</script>
<style scoped>
.el-col{
position: relative;
width: 300px;
height: 300px;
}
img{
width:300px;
}
img:hover{
box-shadow: -6px -6px 5px #888888;
}
#sheld{
    width: 100%;
    height: 100%;
    background-color: rgb(250, 243, 243);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0.4;
    display: none;
}
#msg{
    width: 500px;
    height: 400px;
    background-color: rgb(241, 232, 234);
    color: black;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 3;
    display: none;
    border-radius: 6px;
    text-align: center;
}
</style>

