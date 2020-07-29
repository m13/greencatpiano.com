<script>
    import {_} from 'svelte-i18n';
</script>

<div class="container schoolbell">
    <div class="d-flex mb-2">
        <img class="p-1 h-100 w-25" src="./img/gato-logo-square.png"
             alt="logo">
        <div class="p-1">
            <h1 class="font-weight-bold text-center">Green Cat Piano</h1>
            <p class="m-0">
                {$_('logo.website')}
            </p>
            <p class="m-0">
                {$_('logo.together')}
            </p></div>
    </div>
</div>

<!--<div class="container schoolbell">-->
<!--    <div class="fixed-relative">-->
<!--        <img class="p-3 mx-auto d-sm" src="./img/gato-logo-square.png"-->
<!--             alt="logo">-->
<!--        <div class="p-3 media-body align-self-center d-sm">-->
<!--            <h1 class="display-3 font-weight-bold text-center">Green Cat Piano</h1>-->
<!--            <p class="m-0">-->
<!--                {$_('logo.website')}-->
<!--            </p>-->
<!--            <p class="m-0">-->
<!--                {$_('logo.together')}-->
<!--            </p>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
