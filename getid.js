const fs = require('fs').promises;

async function updateHashFile() {
    try {
        // Membaca data dari hash.txt
        const data = await fs.readFile('hash.txt', 'utf8');
        const accountData = data.split('\n').map(line => line.trim()).filter(line => line);

        // Array untuk menyimpan hasil yang telah diperbarui
        const updatedData = [];

        // Memproses setiap baris untuk mendapatkan user_id
        for (const account of accountData) {
            const query = account.split('|')[0]; // Mengambil query
            const params = new URLSearchParams(query); // Menggunakan URLSearchParams untuk parsing query
            const userJson = params.get('user'); // Mengambil parameter user
            if (userJson) {
                const user = JSON.parse(decodeURIComponent(userJson)); // Decode dan parse user
                const userId = user.id; // Mendapatkan user_id

                // Menyimpan kembali format yang diperbarui
                updatedData.push(`${query}|${userId}`);
            } else {
                // Jika tidak ada user, tambahkan dengan format asli
                updatedData.push(account);
            }
        }

        // Menyimpan hasil ke hash.txt
        await fs.writeFile('hash.txt', updatedData.join('\n'), 'utf8');
        console.log('Hash file telah diperbarui dengan user_id.');
    } catch (error) {
        console.error('Gagal memperbarui hash.txt:', error.message);
    }
}

// Jalankan fungsi untuk memperbarui hash file
updateHashFile();