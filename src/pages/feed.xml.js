import rss from '@astrojs/rss';
import { getDoaList, getDoaSlug } from '../lib/doa';

export async function GET(context) {
  const doaList = await getDoaList();
  return rss({
    title: 'Jadwal Sholat Indonesia - Kumpulan Doa',
    description: 'Kumpulan doa harian dari API EQuran.id.',
    stylesheet: false,
    site: context.site,
    items: doaList.map((doa) => ({
      title: doa.doa,
      pubDate: new Date(),
      description: doa.artinya ?? doa.latin ?? 'Doa harian',
      link: `/doa/${getDoaSlug(doa)}/`,
    })),
    customData: '<language>id-ID</language>',
    canonicalUrl: context.site?.toString(),
  });
}
