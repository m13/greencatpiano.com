<script>
    import {stores} from '@sapper/app';

    const {page} = stores();
    import {_, locale, locales} from 'svelte-i18n';

    export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-light">
    <div class="navbar-toggler dropdown-menu-right">
        <a class="navbar-brand" href="#">Menu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item font-weight-bold" class:active="{segment === undefined}">
                <a class="nav-link" href="/?lang={$locale}">{$_('nav.home')}</a>
            </li>
            <li class="nav-item font-weight-bold dropdown">
                <a href="#/" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">{$_('nav.videos.title')}</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="/videos/game">{$_('nav.videos.game')}</a>
                    <a class="dropdown-item" href="/videos/song">{$_('nav.videos.song')}</a>
                    <a class="dropdown-item" href="/videos/relax">{$_('nav.videos.relax')}</a>
                </div>
            </li>
            <li class="nav-item font-weight-bold dropdown">
                <a href="#/" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">{$_('nav.game.title')}</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="/game/memory-1">{$_('nav.game.memory-1')}</a>
                    <a class="dropdown-item" href="/game/memory-2">{$_('nav.game.memory-2')}</a>
                </div>
            </li>
            <li class="nav-item font-weight-bold" class:active="{segment === 'about'}">
                <a class="nav-link" href="/about?lang={$locale}">{$_('nav.about')}</a>
            </li>
            <li class="nav-item font-weight-bold dropdown">
                <a href="#/" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">{$_('nav.language')}</a>
                <div class="dropdown-menu">
                    {#each $locales as option}
                        <a class="dropdown-item" on:click="{() => ($locale = option)}"
                           href="{$page.path}?lang={option}">{$_(`languages.${option}`)}</a>
                    {/each}
                </div>
            </li>
        </ul>
    </div>
</nav>
