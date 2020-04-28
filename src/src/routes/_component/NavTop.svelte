<script>
    import { stores } from '@sapper/app';
    const { page } = stores();
    import {_, locale, locales} from 'svelte-i18n';
    export let segment;
</script>

<nav class="navbar navbar-expand navbar-light justify-content-center">
    <ul class="navbar-nav">
        <li class="nav-item font-weight-bold" class:active="{segment === undefined}">
            <a class="nav-link" href="/?lang={$locale}">{$_('nav.home')}</a>
        </li>
        <li class="nav-item font-weight-bold" class:active="{segment === 'about'}">
            <a class="nav-link" href="/about?lang={$locale}">{$_('nav.about')}</a>
        </li>
        <li class="nav-item font-weight-bold dropdown">
            <a href="#/" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{$_('nav.language')}</a>
            <div class="dropdown-menu">
                {#each $locales as option}
                    <a class="dropdown-item" on:click="{() => ($locale = option)}" href="{$page.path}?lang={option}">{$_(`languages.${option}`)}</a>
                {/each}
            </div>
        </li>
    </ul>
</nav>
