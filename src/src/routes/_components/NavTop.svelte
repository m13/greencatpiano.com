<script>
	export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-light">
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse justify-content-center" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item font-weight-bold" class:active="{segment === undefined}">
				<a class="nav-link" href="/">HOME</a>
			</li>
			<li class="nav-item font-weight-bold" class:active="{segment === 'about'}">
				<a class="nav-link" href="/about">ABOUT</a>
			</li>
		</ul>
	</div>
</nav>
