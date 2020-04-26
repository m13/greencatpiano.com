<script>
    export let segment;
</script>

<nav class="navbar navbar-expand navbar-light justify-content-center">
    <ul class="navbar-nav">
        <li class="nav-item font-weight-bold" class:active="{segment === undefined}">
            <a class="nav-link" href="/">HOME</a>
        </li>
        <li class="nav-item font-weight-bold" class:active="{segment === 'about'}">
            <a class="nav-link" href="/about">ABOUT</a>
        </li>
    </ul>
</nav>
