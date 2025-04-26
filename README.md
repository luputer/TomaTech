# Microservice Backend

Backend untuk aplikasi microservice yang menggunakan Node.js, Express, dan Prisma.

## Fitur
- **User Management**: CRUD untuk pengguna.
- **Product Management**: CRUD untuk produk.
- **Authentication**: Login dan registrasi dengan token JWT.
- **Database**: Menggunakan Prisma ORM dengan MySQL.

## Struktur Proyek
```
backend/
├── src/
│   ├── config/          # Konfigurasi aplikasi (contoh: Prisma)
│   ├── controllers/     # Logika bisnis untuk setiap endpoint
│   ├── routes/          # Definisi rute API
│   ├── middlewares/     # Middleware untuk autentikasi, validasi, dll.
│   ├── models/          # Model database (jika ada)
│   ├── index.js         # Entry point aplikasi
├── .env                 # Variabel lingkungan (tidak di-commit)
├── .gitignore           # File dan folder yang diabaikan oleh Git
├── package.json         # Konfigurasi npm
└── README.md            # Dokumentasi proyek
```

## Instalasi
1. Clone repository ini:
   ```bash
   git clone https://github.com/username/repository.git
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Buat file `.env` berdasarkan contoh berikut:
   ```
   DATABASE_URL=mysql://user:password@localhost:3306/database_name
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. Jalankan migrasi database (jika menggunakan Prisma):
   ```bash
   npx prisma migrate dev
   ```

5. Jalankan server:
   ```bash
   npm run dev
   ```

## Endpoint API
### User
- **GET** `/user/:id` - Mendapatkan detail pengguna berdasarkan ID.
- **POST** `/auth/register` - Registrasi pengguna baru.
- **POST** `/auth/login` - Login pengguna.

### Product
- **GET** `/products` - Mendapatkan semua produk.
- **POST** `/products` - Menambahkan produk baru.
- **GET** `/products/:id` - Menghapus produk berdasarkan ID.

## Teknologi yang Digunakan
- **Node.js**: Runtime JavaScript.
- **Express**: Framework backend.
- **Prisma**: ORM untuk database.
- **MySQL**: Database relasional.
- **JWT**: Autentikasi berbasis token.

## Kontribusi
1. Fork repository ini.
2. Buat branch baru:
   ```bash
   git checkout -b fitur-baru
   ```
3. Commit perubahan Anda:
   ```bash
   git commit -m "Menambahkan fitur baru"
   ```
4. Push ke branch Anda:
   ```bash
   git push origin fitur-baru
   ```
5. Buat pull request.

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).