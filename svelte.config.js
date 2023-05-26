import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
        adapter: adapter({
            fallback: 'index.html' // may differ from host to host
        })
	}
};

export default config;
