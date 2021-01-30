var i,j,k;
function check(){
	for (var chk=1;chk<=8;chk++) {
		if(chk==1 || chk==4 || chk==7){
			i=chk;
			j=i+1;
			k=j+1;
			finalCheck(); 
		}
		if(chk==1 || chk==2 || chk==3){
			i=chk;
			j=i+3;
			k=j+3;
			finalCheck(); 
		}
		if(chk==3){
			i=chk;
			j=i+2;
			k=j+2;
			finalCheck(); 
		}
		if (chk==1) {
			i=chk;
			j=i+4;
			k=j+4;
			finalCheck(); 
		}

	}
	if(counter==9){
		$('.modal>.wish').html('ohhh!!!');
		$('.modal>.winner').html('no one has won');
		$('.modal').removeClass('C');
		counter=0;	
	}
}
function machineCheck(){
	for (var chk=1;chk<=8 && !isMachinePlayed;chk++) {
		if(chk==1 || chk==4 || chk==7){
			i=chk;
			j=i+1;
			k=j+1;
			finalMachineCheck(); 
		}
		if(chk==1 || chk==2 || chk==3){
			i=chk;
			j=i+3;
			k=j+3;
			finalMachineCheck();
		}
		if(chk==3){
			i=chk;
			j=i+2;
			k=j+2;
			finalMachineCheck();
		}
		if (chk==1) {
			i=chk;
			j=i+4;
			k=j+4;
			finalMachineCheck(); 
		}

	}
	if(counter==9){
		$('.modal>.wish').html('ohhh!!!');
		$('.modal>.winner').html('no one has won');
		$('.modal').removeClass('C');
		counter=0;	
	}
}
function finalCheck(){ if(($(`.outer div:nth-child(${i})`).text())===($(`.outer div:nth-child(${j})`).text()) && ($(`.outer div:nth-child(${j})`).text())===($(`.outer div:nth-child(${k})`).text()) && ($(`.outer div:nth-child(${k})`).text())!='')
{
	$('.block').removeAttr('id')
	$('.modal>.wish').html('congrats...');
	if(($(`.outer div:nth-child(${i})`).text())==='X')
	{
		$('.modal>.winner').html(`${player1}` + '<br>' + 'you have won');
		$('.score-board>tbody').prepend('<tr><td>1</td><td>0</td></tr>');
	}else{	
		$('.modal>.winner').html(`${player2}` + '<br>' + 'you have won');
		$('.score-board>tbody').prepend('<tr><td>0</td><td>1</td></tr>');
	}
	$('.modal').removeClass('C');
	chk=9;
	counter=0;
}
}
function finalMachineCheck(){ 
	if((($(`.outer div:nth-child(${i})`).text())===($(`.outer div:nth-child(${j})`).text())) && ($(`.outer div:nth-child(${j})`).text())!='')
	{
		let id=$(`.outer > #block:nth-child(${k})`).attr('id');
		$(`.outer > #block:nth-child(${k})`).text(blockPlayed).removeAttr('id');
		if(id)
			changeSymbol();
		finalCheck();
		isMachinePlayed=true;
	}
	else if((($(`.outer div:nth-child(${j})`).text())===($(`.outer div:nth-child(${k})`).text())) && ($(`.outer div:nth-child(${j})`).text())!='')
	{
		let id=$(`.outer > #block:nth-child(${i})`).attr('id');
		$(`.outer > #block:nth-child(${i})`).text(blockPlayed).removeAttr('id');
		if(id)
			changeSymbol();
		finalCheck();
		isMachinePlayed=true;
	}
	else if((($(`.outer div:nth-child(${i})`).text())===($(`.outer div:nth-child(${k})`).text())) && ($(`.outer div:nth-child(${i})`).text())!='')
	{
		let id=$(`.outer > #block:nth-child(${j})`).attr('id');
		$(`.outer > #block:nth-child(${j})`).text(blockPlayed).removeAttr('id');
		if(id)
			changeSymbol();
		finalCheck();
		isMachinePlayed=true;
	}
}