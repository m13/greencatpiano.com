<script>
    import {_} from 'svelte-i18n';
</script>

<svelte:head>
    <title>Green Cat Piano</title>
</svelte:head>

<br>

<div class="container gaegu">
    <div class="p-3">
        <img class="img-fluid mx-auto d-block rounded" src="img/friends.gif" alt="Responsive image">
    </div>

    <div class="p-3 text-justify">
        <p>{$_('about.1')}</p>
        <p>{$_('about.2')}</p>
        <p>{$_('about.3')}</p>
        <p>{$_('about.4')}</p>
        <p>{$_('about.5')}</p>
    </div>
</div>
