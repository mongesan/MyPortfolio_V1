(() => {
  onload = () => {
    const coming = document.getElementsByClassName('coming')[0];
    coming.style.letterSpacing = '3px';

    const text = 'Loading...';
    text.split('').map((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;

      // アニメーション
      span.style = `
        opacity: 0;
        bottom: 100px;
        position: relative;
        animation: feedin 1200ms ${300 + index * 80}ms ease-in-out forwards;
      `;
      coming.appendChild(span);
    });
    // アニメーションその2
    coming.style = `
        position: relative;
        animation: feedout 1200ms ${1300 + text.length * 80}ms ease-in-out forwards;
      `
    //contribute by @JPNYKW !!
  };
})();
