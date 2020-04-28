<script>
    export let video;

    import {addMessages, _, dictionary} from 'svelte-i18n';
    import {onMount} from 'svelte';

    onMount(() => {
        FB.XFBML.parse(document.getElementById('fb-comments'));
    });

    ['en', 'es'].forEach((locale) => addMessages(locale, {[video.id]: video[locale]}));
</script>

<svelte:head>
    <title>Green Cat Piano: {$_(`${video.id}.title`)}</title>
</svelte:head>

<br>

<div class="container gaegu">
    <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/{video.youtube_id}?rel=0"
                title="{$_(`${video.id}.title`)}" allowfullscreen></iframe>
    </div>
    <div class="text-right text-muted">
        {$_(`video.updated`)} {video.date}
    </div>

    <div class="p-3 text-justify">
        {@html $_(`${video.id}.body`)}
    </div>
</div>

<div class="container border border-success">
    <div class="fb-comments" data-href="https://greencatpiano.com/video/{video.id}" data-numposts="5" data-width="100%"></div>
</div>

<br>
