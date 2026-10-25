// --- Smart Govt Finder (Updated with Central & State Services) ---
const govtServicesData = {
    hi: {
        identity: `<b>🏛️ केन्द्रीय सरकारी सेवाएँ (Central Govt ID & Tax Documents):</b><br><br>
                   • <b>Aadhaar Card (विशिष्ट पहचान पत्र):</b> नागरिकता और पहचान का मुख्य प्रमाण।<br>👉 <a href="https://uidai.gov.in" target="_blank" style="color:#38bdf8;">UIDAI Official Portal</a><br><br>
                   • <b>PAN Card (स्थायी खाता संख्या):</b> बैंकिंग, टैक्स फाइलिंग और वित्तीय लेन-देन के लिए।<br>👉 <a href="https://incometax.gov.in" target="_blank" style="color:#38bdf8;">Income Tax e-Filing Portal</a><br><br>
                   • <b>Passport (अंतरराष्ट्रीय यात्रा):</b> विदेश यात्रा और मजबूत पते के प्रमाण हेतु।<br>👉 <a href="https://www.passportindia.gov.in" target="_blank" style="color:#38bdf8;">Passport Seva Portal</a>`,
        
        state: `<b>🏛️ राज्य सरकारी सेवाएँ (State Govt Certificates - e.g., UP):</b><br><br>
                • <b>Income Certificate (आय प्रमाण पत्र):</b> स्कॉलरशिप, सब्सिडी और फीस माफी के लिए।<br>👉 <a href="https://edistrict.up.gov.in" target="_blank" style="color:#38bdf8;">UP e-District Portal</a><br><br>
                • <b>Caste Certificate (जाति प्रमाण पत्र):</b> आरक्षित श्रेणियों और सरकारी योजनाओं हेतु।<br>👉 <a href="https://edistrict.up.gov.in" target="_blank" style="color:#38bdf8;">UP e-District Portal</a><br><br>
                • <b>Domicile Certificate (निवास प्रमाण पत्र):</b> स्थानीय कोटा और नौकरियों के लिए।<br>👉 <a href="https://edistrict.up.gov.in" target="_blank" style="color:#38bdf8;">UP e-District Portal</a>`,
        
        helper: `<b>💡 Extra Feature: All-in-One Govt Link Helper Tool</b><br><br>
                 यह टूल ग्रामीण और आम नागरिकों को फर्जी वेबसाइट्स और ऑनलाइन धोखाधड़ी से बचाता है। यूज़र सिर्फ डॉक्यूमेंट चुनता है और ऐप सीधे असली सरकारी पोर्टल पर रीडायरेक्ट करता है!`
    },
    en: {
        identity: `<b>🏛️ Central Govt Identity & Tax Documents:</b><br><br>
                   • <b>Aadhaar Card:</b> Mandatory identity proof for every citizen.<br>👉 <a href="https://uidai.gov.in" target="_blank" style="color:#38bdf8;">UIDAI Official Portal</a><br><br>
                   • <b>PAN Card:</b> Essential for banking, tax filing & financial transactions.<br>👉 <a href="https://incometax.gov.in" target="_blank" style="color:#38bdf8;">Income Tax e-Filing Portal</a><br><br>
                   • <b>Passport:</b> International travel and strong address proof.<br>👉 <a href="https://www.passportindia.gov.in" target="_blank" style="color:#38bdf8;">Passport Seva Portal</a>`,
        
        state: `<b>🏛️ State Govt Certificates (e.g., UP e-District):</b><br><br>
                • <b>Income Certificate:</b> Required for scholarships and subsidies.<br>👉 <a href="https://edistrict.up.gov.in" target="_blank" style="color:#38bdf8;">UP e-District Portal</a><br><br>
                • <b>Caste Certificate:</b> For reservation and government benefits.<br>👉 <a href="https://edistrict.up.gov.in" target="_blank" style="color:#38bdf8;">UP e-District Portal</a><br><br>
                • <b>Domicile Certificate:</b> For local state quota and jobs.<br>👉 <a href="https://edistrict.up.gov.in" target="_blank" style="color:#38bdf8;">UP e-District Portal</a>`,
        
        helper: `<b>💡 Extra Feature: All-in-One Govt Link Helper Tool</b><br><br>
                 Protects citizens from fake websites and online fraud by redirecting them safely to authentic portals.`
    }
};

// --- Modal Panels Content Update ---
const translations = {
    hi: {
        langBtn: "🌐 English",
        voiceBtn: "🔊 Aawaz Suno",
        heroTitle: "Digital Duniya Ab Aasan Hai!",
        heroDesc: "सरकारी सेवाएं सीखें, ऑनलाइन धोखाधड़ी पहचानें और डिजिटल कौशल बढ़ाएं।",
        servicesContent: `
            <h2>🏛️ सरकारी सेवाएँ & Link Helper Tool</h2>
            <hr style="border-color: rgba(255,255,255,0.1); margin: 12px 0;"><br>
            <div class="sub-features-container">
                <div class="sub-feature-card">
                    <div class="sub-icon">🇮🇳</div>
                    <div>
                        <h4>Central Govt Documents</h4>
                        <p>Aadhaar Card, PAN Card, aur Passport ki verified official links.</p>
                    </div>
                </div>
                <div class="sub-feature-card">
                    <div class="sub-icon">📜</div>
                    <div>
                        <h4>State Govt Certificates (UP e-District)</h4>
                        <p>Income Certificate (आय), Caste Certificate (जाति), aur Domicile (निवास).</p>
                    </div>
                </div>
                <div class="sub-feature-card">
                    <div class="sub-icon">🛡️</div>
                    <div>
                        <h4>Govt Link Helper Tool</h4>
                        <p>Fake websites aur scam links se bachne ke liye direct official redirect tool.</p>
                    </div>
                </div>
            </div>
        `,
        safetyContent: `<h2>🛡️ Cyber Safety Rules</h2><hr style="border-color: rgba(255,255,255,0.1);"><br><p>OTP kabhi share na karein. Fraud hone par 1930 par call karein.</p>`,
        learningContent: `<h2>📱 Digital Learning Hub</h2><p>Explore videos, quizzes, and 3D games below.</p>`
    },
    en: {
        langBtn: "🌐 हिंदी (Hindi)",
        voiceBtn: "🔊 Listen Voice",
        heroTitle: "Digital World Made Easy!",
        heroDesc: "Learn government services, identify online scams, and boost your digital skills.",
        servicesContent: `
            <h2>🏛️ Government Services & Link Helper</h2>
            <hr style="border-color: rgba(255,255,255,0.1); margin: 12px 0;"><br>
            <div class="sub-features-container">
                <div class="sub-feature-card">
                    <div class="sub-icon">🇮🇳</div>
                    <div>
                        <h4>Central Govt Documents</h4>
                        <p>Verified official links for Aadhaar, PAN, and Passport.</p>
                    </div>
                </div>
                <div class="sub-feature-card">
                    <div class="sub-icon">📜</div>
                    <div>
                        <h4>State Govt Certificates</h4>
                        <p>Income, Caste, and Domicile certificates via e-District portals.</p>
                    </div>
                </div>
                <div class="sub-feature-card">
                    <div class="sub-icon">🛡️</div>
                    <div>
                        <h4>Govt Link Helper Tool</h4>
                        <p>Prevent online fraud by avoiding fake URLs and accessing secure portals.</p>
                    </div>
                </div>
            </div>
        `,
        safetyContent: `<h2>🛡️ Cyber Safety Rules</h2><hr style="border-color: rgba(255,255,255,0.1);"><br><p>Never share OTPs. Report frauds on helpline 1930.</p>`,
        learningContent: `<h2>📱 Digital Learning Hub</h2><p>Explore videos, quizzes, and 3D games below.</p>`
    }
};