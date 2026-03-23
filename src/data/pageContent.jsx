import React from 'react';
import { Camera, Video, Monitor, PenTool, CheckCircle, Star, Award, Clock } from 'lucide-react';

export const pageContent = {
    // PHOTO PORTFOLIO
    'yearbook': {
        id: {
            title: "Buku Tahunan",
            subtitle: "Mengabadikan momen terbaik masa sekolah Anda.",
            sections: [
                {
                    type: 'hero',
                    title: "Abadikan Kenangan Masa Sekolahmu",
                    desc: "Bukan sekadar foto, kami mengkurasi setiap momen menjadi karya visual yang elegan, modern, dan tetap relevan hingga puluhan tahun mendatang."
                },
                {
                    type: 'features',
                    title: "Keunggulan Layanan Kami",
                    items: [
                        { icon: <Star />, title: "Kualitas High-End", desc: "Hasil akhir premium dengan standar cetak dan digital terbaik." },
                        { icon: <Clock />, title: "Alur Kerja Efisien", desc: "Manajemen waktu yang ketat untuk memastikan pengiriman tepat waktu." },
                        { icon: <Camera />, title: "Peralatan Mutakhir", desc: "Didukung perangkat full-frame terbaru untuk detail yang sempurna." }
                    ]
                },
                {
                    type: 'gallery',
                    title: "Karya Buku Tahunan",
                    items: [1, 2, 3, 4, 5, 6, 7, 8]
                },
                {
                    type: 'process',
                    title: "Standar Operasional",
                    steps: [
                        "Konsultasi konsep dan penjadwalan sesi.",
                        "Sesi pemotretan dengan arahan profesional.",
                        "Proses seleksi foto melalui platform digital.",
                        "Tahap editing pasca-produksi dan pengiriman final."
                    ]
                },
                {
                    type: 'pricing-mini',
                    title: "Paket Buku Tahunan",
                    packages: [
                        { name: "Starter", price: "Hubungi Kami", features: ["Min 50 Siswa", "1 Hari Sesi", "Cetak & Digital"] },
                        { name: "Premium", price: "Hubungi Kami", features: ["Min 100 Siswa", "2 Hari Sesi", "Cinematic Yearbook Video"] }
                    ]
                },
                {
                    type: 'cta',
                    text: "Abadikan Kenangan Anda Sekarang!",
                    buttonText: "Booking Sesi"
                }
            ]
        }
    },
    'studio': {
        id: {
            title: "Sesi Studio",
            subtitle: "Pencahayaan profesional, kreativitas tanpa batas.",
            sections: [
                {
                    type: 'hero',
                    title: "Fotografi Studio",
                    desc: "Arahan kreatif dan kualitas tinggi untuk kebutuhan profesional Anda."
                },
                {
                    type: 'grid-text',
                    title: "Fasilitas Studio Kami",
                    content: "Studio kami dirancang secara strategis dan dilengkapi dengan sistem pencahayaan kelas dunia serta berbagai pilihan backdrop premium. Kami menyediakan fasilitas lengkap termasuk ruang makeup privat dan area ganti yang nyaman untuk memastikan kenyamanan Anda selama sesi berlangsung."
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
                        { name: "Studio Basic", price: "IDR 500rb", features: ["1 Look", "3 Foto Retouch", "Semua Mentah"] },
                        { name: "Studio Pro", price: "IDR 1.5jt", features: ["3 Looks", "10 Foto Retouch", "Private Studio"] },
                    ]
                },
                {
                    type: 'cta',
                    text: "Ciptakan Keajaiban Visual",
                    buttonText: "Booking Fotografer"
                }
            ]
        }
    },
    'dokumentasi': {
        id: {
            title: "Dokumentasi Acara",
            subtitle: "Kami tidak hanya memotret; kami mengabadikan sejarah.",
            sections: [
                { type: 'hero', title: "Dokumentasi Event", desc: "Seminar, Konser, Gathering, dan berbagai acara lainnya." },
                { type: 'stats', stats: [{ label: "Acara Terliput", value: "500+" }, { label: "Klien Puas", value: "300+" }, { label: "Foto Diambil", value: "100k+" }] },
                { type: 'gallery', title: "Sorotan Acara", items: [1, 2, 3, 4, 5, 6] },
                { type: 'testimonials', title: "Apa Kata Klien", quote: "Tim yang sangat profesional, mereka menangkap setiap momen penting tanpa terasa mengganggu jalannya acara.", author: "Klien Korporat" },
                {
                    type: 'pricing-mini',
                    title: "Paket Dokumentasi",
                    packages: [
                        { name: "Half Day", price: "IDR 2.5jt", features: ["4 Jam Liputan", "1 Fotografer", "Unlimited Photos"] },
                        { name: "Full Day", price: "IDR 4.5jt", features: ["8 Jam Liputan", "2 Fotografer", "Same Day Edit Highlights"] }
                    ]
                },
                { type: 'cta', text: "Punya Acara Mendatang?", buttonText: "Dapatkan Penawaran" }
            ]
        }
    },

    // VIDEO PORTFOLIO
    'video-dokumentasi': {
        id: {
            title: "Dokumentasi Video",
            subtitle: "Liputan sinematik untuk momen berharga Anda.",
            sections: [
                { type: 'hero', title: "Liputan Event Sinematik", desc: "Hidupkan kembali suasana acara Anda melalui produksi video berkualitas tinggi." },
                { type: 'video-grid', title: "Karya Unggulan", items: [1, 2] },
                { type: 'features', title: "Layanan Termasuk", items: [{ icon: <Video />, title: "Multi-Kamera", desc: "Setup 3+ Kamera" }, { icon: <Star />, title: "Highlight Reel", desc: "Rangkuman sinematik 3 menit" }] },
                { type: 'process', title: "Alur Produksi", steps: ["Pertemuan Pra-acara", "Proses Syuting", "Editing & Color Grading", "Pengiriman Final"] },
                {
                    type: 'pricing-mini',
                    title: "Paket Video Dokumentasi",
                    packages: [
                        { name: "Basic", price: "IDR 3.5jt", features: ["Full Event Movie", "1 Videografer", "FHD Quality"] },
                        { name: "Cinematic", price: "IDR 6jt", features: ["Cinematic Highlight", "2 Videografer", "4K Quality", "Drone footage"] }
                    ]
                },
                { type: 'cta', text: "Amankan Tanggal Anda", buttonText: "Hubungi Kami" }
            ]
        }
    },
    'reels': {
        id: {
            title: "Video Reels & TikTok",
            subtitle: "Konten format pendek yang menarik dan berdampak.",
            sections: [
                { type: 'hero', title: "Konten Siap Viral", desc: "Dioptimalkan untuk Instagram Reels dan TikTok. Vertikal, cepat, dan memikat mata." },
                { type: 'video-grid', title: "Reels Trending", items: [1, 2, 3], orientation: 'vertical' },
                { type: 'grid-text', title: "Mengapa Format Pendek?", content: "Di masa kini, rentang perhatian audiens sangat singkat. Kami menciptakan konten yang mampu menghentikan scroll dan menyampaikan pesan Anda dalam waktu kurang dari 60 detik." },
                { type: 'pricing-mini', title: "Paket Konten", packages: [{ name: "Starter", price: "IDR 3jt", features: ["5 Reels", "Naskah"] }, { name: "Growth", price: "IDR 8jt", features: ["15 Reels", "Strategi Konten"] }] },
                { type: 'cta', text: "Tingkatkan Media Sosial Anda", buttonText: "Mulai Konsultasi" }
            ]
        }
    },
    'wedding': {
        id: {
            title: "Wedding Content Creator",
            subtitle: "Konten pernikahan khusus media sosial untuk pasangan modern.",
            sections: [
                { type: 'hero', title: "Momen Pernikahan, Instan", desc: "Jangan menunggu berminggu-minggu. Dapatkan ratusan video mentah dan reels hasil editing dalam waktu 24 jam." },
                { type: 'gallery', title: "Momen Terabadikan", items: [1, 2, 3], aspect: 'vertical' },
                { type: 'features', title: "Mengapa Content Creator?", items: [{ icon: <Clock />, title: "Pengiriman Cepat", desc: "Selesai dalam 24 jam" }, { icon: <Camera />, title: "Dibalik Layar", desc: "Momen candid yang terlewatkan fotografer tradisional" }] },
                { type: 'testimonials', title: "Catatan Cinta", quote: "Menggunakan jasa content creator adalah keputusan terbaik. Kami bisa langsung mengenang hari bahagia kami esok paginya!", author: "Sarah & Dimas" },
                {
                    type: 'pricing-mini',
                    title: "Paket Wedding Content Creator",
                    packages: [
                        { name: "Essential", price: "IDR 2.5jt", features: ["1 Creator", "Unlimited Raw", "3 Edited Reels", "24h Delivery"] },
                        { name: "Ultimate", price: "IDR 4.5jt", features: ["2 Creators", "Unlimited Raw", "8 Edited Reels", "Same Day Edit"] }
                    ]
                },
                { type: 'cta', text: "Cek Ketersediaan Tanggal", buttonText: "Booking Sekarang" }
            ]
        }
    },
    'short-movie': {
        id: {
            title: "Film Pendek",
            subtitle: "Bercerita melalui narasi dan arahan kreatif.",
            sections: [
                { type: 'hero', title: "Produksi Film Pendek", desc: "Dari skrip hingga layar lebar. Kami menghidupkan cerita Anda dengan kualitas sinema." },
                { type: 'video-grid', title: "Film Pilihan", items: [1] },
                { type: 'process', title: "Langkah Kreatif", steps: ["Penulisan Naskah", "Casting & Lokasi", "Produksi Film", "Editing & Scoring"] },
                { type: 'cta', text: "Punya Cerita Untuk Difilmkan?", buttonText: "Diskusi Naskah" }
            ]
        }
    },

    // VISUAL PORTFOLIO
    'design': {
        id: {
            title: "Desain Grafis",
            subtitle: "Branding, Media Sosial, dan Materi Cetak.",
            sections: [
                { type: 'hero', title: "Identitas Visual Kreatif", desc: "Membangun brand yang kuat melalui bahasa visual yang konsisten dan berdampak luas." },
                { type: 'gallery', title: "Portofolio", items: [1, 2, 3, 4, 5, 6], aspect: 'square' },
                { type: 'features', title: "Layanan Kami", items: [{ icon: <PenTool />, title: "Desain Logo", desc: "Identitas yang ikonik" }, { icon: <Monitor />, title: "Media Sosial", desc: "Kurasi konten visual" }] },
                { type: 'process', title: "Proses Kerja", steps: ["Briefing", "Riset & Analisis", "Konsep Desain", "Penyempurnaan"] },
                {
                    type: 'pricing-mini',
                    title: "Paket Desain",
                    packages: [
                        { name: "Branding", price: "IDR 1.5jt", features: ["Logo Design", "Style Guide", "Business Card"] },
                        { name: "Social Media", price: "IDR 2jt", features: ["15 Feed Posts", "Daily Posting", "Story Design"] }
                    ]
                },
                { type: 'cta', text: "Butuh Desain Profesional?", buttonText: "Mulai Proyek" }
            ]
        }
    },
    'videotron': {
        id: {
            title: "Animasi Videotron",
            subtitle: "Animasi 3D dan 2D yang memukau untuk layar besar.",
            sections: [
                { type: 'hero', title: "Iklan Videotron 3D", desc: "Animasi perspektif yang seolah keluar dari layar, menarik perhatian setiap pasang mata." },
                { type: 'video-grid', title: "Karya Unggulan", items: [1, 2] },
                { type: 'grid-text', title: "Keahlian Teknis", content: "Kami memahami standar teknis layar LED skala besar, memastikan ketajaman pixel-perfect dan sudut pandang yang tepat untuk dampak maksimal." },
                { type: 'stats', stats: [{ label: "Layar", value: "50+" }, { label: "Kota", value: "10+" }] },
                {
                    type: 'pricing-mini',
                    title: "Paket Animasi",
                    packages: [
                        { name: "2D Motion", price: "IDR 3jt", features: ["15 Seconds", "VO & Music", "1 Revision"] },
                        { name: "3D Perspective", price: "IDR 10jt", features: ["30 Seconds", "Hyper-realistic", "Optimized Layout"] }
                    ]
                },
                { type: 'cta', text: "Buat Iklan Anda Berbeda", buttonText: "Hubungi Kami" }
            ]
        }
    },

    // WEBSITE (Consolidated)
    'website': {
        id: {
            title: "Website Development",
            subtitle: "Solusi digital lengkap dari profil perusahaan hingga e-commerce.",
            sections: [
                { type: 'hero', title: "Hadirkan Bisnis Anda Secara Digital", desc: "Kami membangun website berperforma tinggi, siap SEO, dan disesuaikan dengan tujuan bisnis Anda." },
                { type: 'gallery', title: "Karya Unggulan", items: [1, 2, 3, 4], aspect: 'video' },
                { type: 'features', title: "Fitur Website", items: [{ icon: <Monitor />, title: "Responsif", desc: "Optimal di semua perangkat" }, { icon: <CheckCircle />, title: "Siap SEO", desc: "Peringkat lebih tinggi di Google" }, { icon: <Star />, title: "Kecepatan Tinggi", desc: "Skor performa maksimal" }] },
                {
                    type: 'pricing-table',
                    title: "Paket Pengembangan",
                    items: [
                        { name: 'Basic', price: 'IDR 2.500.000', features: ['Desain Responsif', '3 Halaman', 'Formulir Kontak', '1 Bulan Support'] },
                        { name: 'Standard', price: 'IDR 5.000.000', features: ['Integrasi CMS', '5 Halaman', 'Optimasi SEO', 'Google Analytics', '3 Bulan Support'] },
                        { name: 'Premium', price: 'IDR 10.000.000', features: ['E-commerce', 'Fungsionalitas Kustom', 'Autentikasi User', 'Support Prioritas', '12 Bulan Support'] }
                    ]
                },
                { type: 'process', title: "Siklus Kerja Kami", steps: ["Konsultasi & Briefing", "Desain (Figma)", "Development (React/NextJS)", "Pengujian & Peluncuran"] },
                { type: 'faq', title: "Pertanyaan Umum", questions: [{ q: "Berapa lama waktu pengerjaannya?", a: "Biasanya berkisar antara 2-4 minggu, tergantung kompleksitas." }, { q: "Apakah saya memiliki hak penuh atas domain?", a: "Ya, domain sepenuhnya menjadi milik Anda." }] },
                { type: 'cta', text: "Ingin Memulai Proyek Website Anda?", buttonText: "Konsultasi Gratis" }
            ]
        }
    },
    'home': {
        id: {
            sections: [{ type: 'testimonials', items: [] }]
        }
    }
};
