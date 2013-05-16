CAAT.DEBUG = true;

var director = new CAAT.Director().initialize(400, 200, document.getElementById('canvas'));
var scene = director.createScene();


new CAAT.ImagePreloader().loadImages(
    [
        {id: 'sprites', url: 'sprites/sprites.png'},
    ],
    function(counter, images) {

      // This is the 'sprites/sprites.json' content.
      // (you can replace this with a request o something like that)
      var sprite_list = {
            "sprites" : { 
              "martian_01" : {
                "x" : 134,
                "y" : 71,
                "width" : 64,
                "height" : 67
              }, 
              "martian_02" : {
                "x" : 68,
                "y" : 140,
                "width" : 64,
                "height" : 67
              }, 
              "martian_03" : {
                "x" : 68,
                "y" : 71,
                "width" : 64,
                "height" : 67
              }, 
              "martian_04" : {
                "x" : 134,
                "y" : 2,
                "width" : 64,
                "height" : 67
              }, 
              "martian_05" : {
                "x" : 68,
                "y" : 2,
                "width" : 64,
                "height" : 67
              }, 
              "martian_06" : {
                "x" : 2,
                "y" : 140,
                "width" : 64,
                "height" : 67
              }, 
              "martian_07" : {
                "x" : 2,
                "y" : 71,
                "width" : 64,
                "height" : 67
              }, 
              "martian_08" : {
                "x" : 2,
                "y" : 2,
                "width" : 64,
                "height" : 67
              }
            },
            "texturepacker": [
              "SmartUpdateHash: $TexturePacker:SmartUpdate:55aabfef7ac7f6ff6f755977a688f992$",
              "Created with TexturePacker (http://www.texturepacker.com) for CAAT"
            ]
          };

 
        if (counter == images.length) {
            director.setImagesCache(images);

            var sprite_sheet = new CAAT.Foundation.SpriteImage().
                                      initializeFromMap(
                                              director.getImage('sprites'), 
                                              sprite_list.sprites
                                      );

            var actor1 = new CAAT.Foundation.Actor();
            var actor2 = new CAAT.Foundation.Actor();

            actor1.setBackgroundImage(sprite_sheet)
                                    .setAnimationImageIndex(["martian_02", "martian_03"])
                                    .setChangeFPS(100)
                                    .setPosition(50, 50)
                                    .enableEvents(false);


            actor2.setBackgroundImage(sprite_sheet)
                                    .setAnimationImageIndex(["martian_07", "martian_08"])
                                    .setChangeFPS(100)
                                    .setPosition(250, 50)
                                    .enableEvents(false);

            scene.addChild(actor1);
            scene.addChild(actor2);
        }
});
 
CAAT.loop(60);
