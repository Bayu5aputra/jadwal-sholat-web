# AGENTS.md

Panduan ini menerapkan isi `.agents/skills` ke workflow repo `brutal-astro` (Jadwal Sholat Indonesia).

## Skill Yang Dipakai di Repo Ini

- `ui-ux-pro-max`
  - Pakai untuk desain/rapi tampilan halaman, tabel jadwal, responsif, dan konsistensi visual neobrutal.
- `copywriting`
  - Pakai untuk menulis/rewrite copy halaman (headline, CTA, dokumentasi, deskripsi fitur).
- `seo-geo`
  - Pakai untuk optimasi SEO/GEO: metadata, schema, keyword intent, canonical, robots, dan sitemap.
- `seo-audit`
  - Pakai saat audit SEO teknis dan on-page setelah perubahan besar konten/struktur.
- `audit-website`
  - Pakai untuk audit kualitas website end-to-end (SEO/performance/technical/content).
- `email-best-practices`
  - Pakai hanya bila menambah fitur email (capture, deliverability, compliance).
- `typescript-expert`
  - Pakai saat ada issue TypeScript/JS kompleks atau butuh refactor typing.
- `vercel-react-best-practices`
  - Pakai untuk optimasi performa bila ada komponen React/Next (tidak prioritas utama di Astro murni).
- `next-best-practices`
  - Pakai hanya jika mengerjakan area Next.js (`tamplate-1`), bukan default untuk `brutal-astro`.

## Default Urutan Kerja

1. `ui-ux-pro-max` untuk struktur dan pengalaman UI.
2. `copywriting` untuk isi teks per section.
3. `seo-geo` untuk optimasi metadata/structured data.
4. `seo-audit` atau `audit-website` untuk validasi akhir.

## Aturan Implementasi di Repo Ini

- Gunakan bahasa Indonesia untuk konten halaman utama dan dokumentasi.
- Pertahankan bahasa desain yang sama antar halaman:
  - font display: `dm-serif`/`righteous`
  - body: `outfit`/`poppins`
  - border hitam tebal + block/card style neobrutal
- Jangan hardcode domain lama.
  - Canonical site mengikuti `PUBLIC_SITE_URL` (atau fallback domain produksi aktif).
- Untuk link dokumentasi internal, gunakan route lokal:
  - `/dokumentasi`
- Untuk fitur jadwal sholat:
  - prioritaskan GPS
  - fallback default ke Jakarta jika GPS gagal/tidak diizinkan.

## Checklist Sebelum Selesai

- `npm run build` harus sukses.
- Halaman utama `/` dan `/dokumentasi` bisa diakses.
- Meta title/description/canonical valid.
- Tidak ada link utama yang salah arah ke domain lama.
