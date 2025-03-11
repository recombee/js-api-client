if (typeof recombee === 'undefined') {
  alert('recombee-js-api-client was not found.\n\nDid you run `pnpm build`?');
}

function createClient(useFetch = false) {
  return new recombee.ApiClient(
    'tst-public-key',
    'dIuCAwTeXn87m24HYE6uAIwSVzgEkTrQflrYlDBeIoeTIrhG1FVqj1v0h6u3nNSu',
    { region: 'eu-west', future_v6_fetch: useFetch },
  );
}

QUnit.module('Interactions', () => {
  function testInteractionPromise(assert, interactionReq) {
    assert.timeout(5000);
    const done = assert.async();

    const client = createClient();
    client
      .send(interactionReq)
      .then((res) => {
        assert.ok(res == 'ok', 'Interaction sent using Promise');
        done();
      })
      .catch((err) => {
        assert.notOk(err, 'Sending interaction should not throw');
        done();
      });
  }

  function testInteractionCallback(assert, interactionReq) {
    assert.timeout(5000);
    const done = assert.async();

    function callback(err, res) {
      if (err) {
        assert.notOk(err, 'Sending interaction should not throw');
        done();
      } else {
        assert.ok(res == 'ok', 'Interaction sent using callback');
        done();
      }
    }

    const client = createClient();
    client.send(interactionReq, callback);
  }

  function testInteractionFetch(assert, interactionReq) {
    assert.timeout(5000);
    const done = assert.async();

    const client = createClient(true);
    client
      .send(interactionReq)
      .then((res) => {
        assert.ok(res == 'ok', 'Interaction sent using fetch');
        done();
      })
      .catch((err) => {
        assert.notOk(err, 'Sending interaction should not throw');
        done();
      });
  }

  function testInteraction(assert, getInteraction) {
    testInteractionPromise(assert, getInteraction('test-promise'));
    testInteractionCallback(assert, getInteraction('test-callback'));
    testInteractionFetch(assert, getInteraction('test-fetch'));
  }

  QUnit.test('AddBookmark test', (assert) => {
    testInteraction(assert, (testName) => new recombee.AddBookmark('user-1', testName));
  });

  QUnit.test('AddCartAddition test', (assert) => {
    testInteraction(assert, (testName) => new recombee.AddCartAddition('user-1', testName));
  });

  QUnit.test('AddDetailView test', (assert) => {
    testInteraction(assert, (testName) => new recombee.AddDetailView('user-1', testName));
  });

  QUnit.test('AddPurchase test', (assert) => {
    testInteraction(assert, (testName) => new recombee.AddPurchase('user-1', testName));
  });

  QUnit.test('AddRating test', (assert) => {
    testInteraction(assert, (testName) => new recombee.AddRating('user-1', testName, -1));
  });

  QUnit.test('SetViewPortion test', (assert) => {
    testInteraction(
      assert,
      (testName) =>
        new recombee.SetViewPortion(Math.random().toString(36).substring(7), testName, 0.1),
    );
  });
});

function testRecommendationsPromise(assert, recommendationReq) {
  assert.timeout(5000);
  const done = assert.async();

  const client = createClient();
  client
    .send(recommendationReq)
    .then((res) => {
      assert.equal(res.recomms.length, 5, 'Recommendations received using Promise');
      done();
    })
    .catch((err) => {
      assert.notOk(err, 'Getting recommendations should not throw');
      done();
    });
}

function testRecommendationsCallback(assert, recommendationReq) {
  assert.timeout(5000);
  const done = assert.async();

  function callback(err, res) {
    if (err) {
      assert.notOk(err, 'Getting recommendations should not throw');
      done();
    } else {
      assert.equal(res.recomms.length, 5, 'Recommendations received using callback');
      done();
    }
  }

  const client = createClient();
  client.send(recommendationReq, callback);
}

function testRecommendationsFetch(assert, recommendationReq) {
  assert.timeout(5000);
  const done = assert.async();

  const client = createClient(true);
  client
    .send(recommendationReq)
    .then((res) => {
      assert.equal(res.recomms.length, 5, 'Recommendations received using fetch');
      done();
    })
    .catch((err) => {
      assert.notOk(err, 'Getting recommendations should not throw');
      done();
    });
}

function testRecommendations(assert, recommendationReq) {
  testRecommendationsPromise(assert, recommendationReq);
  testRecommendationsCallback(assert, recommendationReq);
  testRecommendationsFetch(assert, recommendationReq);
}

QUnit.module('Recommendations', () => {
  QUnit.module('Items', () => {
    QUnit.test('RecommendItemsToUser test', (assert) => {
      testRecommendations(assert, new recombee.RecommendItemsToUser('user-1', 5));
    });

    QUnit.test('RecommendItemsToItem test', (assert) => {
      testRecommendations(assert, new recombee.RecommendItemsToItem('item-1', 'user-1', 5));
    });

    QUnit.test('RecommendItemsToItemSegment test', (assert) => {
      testRecommendations(
        assert,
        new recombee.RecommendItemsToItemSegment('5', 'user-1', 5, {
          scenario: 'i-to-is',
        }),
      );
    });

    QUnit.test('RecommendNextItems test', (assert) => {
      assert.timeout(5000);
      const done = assert.async();
      const client = createClient();
      client
        .send(new recombee.RecommendItemsToUser('user-1', 5, { returnProperties: true }))
        .then((res) => {
          testRecommendations(assert, new recombee.RecommendNextItems(res.recommId, 5));
          done();
        });
    });
  });

  QUnit.module('Item Segments', () => {
    QUnit.test('RecommendItemSegmentsToUser test', (assert) => {
      testRecommendations(
        assert,
        new recombee.RecommendItemSegmentsToUser('user-1', 5, {
          scenario: 'is-to-u',
        }),
      );
    });

    QUnit.test('RecommendItemSegmentsToItem test', (assert) => {
      testRecommendations(
        assert,
        new recombee.RecommendItemSegmentsToItem('item-1', 'user-1', 5, {
          scenario: 'is-to-i',
        }),
      );
    });

    QUnit.test('RecommendItemSegmentsToItemSegment test', (assert) => {
      testRecommendations(
        assert,
        new recombee.RecommendItemSegmentsToItemSegment('5', 'user-1', 5, {
          scenario: 'is-to-is',
        }),
      );
    });
  });
});

QUnit.module('Search', () => {
  QUnit.test('SearchItems test', (assert) => {
    testRecommendations(assert, new recombee.SearchItems('user-1', 'computer', 5));
  });

  QUnit.test('SearchItemSegments test', (assert) => {
    testRecommendations(
      assert,
      new recombee.SearchItemSegments('user-1', 'computer', 5, {
        scenario: 's-is',
      }),
    );
  });
});

QUnit.module('Batch', () => {
  function send(client, assert, done) {
    const req = new recombee.Batch([
      new recombee.AddBookmark('user-1', 'item-1'),
      new recombee.AddCartAddition('user-1', 'item-1'),
      new recombee.AddDetailView('user-1', 'item-1'),
      new recombee.AddPurchase('user-1', 'item-1'),
      new recombee.AddRating('user-1', 'item-1', -1),
      new recombee.RecommendItemsToUser('user-1', 5),
      new recombee.RecommendItemsToItem('item-1', 'user-1', 5),
      new recombee.RecommendItemsToItemSegment('5', 'user-1', 5, {
        scenario: 'i-to-is',
      }),
      new recombee.RecommendItemSegmentsToUser('user-1', 5, {
        scenario: 'is-to-u',
      }),
      new recombee.RecommendItemSegmentsToItem('item-1', 'user-1', 5, {
        scenario: 'is-to-i',
      }),
      new recombee.RecommendItemSegmentsToItemSegment('5', 'user-1', 5, {
        scenario: 'is-to-is',
      }),
      new recombee.SearchItems('user-1', 'computer', 5),
      new recombee.SearchItemSegments('user-1', 'computer', 5, {
        scenario: 's-is',
      }),
    ]);

    client
      .send(req)
      .then((res) => {
        res.forEach((requestRes, idx) =>
          assert.ok(
            200 <= requestRes.code && requestRes.code <= 299,
            `${req.requests[idx].path}: Response code 2XX = OK`,
          ),
        );
        done();
      })
      .catch((err) => {
        assert.notOk(err, 'Batch should not throw');
        done();
      });
  }

  QUnit.test('Using Promise', (assert) => {
    assert.timeout(5000);
    const done = assert.async();

    const client = createClient();
    send(client, assert, done);
  });

  QUnit.test('Using fetch', (assert) => {
    assert.timeout(5000);
    const done = assert.async();

    const client = createClient(true);
    send(client, assert, done);
  });
});
