<div align="center">

<!-- Animated Header Text using readme-typing-svg -->
<img src="https://readme-typing-svg.herokuapp.com?font=Playfair+Display&weight=800&size=48&pause=1000&color=D4AF37&center=true&vCenter=true&width=800&height=120&lines=Magicland+Tours;Discover+the+Magic+of+Ethiopia;Luxury.+Heritage.+Adventure." alt="Typing SVG" />

**A Premium, Next-Generation Travel Booking & Showcase Platform Built with Next.js 15, React 19, and Tailwind CSS.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-0B1120?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-0B1120?style=for-the-badge&logo=tailwindcss&logoColor=38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Advanced-0B1120?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

</div>

<br />

## 🌟 Overview

**Magicland Tours** is an architectural masterpiece designed for the luxury travel sector, inspired by industry leaders like Tabeer Tours. This repository contains the source code for a highly immersive, strictly mobile-first web application that utilizes cinematic video backgrounds, heavy scrolling physics, and a strictly enforced editorial design system (Deep Navy & Champagne Gold).

---

## ✨ Extraordinary Features

<table>
  <tr>
    <td width="50%">
      <h3>🎥 Cinematic Video Engine</h3>
      <p>Custom scroll-jacking physics leveraging <code>framer-motion</code>. The application dynamically scales and manipulates a 4K drone video based on the user's scroll depth, creating a 3D parallax experience.</p>
    </td>
    <td width="50%">
      <h3>📱 Mobile-First Architecture</h3>
      <p>Built exclusively on the philosophy of mobile perfection. Features oversized touch targets, intelligent collapsing navigation, and hardware-accelerated animations that run flawlessly at 60fps on Android & iOS.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔍 Floating Search Widget</h3>
      <p>A sophisticated, glassmorphism-enabled booking widget overlaid onto the Hero section, allowing immediate interaction with Destinations, Dates, and Guests.</p>
    </td>
    <td width="50%">
      <h3>🎨 Editorial Masonry Grid</h3>
      <p>Ditching standard symmetrical cards for a magazine-style asymmetrical masonry layout. Highlights the "Signature Tour" with dominant screen real estate alongside stacked, dynamic cards.</p>
    </td>
  </tr>
</table>

---

## 🚀 Quick Start Guide

Experience the magic locally on your development environment.

### 1. Clone the Repository
```bash
git clone https://github.com/Miftah-Ebrahim/MagicLand_Tours.git
cd MagicLand_Tours
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```

Navigate to `http://localhost:3000` to witness the cinematic landing page.

---

## 📐 Design System & Tokens

Our global UI operates on a strict, high-contrast luxury theme defined in `globals.css`:

- 🟦 **Primary Background (`--background`)**: Deep Navy (`#0B1120`)
- 🟨 **Primary Accent (`--color-primary`)**: Champagne Gold (`#D4AF37`)
- ⬜ **Foreground Text (`--foreground`)**: Crisp White (`#FAFAFA`)
- 🌫️ **Glassmorphism Base**: `bg-black/30 backdrop-blur-md`

*Note: The application natively supports system theme detection but enforces luxury dark-mode aesthetics for maximum visual impact.*

---

## 🗺️ Project Structure

```text
MagicLand_Tours/
├── src/
│   ├── app/                  # Next.js App Router (pages, layout, globals.css)
│   ├── components/
│   │   ├── layout/           # Shared structures (Header, Footer)
│   │   └── ui/               # Reusable primitive blocks (Button, TourCard)
│   └── lib/                  # Utilities (Tailwind merge `cn`)
├── public/                   # Static assets (4K Videos, Images, Icons)
└── tailwind.config.ts        # Design token definitions
```

---
<div align="center">
  <sub>Built with precision and passion for <strong>Magicland Tours</strong>.</sub>
</div>
