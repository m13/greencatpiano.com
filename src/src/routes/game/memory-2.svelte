<script>
    import {_} from 'svelte-i18n';

    let imgDefaultUrl = 'game/memory-1-box.jpg';
    let checkedUrl = 'game/memory-2-box.jpg';
    let doneUrl = 'game/memory-2-empty.jpg';

    let cards = [
        {
            id: 'cat',
            imgUrl: 'game/memory-1-cat.jpg',
            soundUrl: 'game/memory-1-cat.m4a'
        },
        {
            id: 'lion',
            imgUrl: 'game/memory-1-lion.jpg',
            soundUrl: 'game/memory-1-lion.m4a'
        },
        {
            id: 'mouse',
            imgUrl: 'game/memory-1-mouse.jpg',
            soundUrl: 'game/memory-1-mouse.m4a'
        }
    ];
    cards = cards.concat(cards);
    cards = cards
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);

    let remaining = 3;
    let selected = null;
    let disabled = false;

    function startAgain() {
        disabled = true;
        setTimeout(async () => {
            disabled = false;
            console.log('startAgain');

            [...Array(6).keys()].forEach((id) => {
                document.getElementById(`card-${id}`).src = imgDefaultUrl;
            });
            remaining = 3;
            selected = null;

            cards = cards
                    .map((a) => ({sort: Math.random(), value: a}))
                    .sort((a, b) => a.sort - b.sort)
                    .map((a) => a.value);
        }, 2000);
    }

    function checkIfRight(id) {
        disabled = true;
        setTimeout(async () => {
            disabled = false;
            console.log('checkIfRight');

            if (cards[id].id === cards[selected].id) {
                // right
                (new Audio('game/memory-1-right.m4a')).play();
                remaining -= 1;
                console.log('left:', remaining);
                disabled = true;
                setTimeout(async () => {
                    disabled = false;
                    document.getElementById(`card-${id}`).src = doneUrl;
                    document.getElementById(`card-${selected}`).src = doneUrl;
                    selected = null;
                    if (remaining <= 0) {
                        startAgain();
                    }
                }, 3000);
            } else {
                // wrong
                disabled = true;
                setTimeout(async () => {
                    disabled = false;
                    document.getElementById(`card-${id}`).src = imgDefaultUrl;
                    document.getElementById(`card-${selected}`).src = imgDefaultUrl;
                    selected = null;
                }, 3000);
                (new Audio('game/memory-1-wrong.m4a')).play();
            }
        }, 1000);
    }

    function showCards(id) {
        disabled = true;
        setTimeout(async () => {
            disabled = false;
            console.log('showCards');

            if (selected !== null) {
                document.getElementById(`card-${id}`).src = cards[id].imgUrl;
                document.getElementById(`card-${selected}`).src = cards[selected].imgUrl;
                checkIfRight(id);
            } else {
                selected = id;
            }
        }, 3000);
    }

    function checkCard(id) {
        console.log(id);
        if (disabled) return;
        const card = document.getElementById(`card-${id}`);
        if (!card.src.includes(imgDefaultUrl)) return;

        card.src = checkedUrl;
        (new Audio(cards[id].soundUrl)).play();
        showCards(id);
    }
</script>

<div class="container">
    <h1 class="text-center">{$_('nav.game.memory-2')}</h1>
</div>

<div class="container">
    <div class="row row-cols-3">
        {#each cards as card, index}
            <div class="col mb-4">
                <div class="h-100 w-100">
                    <img id="card-{index}" class="w-100" src="{imgDefaultUrl}" alt="{card.id}"
                         on:click="{() => checkCard(index)}"/>
                </div>
            </div>
        {/each}
    </div>
</div>

<div class="container">
    <p>Focus your attention on what sound is listening.</p>
</div>
