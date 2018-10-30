function dayOfTheWeek() {
	let today = new Date();
	document.getElementById("displayDate").innerHTML = today; 
	let day = today.getDay();   
	 switch(day){
	 	case 0:
	 		document.getElementById("numberOfDay").innerHTML = "Welcome. You're my favorite employee. It's Sunday!";
			break;

	 	case 1:
			document.getElementById("numberOfDay").innerHTML = "Welcome. You're my favorite employee. It's Monday!";
			break;

		case 2:
			document.getElementById("numberOfDay").innerHTML = "Welcome. You're my favorite employee. It's Tuesday!";
			break;

		case 3:
			document.getElementById("numberOfDay").innerHTML = "Welcome. You're my favorite employee. It's Wednesday!";
			break;

		case 4:
			document.getElementById("numberOfDay").innerHTML = "Welcome. You're my favorite employee. It's Thursday!";
			break;

		case 5:
			document.getElementById("numberOfDay").innerHTML = "Welcome. You're my favorite employee. It's Friday!";
			break;

		default:
			document.getElementById("numberOfDay").innerHTML = "Welcome. You're my favorite employee. It's Saturday!";
	 }}; 