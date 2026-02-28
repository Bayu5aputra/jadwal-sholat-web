# Jadwal Sholat Web

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Platform](https://img.shields.io/badge/Platform-Web-1f2937)](#)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-111827)](LICENSE)

A modern Astro website to check Indonesian prayer schedules (jadwal sholat and imsakiyah), view Hijri calendar data, and use GPS-based location detection with fallback to Jakarta.

![Jadwal Sholat Web Logo](public/logo-sholat-pray.png)

## Live Demo

- Public URL: https://sholat.next-it.my.id

## Why This Website

- Fast access to daily and monthly prayer schedules
- Smart location-based experience for Indonesian regions
- Practical prayer tracking with clear table and screensaver mode
- Mobile-friendly neobrutalist interface for quick daily use

## Main Features

- Daily prayer times: Imsak, Subuh, Terbit, Dhuha, Dzuhur, Ashar, Maghrib, Isya
- Province and city/regency filtering across Indonesia
- GPS-first auto-location with IP and Jakarta fallback
- Next prayer reminder flow with adzan/alarm support
- Hijri calendar view and Gregorian-to-Hijri conversion
- Quick action buttons for Today, Schedule section, and Screensaver mode
- SEO support with sitemap and canonical URL setup

## Tech Stack

- Astro 5 + TypeScript
- UnoCSS
- @astrojs/sitemap
- @astrojs/rss
- Brutal UI components

## Project Structure

```text
src/
  components/
  layouts/
  pages/
    index.astro
    doa/
  styles/
public/
  audio/
  fonts/
  icon/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Default local URL: `http://localhost:4321`.

### Build Production

```bash
npm run build
npm run preview
```

## Environment Variable

```env
PUBLIC_SITE_URL=https://your-domain.com
```

Used for canonical URL and sitemap generation.

## Usage Flow

1. Open the website and wait for initial province data to load.
2. Allow GPS access to auto-select nearest province/city.
3. If GPS is unavailable, the app falls back to IP lookup or Jakarta default.
4. Choose month/year and click `Tampilkan` to render schedule data.
5. Use quick actions for Today, Screensaver mode, and location navigation.

## Notes

- This project is intended for personal portfolio showcase.
- Code usage is restricted by the custom license.

## License

Copyright (c) 2026 bayu5aputra. All Rights Reserved.

This project was created for personal portfolio purposes.

You may not copy, modify, distribute, or use any part of the source code or documentation without the owner's prior written permission.

Contact: https://github.com/bayu5aputra • bayusaputra.005.003@gmail.com

See full terms in [LICENSE](LICENSE).
