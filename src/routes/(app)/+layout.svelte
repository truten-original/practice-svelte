<header>
    <nav class="nav">
        <a href="/about" class="nav__item">about</a>
        <a href="/" class="nav__item">main</a>
        <a href="/posts" class="nav__item">posts</a>
    </nav>
</header>
<main class="layout">
    <slot/>
</main>
<style lang="scss">
    :global(*) {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
    }
    :global(h1){
        text-align: center;
    }
    :global(a){
        text-decoration: none;
        color: inherit;

    }
    .nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 50px;
        
        background-color: grey;

        &__item{
            text-decoration: none;
            color: #eee;
            font-size: 20px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .layout{
        min-height: 100vh;
    }
</style>