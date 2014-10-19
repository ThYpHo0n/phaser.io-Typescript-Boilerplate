/// <reference path="libs/phaser/phaser.d.ts" />
/// <reference path="boot.ts" />
/// <reference path="preloader.ts" />
/// <reference path="mainmenu.ts" />
/// <reference path="level1.ts" />
module AwesomeGame {

    export class Game extends Phaser.Game {

        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);

            //this.physics.enable(this, Phaser.Physics.ARCADE);
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level1', Level1, false);

            this.state.start('Boot');
        }
    }
}
