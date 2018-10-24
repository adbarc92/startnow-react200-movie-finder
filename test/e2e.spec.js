const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = require('../server/server')

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', function () {
  this.timeout(650000);
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        console.log(text);
        expect(text).to.equal('Movie Finder');
      })
  );

  it('returns the correct status code (root route)', () => axios.get(url)
    .then(response => expect(response.status === 200)));

  it('returns the correct status code (/#/movie/:id route)', () => axios.get(url + '/#/movie/tt1375666')
    .then(response => expect(response.status === 200)));

  it('should find movies based on a search', () =>
    nightmare
      .goto(url)
      .wait()
      .type('input[name=search]', 'Star Wars')
      .click('button#search')
      .wait('h4')
      .evaluate(() => document.querySelector('h4').innerText)
      .then((text) => {
        expect(text).to.equal('Star Wars: Episode IV - A New Hope');
      })
  ).timeout(10000);

  it('should work for a different movie', () =>
    nightmare
      .goto(url)
      .wait()
      .type('input[name=search]', 'Inception')
      .click('button#search')
      .wait('h4')
      .evaluate(() => document.querySelector('h4').innerText)
      .then((text) => {
        expect(text).to.equal('Inception');
      })
  ).timeout(10000);

  it('should be able to access detail page', () =>
    nightmare
      .goto(url)
      .wait()
      .type('input[name=search]', 'star wars')
      .click('button#search')
      .wait('.detail-link')
      .click('.detail-link')
      .wait(2000)
      .evaluate(() => document.getElementById('title').innerText)
      .then((text) => {
        expect(text).to.equal('Star Wars: Episode IV - A New Hope');
      })
  ).timeout(10000);

  it('should be able to return home from detail page', () =>
    nightmare
      .goto(url)
      .wait()
      .type('input[name=search]', 'star wars')
      .click('button#search')
      .wait('.detail-link')
      .click('.detail-link')
      .wait(2000)
      .click('.home-link')
      .wait(2000)
      .evaluate(() => document.querySelector('h4').innerText)
      .then((text) => {
        expect(text).to.equal('Star Wars: Episode IV - A New Hope');
      })
  ).timeout(10000);

  it('should display movie ratings', () =>
    nightmare
      .goto(url)
      .wait()
      .type('input[name=search]', 'inception')
      .click('button#search')
      .wait('.detail-link')
      .click('.detail-link')
      .wait(2000)
      .evaluate(() => document.querySelector('.metascore').innerText)
      .then((text) => {
        expect(text).to.equal('Metascore: 74/100');
      })
  ).timeout(10000);

  it("should have a button that displays more details about the movie", () =>
    nightmare
      .goto(url)
      .evaluate(() => document.getElementsByClassName("details"))
      .end()
      .then(btn => {
        expect(btn).to.exist;
      })).timeout(20000);

  it('should handle empty input', () =>
    nightmare
      .goto(url)
      .wait()
      .click('button#search')
      .wait(1000)
      .evaluate(() => document.querySelector('.error-message'))
      .then((text) => {
        expect(text).to.equal(null);
      })
  ).timeout(10000);

});
