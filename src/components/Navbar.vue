<template>
    <div class="navbar">
        <router-link to="/home">
            <div class="navbar-box1">
                <h1 class="font-effect-emboss">yingtu</h1>
            </div>
        </router-link>
        <div class="navbar-box2">
            <router-link to="/home"><p>Home</p></router-link>
            <p>Code</p>
            <router-link to="article"><p>Article</p></router-link>
            <router-link to="tech"><p>Sci-tech</p></router-link>
            <div class="dropdown">
                <router-link to="/soccer"><p class="dropbtn">Soccer</p></router-link>
                <div class="dropdown-content">
                    <p href="#">Barca</p>
                    <p href="#">Player</p>
                    <p href="#">arena</p>
                </div>
            </div>
        </div>
        <div class="search">
            <input type="text" name="search" placeholder="Search...">
        </div>
    </div>
</template>

<script>



export default {
    name: "Navbar"
}
</script>

<style scoped>

.navbar {
    width: 100%;
    height: 60px;
    background-color: #2f3030;
    position: fixed;
    top: 0;
    opacity: 0.9;
    display: flex;
    justify-content: space-between;
    z-index: 999999;
}

.navbar-box1 {
    width: 136px;
    height: 60px;
    margin-left: 100px;
    display: flex;
    justify-content: center;
}

.navbar-box1 h1 {
    color: #9a9a9a;
    font-size: 32px;
    font-family: "Sofia", sans-serif;
    padding-top: 6px;
    cursor: pointer;
}

/**/
.navbar-box2 {
    width: 700px;
    height: 60px;
    color: #989898;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.navbar-box2 p {
    font-size: 20px;
    color: #9C9C9C;
    padding: 20px 24px;
    font-family: "Audiowide", sans-serif;
}

.navbar-box2 p:hover {
    background-color: #111;
}

.dropbtn {
    font-size: 20px;
    color: #9C9C9C;
    padding: 20px 24px;
    font-family: "Audiowide", sans-serif;
    text-decoration: none;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 128px;
    box-shadow: 0px 8px 16px 0px #2f3030;
    z-index: 999;
}


.dropdown p,dropbtn {
    display: inline-block;
    z-index: 999;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content p {
    color: #9C9C9C;
    display: block;
    text-align: left;
}

/**/

.search {
    width: 300px;
}

input[type=text] {
    width: 90px;
    height: 59px;
    box-sizing: border-box;
    border: 2px solid white;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 0 12px 10px;
    -webkit-transition: width 0.9s ease-in-out;
    transition: width 0.9s ease-in-out;
}

input[type=text]:focus {
    width: 100%;
}

</style>
