module.exports = Franz => {
  const getMessages = function getMessages() {
    // <span data-testid="notification_badge_test_id" class="sc-bcXHqe bCfwRb"><span class="sc-iAEawV cwOUQV">2</span></span>
    // div.sc-fekXMp:nth-child(2) > div:nth-child(1) > span:nth-child(2)
    const inboxMessages = document.querySelectorAll(
      '[data-testid="notification_badge_test_id"] span'
    );

    if (inboxMessages) {
      Franz.setBadge(parseInt(inboxMessages[0].innerText, 10));
    }
  };

  Franz.loop(getMessages);
};
