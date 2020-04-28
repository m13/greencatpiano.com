<script>
    import {_} from 'svelte-i18n';
</script>

<div class="container schoolbell">
    <div class="row">
        <img class="p-3 mx-auto d-block" src="./img/gato-logo-square.png" height="256" width="256"
             alt="logo">
        <div class="media-body align-self-center p-3">
            <h1 class="display-1 font-weight-bold text-center">Green Cat Piano</h1>
            <p class="m-0">
                {$_('logo.website')}
            </p>
            <p class="m-0">
                {$_('logo.together')}
            </p>
        </div>
    </div>
</div>
