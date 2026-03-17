/**
 * ShaqTech International School - International School Management
 * Main JavaScript Module
 * All shared utilities, data management, UI components
 */

const SMS = (() => {

  // ─── AUTH ──────────────────────────────────────────────────────────────────
  function checkAuth() {
    if (!localStorage.getItem('sms_logged_in')) {
      window.location.href = 'index.html';
    }
  }

  function logout() {
    localStorage.removeItem('sms_logged_in');
    window.location.href = 'index.html';
  }

  // ─── THEME ─────────────────────────────────────────────────────────────────
  function applyTheme() {
    if (localStorage.getItem('sms_dark') === 'true') {
      document.body.classList.add('dark');
      const icon = document.getElementById('darkIcon');
      if (icon) icon.className = 'fas fa-sun';
    }
  }

  function toggleDark() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('sms_dark', isDark);
    const icon = document.getElementById('darkIcon');
    if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  }

  // ─── SIDEBAR TOGGLE ────────────────────────────────────────────────────────
  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.querySelector('.main-wrap').classList.toggle('expanded');
  }

  // ─── LOCAL STORAGE DATA ────────────────────────────────────────────────────
  function getData(key) {
    try { return JSON.parse(localStorage.getItem('sms_' + key) || '[]'); }
    catch { return []; }
  }

  function setData(key, value) {
    localStorage.setItem('sms_' + key, JSON.stringify(value));
  }

  // ─── ID GENERATOR ──────────────────────────────────────────────────────────
  function generateId(prefix, collection) {
    const existing = getData(collection);
    let num = existing.length + 1;
    let id;
    do {
      id = prefix + String(num).padStart(3, '0');
      num++;
    } while (existing.find(x => x.id === id));
    return id;
  }

  // ─── GRADE CALCULATOR ──────────────────────────────────────────────────────
  function calcGrade(avg) {
    if (avg >= 80) return { grade: 'A', remark: 'Excellent' };
    if (avg >= 70) return { grade: 'B', remark: 'Very Good' };
    if (avg >= 60) return { grade: 'C', remark: 'Good' };
    if (avg >= 50) return { grade: 'D', remark: 'Pass' };
    return { grade: 'F', remark: 'Fail' };
  }

  // ─── TOAST NOTIFICATIONS ───────────────────────────────────────────────────
  function toast(message, type = 'success') {
    const container = document.getElementById('toastContainer') || createToastContainer();
    const t = document.createElement('div');
    t.className = `toast toast-${type}`;
    const icons = { success: 'fa-check-circle', warning: 'fa-exclamation-triangle', error: 'fa-times-circle', info: 'fa-info-circle' };
    t.innerHTML = `<i class="fas ${icons[type] || 'fa-info-circle'}"></i><span>${message}</span><button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>`;
    container.appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3500);
  }

  function createToastContainer() {
    const c = document.createElement('div');
    c.id = 'toastContainer';
    c.className = 'toast-container';
    document.body.appendChild(c);
    return c;
  }

  // ─── CSV EXPORT ────────────────────────────────────────────────────────────
  function exportCSV(key) {
    const data = getData(key);
    if (!data.length) { toast('No data to export.', 'warning'); return; }
    const headers = Object.keys(data[0]);
    const rows = data.map(row => headers.map(h => `"${(row[h]||'').toString().replace(/"/g,'""')}"`).join(','));
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${key}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click(); URL.revokeObjectURL(url);
    toast(`${key} exported as CSV!`);
  }

  // ─── SIDEBAR RENDERER ──────────────────────────────────────────────────────
  function renderSidebar(containerId, activeKey) {
    const navItems = [
      { key: 'dashboard', href: 'dashboard.html', icon: 'fa-th-large', label: 'Dashboard', section: 'MAIN' },
      { key: 'students', href: 'students.html', icon: 'fa-user-graduate', label: 'Students' },
      { key: 'teachers', href: 'teachers.html', icon: 'fa-chalkboard-teacher', label: 'Teachers' },
      { key: 'classes', href: 'classes.html', icon: 'fa-school', label: 'Classes', section: 'ACADEMICS' },
      { key: 'subjects', href: 'subjects.html', icon: 'fa-book', label: 'Subjects' },
      { key: 'attendance', href: 'attendance.html', icon: 'fa-calendar-check', label: 'Attendance' },
      { key: 'results', href: 'results.html', icon: 'fa-chart-line', label: 'Results' },
      { key: 'fees', href: 'fees.html', icon: 'fa-money-bill-wave', label: 'Fees', section: 'ADMIN' },
      { key: 'announcements', href: 'announcements.html', icon: 'fa-bullhorn', label: 'Announcements' },
      { key: 'reports', href: 'reports.html', icon: 'fa-file-alt', label: 'Reports' },
    ];

    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="sidebar-logo">
        <div class="brand-icon"><i class="fas fa-graduation-cap"></i></div>
        <div class="brand-text"><span class="b1">ShaqTech</span><span class="b2">IMS</span></div>
      </div>
      <nav class="sidebar-nav">`;

    navItems.forEach(item => {
      if (item.section) html += `<div class="nav-section-label">${item.section}</div>`;
      html += `<a href="${item.href}" class="nav-item ${item.key === activeKey ? 'active' : ''}"><i class="fas ${item.icon}"></i><span>${item.label}</span></a>`;
    });

    html += `</nav>
      <div class="sidebar-footer">
        <button class="dark-toggle" onclick="SMS.toggleDark()">
          <i class="fas fa-moon" id="darkIcon"></i><span>Dark Mode</span>
        </button>
      </div>`;

    container.innerHTML = html;

    // Apply theme to icon
    if (localStorage.getItem('sms_dark') === 'true') {
      const icon = document.getElementById('darkIcon');
      if (icon) icon.className = 'fas fa-sun';
    }
  }

  // ─── TOPBAR RENDERER ───────────────────────────────────────────────────────
  function renderTopbar(containerId, pageTitle) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const user = localStorage.getItem('sms_user') || 'Admin';
    container.innerHTML = `
      <div class="topbar-left">
        <button class="menu-toggle" onclick="SMS.toggleSidebar()"><i class="fas fa-bars"></i></button>
        <div class="page-title">
          <h2>${pageTitle}</h2>
        </div>
      </div>
      <div class="topbar-right">
        <div class="user-chip">
          <div class="user-avatar"><i class="fas fa-user"></i></div>
          <div class="user-info">
            <span class="user-name">${user}</span>
            <span class="user-role">Administrator</span>
          </div>
        </div>
        <button class="btn-logout" onclick="SMS.logout()"><i class="fas fa-sign-out-alt"></i><span>Logout</span></button>
      </div>`;
  }

    // ─── INITIALISE EMPTY DATABASE ────────────────────────────────────────────
  // ShaqTech International School — clean system, no pre-loaded data.
  // All records are created by the administrator through the application.
  function initSampleData() {
    if (getData('initialized').length) return;

    setData('classes',       []);
    setData('subjects',      []);
    setData('teachers',      []);
    setData('students',      []);
    setData('attendance',    []);
    setData('results',       []);
    setData('fees',          []);
    setData('announcements', []);

    setData('initialized', [{ done: true, school: 'ShaqTech International School' }]);
  }

  // ─── PUBLIC API ────────────────────────────────────────────────────────────
  return { checkAuth, logout, applyTheme, toggleDark, toggleSidebar, getData, setData, generateId, calcGrade, toast, exportCSV, renderSidebar, renderTopbar, initSampleData };

})();
