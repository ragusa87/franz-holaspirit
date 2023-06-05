module.exports = Franz => {
  const getMessages = function getMessages() {
    const inboxMessages = document.querySelectorAll(
      "#east a.inbox > span.count"
    );

    if (inboxMessages) {
      Franz.setBadge(parseInt(inboxMessages[0].innerText, 10));
    }
  };

  Franz.loop(getMessages);
};
