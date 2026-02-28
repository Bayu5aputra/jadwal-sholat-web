export interface DoaItem {
  id: string;
  doa: string;
  ayat?: string;
  latin?: string;
  artinya?: string;
  source?: string;
  tags: string[];
}

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

let cachedDoa: DoaItem[] | null = null;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 70);
}

function normalizeTags(raw: unknown): string[] {
  if (Array.isArray(raw)) {
    return raw
      .map((item) => String(item ?? '').trim())
      .filter(Boolean);
  }

  if (typeof raw === 'string') {
    return raw
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeDoa(raw: any): DoaItem {
  const id = String(raw?.id ?? '').trim();
  const doa = String(raw?.doa ?? raw?.nama ?? 'Doa').trim();

  return {
    id,
    doa,
    ayat: raw?.ayat ? String(raw.ayat).trim() : raw?.ar ? String(raw.ar).trim() : undefined,
    latin: raw?.latin ? String(raw.latin).trim() : raw?.tr ? String(raw.tr).trim() : undefined,
    artinya: raw?.artinya ? String(raw.artinya).trim() : raw?.idn ? String(raw.idn).trim() : undefined,
    source: raw?.source
      ? String(raw.source).trim()
      : raw?.tentang
        ? String(raw.tentang).trim()
        : undefined,
    tags: normalizeTags(raw?.tags ?? raw?.tag),
  };
}

export function getDoaSlug(doa: DoaItem): string {
  return `${doa.id}-${slugify(doa.doa)}`;
}

export async function getDoaList(): Promise<DoaItem[]> {
  if (cachedDoa) {
    return cachedDoa;
  }

  const filePath = join(process.cwd(), 'src', 'data', 'doa.json');
  const rawText = await readFile(filePath, 'utf8');
  const parsed = JSON.parse(rawText);
  const rawList = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.data) ? parsed.data : [];

  if (!rawList.length) {
    throw new Error('Gagal memuat doa: file doa.json kosong atau format tidak valid');
  }

  cachedDoa = rawList
    .map((item) => normalizeDoa(item))
    .filter((item) => item.id && item.doa);

  return cachedDoa;
}

export async function findDoaBySlug(slug: string): Promise<DoaItem | undefined> {
  const list = await getDoaList();
  return list.find((item) => getDoaSlug(item) === slug);
}

export function getDoaTags(list: DoaItem[]): string[] {
  return Array.from(new Set(list.flatMap((item) => item.tags.map((tag) => tag.toLowerCase()))));
}
