import React from 'react';
import { Camera, Video, Monitor, PenTool, CheckCircle, Star, Award, Clock } from 'lucide-react';

export const pageContent = {
    // PHOTO PORTFOLIO
    'yearbook': {
        title: "Yearbook Sekolah",
        subtitle: "Mengabadikan momen terbaik masa sekolah Anda.",
        sections: [
            {
                type: 'hero',
                title: "Abadikan Kenangan Sekolahmu",
                desc: "Kami menciptakan foto buku tahunan yang akan Anda banggakan bahkan sepuluh tahun dari sekarang. Modern, segar, dan autentik."
            },
            {
                type: 'features',
                title: "Mengapa Memilih Layanan Yearbook Kami?",
                items: [
                    { icon: <Star />, title: "Hasil Premium", desc: "Hasil foto yang memukau dan berkualitas tinggi." },
                    { icon: <Clock />, title: "Proses Cepat", desc: "Dapatkan file digital Anda dalam waktu 48 jam." },
                    { icon: <Camera />, title: "Alat Profesional", desc: "Kamera full-frame resolusi tinggi." }
                ]
            },
            {
                type: 'gallery',
                title: "Galeri Yearbook",
                items: [1, 2, 3, 4, 5, 6, 7, 8]
            },
            {
                type: 'process',
                title: "Cara Kerja",
                steps: [
                    "Booking slot online.",
                    "Datang 15 menit lebih awal untuk styling.",
                    "Sesi foto 20 menit yang menyenangkan.",
                    "Pilih foto favorit Anda di tempat."
                ]
            },
            {
                type: 'cta',
                text: "Siap Mengabadikan Legacy?",
                buttonText: "Booking Sesi Yearbook"
            }
        ]
    },
    'studio': {
        title: "Sesi Studio",
        subtitle: "Pencahayaan profesional, kreativitas tanpa batas.",
        sections: [
            {
                type: 'hero',
                title: "Fotografi Studio",
                desc: "."
            },
            {
                type: 'grid-text',
                title: "Setup Studio Kami",
                content: "Terletak di jantung kota, studio 200m2 kami dilengkapi dengan cyclorama wall, berbagai latar belakang bertekstur, dan peralatan pencahayaan Profoto canggih. Kami menyediakan ruang ganti yang nyaman dan stasiun makeup untuk memastikan Anda tampil terbaik."
            },
            {
                type: 'gallery',
                title: "Karya Studio Terbaru",
                items: [1, 2, 3, 4]
            },
            {
                type: 'pricing-mini',
                title: "Paket Studio",
                packages: [
                    { name: "Headshot", price: "IDR 500rb", features: ["1 Look", "3 Foto Retouch"] },
                    { name: "Portfolio", price: "IDR 1.5jt", features: ["3 Looks", "10 Foto Retouched"] },
                ]
            },
            {
                type: 'cta',
                text: "Mari Ciptakan Keajaiban",
                buttonText: "Sewa Studio / Booking Fotografer"
            }
        ]
    },
    'dokumentasi': {
        title: "Dokumentasi Acara",
        subtitle: "Kami tidak hanya mengambil foto; kami mendokumentasikan sejarah.",
        sections: [
            { type: 'hero', title: "Event Documentation", desc: "Seminar, Konser, Gathering, dan banyak lagi." },
            { type: 'stats', stats: [{ label: "Event Diliput", value: "500+" }, { label: "Klien Puas", value: "300+" }, { label: "Foto Diambil", value: "100k+" }] },
            { type: 'gallery', title: "Highlight Acara", items: [1, 2, 3, 4, 5, 6] },
            { type: 'testimonials', title: "Kata Klien", quote: "Timnya tidak terlihat mengganggu namun menangkap setiap momen penting dengan sempurna.", author: "Klien Korporat" },
            { type: 'cta', text: "Ada Acara Mendatang?", buttonText: "Dapatkan Penawaran" }
        ]
    },

    // VIDEO PORTFOLIO
    'video-dokumentasi': {
        title: "Video Dokumentasi",
        subtitle: "Liputan sinematik untuk acara Anda.",
        sections: [
            { type: 'hero', title: "Cinematic Event Coverage", desc: "Hidupkan kembali suasana acara Anda melalui produksi video berkualitas tinggi." },
            { type: 'video-grid', title: "Event Unggulan", items: [1, 2] },
            { type: 'features', title: "Cakupan Termasuk", items: [{ icon: <Video />, title: "Multi-Cam", desc: "Setup 3+ Kamera" }, { icon: <Star />, title: "Highlight Reel", desc: "Ringkasan sinematik 3 menit" }] },
            { type: 'process', title: "Alur Produksi", steps: ["Meeting Pra-acara", "Syuting di lokasi", "Editing & Color Grading", "Pengiriman"] },
            { type: 'cta', text: "Amankan Tanggal Anda", buttonText: "Hubungi Kami" }
        ]
    },
    'reels': {
        title: "Video Reels & TikTok",
        subtitle: "Konten format pendek yang menarik dan mengonversi.",
        sections: [
            { type: 'hero', title: "Konten Siap Viral", desc: "Dioptimalkan untuk Instagram Reels dan TikTok. Vertikal, cepat, dan menarik." },
            { type: 'video-grid', title: "Reels Trending", items: [1, 2, 3], orientation: 'vertical' },
            { type: 'grid-text', title: "Kenapa Short Form?", content: "Di tahun 2026, rentang perhatian itu pendek. Kami membuat konten yang menghentikan scroll dan menyampaikan pesan Anda dalam waktu kurang dari 60 detik." },
            { type: 'pricing-mini', title: "Batch Konten", packages: [{ name: "Starter", price: "IDR 3jt", features: ["5 Reels", "Scripting"] }, { name: "Growth", price: "IDR 8jt", features: ["15 Reels", "Strategi"] }] },
            { type: 'cta', text: "Tingkatkan Sosmed Anda", buttonText: "Mulai Membuat" }
        ]
    },
    'wedding': {
        title: "Wedding Content Creator",
        subtitle: "Konten pernikahan social-first untuk pasangan modern.",
        sections: [
            { type: 'hero', title: "Pernikahan Anda, Instan", desc: "Jangan menunggu berminggu-minggu untuk foto. Dapatkan ratusan video mentah dan reels yang diedit dalam 24 jam." },
            { type: 'gallery', title: "Momen Terabadikan", items: [1, 2, 3], aspect: 'vertical' },
            { type: 'features', title: "Kenapa Content Creator?", items: [{ icon: <Clock />, title: "Pengiriman Instan", desc: "Semuanya dalam 24 jam" }, { icon: <Camera />, title: "Behind The Scenes", desc: "Momen candid yang mungkin terlewat fotografer tradisional" }] },
            { type: 'testimonials', title: "Catatan Cinta", quote: "Memiliki content creator adalah keputusan terbaik. Kami bisa mengenang hari itu keesokan paginya!", author: "Sarah & Dimas" },
            { type: 'cta', text: "Cek Ketersediaan", buttonText: "Booking untuk Wedding" }
        ]
    },
    'short-movie': {
        title: "Film Pendek",
        subtitle: "Bercerita naratif dan arahan kreatif.",
        sections: [
            { type: 'hero', title: "Bercerita Melalui Film", desc: "Dari video musik hingga fiksi naratif dan cerita brand." },
            { type: 'video-showcase', title: "Rilis Terbaru", item: 1 },
            { type: 'process', title: "Fase Produksi", steps: ["Penulisan Naskah", "Casting & Lokasi", "Produksi", "Pasca-Produksi"] },
            { type: 'grid-text', title: "Creative Direction", content: "Kami menangani seluruh proses kreatif, mengembangkan moodboard, skenario, dan storyboard untuk memastikan visi dieksekusi dengan sempurna." },
            { type: 'cta', text: "Punya Naskah?", buttonText: "Ayo Produksi" }
        ]
    },

    // VISUAL PORTFOLIO
    'design': {
        title: "Desain Grafis",
        subtitle: "Branding, Media Sosial, dan Cetak.",
        sections: [
            { type: 'hero', title: "Desain Identitas Visual", desc: "Membangun brand yang kuat melalui bahasa visual yang konsisten dan berdampak." },
            { type: 'gallery', title: "Portfolio", items: [1, 2, 3, 4, 5, 6], aspect: 'square' },
            { type: 'features', title: "Layanan", items: [{ icon: <PenTool />, title: "Desain Logo", desc: "Tanda yang berkesan" }, { icon: <Monitor />, title: "Social Media", desc: "Kurasi Feed" }] },
            { type: 'process', title: "Proses Desain", steps: ["Brief", "Riset", "Konsep", "Penyempurnaan"] },
            { type: 'cta', text: "Butuh Desain?", buttonText: "Mulai Proyek" }
        ]
    },
    'videotron': {
        title: "Animasi Videotron",
        subtitle: "Animasi 3D dan 2D yang menarik untuk layar besar.",
        sections: [
            { type: 'hero', title: "Iklan Videotron 3D", desc: "Animasi perspektif paksa yang seolah keluar dari layar." },
            { type: 'video-grid', title: "Showcase Billboard", items: [1, 2] },
            { type: 'grid-text', title: "Keahlian Teknis", content: "Kami memahami persyaratan teknis layar LED skala besar, memastikan kejelasan pixel-perfect dan sudut pandang yang tepat untuk dampak maksimal." },
            { type: 'stats', stats: [{ label: "Layar", value: "50+" }, { label: "Kota", value: "10+" }] },
            { type: 'cta', text: "Beriklan Besar", buttonText: "Hubungi Kami" }
        ]
    },

    // WEBSITE
    'info': {
        title: "Informasi Website",
        subtitle: "Mengapa setiap bisnis butuh website di 2026.",
        sections: [
            { type: 'hero', title: "Digital Presence Matters", desc: "Website Anda adalah sales 24/7 Anda." },
            { type: 'grid-text', title: "Pendekatan Kami", content: "Kami tidak hanya menggunakan template. Kami membangun website berkinerja tinggi dan siap SEO yang disesuaikan dengan tujuan bisnis spesifik Anda, baik itu lead generation atau brand awareness." },
            { type: 'features', title: "Fitur Utama", items: [{ icon: <Monitor />, title: "Responsive", desc: "Mobile-first" }, { icon: <CheckCircle />, title: "SEO Optimized", desc: "Ranking lebih tinggi" }, { icon: <Star />, title: "Cepat", desc: "Skor Google 90+" }] },
            { type: 'stats', stats: [{ label: "Uptime", value: "99.9%" }, { label: "Kepuasan Klien", value: "100%" }] },
            { type: 'cta', text: "Go Online Hari Ini", buttonText: "Konsultasi Gratis" }
        ]
    },
    'portfolio': {
        title: "Portfolio Website",
        subtitle: "Showcase proyek pengembangan web kami.",
        sections: [
            { type: 'hero', title: "Website Pilihan", desc: "Jelajahi koleksi website yang telah kami bangun untuk klien di berbagai industri." },
            { type: 'gallery', title: "Website", items: [1, 2, 3, 4], aspect: 'video' },
            { type: 'testimonials', title: "Review Klien", quote: "Website yang mereka bangun menggandakan leads kami dalam 3 bulan!", author: "CEO Startup Tech" },
            { type: 'process', title: "Siklus Dev", steps: ["Desain (Figma)", "Development (React/Next)", "Testing", "Launch"] },
            { type: 'cta', text: "Ingin situs seperti ini?", buttonText: "Mulai Sekarang" }
        ]
    },
    'packages': {
        title: "Paket Website",
        subtitle: "Harga transparan untuk kebutuhan digital Anda.",
        sections: [
            { type: 'hero', title: "Harga Simpel & Transparan", desc: "Tanpa biaya tersembunyi. Pilih paket yang sesuai dengan tahap pertumbuhan Anda." },
            {
                type: 'pricing-table',
                title: "Rencana Pengembangan",
                items: [
                    { name: 'Basic', price: 'IDR 2.500.000', features: ['Desain Responsif', '3 Halaman', 'Form Kontak', '1 Bulan Support'] },
                    { name: 'Standard', price: 'IDR 5.000.000', features: ['Integrasi CMS', '5 Halaman', 'Optimasi SEO', 'Google Analytics', '3 Bulan Support'] },
                    { name: 'Premium', price: 'IDR 10.000.000', features: ['E-commerce', 'Fungsionalitas Custom', 'User Auth', 'Support Prioritas', '12 Bulan Support'] }
                ]
            },
            { type: 'faq', title: "Pertanyaan Umum (FAQ)", questions: [{ q: "Berapa lama pengerjaannya?", a: "Biasanya 2-4 minggu." }, { q: "Apakah saya memiliki domainnya?", a: "Ya, sepenuhnya milik Anda." }] },
            { type: 'cta', text: "Bingung pilih yang mana?", buttonText: "Diskusi dengan Kami" }
        ]
    }
};
