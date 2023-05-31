<script>
    import DarkMode from '$lib/components/DarkModeIcon.svelte'
    import LightMode from '$lib/components/LightModeIcon.svelte'
	
	let selected = DarkMode

    function toggle() {
        if(selected === DarkMode) {
            selected = LightMode;
        } else {
            selected = DarkMode;
        }
        window.document.body.classList.toggle('dark-mode')
    }
</script>

<div>
    <a href="/" title="X'Den">X'Den</a>
    <button  on:click={toggle}>
        <svelte:component this={selected} />
    </button>
</div>

<style>
    a {
        font-size: 24px;
        text-decoration: none;
        font-family: 'Courier New', Courier, monospace;
    }
    button {
            border: none;
            background-color: transparent;
            cursor: pointer;
    }
    :global(body.dark-mode) button {
        color: white;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>


