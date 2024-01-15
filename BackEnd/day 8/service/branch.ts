/** @format */

import { Branch, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type BranchInput = {
  name: string;
  locaation: string;
};

export async function createBranch(newBranch: BranchInput): Promise<Branch> {
  return prisma.branch.create({
    data: newBranch,
  });
}

export async function findAllBranch(): Promise<Branch[]> {
  return prisma.branch.findMany();
}

export async function findOneBranch(id: number) {
  const data = await prisma.branch.findUnique({ where: { id } });
  return data;
}
