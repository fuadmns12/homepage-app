# Fix untuk Masalah iOS: Situs Tidak Dapat Dijangkau

## Masalah yang Ditemukan

Website dapat diakses dari Android tapi tidak dari iOS. Ini biasanya disebabkan oleh:

1. **URL hardcoded ke Vercel** padahal deploy di Cloudflare
2. **Compatibility date yang salah** (tahun 2026 di masa depan)
3. **iOS Safari lebih strict** dengan SSL/TLS dan mixed content

## Perubahan yang Sudah Dilakukan

✅ 1. **Layout.tsx & Page.tsx** - URL sekarang dinamis menggunakan environment variable
✅ 2. **Compatibility date** di wrangler.jsonc sudah diubah ke 2024-11-01
✅ 3. **Security headers** ditambahkan di public/_headers
✅ 4. **.env.local** ditambahkan NEXT_PUBLIC_SITE_URL

## Yang Perlu Anda Lakukan

### 1. Update wrangler.jsonc (Manual)

Buka file `wrangler.jsonc` dan tambahkan bagian `vars` sebelum kurung kurawal terakhir:

```jsonc
{
	"$schema": "node_modules/wrangler/config-schema.json",
	"main": ".open-next/worker.js",
	"name": "learningenglishgeuwat",
	"compatibility_date": "2024-11-01",
	"compatibility_flags": ["nodejs_compat", "global_fetch_strictly_public"],
	"assets": {
		"directory": ".open-next/assets",
		"binding": "ASSETS"
	},
	"services": [
		{
			"binding": "WORKER_SELF_REFERENCE",
			"service": "learningenglishgeuwat"
		}
	],
	"images": {
		"binding": "IMAGES"
	},
	"vars": {
		"NEXT_PUBLIC_SITE_URL": "https://learningenglishgeuwat.pages.dev"
	}
}
```

### 2. Set Environment Variable di Cloudflare Pages Dashboard

1. Buka Cloudflare Dashboard
2. Pilih Workers & Pages > learningenglishgeuwat
3. Settings > Environment Variables
4. Tambahkan:
   - **Variable name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: URL production Anda (misal: `https://learningenglishgeuwat.pages.dev` atau custom domain Anda)
   - Apply untuk **Production** dan **Preview**

### 3. Ganti URL di .env.local dengan URL Production Anda

Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

Ganti `https://your-actual-domain.com` dengan:
- Custom domain Anda jika ada, ATAU
- URL Cloudflare Pages default: `https://learningenglishgeuwat.pages.dev`

### 4. Rebuild dan Deploy Ulang

```bash
npm run deploy
```

## Penjelasan Perbaikan

### 1. Compatibility Date
iOS Safari sangat ketat dengan standar web. Compatibility date yang salah (2026) bisa menyebabkan worker menggunakan API yang belum didukung atau behavior yang berbeda.

### 2. Dynamic URL
Sebelumnya semua metadata URL hardcoded ke Vercel:
- `https://learningenglishgeuwat-ten.vercel.app`

Ini menyebabkan:
- Mixed content warnings di iOS
- Redirect loops
- SSL certificate mismatch

Sekarang menggunakan environment variable yang benar sesuai platform deployment.

### 3. Security Headers
iOS Safari lebih strict dengan security headers. Header yang ditambahkan:
- `X-Content-Type-Options: nosniff` - Mencegah MIME type sniffing
- `X-Frame-Options: SAMEORIGIN` - Proteksi clickjacking
- `Referrer-Policy: strict-origin-when-cross-origin` - Kontrol referrer
- `Permissions-Policy` - Kontrol permissions browser

## Troubleshooting Tambahan

Jika masih tidak bisa diakses dari iOS:

### 1. Cek DNS dan SSL
```bash
# Cek DNS resolution
nslookup your-domain.com

# Test SSL certificate
curl -I https://your-domain.com
```

### 2. Test dengan Safari di Mac
Jika punya Mac, test dengan Safari desktop untuk melihat error console yang detail.

### 3. Cek Cloudflare SSL/TLS Settings
Di Cloudflare Dashboard:
- SSL/TLS > Overview
- Pastikan mode: **Full (strict)**
- Edge Certificates > Always Use HTTPS: **On**
- Minimum TLS Version: **TLS 1.2**

### 4. Clear Cache di Cloudflare
Setelah deploy:
- Caching > Configuration
- Purge Everything

### 5. Test dari iOS dengan Different Networks
- Coba pakai WiFi berbeda
- Coba pakai data seluler
- Coba tanpa VPN jika sedang pakai VPN

### 6. Periksa Console Error di iOS
Di iPhone/iPad:
1. Settings > Safari > Advanced > Web Inspector (aktifkan)
2. Hubungkan ke Mac dengan kabel
3. Buka Safari di Mac > Develop > [Device Name] > [Tab]
4. Lihat error di Console

## Checklist Deploy

- [ ] Update `wrangler.jsonc` dengan section `vars`
- [ ] Set environment variable di Cloudflare Dashboard
- [ ] Update `.env.local` dengan URL production yang benar
- [ ] Rebuild: `npm run build`
- [ ] Deploy: `npm run deploy`
- [ ] Purge cache di Cloudflare
- [ ] Test dari iOS device
- [ ] Verifikasi SSL certificate valid

## URL yang Perlu Diupdate

Pastikan URL ini konsisten di semua tempat:

1. ✅ `app/layout.tsx` - Sudah update
2. ✅ `app/page.tsx` - Sudah update  
3. ⚠️ `wrangler.jsonc` - **Perlu update manual**
4. ⚠️ Cloudflare Dashboard - **Perlu set env variable**
5. ✅ `.env.local` - Sudah ditambahkan

## Kontak Support

Jika masih ada masalah:
1. Cek Cloudflare Pages logs
2. Periksa Build logs untuk error
3. Test dengan curl dari server lain untuk isolasi masalah network
