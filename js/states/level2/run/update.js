define(['phaser'],function(phaser){
	var update = function(game){
        this._timerCheck = (new Date()).getTime();

        if(this._timerCheck >= this._timer + 1000){
            this._soldeVar += this._revenusVar;
            this._scoreVar += Math.round((this._revenusVar/2));
            this._revenusVar = 500;


            this._solde.setText('Solde :'+_soldeVar+' €', {font: '20px Courier', fill: '#ffffff'})
            this._score.setText('Score :'+_scoreVar, {font: '20px Courier', fill: '#ffffff'})
            this._revenus.setText('Revenus :'+_revenusVar+' €', {font: '20px Courier', fill: '#ffffff'});    
            
            this._timer = this._timerCheck;
        }
        
        if(this._timerCheck >= this._timer2 + 462){
            this._consomationNew = Math.floor(Math.random() * 50) + 20; 

            this._timer2 = this._timerCheck;
        }
        
        if(this._consomationNew != this._consomationVar){
            this._consomationVar = this._consomationNew;
            this._revenusVar -= this._consomationVar;

            this._consomation.setText('Consommation :'+_consomationVar+' Watt/h', {font: '20px Courier', fill: '#ffffff'});
            this._revenus.setText('Revenus :'+_revenusVar+' €', {font: '20px Courier', fill: '#ffffff'});
        }
	}

	return update;
});