/* eslint-disable no-undef */
const assert = require('assert');

Feature('Linking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const messageEmptyRestaurant = 'Tidak ada restoran untuk ditampilkan.';

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#resto-empty');
  I.see(messageEmptyRestaurant, '#empty');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see(messageEmptyRestaurant, '#empty');

  I.amOnPage('/');

  I.seeElement('.link-explore a');

  const firstRestoLink = locate('.link-explore a').first();
  const firstRestaurant = locate('.box-explore .title');
  const firstRestoTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestoLink);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.box-explore');

  const likedRestoTitle = await I.grabTextFrom('.title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see(messageEmptyRestaurant, '#empty');

  I.amOnPage('/');

  I.seeElement('.link-explore a');

  const firstRestoLink = locate('.link-explore a').first();
  const firstRestaurant = locate('.box-explore .title');
  const firstRestoTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestoLink);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.box-explore');
  const likedRestoTitle = await I.grabTextFrom('.title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click('.link-explore a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#resto-empty');
  const unlikedRestoTitle = await I.grabTextFrom('#empty');
  assert.strictEqual(messageEmptyRestaurant, unlikedRestoTitle);
});
