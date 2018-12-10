import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'tupi-ecommerce-store/models/test';

import '~/home/home-test';

import '~/pages/home/home-test';

F.attach(QUnit);

QUnit.module('tupi-ecommerce-store functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('tupi-ecommerce-store main page shows up', function() {
  F('title').text('tupi-ecommerce-store', 'Title is set');
});
