function createClient() {
    return new recombee.ApiClient('tst-public-key', 'dIuCAwTeXn87m24HYE6uAIwSVzgEkTrQflrYlDBeIoeTIrhG1FVqj1v0h6u3nNSu', {region: 'eu-west'});
}

function testInteractionPromise(assert, interactionReq) {
  assert.timeout(3000);
  var done = assert.async();

  var client = createClient();
  client.send(interactionReq)
  .then(function(res) {
    assert.ok( res == "ok", "Test using Promise passed" );
    done();
  })
  .catch(function(err) {
    assert.ok( false, "Sending interaction should not throw" );
    done();
  })
}

function testInteractionCallback(assert, interactionReq) {
  assert.timeout(3000);
  var done = assert.async();

  function callback(err, res) {
    if ( err ) {
      console.log(err);
      assert.ok( false, "Sending interaction should not throw" );
      done();
    } else {
      assert.ok( res == "ok", "Test using callback passed" );
      done();
    }
  }

  var client = createClient();
  client.send(interactionReq, callback);
}

function testInteraction(assert, interactionReq) {
  testInteractionPromise(assert, interactionReq);
  testInteractionCallback(assert, interactionReq);
}

QUnit.test("AddBookmark test", function( assert ) {
    testInteraction(assert, new recombee.AddBookmark('user-1', 'item-1'));
});

QUnit.test("AddCartAddition test", function( assert ) {
    testInteraction(assert, new recombee.AddCartAddition('user-1', 'item-1'));
});

QUnit.test("AddDetailView test", function( assert ) {
    testInteraction(assert, new recombee.AddDetailView('user-1', 'item-1'));
});

QUnit.test("AddPurchase test", function( assert ) {
    testInteraction(assert, new recombee.AddPurchase('user-1', 'item-1'));
});

QUnit.test("AddRating test", function( assert ) {
    testInteraction(assert, new recombee.AddRating('user-1', 'item-1', -1));
});

QUnit.test("SetViewPortion test", function( assert ) {
    testInteractionPromise(assert, new recombee.SetViewPortion(Math.random().toString(36).substring(7), 'item-1', 0.1));
    testInteractionCallback(assert, new recombee.SetViewPortion(Math.random().toString(36).substring(7), 'item-1', 0.1));
});

function addInteractions(client) {
  var i, j;
  for (i = 0; i < 50; i++) {
      for (j = 0; j < 50; j++) 
        client.send(new recombee.AddPurchase('user-' + i, 'item-' + j));
  }
}

function testRecommendationsPromise(assert, recommendationReq) {
  assert.timeout(3000);
  var done = assert.async();

  var client = createClient();
  client.send(recommendationReq)
  .then(function(res) {
    assert.equal( res.recomms.length, 5, "Recommendations using Promise passed" );
    done();
  })
  .catch(function(err) {
    assert.ok( false, "Recommendation request should not throw");
    done();
  })
}

function testRecommendationsCallback(assert, recommendationReq) {
  assert.timeout(3000);
  var done = assert.async();

  function callback(err, res) {
    if ( err ) {
      console.log(err);
      assert.ok( false, "Recommendation request should not throw");
      done();
    }
    else {
      assert.equal( res.recomms.length, 5, "Recommendations using callback passed" );
      done();
    }
  }

  var client = createClient();
  client.send(recommendationReq, callback);
}

function testRecommendations(assert, recommendationReq) {
  testRecommendationsPromise(assert, recommendationReq);
  testRecommendationsCallback(assert, recommendationReq);
}

QUnit.test("RecommendItemsToUser test", function( assert ) {
    testRecommendations(assert, new recombee.RecommendItemsToUser('user-1', 5));
});

QUnit.test("RecommendItemsToItem test", function( assert ) {
    testRecommendations(assert, new recombee.RecommendItemsToItem('item-1', 'user-1', 5));
});

QUnit.test("SearchItems test", function( assert ) {
    testRecommendations(assert, new recombee.SearchItems('user-1', 'computer', 5));
});

QUnit.test("RecommendNextItems test", function( assert ) {
  assert.timeout(3000);
  var done = assert.async();
    var client = createClient();
    client.send(new recombee.RecommendItemsToUser('user-1', 5, {'returnProperties': true}))
    .then(function(res) {
      testRecommendations(assert, new recombee.RecommendNextItems(res.recommId, 5));
      done();
    });
});

QUnit.test("SearchItems test", function( assert ) {
    testRecommendations(assert, new recombee.SearchItems('user-1', 'computer', 5));
});

QUnit.test("RecommendItemSegmentsToUser test", function( assert ) {
    testRecommendations(assert, new recombee.RecommendItemSegmentsToUser('user-1', 5, {scenario: 'is-to-u'}));
});

QUnit.test("RecommendItemSegmentsToItem test", function( assert ) {
    testRecommendations(assert, new recombee.RecommendItemSegmentsToItem('item-1', 'user-1', 5, {scenario: 'is-to-i'}));
});


QUnit.test("RecommendItemsToItemSegment test", function( assert ) {
    testRecommendations(assert, new recombee.RecommendItemsToItemSegment('5', 'user-1', 5, {scenario: 'i-to-is'}));
});


QUnit.test("RecommendItemSegmentsToItemSegment test", function( assert ) {
    testRecommendations(assert, new recombee.RecommendItemSegmentsToItemSegment('5', 'user-1', 5, {scenario: 'is-to-is'}));
});

QUnit.test("SearchItemSegments test", function( assert ) {
    testRecommendations(assert, new recombee.SearchItemSegments('user-1', 'computer', 5, {scenario: 's-is'}));
});


QUnit.test("Batch test", function( assert ) {
  const req = new recombee.Batch([new recombee.AddBookmark('user-1', 'item-1'),
                                  new recombee.AddCartAddition('user-1', 'item-1'),
                                  new recombee.AddPurchase('user-1', 'item-1'),
                                  new recombee.AddRating('user-1', 'item-1', -1),
                                  new recombee.RecommendItemsToUser('user-1', 5),
                                  new recombee.RecommendItemsToItem('item-1', 'user-1', 5),
                                  new recombee.SearchItems('user-1', 'computer', 5),
                                  new recombee.RecommendItemSegmentsToUser('user-1', 5, {scenario: 'is-to-u'}),
                                  new recombee.RecommendItemSegmentsToItem('item-1', 'user-1', 5, {scenario: 'is-to-i'}),
                                  new recombee.RecommendItemSegmentsToItemSegment('5', 'user-1', 5, {scenario: 'is-to-is'}),
                                  new recombee.SearchItemSegments('user-1', 'computer', 5, {scenario: 's-is'})
                                  ]);

  assert.timeout(10000);
  var done = assert.async();

  var client = createClient();
  client.send(req)
  .then(function(res) {
    res.forEach(requestRes => assert.ok(200 <= requestRes.code && requestRes.code <= 299));
    done();
  })
  .catch(function(err) {
    assert.ok( false, "Sending Batch should not throw" );
    done();
  })

});
