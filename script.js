/**
 * ホームページ用スクリプト
 * - ページトップへ戻るボタン制御
 * - お知らせリンククリック時の親切なプレビュー案内
 */

document.addEventListener('DOMContentLoaded', () => {
  initBackToTopButton();
  initNewsLinks();
});

/**
 * ページトップへ戻るボタン
 */
function initBackToTopButton() {
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * お知らせリンク（画像 & タイトル）の案内ダイアログ
 */
function initNewsLinks() {
  const newsLinks = document.querySelectorAll('.news-img-link, .news-title-link');
  
  newsLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // ハッシュリンク（ダミー）の場合に親切な案内
      if (href && href.startsWith('#news')) {
        e.preventDefault();
        const card = link.closest('.news-card');
        const title = card ? card.querySelector('.news-title').textContent.trim() : 'お知らせ';
        alert(`【お知らせ詳細】\n\n「${title}」\n\n※こちらはサンプルリンクです。実際の公開時には各記事の詳細ページや外部URLを設定していただけます。`);
      }
    });
  });
}
