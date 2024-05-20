import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';

export const getPrisma = (d1Instance) => {
	const adapter = new PrismaD1(d1Instance);
	return new PrismaClient({ adapter });
};
