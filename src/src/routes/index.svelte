<script>
    import {onMount} from 'svelte';

    onMount(() => {
        const disqus_config = function () {
            this.page.url = 'https://greencatpiano.com/';
            this.page.identifier = 'home';
        };
        (function () {
            var d = document, s = d.createElement('script');
            s.src = 'https://greencatpiano.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    });
</script>

<svelte:head>
    <title>Green Cat Piano</title>
</svelte:head>

<br>

<div class="container">
    <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/CiNhsOwMp4w?rel=0"
                title="Music and Silence Game" allowfullscreen></iframe>
    </div>

    <div class="lead p-2 m-5">
        <p>This activity is for kids of any age.</p>

        <p>If you’re doing it with a baby, you can bounce you baby on your lap following the music or you can try giving
            him
            an instrument appropriate for his age, an example could be some shakers, bells or drums.</p>
        <p>If you don’t have any instruments, don’t worry! You can make your own, find a small container and fill it
            with
            rice, beans or even coins to make different and fun sounds, you can tape the container to make sure is
            completely sealed and safe for the baby.</p>
        <p>You can also use a small bucket as drums.</p>
        <p>Use your imagination to create different instruments.</p>

        <p>For older kids, you can also use home made instruments and involve them in the creation of them or simply
            dance
            and move around with the music.</p>
    </div>
</div>

<div class="container border border-success">
    <div id="disqus_thread"></div>
</div>

<br>
