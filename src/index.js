import { Router } from 'itty-router';
import { getPrisma } from './utils/prisma';

const router = Router();

router.get('/', async (req, env) => {
	const prisma = getPrisma(env.DB);
	const users = await prisma.user.findMany();
	return new Response(JSON.stringify(users));
});

router.get('/favicon.ico', async () => {
	return new Response();
});

// Catch unknown routes and throw a 404 and limit exceptions on workers.
router.all('*', () => new Response('Not Found', { status: 404 }));

export default {
	async fetch(request, env, ctx) {
		return router.fetch(request, env, ctx);
	},
};
