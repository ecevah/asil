"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Ogrenci {
  isim: string;
  soyisim: string;
  kimlikNumarasi: string;
  fotograf: File | null;
  [key: string]: any; // Dizin imzası eklendi
}

const HaftalikForm: React.FC = () => {
  const [ogrenciler, setOgrenciler] = useState<Ogrenci[]>([
    { isim: "", soyisim: "", kimlikNumarasi: "", fotograf: null },
  ]);

  const handleOgrenciDegisiklik = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...ogrenciler];
    const { name, value, files } = event.target;

    if (name === "fotograf" && files) {
      values[index][name] = files[0];
    } else {
      values[index][name] = value;
    }
    setOgrenciler(values);
  };

  const handleOgrenciEkle = () => {
    setOgrenciler([
      ...ogrenciler,
      { isim: "", soyisim: "", kimlikNumarasi: "", fotograf: null },
    ]);
  };

  const handleOgrenciSil = (index: number) => {
    const values = [...ogrenciler];
    values.splice(index, 1);
    setOgrenciler(values);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Form submit işlemleri burada yapılabilir
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Başlık</label>
        <input type="text" name="baslik" />
      </div>
      <div>
        <label>Bitiş Tarihi</label>
        <input type="date" name="bitisTarihi" />
      </div>
      <div>
        <label>Ülke Seç</label>
        <select name="ulke">
          <option value="turkiye">Türkiye</option>
          <option value="abd">ABD</option>
          <option value="almanya">Almanya</option>
          {/* Diğer seçenekler */}
        </select>
      </div>
      <button type="button" onClick={handleOgrenciEkle}>
        Öğrenci Ekle
      </button>
      {ogrenciler.map((ogrenci, index) => (
        <div key={index}>
          <h3>Öğrenci {index + 1}</h3>
          <input
            type="text"
            name="isim"
            placeholder="İsim"
            value={ogrenci.isim}
            onChange={(event) => handleOgrenciDegisiklik(index, event)}
          />
          <input
            type="text"
            name="soyisim"
            placeholder="Soyisim"
            value={ogrenci.soyisim}
            onChange={(event) => handleOgrenciDegisiklik(index, event)}
          />
          <input
            type="text"
            name="kimlikNumarasi"
            placeholder="Kimlik Numarası"
            value={ogrenci.kimlikNumarasi}
            onChange={(event) => handleOgrenciDegisiklik(index, event)}
          />
          <input
            type="file"
            name="fotograf"
            onChange={(event) => handleOgrenciDegisiklik(index, event)}
          />
          <button type="button" onClick={() => handleOgrenciSil(index)}>
            Sil
          </button>
        </div>
      ))}
      <div>
        <label>Etkinlik Adı</label>
        <input type="text" name="etkinlikAdi" />
      </div>
      <div>
        <label>Durumu</label>
        <select name="durum">
          <option value="aktif">Aktif</option>
          <option value="pasif">Pasif</option>
        </select>
      </div>
      <button type="submit">Kaydet</button>
      <button type="button">Çıkış</button>
    </form>
  );
};

export default HaftalikForm;
