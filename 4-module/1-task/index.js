/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ulElement = document.createElement('ul');

  ulElement.insertAdjacentHTML(
    'afterbegin',
    friends.map(friend => '<li>' + friend.firstName + ' ' + friend.lastName + '</li>').join('')
  );

  return ulElement;
}
