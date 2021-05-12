<template>
    <div class="home">
        <Navbar/>
        <Carousel/>
        <Container/>
        <LoadMore/>
        <Footer/>
        <Backtop/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Backtop from "@/components/Backtop";
import LoadMore from "@/components/LoadMore";
export default {
    name: "Home",
    components: {
        LoadMore,
        Backtop,
        Footer,
        Container,
        Carousel,
        Navbar,
    },
}
</script>

<style scoped>

.home {
    width: 100%;
    position: relative;
}

</style>
