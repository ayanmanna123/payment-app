import React from 'react';
import { Search, ChevronRight, CreditCard, Smartphone, BarChart4, Wallet, ChevronsRight, Home, RefreshCw, Gift, Zap } from 'lucide-react';

export default function GooglePayHome() {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '480px',
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      padding: '0',
      position: 'relative',
      minHeight: '100vh',
      overflowX: 'hidden'
    },
    statusBar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 16px',
      backgroundColor: '#fff',
      fontSize: '12px',
      color: '#333'
    },
    searchBar: {
      backgroundColor: '#fff',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '24px',
      margin: '8px 16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    searchInput: {
      display: 'flex',
      alignItems: 'center',
      color: '#5f6368',
      flex: 1
    },
    profileIcon: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#dadce0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    qrBanner: {
      backgroundColor: '#fff',
      margin: '16px',
      padding: '16px',
      borderRadius: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    bannerText: {
      flex: 1
    },
    bannerTitle: {
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '4px'
    },
    addRupayButton: {
      color: '#1a73e8',
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      marginTop: '12px'
    },
    buttonArrow: {
      backgroundColor: '#1a73e8',
      color: 'white',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '8px'
    },
    quickActions: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '16px',
      textAlign: 'center'
    },
    actionItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '12px',
      width: '70px'
    },
    actionIcon: {
      backgroundColor: '#e8f0fe',
      color: '#1a73e8',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '8px'
    },
    sectionHeader: {
      fontWeight: 'bold',
      margin: '24px 16px 16px',
      fontSize: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    peopleRow: {
      display: 'flex',
      padding: '0 16px',
      overflowX: 'auto',
      gap: '24px'
    },
    personItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '12px',
      width: '64px'
    },
    personCircle: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      marginBottom: '8px',
      position: 'relative'
    },
    onlineDot: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      backgroundColor: '#1a73e8',
      borderRadius: '50%',
      right: '0',
      bottom: '0',
      border: '2px solid white'
    },
    billsRow: {
      display: 'flex',
      padding: '0 16px',
      overflowX: 'auto',
      gap: '16px'
    },
    billItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '12px',
      width: '64px'
    },
    billIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '8px',
      backgroundColor: 'white'
    },
    overdueTag: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '10px',
      marginBottom: '8px'
    },
    viewAllButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '16px auto',
      padding: '8px 16px',
      backgroundColor: 'white',
      borderRadius: '16px',
      fontSize: '14px',
      border: '1px solid #dadce0'
    },
    bottomBanner: {
      backgroundColor: 'white',
      margin: '16px',
      padding: '16px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center'
    },
    bannerImage: {
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      marginRight: '16px'
    },
    bannerInfo: {
      flex: 1
    },
    rechargeButton: {
      color: '#1a73e8',
      fontWeight: 'bold',
      fontSize: '14px',
      marginTop: '8px'
    },
    moneyActions: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '16px',
      textAlign: 'center'
    },
    moneyActionItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '12px',
      width: '160px'
    },
    moneyIcon: {
      backgroundColor: '#e8f0fe',
      color: '#1a73e8',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '8px'
    },
    applyNow: {
      color: '#1a73e8',
      fontWeight: 'bold',
      fontSize: '12px',
      marginTop: '4px'
    },
    bottomOptions: {
      backgroundColor: 'white',
      padding: '12px 16px',
      margin: '16px 0 0',
      borderTop: '1px solid #dadce0'
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid #f1f3f4'
    },
    optionLeft: {
      display: 'flex',
      alignItems: 'center'
    },
    optionIcon: {
      backgroundColor: '#e8f0fe',
      color: '#1a73e8',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px'
    },
    badge: {
      backgroundColor: '#e6f4ea',
      color: '#137333',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '10px',
      marginLeft: '8px'
    }
  };

  return (
    <div style={styles.container}>
      {/* Status bar */}
      <div style={styles.statusBar}>
        <div>11:30</div>
        <div>
          <span style={{marginRight: '8px'}}>🔋 34%</span>
        </div>
      </div>

      {/* Search bar */}
      <div style={styles.searchBar}>
        <div style={styles.searchInput}>
          <Search size={20} style={{marginRight: '12px'}} />
          <span>Pay anyone on UPI</span>
        </div>
        <div style={styles.profileIcon}></div>
      </div>

      {/* QR banner */}
      <div style={styles.qrBanner}>
        <div style={styles.bannerText}>
          <div style={styles.bannerTitle}>Scan & pay any UPI QR with credit card</div>
          <div style={styles.addRupayButton}>
            Add RuPay card
            <div style={styles.buttonArrow}>
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
        <div>
          <div style={{textAlign: 'right'}}>⭐</div>
          <img src="/api/placeholder/100/60" alt="QR and card illustration" />
        </div>
      </div>

      {/* Quick actions */}
      <div style={styles.quickActions}>
        <div style={styles.actionItem}>
          <div style={styles.actionIcon}>
            <CreditCard size={24} />
          </div>
          <div>Scan any QR code</div>
        </div>
        <div style={styles.actionItem}>
          <div style={styles.actionIcon}>
            <Smartphone size={24} />
          </div>
          <div>Pay contacts</div>
        </div>
        <div style={styles.actionItem}>
          <div style={styles.actionIcon}>
            <Smartphone size={24} />
          </div>
          <div>Pay phone number</div>
        </div>
        <div style={styles.actionItem}>
          <div style={styles.actionIcon}>
            <Home size={24} />
          </div>
          <div>Bank transfer</div>
        </div>
      </div>

      <div style={styles.quickActions}>
        <div style={styles.actionItem}>
          <div style={styles.actionIcon}>
            <Smartphone size={24} />
          </div>
          <div>Pay UPI ID or number</div>
        </div>
        <div style={styles.actionItem}>
          <div style={styles.actionIcon}>
            <RefreshCw size={24} />
          </div>
          <div>Self transfer</div>
        </div>
        <div style={styles.actionItem}>
          <div style={styles.actionIcon}>
            <BarChart4 size={24} />
          </div>
          <div>Pay bills</div>
        </div>
        <div style={styles.actionItem}>
          <div style={styles.actionIcon}>
            <Smartphone size={24} />
          </div>
          <div>Mobile recharge</div>
        </div>
      </div>

      <div style={{padding: '0 16px', fontSize: '12px', color: '#5f6368', display: 'flex', alignItems: 'center'}}>
        <div>Activate UPI Lite</div>
        <div style={{width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #dadce0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '8px'}}>
          <ChevronRight size={12} />
        </div>
        <div style={{flex: 1}}></div>
        <div>UPI ID: manojsaini7778@okaxis</div>
      </div>

      {/* People section */}
      <div style={styles.sectionHeader}>People</div>

      <div style={styles.peopleRow}>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#FF5722'}}>
            <span>U</span>
            <div style={styles.onlineDot}></div>
          </div>
          <div>UTPAL MA...</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#009688'}}>
            <span>S</span>
          </div>
          <div>SAYANTAN...</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#FF5722'}}>
            <span>C</span>
          </div>
          <div>CHHANDA...</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#1a73e8'}}>
            <span>R</span>
          </div>
          <div>Ricky</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#795548'}}>
            <span>A</span>
            <div style={styles.onlineDot}></div>
          </div>
          <div>AJAY KUM...</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#673AB7'}}>
            <span>A</span>
          </div>
          <div>Ajay</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#fff', border: '1px solid #dadce0'}}>
            <img src="/api/placeholder/40/40" alt="Sukla" />
          </div>
          <div>Sukla</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#fff', border: '1px solid #dadce0'}}>
            <ChevronsRight size={20} color="#5f6368" />
          </div>
          <div>More</div>
        </div>
      </div>

      {/* Bills & recharges */}
      <div style={styles.sectionHeader}>
        <span>Bills & recharges</span>
      </div>
      
      <div style={{padding: '0 16px', marginBottom: '8px'}}>
        <div style={styles.overdueTag}>Overdue</div>
      </div>

      <div style={styles.billsRow}>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <img src="/api/placeholder/40/40" alt="CESC" />
          </div>
          <div>CESC Kolkata</div>
        </div>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <img src="/api/placeholder/40/40" alt="Vi Prepaid" />
          </div>
          <div>Vi Prepaid</div>
        </div>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <img src="/api/placeholder/40/40" alt="Google Play" />
          </div>
          <div>Google Play recharge code</div>
        </div>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <img src="/api/placeholder/40/40" alt="Jio Prepaid" />
          </div>
          <div>Jio Prepaid</div>
        </div>
      </div>

      <div style={styles.billsRow}>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <Smartphone size={24} color="#5f6368" />
          </div>
          <div>Mobile recharge</div>
        </div>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <Home size={24} color="#5f6368" />
          </div>
          <div>DTH / Cable TV</div>
        </div>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <Zap size={24} color="#5f6368" />
          </div>
          <div>Electricity</div>
        </div>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <Home size={24} color="#5f6368" />
          </div>
          <div>Gas cylinder booking</div>
        </div>
      </div>

      <button style={styles.viewAllButton}>View all</button>

      {/* Businesses */}
      <div style={styles.sectionHeader}>
        <span>Businesses</span>
        <span style={{color: '#1a73e8', fontSize: '14px'}}>Explore</span>
      </div>

      <div style={styles.peopleRow}>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#FF9800'}}>
            <span>S</span>
          </div>
          <div>SOURAV P...</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#2196F3'}}>
            <span>A</span>
          </div>
          <div>Avijit Guria</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#607D8B'}}>
            <span>M</span>
          </div>
          <div>MRIGANKA...</div>
        </div>
        <div style={styles.personItem}>
          <div style={{...styles.personCircle, backgroundColor: '#fff', border: '1px solid #dadce0'}}>
            <ChevronsRight size={20} color="#5f6368" />
          </div>
          <div>More</div>
        </div>
      </div>

      {/* Offers & rewards */}
      <div style={styles.sectionHeader}>Offers & rewards</div>

      <div style={styles.billsRow}>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <img src="/api/placeholder/40/40" alt="Rewards" />
          </div>
          <div>Rewards</div>
        </div>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <img src="/api/placeholder/40/40" alt="Offers" />
          </div>
          <div>Offers</div>
        </div>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <img src="/api/placeholder/40/40" alt="Referrals" />
          </div>
          <div>Referrals</div>
        </div>
        <div style={styles.billItem}>
          <div style={styles.billIcon}>
            <img src="/api/placeholder/40/40" alt="Tez Shots" />
          </div>
          <div>Tez Shots</div>
        </div>
      </div>

      {/* Cashback banner */}
      <div style={styles.bottomBanner}>
        <div style={styles.bannerInfo}>
          <div style={{fontWeight: 'bold', marginBottom: '4px'}}>
            Get cashback on Amazon Prime, Myntra or JioHotstar gift card
          </div>
          <div style={{fontSize: '12px', color: '#5f6368'}}>
            Recharge for min. ₹149
          </div>
          <div style={styles.rechargeButton}>Recharge now</div>
        </div>
        <img src="/api/placeholder/100/100" alt="Gift card promo" />
      </div>

      {/* Manage money */}
      <div style={styles.sectionHeader}>Manage your money</div>

      <div style={styles.moneyActions}>
        <div style={styles.moneyActionItem}>
          <div style={styles.moneyIcon}>
            <Wallet size={24} />
          </div>
          <div>Personal loan</div>
          <div style={{fontSize: '10px', color: '#5f6368'}}>Instant approval & paperless</div>
          <div style={styles.applyNow}>Apply now</div>
        </div>
        <div style={styles.moneyActionItem}>
          <div style={styles.moneyIcon}>
            <CreditCard size={24} />
          </div>
          <div>Credit card</div>
          <div style={{fontSize: '10px', color: '#5f6368'}}>Save up to ₹2,000 yearly</div>
          <div style={styles.applyNow}>Apply now</div>
        </div>
      </div>

      {/* Bottom options */}
      <div style={styles.bottomOptions}>
        <div style={styles.option}>
          <div style={styles.optionLeft}>
            <div style={styles.optionIcon}>
              <BarChart4 size={20} />
            </div>
            <div>Check your CIBIL score for free</div>
          </div>
          <ChevronRight size={20} color="#5f6368" />
        </div>

        <div style={styles.option}>
          <div style={styles.optionLeft}>
            <div style={styles.optionIcon}>
              <RefreshCw size={20} />
            </div>
            <div>See transaction history</div>
          </div>
          <ChevronRight size={20} color="#5f6368" />
        </div>

        <div style={{...styles.option, borderBottom: 'none'}}>
          <div style={styles.optionLeft}>
            <div style={styles.optionIcon}>
              <Home size={20} />
            </div>
            <div>Check bank balance</div>
          </div>
          <ChevronRight size={20} color="#5f6368" />
        </div>
      </div>
    </div>
  );
}