<template>
    <Header></Header>
    <Banner></Banner>
    <Content></Content>
    <Liangpin></Liangpin>
    <Footer></Footer>
</template>
<script>
import Header from "./header"
import Footer from "./footer"
import Banner from "./banner"
import Content from './content'
import Liangpin from './liangpin.vue'
export default {
    components: {
        Header,
        Footer,
        Banner,
        Content,
        Liangpin
    }
}
</script>

<style scoped>

</style>