function open_content_page(time) {
    localStorage.setItem('selected_time', time);
    window.location.href = 'content_page.html';
}