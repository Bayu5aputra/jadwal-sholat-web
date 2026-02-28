# Jadwal Sholat Web

A neobrutalist Astro website for Indonesian daily prayer schedules (Jadwal Sholat & Imsakiyah), including GPS-based location detection with fallback to Jakarta.

## Features

- Daily and monthly prayer schedules by province and city/regency in Indonesia
- Prayer reminder system with adzan/alarm support
- Hijri calendar conversion and month view
- GPS-first location detection with IP and Jakarta fallback
- Responsive neobrutalist interface (desktop and mobile)
- SEO-ready setup with sitemap and metadata support

## Tech Stack

- Astro
- TypeScript
- UnoCSS
- Astro Sitemap

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm (or pnpm/yarn)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The local app runs at `http://localhost:4321`.

### Production Build

```bash
npm run build
npm run preview
```

## Environment Variables

Set `PUBLIC_SITE_URL` for canonical URL generation and sitemap output.

Example:

```env
PUBLIC_SITE_URL=https://your-domain.com
```

## Project Structure

- `src/pages/index.astro` main prayer schedule page
- `src/pages/doa/` prayer articles/listing pages
- `src/components/` shared UI components
- `src/styles/global.css` global styles
- `public/` static assets (icons, audio, fonts)

## License

This project is proprietary and intended for personal portfolio use.

See [LICENSE](./LICENSE) for full terms.

## Contact

- GitHub: https://github.com/bayu5aputra
- Email: bayusaputra.005.003@gmail.com
