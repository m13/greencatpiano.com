<script context="module">
    import {addMessages} from 'svelte-i18n';

    export async function preload({params, query}) {
        const res = await this.fetch(`video/${params.id}.json`);
        const video = await res.json();

        ['en', 'es'].forEach((locale) => addMessages(locale, {[video.id]: video[locale]}));
        // await waitLocale();

        if (res.status === 200) {
            return {video: video};
        } else {
            this.error(res.status, data.message);
        }
    }
</script>
<script>
    import Video from '../_component/Video.svelte';

    export let video;
</script>

<Video {video}></Video>
