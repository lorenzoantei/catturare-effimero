// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Catturare l'effimero",
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			head: [
				// Example: add Fathom analytics script tag.
				{
					tag: 'script',
					attrs: {
						src: '/my.js',
						defer: true
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/custom-sidebar.js',
						defer: true
					},
				},
			],
			plugins: [starlightImageZoom()],
			sidebar: [
				{
					label: "Parte I - Estetica dell'effimero",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "L'effimero nel tempo", slug: 'estetica-effimero/effimero-tempo' },
						{ label: "L'effimero nell'arte", slug: 'estetica-effimero/effimero-arte' },
						{ label: "New Media Art", slug: 'estetica-effimero/new-media-art' },
					],
				},
				{
					label: "Parte II: Archivi della cultura digitale",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Storia e funzione dell’archivio", slug: 'archivi-cultura/storia-archivio' },
						{ label: "Turbulence.org", slug: 'archivi-cultura/turbolence' },
						{ label: "Internet archive", slug: 'archivi-cultura/internet-archive' },
						{ label: "Wikipedia", slug: 'archivi-cultura/wikipedia' },
						{ label: "Ubuweb", slug: 'archivi-cultura/ubuweb' },
						{ label: "Rhizome", slug: 'archivi-cultura/rhizome' },
					],
				},
				{
					label: "Parte III: L’archivio come pratica artivista",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Che cos’è l’artivismo", slug: 'estetica-effimero/effimero-tempo' },
						{ label: "The Uncensored Library", slug: 'estetica-effimero/effimero-arte' },
						{ label: "Archeologia del sapere", slug: 'estetica-effimero/new-media-art' },
						{ label: "G8 di Genova", slug: 'estetica-effimero/new-media-art' },
						{ label: "Il cinema: dissonanza e critica sociale", slug: 'estetica-effimero/new-media-art' },
						{ label: "Wikileaks", slug: 'estetica-effimero/new-media-art' },
					],
				},
				{
					label: "Parte IV: Verso una nuova estetica dell’archivio",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "La scomparsa dei supporti fisici, il deplatforming e il futuro della proprietà digitale", slug: 'estetica-effimero/effimero-tempo' },
						{ label: "Git e il versioning", slug: 'estetica-effimero/effimero-arte' },
						{ label: "Restauro / ripristino / restyle / reboot / reimagining", slug: 'estetica-effimero/new-media-art' },
						{ label: "L'InterPlanetary File System (IPFS)", slug: 'estetica-effimero/new-media-art' },
						{ label: "Arduino", slug: 'estetica-effimero/new-media-art' },
						{ label: "Il restauro della new media art: problemi, strategie e approcci metodologici", slug: 'estetica-effimero/new-media-art' },
						{ label: "Emulazione", slug: 'estetica-effimero/new-media-art' },
						{ label: "Nuove prospettive nell'archiviazione digitale", slug: 'estetica-effimero/new-media-art' },
					],
				},
				{
					label: "CONCLUSIONI (APERTE)",
					items: [
						// Each item here is one entry in the navigation menu.
					],
				},
				{
					label: "Appendice ~ Casi studio",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Reperto Antropologico UnoNoveNoveSette", slug: 'estetica-effimero/effimero-tempo' },
						{ label: "X-8X8-X", slug: 'estetica-effimero/effimero-arte' },
						{ label: "Laboratorio intergalattico Giacomo Verde Artivista", slug: 'estetica-effimero/new-media-art' },
						{ label: "Teschio vivente", slug: 'estetica-effimero/new-media-art' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/tailwind.css',
				'./src/assets/style/my.css'
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
