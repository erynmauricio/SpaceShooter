var menu_state= function(game){

this.menu_button;
this.tech_tree_button
this.tech_tree=new tech_tree_state();
}



menu_state.prototype={

preload: function(){
		game.scale.setShowAll();
    game.scale.setScreenSize();
	game.load.image('play_button','assets/play_button.png');
},



create: function(){

if(localStorage.getItem('spaceShooter.firstRun')===null){
	localStorage.setItem('spaceShooter.firstRun','true');
}
if(localStorage.getItem('spaceShooter.firstRun')=='true'){
	localStorage.setItem('spaceShooter.firstRun','false');
	localStorage.setItem('gottypeZero','true');
	localStorage.setItem('gottypeOne','false');
	localStorage.setItem('gottypeTwo','false');
	localStorage.setItem('score','0');
	localStorage.setItem('equippedWeapon','typeOne');
	localStorage.setItem('credits','0')
	console.log('first run');
}
	
this.startMenu()
this.tech_tree.create();
},

startGame : function(){
	game.state.start('game');
},

startMenu: function(){
	this.start_button = game.add.button(game.width/2,game.height/2, 'play_button', this.startGame,this.button);
 this.start_button.anchor.setTo(0.5,0.5);
 this.tech_tree_button = game.add.button(game.width/2,game.height/2+100, 'play_button', this.tech_tree.showTechTree,this.button);
 this.tech_tree_button.anchor.setTo(0.5,0.5);
},

startTechTree: function(){

	game.state.start('tech_tree');
},

};

