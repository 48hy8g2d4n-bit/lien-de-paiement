import React, { useState, useEffect } from "react";

// Importations des assets adaptées en chemin relatif (évite les erreurs de résolution Vite)
import drapeauGabon from "../assets/images/Gabon.png";
import fondGlobalPng from "../assets/images/Fond.png";
import logoWusuPng from "../assets/images/W.png"; 
import iconeProfil from "../assets/images/Profil.png";
import iconeTime from "../assets/images/Time.png";
import logoMoovJpg from "../assets/images/Moov.png"; 
import logoAirtelJpg from "../assets/images/Airtel.png"; 
import contourPng from "../assets/images/Contour.png";
import iconeAvionPng from "../assets/images/Receive.png";
import selectionPng from "../assets/images/Selection.png";
import thickPng from "../assets/images/Thick.png";
import iconePhone from "../assets/images/Phone.png";
import iconeResume from "../assets/images/Resume.png";
import WePng from "../assets/images/We.png";

// Éléments spécifiques Carte Virtuelle
import iconeSecurity from "../assets/images/Security.png";
import fondVirtuelleJpg from "../assets/images/Fond_virtuelle.png";
import carteVirtuelleImg from "../assets/images/Carte_Virtuelle.png";
import iconeWalletPng from "../assets/images/Wallet.png";
import iconeCartePng from "../assets/images/Icone_Carte.png"; 

export default function CarteVirtuelle() {
  const [operator, setOperator] = useState("moov");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(2000);
  const [includeFees, setIncludeFees] = useState(false);
  
  // 29 minutes et 35 secondes = 1775 secondes au total
  const [timeLeft, setTimeLeft] = useState(1775); 

  // Logique du chronomètre actif qui décompte chaque seconde
  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Conversion du temps restant en chaînes MM : SS
  const mins = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const secs = (timeLeft % 60).toString().padStart(2, "0");
  
  const fOperateur = amount * 0.02;
  const fWusu = amount * 0.0075;
  const totalFrais = fOperateur + fWusu;

  const totalAPayer = includeFees ? amount + totalFrais : amount;
  const darcyRecevra = includeFees ? amount : amount - totalFrais;

  // Dégradé officiel identique à la maquette
  const wusuGradient = "linear-gradient(90deg, #B0529A, #8D4E99, #684498, #524798, #4A4798)";

  return (
    <div style={{ backgroundImage: `url(${fondGlobalPng})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", padding: "16px 8px", minHeight: "100vh", boxSizing: "border-box", fontFamily: "'Gilroy', sans-serif" }}>
      
      {/* Styles CSS pour l'animation de pulsation, le dégradé de couleur textuel et la réactivité mobile avancée */}
      <style>{`
        @keyframes tickerPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animated-timer-icon {
          animation: tickerPulse 1s ease-in-out infinite;
        }
        .gradient-countdown-text {
          background: ${wusuGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        /* Media Queries pour gérer la flexibilité sur tous les types d'écrans mobiles */
        @media (max-width: 415px) {
          .invitation-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .invitation-divider {
            display: none !important;
          }
          .timer-wrapper {
            width: 100% !important;
            justify-content: flex-start !important;
          }
          .nominatif-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
          .card-image-wrapper {
            padding-left: 0 !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
          .card-image-wrapper img {
            width: 140px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "450px", width: "100%", backgroundColor: "#ffffff", borderRadius: "24px", padding: "18px", boxSizing: "border-box", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", height: "fit-content" }}>
        
        {/* En-tête de la page */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", paddingBottom: "12px", borderBottom: "1px solid rgba(0,0,0,0.02)" }}>
          <img src={logoWusuPng} alt="WusuPay" style={{ height: "22px", width: "auto", objectFit: "contain" }} />
          <div style={{ background: wusuGradient, color: "#ffffff", padding: "8px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "800", whiteSpace: "nowrap" }}>
            Page de paiement
          </div>
        </div>

        {/* Bloc d'invitation rose & compte à rebours en temps réel */}
        <div className="invitation-container" style={{ display: "flex", flexDirection: "row", backgroundColor: "#FCE8F7", borderRadius: "24px", padding: "14px 14px", marginBottom: "20px", alignItems: "center", justifyContent: "space-between", gap: "6px" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", flex: "1" }}>
            <div style={{ width: "46px", height: "46px", backgroundColor: "#ffffff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src={iconeAvionPng} alt="Avion" style={{ width: "55px", height: "55px", objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4 style={{ margin: 0, color: "#4A4798", fontSize: "14px", fontWeight: "900", lineHeight: "1.35", letterSpacing: "-0.01em" }}>
                Darcy vous invite à recharger sa carte
              </h4>
              <p style={{ margin: "4px 0 0 0", color: "#727272", fontSize: "10px", fontWeight: "400", lineHeight: "1.3" }}>
                Envoyez de l'argent directement sur sa carte en toute sécurité.
              </p>
            </div>
          </div>

          <div className="invitation-divider" style={{ width: "1px", height: "45px", backgroundColor: "rgba(74, 71, 152, 0.15)", flexShrink: 0, margin: "0 4px" }}></div>

          <div className="timer-wrapper" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <img 
              src={iconeTime} 
              alt="Timer" 
              className="animated-timer-icon"
              style={{ width: "42px", height: "42px", objectFit: "contain" }} 
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: "11px", color: "#000000", fontWeight: "800", marginBottom: "4px", whiteSpace: "nowrap", letterSpacing: "-0.02em", textAlign: "center" }}>
                Lien valide pendant encore
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "2px", justifyContent: "center", fontFamily: "'Gilroy', sans-serif" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span className="gradient-countdown-text" style={{ fontSize: "22px", fontWeight: "900", lineHeight: "1" }}>
                    {mins}
                  </span>
                  <span style={{ fontSize: "8px", color: "#87126C", fontWeight: "800", marginTop: "2px" }}>MIN</span>
                </div>

                <span className="gradient-countdown-text" style={{ fontSize: "22px", fontWeight: "900", lineHeight: "1" }}>:</span>
                
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span className="gradient-countdown-text" style={{ fontSize: "22px", fontWeight: "900", lineHeight: "1" }}>
                    {secs}
                  </span>
                  <span style={{ fontSize: "8px", color: "#87126C", fontWeight: "800", marginTop: "2px" }}>SEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloc Sombre Nominatif */}
        <div className="nominatif-container" style={{ 
          backgroundImage: `url(${fondVirtuelleJpg})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: "24px", 
          padding: "22px 18px", 
          color: "#ffffff", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "24px"
        }}>
          {/* Section Informations de Gauche */}
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <img src={iconeProfil} alt="Profil" style={{ width: "60px", height: "60px", borderRadius: "50%", flexShrink: 0 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <div style={{ fontSize: "12px", opacity: 0.8, fontWeight: "500", letterSpacing: "0.02em" }}>Recharger la carte de :</div>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "900", letterSpacing: "-0.01em", lineHeight: "1.2" }}>Darcy Joris Mihindou</h3>
              
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", marginTop: "2px" }}>
                <img src={iconeCartePng} alt="Card Icon" style={{ width: "18px", height: "auto", objectFit: "contain" }} />
                <span style={{ fontWeight: "600" }}>Carte Virtuelle WusuPay</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                <img src={iconePhone} alt="Phone" style={{ width: "13px", height: "13px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                <span style={{ fontWeight: "600" }}>+241 76 xx xx xx</span>
              </div>
            </div>
          </div>
          
          {/* Carte Positionnée à droite (Animation 3D ultra-visible - Carte Virtuelle) */}
          <div className="card-image-wrapper" style={{ display: "flex", alignItems: "center", paddingLeft: "10px", flexShrink: 0, perspective: "800px" }}>
            
            <style>{`
              @keyframes ultraVisibleTiltVirtuelle {
                0% { transform: rotateY(0deg) rotateX(0deg); }
                25% { transform: rotateY(45deg) rotateX(5deg); }
                50% { transform: rotateY(0deg) rotateX(0deg); }
                75% { transform: rotateY(-45deg) rotateX(-5deg); }
                100% { transform: rotateY(0deg) rotateX(0deg); }
              }
              .visible-tilt-card-virtuelle {
                animation: ultraVisibleTiltVirtuelle 4s ease-in-out infinite;
              }
            `}</style>

            <img 
              src={carteVirtuelleImg} 
              alt="Visa Card" 
              className="visible-tilt-card-virtuelle"
              style={{ 
                width: "115px", 
                height: "auto", 
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 12px 28px rgba(0, 0, 0, 0.45)", 
                transformStyle: "preserve-3d"
              }} 
            />
          </div>
        </div>

        {/* 1. Opérateur */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#000", margin: "0 0 14px 0" }}>1. Choose your Mobile Money operator</h3>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            
            <div style={{ position: "relative", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: "70px", height: "70px", borderRadius: "50%", boxSizing: "border-box" }} onClick={() => setOperator("moov")}>
              <img src={logoMoovJpg} style={{ width: "130%", height: "130%", borderRadius: "50%", padding: "14px", boxSizing: "border-box", objectFit: "contain" }} alt="Moov" />
              <img src={operator === "moov" ? selectionPng : contourPng} style={{ position: "absolute", top: 0, left: 0, width: "70px", height: "70px" }} alt="border" />
              {operator === "moov" && (
                <div style={{ position: "absolute", right: "-6px", top: "50%", transform: "translateY(-50%)", width: "22px", height: "22px", backgroundColor: "#FCEBF7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
                  <img src={thickPng} style={{ width: "12px", height: "12px", objectFit: "contain" }} alt="check" />
                </div>
              )}
            </div>

            <div style={{ position: "relative", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: "70px", height: "70px", borderRadius: "50%", boxSizing: "border-box" }} onClick={() => setOperator("airtel")}>
              <img src={logoAirtelJpg} style={{ width: "130%", height: "130%", borderRadius: "50%", padding: "14px", boxSizing: "border-box", objectFit: "contain" }} alt="Airtel" />
              <img src={operator === "airtel" ? selectionPng : contourPng} style={{ position: "absolute", top: 0, left: 0, width: "70px", height: "70px" }} alt="border" />
              {operator === "airtel" && (
                <div style={{ position: "absolute", right: "-6px", top: "50%", transform: "translateY(-50%)", width: "22px", height: "22px", backgroundColor: "#FCEBF7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
                  <img src={thickPng} style={{ width: "12px", height: "12px", objectFit: "contain" }} alt="check" />
                </div>
              )}
            </div>

          </div>
        </div>

        {/* 2. Numéro & Sélectionneur de Pays */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#000", margin: "0 0 12px 0" }}>2. Votre numéro Mobile Money</h3>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "12px 14px", backgroundColor: "#f9fafb" }}>
            
            <div 
              onClick={() => alert("Pour l'instant, seul le Gabon est disponible.")}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "6px", 
                paddingRight: "10px", 
                borderRight: "1px solid #e5e7eb", 
                marginRight: "10px", 
                flexShrink: 0,
                cursor: "pointer"
              }}
            >
              <img src={drapeauGabon} alt="Gabon" style={{ width: "22px", height: "auto", borderRadius: "2px" }} />
              <span style={{ fontSize: "14px", fontWeight: "800", color: "#000" }}>+241</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: "2px", opacity: 0.7 }}>
                <path d="M1 1L5 5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <img src={iconePhone} alt="Phone" style={{ width: "16px", marginRight: "8px", flexShrink: 0 }} />
            
            <input 
              type="tel" 
              placeholder="076 00 00 00" 
              value={phoneNumber} 
              onChange={(e) => {
                const seulementsChiffres = e.target.value.replace(/\D/g, "");
                if (seulementsChiffres.length <= 9) {
                  setPhoneNumber(seulementsChiffres);
                }
              }} 
              style={{ 
                border: "none", 
                background: "transparent", 
                outline: "none", 
                width: "100%", 
                fontSize: "15px", 
                fontWeight: "600", 
                color: phoneNumber === "" ? "#727272" : "#000", 
                fontFamily: "'Gilroy', sans-serif" 
              }} 
            />
          </div>
        </div>

        {/* 3. Montant */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#000", margin: "0 0 12px 0" }}>3. Montant à envoyer</h3>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "12px 16px", backgroundColor: "#f9fafb" }}>
            <input 
              type="number" 
              placeholder="0" 
              value={amount === 0 ? "" : amount} 
              onChange={(e) => {
                const val = e.target.value;
                setAmount(val === "" ? 0 : Number(val));
              }} 
              style={{ 
                border: "none", 
                background: "transparent", 
                outline: "none", 
                fontSize: "22px", 
                fontWeight: "900", 
                width: "75%", 
                color: amount === 0 ? "#727272" : "#000", 
                fontFamily: "'Gilroy', sans-serif" 
              }} 
            />
            <span style={{ fontSize: "15px", fontWeight: "900", color: amount === 0 ? "#727272" : "#000", flexShrink: 0 }}>Fcfa</span>
          </div>
          
          <div style={{ display: "flex", gap: "4px", marginTop: "12px", width: "100%", justifyContent: "space-between" }}>
            {[2000, 5000, 10000, 15000].map((val) => {
              const isSelected = amount === val;
              const affichageMontant = val >= 10000 ? `${val / 1000} 000` : val;

              return (
                <button 
                  key={val} 
                  onClick={() => setAmount(val)} 
                  style={{ 
                    flex: 1, 
                    padding: "8px 0", 
                    backgroundColor: "#FCE8F7", 
                    backgroundImage: isSelected ? "linear-gradient(to right, #B0529A, #8D4E99, #684A98, #524798, #4A4798)" : "none",
                    WebkitBackgroundClip: isSelected ? "text" : "unset",
                    WebkitTextFillColor: isSelected ? "transparent" : "#727272",
                    color: isSelected ? "#B0529A" : "#727272", 
                    border: isSelected ? "1px solid #B0529A" : "none", 
                    borderRadius: "20px", 
                    fontSize: "11px", 
                    fontWeight: "900", 
                    cursor: "pointer", 
                    fontFamily: "'Gilroy', sans-serif",
                    whiteSpace: "nowrap", 
                    textAlign: "center"
                  }}
                >
                  {affichageMontant} Fcfa
                </button>
              );
            })}
          </div>
        </div>

        {/* Récapitulatif complet */}
        <div style={{ 
          backgroundImage: `url(${WePng})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FCEBF7", 
          borderRadius: "16px", 
          padding: "16px", 
          marginBottom: "24px", 
          border: "1px solid rgba(176, 82, 154, 0.15)", 
          fontFamily: "'Gilroy', sans-serif" 
        }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <img src={iconeResume} alt="Recap" style={{ width: "18px", height: "18px" }} />
            <span style={{ 
              fontSize: "14px", 
              fontWeight: "900", 
              backgroundImage: "linear-gradient(to right, #B0529A, #8D4E99, #684A98, #524798, #4A4798)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "#B0529A"
            }}>
              Récapitulatif de la transaction
            </span>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "10px", gap: "10px" }}>
            <span style={{ fontWeight: "800", color: "#4A4798" }}>
              (Frais opérateur <span style={{ backgroundImage: "linear-gradient(to right, #B0529A, #8D4E99, #684A98, #524798, #4A4798)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "#B0529A" }}>2%</span> + Frais WusuPay <span style={{ backgroundImage: "linear-gradient(to right, #B0529A, #8D4E99, #684A98, #524798, #4A4798)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "#B0529A" }}>0,75%</span>):
            </span>
            <span style={{ 
              fontWeight: "900", 
              backgroundImage: amount === 0 ? "none" : "linear-gradient(to right, #B0529A, #8D4E99, #684A98, #524798, #4A4798)", 
              WebkitBackgroundClip: amount === 0 ? "unset" : "text", 
              WebkitTextFillColor: amount === 0 ? "unset" : "transparent", 
              color: "#727272", 
              whiteSpace: "nowrap" 
            }}>
              {totalFrais.toFixed(0)} Fcfa
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "10px" }}>
            <span style={{ fontWeight: "800", color: "#4A4798" }}>Montant à débiter :</span>
            <span style={{ fontWeight: "900", color: "#4A4798" }}>{amount.toLocaleString()} Fcfa</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", marginBottom: "14px", borderBottom: "1px solid rgba(176, 82, 154, 0.2)", paddingBottom: "12px" }}>
            <span style={{ fontWeight: "800", color: "#87126C" }}>Avec les frais :</span>
            <div 
              onClick={() => setIncludeFees(!includeFees)} 
              style={{ 
                width: "38px", 
                height: "20px", 
                backgroundColor: includeFees ? "#4A4798" : "#e5e7eb", 
                borderRadius: "10px", 
                padding: "2px", 
                cursor: "pointer", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: includeFees ? "flex-end" : "flex-start", 
                transition: "all 0.2s",
                border: "1px solid #4A4798"
              }}
            >
              <div style={{ width: "16px", height: "16px", backgroundColor: includeFees ? "#ffffff" : "#4A4798", borderRadius: "50%" }} />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "14px" }}>
            <span style={{ 
              fontWeight: "900", 
              backgroundImage: "linear-gradient(to right, #B0529A, #8D4E99, #684A98, #524798, #4A4798)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "#B0529A"
            }}>
              Total à payer
            </span>
            <span style={{ fontWeight: "900", color: "#4A4798" }}>{totalAPayer.toFixed(0)} Fcfa</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FCE8F7", padding: "12px 14px", borderRadius: "12px", fontSize: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src={iconeWalletPng} alt="Wallet" style={{ width: "18px", height: "18px" }} />
              <span style={{ fontWeight: "800", color: "#4A4798" }}>Darcy recevra</span>
            </div>
            <span style={{ fontWeight: "900", color: "#4A4798" }}>{darcyRecevra.toFixed(0)} Fcfa</span>
          </div>
        </div>

        {/* Bouton Action Dégradé Premium */}
        <button style={{ width: "100%", padding: "14px", background: wusuGradient, color: "#ffffff", border: "none", borderRadius: "30px", fontSize: "15px", fontWeight: "900", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "18px", fontFamily: "'Gilroy', sans-serif" }}>
          <img 
            src={iconeSecurity} 
            alt="Sécurité" 
            style={{ 
              height: "22px", 
              width: "auto", 
              objectFit: "contain",
              flexShrink: 0 
            }} 
          />
          Payer maintenant
        </button>

        {/* Pied de page cryptage */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", fontSize: "11px", color: "#4A4798", fontWeight: "700", textAlign: "center" }}>
          <svg width="16" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B0529A" />
                <stop offset="100%" stopColor="#4A4798" />
              </linearGradient>
            </defs>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#shieldGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m9 11 2 2 4-4" stroke="url(#shieldGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Paiement sécurisé et crypté par WusuPay</span>
        </div>

      </div>
    </div>
  );
}