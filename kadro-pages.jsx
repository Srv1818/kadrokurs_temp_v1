// kadro-pages.jsx — Inner pages for KADROkurs prototype
const { useState, useEffect } = React;

/* ─── Shared helpers ─────────────────────────────────── */
const C = {
  crimson: '#7B1D1D', crimsonDeep: '#5C1414', crimsonLight: '#9E2A2A',
  forest: '#1C2E1A', forestMid: '#2A4028',
  gold: '#C9943A',
  bg: '#FFFFFF', bgWarm: '#FBF8F5',
  text: '#1A1208', textMid: '#4A3F35', textLight: '#7A6E65',
  border: '#E8E0D8',
};

const PageHeader = ({ tag, title, subtitle }) => (
  <div style={{ background: C.crimson, color: 'white', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 80px) clamp(36px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', right: -120, top: -120, width: 480, height: 480, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', right: 60, bottom: -80, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', opacity: 0.65, marginBottom: 14 }}>{tag}</p>
    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 54, fontWeight: 700, lineHeight: 1.1, maxWidth: 680 }}>{title}</h1>
    {subtitle && <p style={{ marginTop: 18, opacity: 0.8, fontFamily: 'DM Sans, sans-serif', fontSize: 18, maxWidth: 560, lineHeight: 1.7 }}>{subtitle}</p>}
  </div>
);

const inputStyle = { width: '100%', padding: 'clamp(6px,0.8vw,12px) clamp(6px,1.0vw,16px)', border: `1px solid ${C.border}`, borderRadius: 8, fontFamily: 'DM Sans, sans-serif', fontSize: 15, outline: 'none', background: 'white', color: C.text, transition: 'border-color 0.2s' };
const labelStyle = { display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: C.textLight, marginBottom: 7, letterSpacing: '0.4px' };

function FormInput({ label, fieldKey, type = 'text', form, update, required }) {
  return (
    <div>
      <label style={labelStyle}>{label}{required ? ' *' : ''}</label>
      <input type={type} value={form[fieldKey] || ''} onChange={e => update(fieldKey, e.target.value)} required={required} style={inputStyle}
        onFocus={e => e.target.style.borderColor = C.crimson}
        onBlur={e => e.target.style.borderColor = C.border} />
    </div>
  );
}

function FormSelect({ label, fieldKey, options, form, update, required, placeholder }) {
  return (
    <div>
      <label style={labelStyle}>{label}{required ? ' *' : ''}</label>
      <select value={form[fieldKey] || ''} onChange={e => update(fieldKey, e.target.value)} required={required}
        style={{ ...inputStyle, cursor: 'pointer' }}>
        <option value="">{placeholder || 'Seçin'}</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

/* ─── TAB BAR ─────────────────────────────────────────── */
function TabBar({ tabs, active, setActive }) {
  return (
    <div style={{ background: 'white', borderBottom: `1px solid ${C.border}`, padding: '0 clamp(16px,4vw,80px)', position: 'sticky', top: 80, zIndex: 10 }}>
      <div style={{ display: 'flex', gap: 0 }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActive(tab)} style={{
            padding: 'clamp(9px,1.1vw,17px) clamp(10px,1.6vw,26px)', border: 'none', background: 'none', cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', fontSize: 14.5,
            fontWeight: active === tab ? 600 : 400,
            color: active === tab ? C.crimson : C.textLight,
            borderBottom: `3px solid ${active === tab ? C.crimson : 'transparent'}`,
            transition: 'all 0.2s',
          }}>{tab}</button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   KURUMSAL PAGE
═══════════════════════════════════════════════════════ */
function KurumsalPage() {
  const timeline = [
    { year: '2009', text: "Ankara Çankaya'da ilk şubemiz açıldı. 3 öğretmen, 45 öğrenciyle başladık." },
    { year: '2013', text: "4 şubeye büyüdük. Yıllık öğrenci kapasitemiz 600'ü geçti." },
    { year: '2017', text: "LGS sistemine geçişle birlikte yenilikçi hazırlık programlarını başlattık." },
    { year: '2020', text: "Online eğitim altyapısı kuruldu; pandemi döneminde kesintisiz hizmet verildi." },
    { year: '2024', text: "Ankara genelinde 8 şube, 120+ uzman öğretmen ve 2.500+ öğrenciyle sektörün önde gelen kurumuyuz." },
  ];

  return (
    <div>
      <PageHeader tag="Kurumsal" title="Eğitimde Köklü Deneyim" />

      {/* Hakkımızda */}
      <section style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)', maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 72, alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>Hakkımızda</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px,2.8vw,44px)', color: C.crimson, lineHeight: 1.2, marginBottom: 24 }}>Başarımızı Nesiller Boyunca Taşıyoruz</h2>
          {['Deneyimli öğretmen kadrosu ve yenilikçi eğitim metodolojisiyle her yıl binlerce öğrencinin hayallerine kavuşmasına yardımcı oluyoruz.',
            'Her öğrenciye özel eğitim anlayışımız ve güçlü rehberlik sistemimizle fark yaratıyoruz.'].map((p, i) => (
            <p key={i} style={{ color: C.textMid, lineHeight: 1.85, fontSize: 16, marginBottom: i === 0 ? 18 : 0 }}>{p}</p>
          ))}
        </div>
        <div style={{ background: C.bgWarm, borderRadius: 20, height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: `${C.crimson}10` }} />
          <div style={{ textAlign: 'center', color: C.textLight }}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ marginBottom: 12, opacity: 0.4 }}>
              <rect x="8" y="16" width="40" height="28" rx="3" stroke={C.crimson} strokeWidth="2"/>
              <path d="M28 16V44" stroke={C.crimson} strokeWidth="2"/>
              <path d="M8 24h40M8 32h40" stroke={C.crimson} strokeWidth="1" opacity="0.5"/>
            </svg>
            <p style={{ fontSize: 13 }}>Kurumsal Fotoğraf</p>
          </div>
        </div>
      </section>

      {/* Misyon / Vizyon */}
      <section style={{ background: C.bgWarm, padding: '80px' }}>
        <div className="card-row cols-2" style={{ maxWidth: 1440, margin: '0 auto' }}>
          {[
            { tag: 'Misyonumuz', title: 'Her Öğrencinin Potansiyelini Ortaya Çıkarmak', text: 'Akademik başarıyı desteklerken kişisel gelişimi ön planda tutmak; nitelikli eğitim ile nesiller arası başarıyı köprülemek.', accent: true },
            { tag: 'Vizyonumuz', title: "Türkiye'nin En Güvenilir Eğitim Kurumu", text: 'İnovatif metodolojilerle öğrencilerimizi geleceğe hazırlamak ve eğitimde standartları belirlemek.', accent: false },
          ].map(item => (
            <div key={item.tag} style={{ background: item.accent ? C.crimson : 'white', borderRadius: 20, padding: '48px', border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: item.accent ? 'rgba(255,255,255,0.6)' : C.gold, marginBottom: 18 }}>{item.tag}</p>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, color: item.accent ? 'white' : C.text, lineHeight: 1.3, marginBottom: 18 }}>{item.title}</h3>
              <p style={{ color: item.accent ? 'rgba(255,255,255,0.82)' : C.textMid, lineHeight: 1.8, fontSize: 15 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eğitim Modelimiz */}
      <section style={{ padding: '80px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: C.gold, marginBottom: 12 }}>Yaklaşımımız</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px,3vw,48px)', color: C.text, marginBottom: 16 }}>Eğitim Modelimiz</h2>
            <p style={{ color: C.textMid, fontSize: 16.5, maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>Öğrencinin merkezde olduğu, veriye dayalı ve sürekli gelişen bir eğitim anlayışı.</p>
          </div>
          <div className="card-row cols-4">
            {[
              { step: '01', title: 'Seviye Tespiti', desc: 'Her öğrenci programa başlamadan önce kapsamlı bir ön değerlendirme sınavından geçer; güçlü ve zayıf yönler belirlenir.' },
              { step: '02', title: 'Kişisel Plan', desc: 'Tespit sonuçlarına göre öğrenciye özel ders programı ve hedef haritası oluşturulur; kaynak önerileri sunulur.' },
              { step: '03', title: 'Sürekli Ölçme', desc: 'Haftalık denemeler ve konu bazlı quizlerle ilerleme düzenli olarak ölçülür; veriler dijital panoda takip edilir.' },
              { step: '04', title: 'Rehberlik & Destek', desc: 'Öğretmen–rehber koordinasyonuyla akademik ve motivasyonel destek kesintisiz sağlanır; veli düzenli bilgilendirilir.' },
            ].map((item, i) => (
              <div key={item.step} style={{ background: i === 1 ? C.crimson : 'white', border: `1px solid ${i === 1 ? 'transparent' : C.border}`, borderRadius: 18, padding: 'clamp(18px,2.3vw,36px) clamp(12px,1.9vw,30px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -18, right: -10, fontFamily: 'Playfair Display, serif', fontSize: 88, fontWeight: 700, color: i === 1 ? 'rgba(255,255,255,0.08)' : 'rgba(123,29,29,0.06)', lineHeight: 1, pointerEvents: 'none' }}>{item.step}</div>
                <span style={{ display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700, color: i === 1 ? 'rgba(255,255,255,0.7)' : C.crimson, letterSpacing: 1.5, marginBottom: 16 }}>{item.step}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 21, color: i === 1 ? 'white' : C.text, marginBottom: 14, lineHeight: 1.25 }}>{item.title}</h3>
                <p style={{ color: i === 1 ? 'rgba(255,255,255,0.82)' : C.textMid, fontSize: 14.5, lineHeight: 1.78 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Akademik Kadromuz */}
      <section style={{ background: C.bgWarm, padding: '80px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: C.gold, marginBottom: 12 }}>Ekibimiz</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px,3vw,48px)', color: C.text, marginBottom: 16 }}>Akademik Kadromuz</h2>
            <p style={{ color: C.textMid, fontSize: 16.5, maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>120'den fazla uzman öğretmenimiz, alanında deneyimli ve öğrenci odaklı eğitim anlayışıyla çalışmaktadır.</p>
          </div>
          <div className="card-row cols-4">
            {[
              { ad: 'Dr. Ahmet Yılmaz', brans: 'Matematik', deneyim: '18 Yıl', okul: 'ODTÜ Matematik' },
              { ad: 'Ayşe Kaya', brans: 'Türk Dili ve Edebiyatı', deneyim: '14 Yıl', okul: 'Hacettepe Üniversitesi' },
              { ad: 'Mehmet Demir', brans: 'Fizik', deneyim: '12 Yıl', okul: 'Ankara Üniversitesi' },
              { ad: 'Zeynep Arslan', brans: 'Kimya', deneyim: '10 Yıl', okul: 'Gazi Üniversitesi' },
              { ad: 'Burak Şahin', brans: 'Biyoloji', deneyim: '9 Yıl', okul: 'Hacettepe Üniversitesi' },
              { ad: 'Elif Çelik', brans: 'Tarih', deneyim: '11 Yıl', okul: 'Ankara Üniversitesi' },
              { ad: 'Hasan Öztürk', brans: 'Coğrafya', deneyim: '8 Yıl', okul: 'Gazi Üniversitesi' },
              { ad: 'Merve Aydın', brans: 'İngilizce', deneyim: '7 Yıl', okul: 'Bilkent Üniversitesi' },
            ].map((ogr, i) => (
              <div key={i} style={{ background: 'white', border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(123,29,29,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                {/* Fotoğraf placeholder */}
                <div style={{ height: 140, background: `linear-gradient(135deg, ${i % 2 === 0 ? C.crimson : C.forest} 0%, ${i % 2 === 0 ? '#9E2A2A' : '#2A4028'} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="10" r="5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
                      <path d="M4 26c0-6 4.5-10 10-10s10 4 10 10" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>
                <div style={{ padding: '20px 20px 22px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, color: C.text, marginBottom: 4, lineHeight: 1.3 }}>{ogr.ad}</h3>
                  <p style={{ color: C.crimson, fontSize: 13, fontWeight: 600, fontFamily: 'DM Sans, sans-serif', marginBottom: 10 }}>{ogr.brans}</p>
                  <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 12, color: C.textLight }}>{ogr.deneyim}</span>
                    <span style={{ fontSize: 12, color: C.textLight }}>{ogr.okul}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <p style={{ color: C.textLight, fontSize: 15 }}>ve <strong style={{ color: C.crimson }}>120+</strong> uzman öğretmenimizle hizmetinizdeyiz.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PROGRAMLAR PAGE
═══════════════════════════════════════════════════════ */
function ProgramlarPage({ navigate }) {
  const [active, setActive] = useState('Tümü');

  const programs = [
    { cat: 'YKS', name: 'YKS TYT Hazırlık', grade: '11–12. Sınıf', duration: '12 Ay', desc: 'TYT tüm derslerinde güçlü bir temel; her hafta deneme ve analiz.', features: ['Türkçe, Mat, Fen, Sosyal', 'Haftalık TYT denemeleri', 'Bireysel konu takibi', 'Soru bankası erişimi'] },
    { cat: 'YKS', name: 'YKS AYT Hazırlık', grade: '12. Sınıf', duration: '10 Ay', desc: 'Alan derslerinizde derinlemesine hazırlık; hedef üniversitenize en kısa yol.', features: ['Sayısal / Sözel / Eşit Ağırlık', 'AYT deneme sınavları', '1:1 alan rehberliği', 'Üniversite yerleşim analizi'] },
    { cat: 'YKS', name: 'YKS Yaz Yoğun', grade: '12. Sınıf', duration: '6 ay', desc: 'Yaz döneminde yoğun tekrar ve sınav stratejisi kampı.', features: ['Yoğun yaz takvimi', 'Günlük soru çözümü', 'Deneme sınavları', 'Motivasyon koçluğu'] },
    { cat: 'YKS', name: 'YKS Fırsat Grubu', grade: '12. Sınıf', duration: '6 Ay', desc: 'Sınava az süre kalan öğrenciler için odaklı strateji programı.', features: ['Konu önceliklendirme', 'Soru çözme teknikleri', 'Net artırma stratejileri', 'Haftalık analiz görüşmesi'] },

    { cat: 'Özel', name: 'Birebir Özel Ders', grade: '12. Sınıf', duration: '6 Ay', desc: 'Tamamen kişiselleştirilmiş, birebir özel ders programı.', features: ['Esnek ders saatleri', 'Özel müfredat', 'Hızlı ilerleme', 'Öğretmen seçimi'] },
  ];

  const tabs = ['Tümü', 'YKS', 'Özel'];
  const filtered = active === 'Tümü' ? programs : programs.filter(p => p.cat === active);

  return (
    <div>
      <PageHeader tag="Programlar" title="Eğitim Programlarımız" subtitle="Her seviye ve hedefe uygun kapsamlı eğitim programlarımızı inceleyin." />
      <TabBar tabs={tabs} active={active} setActive={setActive} />

      <section style={{ padding: 'clamp(30px,3.8vw,60px) clamp(32px,5.0vw,80px)', maxWidth: 1440, margin: '0 auto' }}>
        <div className="card-row cols-3">
          {filtered.map(prog => (
            <div key={prog.name} style={{ background: 'white', border: `1px solid ${C.border}`, borderRadius: 18, overflow: 'hidden', transition: 'transform 0.22s, box-shadow 0.22s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(123,29,29,0.13)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ background: C.crimson, padding: 'clamp(13px,1.6vw,26px) clamp(11px,1.8vw,28px)' }}>
                <span style={{ fontSize: 11, color: 'rgb(255, 255, 255)', fontFamily: 'DM Sans, sans-serif', letterSpacing: 1 }}>{prog.grade} · {prog.duration}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: 'white', marginTop: 6, lineHeight: 1.25 }}>{prog.name}</h3>
              </div>
              <div style={{ padding: '28px' }}>
                <p style={{ color: C.textMid, lineHeight: 1.75, marginBottom: 24, fontSize: 14.5 }}>{prog.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {prog.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, color: C.textMid, fontSize: 14 }}>
                      <span style={{ width: 18, height: 18, borderRadius: '50%', background: C.crimson, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate('basvuru')} style={{ width: '100%', padding: '12px', background: C.forest, color: 'white', border: 'none', borderRadius: 8, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14, cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.target.style.background = C.forestMid}
                  onMouseLeave={e => e.target.style.background = C.forest}>
                  Başvur
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   BAŞARILARIMIZ PAGE
═══════════════════════════════════════════════════════ */
function BasarilarimizPage() {
  const [cnts, setCnts] = useState({ s: 0, y: 0, r: 0, b: 0 });

  useEffect(() => {
    const targets = { s: 2500, y: 15, r: 94, b: 8 };
    let step = 0; const steps = 72; const dur = 1800;
    const t = setInterval(() => {
      step++;
      const e = 1 - Math.pow(1 - step / steps, 3);
      setCnts({ s: Math.round(targets.s * e), y: Math.round(targets.y * e), r: Math.round(targets.r * e), b: Math.round(targets.b * e) });
      if (step >= steps) clearInterval(t);
    }, dur / steps);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { val: `${cnts.s.toLocaleString('tr')}+`, label: 'Mezun Öğrenci' },
    { val: `${cnts.y}`, label: 'Yıllık Deneyim' },
    { val: `%${cnts.r}`, label: 'Başarı Oranı' },
    { val: `${cnts.b}`, label: 'Aktif Şube' },
  ];

  const achievements = [
    { year: '2024', title: 'YKS\'de 850+ İlk Bin', desc: 'YKS\'de 850 öğrencimiz Türkiye genelinde ilk bine girdi.', tag: 'YKS' },
    { year: '2024', title: '320+ Tıp & Hukuk', desc: '320 öğrencimiz 2024\'te Tıp, Hukuk ve Mühendislik fakültelerini kazandı.', tag: 'YKS' },
    { year: '2023', title: 'En İyi Dershane Ödülü', desc: "Ankara'nın en başarılı dershane ödülüne layık görüldük.", tag: 'Ödül' },
    { year: '2023', title: 'YKS\'de 720+ İlk Bin', desc: '2023 YKS\'de 720 öğrencimiz Türkiye genelinde ilk bine girdi.', tag: 'YKS' },
    { year: '2022', title: 'Yılın Eğitim Kurumu', desc: 'Türk Eğitim Derneği tarafından yılın kurumu seçildik.', tag: 'Ödül' },
    { year: '2022', title: '580+ Tıp & Hukuk', desc: '580 öğrencimiz Tıp ve Hukuk fakültelerini kazandı.', tag: 'YKS' },
  ];

  return (
    <div>
      <PageHeader tag="Başarılarımız" title="Rakamlarla Kadro" subtitle="15 yıllık deneyimimizin somut yansımaları." />

      <section style={{ background: C.bgWarm, padding: 'clamp(36px,4.5vw,72px) clamp(32px,5.0vw,80px)' }}>
        <div className="card-row cols-4" style={{ maxWidth: 1440, margin: '0 auto' }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: 'white', border: `1px solid ${C.border}`, borderRadius: 18, padding: 'clamp(24px,3.0vw,48px) clamp(10px,1.5vw,24px)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 58, fontWeight: 700, color: C.crimson, lineHeight: 1 }}>{s.val}</div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', color: C.textLight, marginTop: 12, fontSize: 15 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: 'clamp(36px,4.5vw,72px) clamp(32px,5.0vw,80px)', maxWidth: 1440, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 40, color: C.text, marginBottom: 48 }}>Öne Çıkan Başarılar</h2>
        <div className="card-row cols-3">
          {achievements.map((a, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${C.border}`, borderRadius: 16, padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <span style={{ background: C.crimson, color: 'white', fontSize: 11, fontWeight: 600, padding: 'clamp(2px,0.3vw,4px) clamp(5px,0.8vw,12px)', borderRadius: 20, fontFamily: 'DM Sans, sans-serif', letterSpacing: 0.5 }}>{a.tag}</span>
                <span style={{ color: C.textLight, fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}>{a.year}</span>
              </div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: C.text, marginBottom: 12 }}>{a.title}</h3>
              <p style={{ color: C.textMid, lineHeight: 1.75, fontSize: 14.5 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   BLOG PAGE
═══════════════════════════════════════════════════════ */
function BlogPage() {
  const [activeCat, setActiveCat] = useState('Tümü');

  const articles = [
    { cat: 'Başarı', title: "YKS 2024'te 850 Öğrencimiz İlk Binde", date: '15 Haz 2024', read: '4 dk', desc: "Bu yıl YKS'de 850 öğrencimiz Türkiye genelinde ilk bine girerek büyük bir başarıya imza attı.", color: C.crimson },
    { cat: 'İpuçları', title: "YKS'ye Nasıl Hazırlanmalısınız? 10 Altın Kural", date: '8 Haz 2024', read: '7 dk', desc: 'Uzman öğretmenlerimizin hazırladığı kapsamlı sınav rehberi.', color: C.forest },
    { cat: 'Duyuru', title: 'Yeni Dönem Kayıt İşlemleri Başladı', date: '1 Haz 2024', read: '2 dk', desc: '2024-2025 eğitim yılı kayıtları tüm şubelerimizde başlamıştır.', color: C.gold },
    { cat: 'İpuçları', title: 'Başarının Sırrı: Etkili Çalışma Teknikleri', date: '25 May 2024', read: '6 dk', desc: 'Pomodoro tekniği, aktif tekrar yöntemi ve verimli ders çalışmanın yolları.', color: C.forest },
    { cat: 'Başarı', title: "Fen Bilimleri Olimpiyatı'nda Büyük Başarı", date: '18 May 2024', read: '3 dk', desc: "Öğrencimiz Ahmet Y., Türkiye Fen Bilimleri Olimpiyatı'nda altın madalya kazandı.", color: C.crimson },
    { cat: 'Duyuru', title: 'Veli Semineri: Çocuğunuzun Başarısını Destekleme', date: '10 May 2024', read: '3 dk', desc: 'Eğitim uzmanlarımızla akademik başarıyı eve taşımanın yollarını konuştuk.', color: C.gold },
  ];

  const cats = ['Tümü', 'Başarı', 'İpuçları', 'Duyuru'];
  const filtered = activeCat === 'Tümü' ? articles : articles.filter(a => a.cat === activeCat);

  return (
    <div>
      <PageHeader tag="Blog" title="Haberler & Yazılar" />
      <TabBar tabs={cats} active={activeCat} setActive={setActiveCat} />

      <section style={{ padding: 'clamp(30px,3.8vw,60px) clamp(32px,5.0vw,80px)', maxWidth: 1440, margin: '0 auto' }}>
        <div className="card-row cols-3">
          {filtered.map((a, i) => (
            <article key={i} style={{ background: 'white', border: `1px solid ${C.border}`, borderRadius: 18, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ height: 136, background: a.color, position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 20 }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, transparent 40%, rgba(0,0,0,0.3))' }} />
                <span style={{ position: 'relative', background: 'rgba(255,255,255,0.18)', color: 'white', fontSize: 11, fontWeight: 600, padding: 'clamp(2px,0.2vw,3px) clamp(4px,0.7vw,11px)', borderRadius: 20, fontFamily: 'DM Sans, sans-serif', letterSpacing: 0.5 }}>{a.cat}</span>
              </div>
              <div style={{ padding: 'clamp(13px,1.6vw,26px) clamp(11px,1.8vw,28px)' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 19, color: C.text, lineHeight: 1.4, marginBottom: 12 }}>{a.title}</h3>
                <p style={{ color: C.textLight, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{a.desc}</p>
                <div style={{ display: 'flex', gap: 12, color: '#9A8E85', fontSize: 12.5, fontFamily: 'DM Sans, sans-serif' }}>
                  <span>{a.date}</span><span>·</span><span>{a.read} okuma</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   ŞUBELERİMİZ PAGE
═══════════════════════════════════════════════════════ */
function SubelerimizPage({ navigate }) {
  const branches = [
    { name: 'Bakırköy', area: '3.500 m²', rooms: 25, address: 'Kızılay Mah., Ziya Gökalp Cad. No:15,', phone: '(312) 418 55 00' },
    { name: 'Beylikdüzü', area: '2.200 m²', rooms: 18, address: 'Aktepe Mah., Bağlıca Cad. No:8,', phone: '(312) 380 22 10' },
    { name: 'Kadıköy', area: '1.800 m²', rooms: 14, address: 'Elvankent Mah., İstanbul Cad. No:42, ', phone: '(312) 244 66 30' },
    { name: 'İzmir', area: '2.000 m²', rooms: 16, address: 'Tandoğan Mah., Atatürk Blv. No:67, S', phone: '(312) 269 11 40' },
  ];

  return (
    <div>
      <PageHeader tag="Şubelerimiz" title="Size En Yakın Şube"  />

      <section style={{ padding: 'clamp(30px,3.8vw,60px) clamp(32px,5.0vw,80px)', maxWidth: 1440, margin: '0 auto' }}>
        <div className="card-row cols-4">
          {branches.map((b, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(123,29,29,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ background: C.crimson, height: 6 }} />
              <div style={{ padding: '24px 24px 26px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 19, color: C.text, marginBottom: 6 }}>{b.name} Şubesi</h3>
                <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                  <span style={{ fontSize: 12, color: C.textLight, fontFamily: 'DM Sans, sans-serif' }}>{b.area}</span>
                  <span style={{ fontSize: 12, color: C.textLight, fontFamily: 'DM Sans, sans-serif' }}>{b.rooms} derslik</span>
                </div>
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <p style={{ color: C.textMid, fontSize: 13, lineHeight: 1.5 }}>{b.address}</p>
                  <p style={{ color: C.crimson, fontSize: 13, fontWeight: 500, fontFamily: 'DM Sans, sans-serif' }}>{b.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: C.forest, color: 'white', padding: 'clamp(40px,6vw,64px) clamp(20px,5vw,80px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 34, marginBottom: 10 }}>Size En Yakın Şubemizi Bulun</h2>
          <p style={{ opacity: 0.8, fontSize: 16, fontFamily: 'DM Sans, sans-serif' }}>Hemen arayın veya başvuru formunu doldurun.</p>
        </div>
        <button onClick={() => navigate('basvuru')} style={{ flexShrink: 0, marginLeft: 48, background: 'white', color: C.forest, border: 'none', padding: 'clamp(7px,0.9vw,14px) clamp(16px,2.5vw,40px)', borderRadius: 40, fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: 'transform 0.2s' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
          Hemen Başvur
        </button>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   İLETİŞİM PAGE
═══════════════════════════════════════════════════════ */
function IletisimPage() {
  const [form, setForm] = useState({ ad: '', email: '', konu: '', mesaj: '' });
  const [sent, setSent] = useState(false);
  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <div>
      <PageHeader tag="İletişim" title="Bize Ulaşın" />
      <section style={{ padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,80px)', maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 88, alignItems: 'start' }}>

        {/* Info */}
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px,2vw,32px)', color: C.crimson, marginBottom: 36 }}>İletişim Bilgileri</h2>
          {[
            { label: 'Merkez Adres', val: 'Zeytinlik, Ray Sl. no:9, 34140 Bakırkçy/İstanbul' },
            { label: 'Telefon', val: '0530 670 90 95' },
            { label: 'E-posta', val: 'info@kadrokurs.com.tr' },
            { label: 'Çalışma Saatleri', val: 'Pzt–Paz: 09:00–19:00' },
          ].map(item => (
            <div key={item.label} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#9A8E85', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 7 }}>{item.label}</p>
              <p style={{ color: C.text, fontSize: 15.5, lineHeight: 1.55 }}>{item.val}</p>
            </div>
          ))}
          <div style={{ background: C.bgWarm, borderRadius: 16, height: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.border}`, marginTop: 8, gap: 8 }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" opacity="0.35">
              <rect x="2" y="2" width="32" height="32" rx="4" stroke={C.crimson} strokeWidth="1.5"/>
              <circle cx="18" cy="15" r="5" stroke={C.crimson} strokeWidth="1.5"/>
              <path d="M6 32c0-7 5-11 12-11s12 4 12 11" stroke={C.crimson} strokeWidth="1.5"/>
            </svg>
            <p style={{ fontSize: 13, color: C.textLight }}>Harita görseli</p>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(20px,2vw,32px)', color: C.crimson, marginBottom: 36 }}>Mesaj Gönderin</h2>
          {sent ? (
            <div style={{ background: '#F0F7F0', border: '1px solid #C3DCC3', borderRadius: 18, padding: 52, textAlign: 'center' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#E0F0E0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 22, color: C.forest }}>✓</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px,1.6vw,26px)', color: C.forest, marginBottom: 12 }}>Mesajınız Alındı!</h3>
              <p style={{ color: C.textMid }}>En kısa sürede sizinle iletişime geçeceğiz.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <FormInput label="Adınız Soyadınız" fieldKey="ad" form={form} update={update} required />
                <FormInput label="E-posta" fieldKey="email" type="email" form={form} update={update} required />
              </div>
              <FormSelect label="Konu" fieldKey="konu" options={['Kayıt ve Başvuru', 'Program Hakkında', 'Diğer']} form={form} update={update} placeholder="Konu seçin" />
              <div>
                <label style={labelStyle}>Mesajınız *</label>
                <textarea value={form.mesaj} onChange={e => update('mesaj', e.target.value)} rows={5} required
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = C.crimson}
                  onBlur={e => e.target.style.borderColor = C.border} />
              </div>
              <button type="submit" style={{ alignSelf: 'flex-start', background: C.forest, color: 'white', border: 'none', padding: 'clamp(7px,0.8vw,13px) clamp(16px,2.5vw,40px)', borderRadius: 8, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 15, cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.target.style.background = C.forestMid}
                onMouseLeave={e => e.target.style.background = C.forest}>
                Gönder
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SSS */}
      <section style={{ background: C.bgWarm, padding: 'clamp(36px,4.5vw,72px) clamp(32px,5.0vw,80px)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: C.gold, marginBottom: 12 }}>SSS</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px,3vw,48px)', color: C.text }}>Sıkça Sorulan Sorular</h2>
          </div>
          <SSSAccordion />
        </div>
      </section>
    </div>
  );
}

function SSSAccordion() {
  const [open, setOpen] = React.useState(null);
  const faqs = [
    { q: 'Kayıt için hangi belgeler gereklidir?', a: 'Kayıt işlemi için öğrencinin nüfus cüzdanı fotokopisi, son dönem karne fotokopisi ve 2 adet vesikalık fotoğraf yeterlidir. Başvuru formunu doldurup şubemize getirmeniz halinde kaydınız aynı gün tamamlanabilir.' },
    { q: 'Deneme sınavları ne sıklıkla yapılmaktadır?', a: 'Tüm programlarımızda haftada bir genel deneme sınavı uygulanmaktadır. Bunların yanı sıra konu bazlı quizler ve aylık kapsamlı değerlendirme sınavları da yapılmaktadır. Tüm sınav sonuçları dijital panelimizden velilerimizle paylaşılır.' },
    { q: 'Veli toplantıları ne zaman yapılıyor?', a: 'Her ay düzenli veli bilgilendirme toplantıları yapılmaktadır. Bunların dışında öğrencinin durumuna göre bireysel görüşme talep edebilirsiniz. Ayrıca dijital raporlama sistemimiz üzerinden anlık takip mümkündür.' },
    { q: 'Öğrencinin gelişimini nasıl takip edebilirim?', a: 'Velilerimize özel dijital takip panelimiz aracılığıyla öğrencinin haftalık ders katılımı, deneme sınavı sonuçları, konu bazlı performansı ve öğretmen geri bildirimlerini anlık olarak görüntüleyebilirsiniz.' },
    { q: 'Hangi ödeme seçenekleri mevcuttur?', a: 'Peşin ödeme, taksitli ödeme (3–12 ay) ve banka kartı ile ödeme seçenekleri mevcuttur. Kardeş ve erken kayıt indirimleri için şubelerimizle iletişime geçiniz.' },
    { q: 'Deneme kaydı veya ücretsiz ders imkânı var mı?', a: 'Kayıt öncesinde ücretsiz seviye tespit sınavına katılabilirsiniz. Ayrıca ilk ders ücretsiz deneme imkânımız bazı şubelerimizde mevcuttur; detay için şubenizi arayınız.' },
  ];

  return (
    <div className="card-row cols-2">
      {faqs.map((faq, i) => (
        <div key={i} style={{ background: 'white', border: `1px solid ${open === i ? C.crimson : C.border}`, borderRadius: 14, overflow: 'hidden', transition: 'border-color 0.2s' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', padding: 'clamp(10px,1.3vw,20px) clamp(10px,1.5vw,24px)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 15, color: open === i ? C.crimson : C.text, lineHeight: 1.4 }}>{faq.q}</span>
            <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: open === i ? C.crimson : C.bgWarm, border: `1px solid ${open === i ? C.crimson : C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: open === i ? 'white' : C.textLight, fontSize: 14, fontWeight: 700, transition: 'all 0.2s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
          </button>
          {open === i && (
            <div style={{ padding: '0 24px 22px' }}>
              <p style={{ color: C.textMid, fontSize: 14.5, lineHeight: 1.8, borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SSS PAGE
═══════════════════════════════════════════════════════ */
function SSSPage() {
  return (
    <div>
      <PageHeader tag="SSS" title="Sıkça Sorulan Sorular" subtitle="Merak ettiğiniz her konuda yardımcı olmaya hazırız." />
      <section style={{ padding: 'clamp(36px,4.5vw,72px) clamp(32px,5.0vw,80px)', maxWidth: 1440, margin: '0 auto' }}>
        <SSSAccordion />
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   BAŞVURU PAGE — single step form
═══════════════════════════════════════════════════════ */
function BasvuruPage() {
  const [form, setForm] = useState({ ogrAd: '', dogum: '', sinif: '', program: '', veliAd: '', veliTel: '', veliEmail: '', sube: 'Farketmez', mesaj: '' });
  const [kvkk, setKvkk] = useState(false);
  const [veliOnay, setVeliOnay] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  if (submitted) return (
    <div style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 80, textAlign: 'center' }}>
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#EEF5EE', border: `2px solid ${C.forest}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(18px,1.6vw,26px)', color: C.forest, marginBottom: 32 }}>✓</div>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px,3vw,48px)', color: C.crimson, marginBottom: 16 }}>Başvurunuz Alındı!</h2>
      <p style={{ color: C.textMid, fontSize: 17, maxWidth: 500, lineHeight: 1.75 }}>Danışmanlarımız en kısa sürede sizinle iletişime geçecektir.</p>
      <p style={{ color: C.textLight, marginTop: 16, fontSize: 14 }}>Referans: <strong style={{ color: C.crimson }}>#KDR-{String(Date.now()).slice(-6)}</strong></p>
    </div>
  );

  return (
    <div>
      <PageHeader tag="Başvuru" title="Başvuru Formu" subtitle="Formu doldurun, danışmanımız sizi arasın." />

      <section style={{ padding: 'clamp(40px,6vw,60px) clamp(20px,5vw,80px)', maxWidth: 840, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: C.textLight, marginBottom: 32 }}>
          <span style={{ cursor: 'pointer', color: C.crimson }}>Ana Sayfa</span>
          <span style={{ margin: '0 8px' }}>›</span>
          <strong style={{ color: C.text }}>Başvuru</strong>
        </p>

        <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>

          {/* Öğrenci Adı Soyadı */}
          <FormInput label="Öğrenci Adı Soyadı" fieldKey="ogrAd" form={form} update={update} required />

          {/* Doğum + Sınıf */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <FormInput label="Doğum Tarihi" fieldKey="dogum" type="date" form={form} update={update} required />
            <FormSelect label="Sınıf" fieldKey="sinif" options={['9. Sınıf','10. Sınıf','11. Sınıf','12. Sınıf / Mezun']} form={form} update={update} required placeholder="Seçiniz" />
          </div>

          {/* Veli Adı */}
          <FormInput label="Veli Adı Soyadı" fieldKey="veliAd" form={form} update={update} required />

          {/* Veli Tel + Email */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <FormInput label="Veli Telefonu" fieldKey="veliTel" type="tel" form={form} update={update} required />
            <FormInput label="Veli E-postası" fieldKey="veliEmail" type="email" form={form} update={update} required />
          </div>

          {/* Mesaj */}
          <div>
            <label style={labelStyle}>Mesajınız</label>
            <textarea value={form.mesaj} onChange={e => { if (e.target.value.length <= 1000) { update('mesaj', e.target.value); setCharCount(e.target.value.length); } }} rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = C.crimson}
              onBlur={e => e.target.style.borderColor = C.border} />
            <p style={{ textAlign: 'right', fontSize: 12, color: C.textLight, marginTop: 4 }}>{charCount}/1000</p>
          </div>

          {/* Checkboxlar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { val: kvkk, set: setKvkk, label: <>KVKK aydınlatma metnini <span style={{ color: C.crimson, cursor: 'pointer' }}>okudum</span> ve onaylıyorum.</> },
              { val: veliOnay, set: setVeliOnay, label: 'Veli olarak başvuruyu onaylıyorum.' },
            ].map((cb, i) => (
              <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: C.textMid }}>
                <input type="checkbox" checked={cb.val} onChange={e => cb.set(e.target.checked)} required style={{ width: 16, height: 16, accentColor: C.crimson, flexShrink: 0 }} />
                {cb.label}
              </label>
            ))}
          </div>

          {/* Submit */}
          <div style={{ paddingTop: 8 }}>
            <button type="submit" style={{ padding: 'clamp(7px,0.9vw,14px) clamp(19px,3.0vw,48px)', background: C.crimson, color: 'white', border: 'none', borderRadius: 8, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 15, cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => e.target.style.background = C.crimsonDeep}
              onMouseLeave={e => e.target.style.background = C.crimson}>
              Başvuruyu Gönder
            </button>
          </div>

        </form>
      </section>
    </div>
  );
}

/* ─── Export to window ───────────────────────────────── */
Object.assign(window, { KurumsalPage, ProgramlarPage, BasarilarimizPage, BlogPage, SubelerimizPage, IletisimPage, BasvuruPage, SSSPage });
