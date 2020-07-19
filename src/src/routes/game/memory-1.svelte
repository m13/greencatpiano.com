<script>
    import {_} from 'svelte-i18n';

    let imgDefaultUrl = 'game/memory-1-box.jpg';
    let doneUrl = 'game/memory-2-empty.jpg';

    let cards = [
        {
            id: 'cat',
            imgUrl: 'game/memory-1-cat.jpg'
        },
        {
            id: 'lion',
            imgUrl: 'game/memory-1-lion.jpg'
        },
        {
            id: 'mouse',
            imgUrl: 'game/memory-1-mouse.jpg'
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

        let myVid = document.getElementById("myVideo");
        let myCards = document.getElementById("myCards");

        myVid.onended = () => {
            myVid.style.display = 'none';
            myCards.style.display = '';

            // code
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
        }

        myVid.style.display = '';
        myCards.style.display = 'none';
        myVid.autoplay = true;
        myVid.load(); // 4 seconds
    }

    function checkIfRight(id) {
        console.log('checkIfRight');
        if (selected !== null) {
            if (cards[id].id === cards[selected].id) {
                // right
                const e = document.getElementById('right');
                e.onended = () => {
                    remaining -= 1;
                    console.log('left:', remaining);
                    document.getElementById(`card-${id}`).src = doneUrl;
                    document.getElementById(`card-${selected}`).src = doneUrl;
                    if (remaining <= 0) {
                        startAgain();
                    }
                    selected = null;
                    disabled = false;
                };
                e.play(); // 2 seconds
            } else {
                // wrong
                const e = document.getElementById('wrong');
                e.onended = () => {
                    document.getElementById(`card-${id}`).src = imgDefaultUrl;
                    document.getElementById(`card-${selected}`).src = imgDefaultUrl;
                    selected = null;
                    disabled = false;
                }
                e.play(); // 1 second
            }
        } else {
            selected = id;
            disabled = false;
        }
    }

    async function checkCard(id) {
        console.log(id);
        if (disabled) return;
        const card = document.getElementById(`card-${id}`);
        if (!card.src.includes(imgDefaultUrl)) return;

        disabled = true;
        card.src = cards[id].imgUrl;
        const e = document.getElementById(cards[id].id);
        e.onended = () => {
          checkIfRight(id);
        }
        e.play(); // 2 seconds
    }
</script>

<div class="container">
    <h1 class="text-center">{$_('nav.game.memory-1')}</h1>
</div>

<div class="container">
    <audio id="right" preload="auto"><source src="game/memory-1-right.mp3" type="audio/mpeg"></audio>
    <audio id="wrong" preload="auto"><source src="game/memory-1-wrong.mp3" type="audio/mpeg"></audio>
    <audio id="cat" preload="auto"><source src="game/memory-1-cat.mp3" type="audio/mpeg"></audio>
    <audio id="mouse" preload="auto"><source src="game/memory-1-mouse.mp3" type="audio/mpeg"></audio>
    <audio id="lion" preload="auto"><source src="game/memory-1-lion.mp3" type="audio/mpeg"></audio>

    <video id="myVideo" class="container" style="display:none;" preload="auto">
        <source src="game/corazones.mp4" type="video/mp4">
    </video>

    <div id="myCards" class="row row-cols-3">
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
    <h1>Game Rules:</h1>
    <ol>
        <li>Choose a Card</li>
        <li>Find the match</li>
    </ol>

    <h1>Reglas del juego:</h1>
    <ol>
        <li>Elige una carta</li>
        <li>Encuentra el par</li>
    </ol>
</div>
