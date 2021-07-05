/* eslint-disable no-undef */
Feature('Linking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add Customer Review', async ({ I }) => {
  I.seeElement('.link-explore a');

  const firstRestoLink = locate('.link-explore a').first();
  I.click(firstRestoLink);

  I.seeElement('.create-review form');

  const name = 'Customer 1';
  const review = 'Review Customer Testing';

  I.fillField('input#name', name);
  I.fillField('textarea#review', review);

  I.click('button#submit');
});
