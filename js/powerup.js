Powerup = function (game){
	this.sprite=null;

	this.enabled=true;
	this.timer;
	this.state;

	

 }

Powerup.prototype={

// preload: function(){
   

// },

create : function(){
	this.state=game.state.getCurrentState();
	this.timer=game.time.events.loop(10000, this.addRandom, this);
},

update: function(){


},

addRandom: function(){

this.randomNumber=game.rnd.integerInRange(1,4);

this.x=((Math.random() * 400)+1); ;
this.y=-10;

		this.sprite=this.state.powerUps.getFirstDead();
		//game.add.sprite(this.x,this.y,'powerup');
	//}else{
	this.sprite.reset(this.x,this.y);
		
	
	this.sprite.loadTexture('powerup');
	this.sprite.anchor.set(0.5);

	this.sprite.alive=true;
	game.physics.arcade.enable(this.sprite);
	this.sprite.checkWorldBounds=true;
	this.sprite.outOfBoundsKill=true;
	this.sprite.body.velocity.y=100;
	this.sprite.randomNumber=this.randomNumber;

},

apply :function(player,powerUp){
	var type='';
	var amount=0;
	var duration=0;
	switch (powerUp.randomNumber){
		case 1:
			this.state.player.powerUp.invicibility=true;
			duration=5000;
			
			type='invicibility';
			this.state.player.gotInvicibility();
			
			break;
		case 2:
			this.state.player.powerUp.rateOfFire+=-150;
			duration=5000;
			
			type='rateOfFire';
			amount=150;
			break;
		case 3:

			this.state.player.powerUp.shield+=10;
			duration=5000;
			
			type='shield';
			this.state.player.gotShield();
			this.state.hud.updateHealth();
			break;

		case 4:

			this.state.player.sprite.health+=5;
			
		
			
			this.state.player.noLowHealth();
			this.state.hud.updateHealth();
			break;
		
	}
	game.time.events.add(duration,function(){this.remove(type,amount)},this)
	
	powerUp.kill();
	
},

remove: function(type,amount){

	if(type=='invicibility'){this.state.player.powerUp.invicibility=false;
								this.state.player.removeInvicibility();}
	if(type=='rateOfFire'){
		
		this.state.player.powerUp.rateOfFire+=amount;

		
	}
	
	
},
 


};


