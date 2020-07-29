<script context="module">
    import {addMessages} from 'svelte-i18n';

    export async function preload({params, query}) {
        const res = await this.fetch(`video.json`);
        let videos = await res.json();

        videos.forEach((video) => {
            ['en', 'es'].forEach((locale) => addMessages(locale, {[video.id]: video[locale]}));
        });
        // await waitLocale();

        if (res.status === 200) {
            return {videos: videos};
        } else {
            this.error(res.status, data.message);
        }
    }
</script>
<script>
    export let videos;

    import {_} from 'svelte-i18n';

    videos.forEach((video) => {
        ['en', 'es'].forEach((locale) => addMessages(locale, {[video.id]: video[locale]}));
    });

    import {onMount} from 'svelte';
    onMount(() => {
        hbspt.forms.create({
            portalId: "7952284",
            formId: "589e3cf6-edbf-492c-a698-61628dd79aa2",
            target: "#newsletter"
        });
    });
</script>

<div class="container">
    <div class="row row-cols-1 row-cols-md-3">

        {#each videos as video}
            <div class="col mb-4">
                <div class="card h-100">
                    <a href="/video/{video.id}">
                        <img src="https://img.youtube.com/vi/{video.youtube_id}/0.jpg" class="card-img-top"
                             alt="Video: {$_(`${video.id}.title`)}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">{$_(`${video.id}.title`)}</h5>
                    </div>
<!--                    <div class="card-footer">-->
<!--                        <small class="text-muted">{$_(`video.updated`)} {video.date}</small>-->
<!--                    </div>-->
                </div>
            </div>
        {/each}
    </div>
</div>

<div class="container jumbotron">
    <h1>Subscribe to the newsletter</h1>
    <div id="newsletter"></div>
</div>
