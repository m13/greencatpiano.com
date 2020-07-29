<script context="module">
    import {addMessages} from 'svelte-i18n';

    export async function preload({params, query}) {
        const res = await this.fetch(`video.json`);
        let videos = await res.json();

        videos.forEach((video) => {
            ['en', 'es'].forEach((locale) => addMessages(locale, {[video.id]: video[locale]}));
        });
        // await waitLocale();

        videos = videos.filter((video) => video.category === params.id);

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
