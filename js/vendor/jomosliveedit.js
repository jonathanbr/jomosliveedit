window.JLE={
	data:{1:'fuck',2:'hahaha',3:'That\'s shit',4:'Legau'},
	log:{jids:null,nodatajid:null},
	elements:null,
	editable:false,
	init:function(){
		this.refreshElementsList();
		this.feelElements();
	},
	refreshElementsList:function(){
		//IE7 dont support this method. Look for a workarround
		this.elements = document.querySelectorAll("body>*[data-jid]");
	},
	feelElements:function(){
		if(typeof this.elements == 'undefined') return;
		var cEl,cId,cVa;
		for(var x=0;x<this.elements.length;x++){
			cEl = this.elements[x];
			cId = cEl.getAttribute('data-jid');
			cVa = this.data[cId];
			if(typeof cVa == 'string') cEl.innerHTML = cVa;
		}
	},
	toggleEditable:function(){
		var cEl,outlinestyle;
		if(this.editable) outlinestyle = ''; else outlinestyle = '1px dashed red';
		for(var x=0;x<this.elements.length;x++){
			cEl = this.elements[x];
			cEl.style.outline = outlinestyle;
			cEl.setAttribute('contenteditable',!this.editable);	
			if(!this.editable)
				cEl.addEventListener('keyup',this.onContentEdited);
			else				
				cEl.removeEventListener('keyup',this.onContentEdited);

		}
		this.editable = !this.editable;
	},
	onContentEdited:function(e){
		console.log(this,e);	
	}
};
document.addEventListener("DOMContentLoaded",function(e){
	JLE.init();
});