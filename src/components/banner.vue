<template>
	<div class="outer0">
        <ul class="imgList">
            <li style="z-index:1;"><a  href=""><img src="../assets/images/img11.png" alt=""></a></li>
            <li><a  href=""><img src="../assets/images/img12.png" alt=""></a></li>
            <li ><a  href=""><img src="../assets/images/img13.png" alt=""></a></li>
        </ul>
        <div class="focusList">
            <span class="active"></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
img{
    vertical-align: middle;
}
.outer0{
    position: relative;
    width: 1226px;
    height: 460px;
    margin: 60px auto;
}
.outer0 .imgList li{
    position: absolute;
    top:50%;
    margin-top: -235px;
    width: 1226px;
    height: 460px;
}
.outer0 .imgList li img{
    width: 100%;
    height: 100%;
}
.outer0 .focusList{
    position: absolute;
    bottom: 50px;
    right: 600px;
    z-index: 2;
}
.outer0 .focusList span{
    float: left;
    width: 20px;
    height: 4px;
    background-color: #C78A49;
    border-radius: 1px;
    margin-left: 10px;
}
.outer0 .focusList span.active{
    background-color: #fff;
}
</style>