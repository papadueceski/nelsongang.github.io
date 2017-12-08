


    var userFeed = new Instafeed({
        get: 'user',
        userId: '2100346552',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '2100346552.1677ed0.a1c982ef6cb7405da8ace8bfa212acd1',
        sortBy: 'most-recent',
        template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        links:true,
    });
    userFeed.run();
