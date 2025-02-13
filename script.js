// 2357401003 Ahmad Sofiyurrohman

    function editProduk(button) {
        let row = button.closest("tr");
        let kodeProduk = row.cells[0].innerText;
        let namaProduk = row.cells[1].innerText;
        let kategori = row.cells[2].innerText;

        Swal.fire({
            title: 'Edit Produk',
            html: `
                <form>
                <div class="form-group">
                    <label for="kodeProduk">Kode Produk:</label>
                    <input type="text" id="kodeProduk" class="form-control" value="${kodeProduk}" disabled>
                </div>
                <div class="form-group">
                    <label for="namaProduk">Nama Produk:</label>
                    <input type="text" id="namaProduk" class="form-control" value="${namaProduk}">
                </div>
                <div class="form-group">
                    <label for="kategoriProduk">Kategori:</label>
                    <select id="kategoriProduk" class="form-control">
                    <option value="Elektronik" ${kategori === 'Elektronik' ? 'selected' : ''}>Elektronik</option>
                    <option value="Pakaian" ${kategori === 'Pakaian' ? 'selected' : ''}>Pakaian</option>
                    <option value="Makanan" ${kategori === 'Makanan' ? 'selected' : ''}>Makanan</option>
                    </select>
                </div>
                </form>
            `,
            showCancelButton: true,
            confirmButtonText: 'Simpan',
            cancelButtonText: 'Batal',
            preConfirm: () => {
                let namaBaru = document.getElementById('namaProduk').value.trim();
                let kategoriBaru = document.getElementById('kategoriProduk').value;

                if (!namaBaru) {
                    Swal.showValidationMessage('Nama Produk tidak boleh kosong!');
                    return false;
                }

                row.cells[1].innerText = namaBaru;
                row.cells[2].innerText = kategoriBaru;
                Swal.fire('Berhasil!', 'Produk berhasil diperbarui.', 'success');
            }
        });
    }

function hapusProduk(button) {
    let row = button.closest("tr");
    let kodeProduk = row.cells[0].innerText;

    Swal.fire({
        title: `Hapus Produk ${kodeProduk}?`,
        text: "Tindakan ini tidak bisa dibatalkan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d32f2f',
        cancelButtonColor: '#6a1b9a',
        confirmButtonText: 'Ya, Hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            row.remove();
            Swal.fire(
                'Dihapus!',
                `Produk ${kodeProduk} telah dihapus.`,
                'success'
            );
        }
    });
}