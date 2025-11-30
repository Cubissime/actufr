* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Roboto',sans-serif; line-height:1.6; color:#333; background:#f5f5f5; }
.header { background:linear-gradient(135deg,#d32f2f,#b71c1c); color:#fff; padding:10px 0; position:sticky; top:0; z-index:100; box-shadow:0 2px 10px rgba(211,47,47,.4); }
.header-top { max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; padding:0 20px; }
.logo img { height:40px; transition:transform .3s; }
.logo:hover img { transform:scale(1.05); }
.nav { display:flex; gap:30px; }
.nav a { color:#fff; text-decoration:none; font-weight:500; padding:8px 12px; border-radius:20px; transition:all .3s; }
.nav a:hover, .nav a.active { background:rgba(255,255,255,.15); }
.main-container { max-width:1200px; margin:30px auto; padding:0 20px; display:grid; grid-template-columns:1fr 2fr 1fr; gap:30px; }
.main-content { background:#fff; padding:35px; border-radius:12px; box-shadow:0 6px 25px rgba(0,0,0,.08); }
.article-title { font-size:32px; font-weight:700; color:#d32f2f; line-height:1.3; margin-bottom:15px; }
.article-date { color:#666; font-size:14px; margin-bottom:8px; }
.article-author { color:#d32f2f; font-weight:600; font-size:16px; margin-bottom:25px; }
.article-image { height:420px; background:linear-gradient(135deg,#667eea,#764ba2); border-radius:12px; margin-bottom:30px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:28px; position:relative; overflow:hidden; box-shadow:0 10px 30px rgba(102,126,234,.4); }
.image-overlay { text-align:center; z-index:2; }
.image-label { position:absolute; top:20px; right:20px; background:rgba(0,0,0,.8); padding:10px 18px; border-radius:30px; font-size:13px; }
.article-section { margin-bottom:35px; }
.article-section h2 { font-size:24px; color:#333; margin-bottom:15px; border-left:5px solid #d32f2f; padding-left:20px; }
.article-p { font-size:17px; margin-bottom:18px; text-align:justify; color:#444; }
.highlight { background:linear-gradient(135deg,#fff3cd,#ffeaa7); padding:28px; border-radius:12px; border-left:6px solid #ffc107; margin:25px 0; box-shadow:0 5px 20px rgba(255,193,7,.15); }
.results-list { background:#f8f9fa; padding:28px; border-radius:12px; margin:25px 0; }
.results-list h3 { color:#d32f2f; font-size:20px; margin-bottom:20px; }
.result-item { display:flex; justify-content:space-between; align-items:center; padding:14px 0; border-bottom:1px solid #eee; }
.result-item:last-child { border:none; }
.result-value { font-weight:700; font-size:22px; background:linear-gradient(45deg,#28a745,#20c997); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
.composants-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:20px; margin:30px 0; }
.composant-card { background:#fff; padding:28px; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,.08); border-left:5px solid #d32f2f; transition:all .4s; }
.composant-card:hover { transform:translateY(-8px); box-shadow:0 15px 35px rgba(211,47,47,.2); }
.composant-title { font-size:18px; font-weight:600; margin:12px 0 8px; }
.sirop-info { background:linear-gradient(135deg,#e3f2fd,#bbdefb); padding:28px; border-radius:12px; border-left:6px solid #2196f3; margin:30px 0; box-shadow:0 5px 20px rgba(33,150,243,.15); }
.sirop-title { font-size:20px; color:#1976d2; font-weight:600; margin-bottom:12px; }
.verification { background:#e8f5e8; padding:20px; border-radius:10px; border-left:5px solid #4caf50; text-align:center; font-weight:600; color:#2e7d32; margin-top:40px; }
.sidebar-widget { background:#fff; padding:28px; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,.08); }
.widget-title { font-size:18px; color:#d32f2f; font-weight:600; margin-bottom:20px; border-bottom:3px solid #fee; padding-bottom:10px; }
.article-preview { display:flex; gap:18px; padding:18px 0; border-bottom:1px solid #f0f0f0; text-decoration:none; color:inherit; transition:.3s; }
.article-preview:hover { background:#f8f9fa; border-radius:10px; padding:18px; }
.preview-image img { width:80px; height:60px; object-fit:cover; border-radius:8px; }
.preview-content h4 { font-size:15px; font-weight:600; margin-bottom:6px; }
.preview-time { font-size:13px; color:#999; }
.breaking-news { text-align:center; padding:30px; background:linear-gradient(135deg,#d32f2f,#b71c1c); color:#fff; border-radius:12px; }
.breaking-news h4 { font-size:20px; margin-bottom:18px; }
.breaking-image { width:100%; height:140px; object-fit:cover; border-radius:8px; margin:15px 0; }
.footer { text-align:center; padding:40px 20px; background:#222; color:#aaa; margin-top:60px; }
@media (max-width:1024px) { .main-container { grid-template-columns:1fr; } }
@media (max-width:768px) { .nav { flex-wrap:wrap; gap:15px; justify-content:center; } .article-title { font-size:26px; } }
