var map = L.map('map').setView([40.68025, -74.00155], 12);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

//define mile icons from http://mapicons.nicolasmollet.com/
var zeroIcon = L.icon({
    iconUrl: './img/number_0.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var oneIcon = L.icon({
    iconUrl: './img/number_1.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var twoIcon = L.icon({
    iconUrl: './img/number_2.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var threeIcon = L.icon({
    iconUrl: './img/number_3.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var fourIcon = L.icon({
    iconUrl: './img/number_4.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var fiveIcon = L.icon({
    iconUrl: './img/number_5.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var sixIcon = L.icon({
    iconUrl: './img/number_6.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var sevenIcon = L.icon({
    iconUrl: './img/number_7.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var eightIcon = L.icon({
    iconUrl: './img/number_8.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var nineIcon = L.icon({
    iconUrl: './img/number_9.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var onezeroIcon = L.icon({
    iconUrl: './img/number_10.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var oneoneIcon = L.icon({
    iconUrl: './img/number_11.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var onetwoIcon = L.icon({
    iconUrl: './img/number_12.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var onethreeIcon = L.icon({
    iconUrl: './img/number_13.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var onefourIcon = L.icon({
    iconUrl: './img/number_14.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var onefiveIcon = L.icon({
    iconUrl: './img/number_15.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var onesixIcon = L.icon({
    iconUrl: './img/number_16.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var onesevenIcon = L.icon({
    iconUrl: './img/number_17.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var oneeightIcon = L.icon({
    iconUrl: './img/number_18.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var onenineIcon = L.icon({
    iconUrl: './img/number_19.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var twozeroIcon = L.icon({
    iconUrl: './img/number_20.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var twooneIcon = L.icon({
    iconUrl: './img/number_21.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var twotwoIcon = L.icon({
    iconUrl: './img/number_22.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var twothreeIcon = L.icon({
    iconUrl: './img/number_23.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var twofourIcon = L.icon({
    iconUrl: './img/number_24.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var twofiveIcon = L.icon({
    iconUrl: './img/number_25.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

var twosixIcon = L.icon({
    iconUrl: './img/number_26.png',
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});



//create markers for parks

var zeroMarker = L.marker([40.602474, -74.057556], {icon: zeroIcon}).addTo(map);
var oneMarker = L.marker([40.606690, -74.044563], {icon: oneIcon}).addTo(map);
var twoMarker = L.marker([40.612798, -74.028733], {icon: twoIcon}).addTo(map);
var threeMarker = L.marker([40.627526, -74.026442], {icon: threeIcon}).addTo(map);
var fourMarker = L.marker([40.640683, -74.018632], {icon: fourIcon}).addTo(map);
var fiveMarker = L.marker([40.652015, -74.006830], {icon: fiveIcon}).addTo(map);
var sixMarker = L.marker([40.663279, -73.995157], {icon: sixIcon}).addTo(map);
var sevenMarker = L.marker([40.675714, -73.984170], {icon: sevenIcon}).addTo(map);
var eightMarker = L.marker([40.687080, -73.976167], {icon: eightIcon}).addTo(map);
var nineMarker = L.marker([40.689236, -73.957509], {icon: nineIcon}).addTo(map);
var onezeroMarker = L.marker([40.701991, -73.958732], {icon: onezeroIcon}).addTo(map);
var oneoneMarker = L.marker([40.714499, -73.961307], {icon: oneoneIcon}).addTo(map);
var onetwoMarker = L.marker([40.725558, -73.951823], {icon: onetwoIcon}).addTo(map);
var onethreeMarker = L.marker([40.738289, -73.952960], {icon: onethreeIcon}).addTo(map);
var onefourMarker = L.marker([40.748483, -73.949248], {icon: onefourIcon}).addTo(map);
var onefiveMarker = L.marker([40.753749, -73.947682], {icon: onefiveIcon}).addTo(map);
var onesixMarker = L.marker([40.759763, -73.961264], {icon: onesixIcon}).addTo(map);
var onesevenMarker = L.marker([40.772407, -73.952638], {icon: onesevenIcon}).addTo(map);
var oneeightMarker = L.marker([40.785211, -73.943283], {icon: oneeightIcon}).addTo(map);
var onenineMarker = L.marker([40.797931, -73.934013], {icon: onenineIcon}).addTo(map);
var twozeroMarker = L.marker([40.810044, -73.925119], {icon: twozeroIcon}).addTo(map);
var twooneMarker = L.marker([40.814546, -73.935537], {icon: twooneIcon}).addTo(map);
var twotwoMarker = L.marker([40.804018, -73.946083], {icon: twotwoIcon}).addTo(map);
var twothreeMarker = L.marker([40.791904, -73.952832], {icon: twothreeIcon}).addTo(map);
var twofourMarker = L.marker([40.781263, -73.963796], {icon: twofourIcon}).addTo(map);
var twofiveMarker = L.marker([40.769165, -73.972776], {icon: twofiveIcon}).addTo(map);
var twosixMarker = L.marker([40.772578, -73.976660], {icon: twosixIcon}).addTo(map);

//Create Marathon Route
var pointA = new L.LatLng(40.602474, -74.057556);
var pointB = new L.LatLng(40.610824, -74.031212);
var pointC = new L.LatLng(40.611671, -74.029624);
var pointD = new L.LatLng(40.613756, -74.028187);
var pointE = new L.LatLng(40.616265, -74.026148);
var pointF = new L.LatLng(40.618362, -74.030214);
var pointG = new L.LatLng(40.636817, -74.022629);
var pointH = new L.LatLng(40.665519, -73.992717);
var pointI = new L.LatLng(40.676081, -73.983834);
var pointJ = new L.LatLng(40.684947, -73.978044);
var pointK = new L.LatLng(40.686685, -73.979311);
var pointL = new L.LatLng(40.689443, -73.955118);
var pointM = new L.LatLng(40.700869, -73.957451);
var pointN = new L.LatLng(40.707173, -73.964457);
var pointO = new L.LatLng(40.707392, -73.964489);
var pointP = new L.LatLng(40.710507, -73.963824);
var pointQ = new L.LatLng(40.714500, -73.961292);
var pointR = new L.LatLng(40.724063, -73.950992);
var pointS = new L.LatLng(40.728836, -73.953685);
var pointT = new L.LatLng(40.730202, -73.954286);
var pointU = new L.LatLng(40.730470, -73.951454);
var pointV = new L.LatLng(40.731193, -73.951733);
var pointW = new L.LatLng(40.737941, -73.953063);
var pointX = new L.LatLng(40.743615, -73.951132);
var pointY = new L.LatLng(40.744111, -73.953642);
var pointZ = new L.LatLng(40.748516, -73.952098);
var pointZA = new L.LatLng(40.748923, -73.951647);
var pointZB = new L.LatLng(40.747448, -73.943869);
var pointZC = new L.LatLng(40.748013, -73.942914);
var pointZD = new L.LatLng(40.750805, -73.940414);
var pointZE = new L.LatLng(40.759998, -73.961684);
var pointZF = new L.LatLng(40.785160, -73.943354);
var pointZG = new L.LatLng(40.802818, -73.930372);
var pointZH = new L.LatLng(40.805335, -73.925501);
var pointZI = new L.LatLng(40.809103, -73.922947);
var pointZJ = new L.LatLng(40.810955, -73.927153);
var pointZK = new L.LatLng(40.812969, -73.925801);
var pointZL = new L.LatLng(40.813358, -73.926745);
var pointZM = new L.LatLng(40.812205, -73.927475);
var pointZN = new L.LatLng(40.811686, -73.928140);
var pointZO = new L.LatLng(40.813131, -73.929996);
var pointZP = new L.LatLng(40.814138, -73.932271);
var pointZQ = new L.LatLng(40.814227, -73.934867);
var pointZR = new L.LatLng(40.814726, -73.936187);
var pointZS = new L.LatLng(40.805737, -73.942785);
var pointZT = new L.LatLng(40.806370, -73.944330);
var pointZU = new L.LatLng(40.803869, -73.946132);
var pointZV = new L.LatLng(40.803211, -73.944609);
var pointZW = new L.LatLng(40.784111, -73.958562);
var pointZX = new L.LatLng(40.784205, -73.958878);
var pointZY = new L.LatLng(40.781735, -73.960745);
var pointZZ = new L.LatLng(40.781508, -73.961421);
var pointZZA = new L.LatLng(40.781638, -73.962741);
var pointZZB = new L.LatLng(40.781037, -73.964103);
var pointZZC = new L.LatLng(40.779449, -73.965101);
var pointZZD = new L.LatLng(40.778173, -73.966485);
var pointZZE = new L.LatLng(40.776630, -73.967139);
var pointZZF = new L.LatLng(40.776248, -73.967332);
var pointZZG = new L.LatLng(40.775647, -73.967268);
var pointZZH = new L.LatLng(40.775285, -73.967654);
var pointZZI = new L.LatLng(40.774875, -73.968469);
var pointZZJ = new L.LatLng(40.774135, -73.969135);
var pointZZK = new L.LatLng(40.773445, -73.969017);
var pointZZL = new L.LatLng(40.772921, -73.968760);
var pointZZM = new L.LatLng(40.771686, -73.969317);
var pointZZN = new L.LatLng(40.770898, -73.970734);
var pointZZO = new L.LatLng(40.770004, -73.971329);
var pointZZP = new L.LatLng(40.769447, -73.972445);
var pointZZQ = new L.LatLng(40.769114, -73.972842);
var pointZZR = new L.LatLng(40.767745, -73.973153);
var pointZZS = new L.LatLng(40.766464, -73.972609);
var pointZZT = new L.LatLng(40.766097, -73.972524);
var pointZZU = new L.LatLng(40.765238, -73.973068);
var pointZZV = new L.LatLng(40.765116, -73.973042);
var pointZZW = new L.LatLng(40.764915, -73.972543);
var pointZZX = new L.LatLng(40.764295, -73.973018);
var pointZZY = new L.LatLng(40.767792, -73.981212);
var pointZZZ = new L.LatLng(40.768085, -73.981147);
var pointZZZA = new L.LatLng(40.768369, -73.981195);
var pointZZZB = new L.LatLng(40.768544, -73.981136);
var pointZZZC = new L.LatLng(40.768781, -73.980769);
var pointZZZD = new L.LatLng(40.769115, -73.979997);
var pointZZZE = new L.LatLng(40.770388, -73.978983);
var pointZZZF = new L.LatLng(40.771194, -73.977889);
var pointZZZG = new L.LatLng(40.771816, -73.977068);
var pointZZZH = new L.LatLng(40.772578, -73.976660);
var pointList = [pointA, pointB, pointC, pointD, pointE, pointF, pointG, pointH, pointI, pointJ, pointK, pointL, pointM, pointN, pointO, pointP, pointQ, pointR, pointS, pointT, pointU, pointV, pointW, pointX, pointY, pointZ, pointZA, pointZB, pointZC, pointZD, pointZE, pointZF, pointZG, pointZH, pointZI, pointZJ, pointZK, pointZL, pointZM, pointZN, pointZO, pointZP, pointZQ, pointZR, pointZS, pointZT, pointZU, pointZV, pointZW, pointZX, pointZY, pointZZ, pointZZ, pointZZA, pointZZB, pointZZC, pointZZD, pointZZE, pointZZF, pointZZG, pointZZH, pointZZI, pointZZJ, pointZZK, pointZZL, pointZZM, pointZZN, pointZZN, pointZZO, pointZZP, pointZZQ, pointZZR, pointZZS, pointZZT, pointZZU, pointZZV, pointZZW, pointZZX, pointZZY, pointZZZ, pointZZZA, pointZZZB, pointZZZC, pointZZZD, pointZZZE, pointZZZF, pointZZZG, pointZZZH];

var marathonRoute = new L.polyline(pointList, {
color: '#b33d3d',
weight: 4,
opacity: .75,
smoothFactor: 1

});
marathonRoute.addTo(map);


//listeners for sidebar mouseover effects

$('.mile').on('mouseover',function(){
	$(this).css('background','#404040');
});


$('.mile').on('mouseout',function(){
	$(this).css('background','#C8C8C8');
});

/*
//Central Park Click listeners
$('.centralPark').on('click',function(){
	map.panTo(new L.LatLng(40.776101, -73.969660), {animate: true, duration: 1.0});
});

//Prospect Park Click listeners
$('.prospectPark').on('click',function(){
	map.panTo(new L.LatLng(40.663692, -73.968115), {animate: true, duration: 1.0});
});

//Fort Greene Park Click listeners
$('.fortGreenePark').on('click',function(){
	map.panTo(new L.LatLng(40.690771, -73.975668), {animate: true, duration: 1.0});
});
*/


//listeners for map hover

zeroMarker.on('mouseover',function(){
	$('.mileZero').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileZero').toggleClass('hover');
	});

oneMarker.on('mouseover',function(){
	$('.mileOne').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOne').toggleClass('hover');
	});

twoMarker.on('mouseover',function(){
	$('.mileTwo').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileTwo').toggleClass('hover');
	});

threeMarker.on('mouseover',function(){
	$('.mileThree').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileThree').toggleClass('hover');
	});

fourMarker.on('mouseover',function(){
	$('.mileFour').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileFour').toggleClass('hover');
	});

fiveMarker.on('mouseover',function(){
	$('.mileFive').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileFive').toggleClass('hover');
	});

sixMarker.on('mouseover',function(){
	$('.mileSix').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileSix').toggleClass('hover');
	});

sevenMarker.on('mouseover',function(){
	$('.mileSeven').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileSeven').toggleClass('hover');
	});

eightMarker.on('mouseover',function(){
	$('.mileEight').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileEight').toggleClass('hover');
	});

nineMarker.on('mouseover',function(){
	$('.mileNine').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileNine').toggleClass('hover');
	});

onezeroMarker.on('mouseover',function(){
	$('.mileOneZero').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneZero').toggleClass('hover');
	});

oneoneMarker.on('mouseover',function(){
	$('.mileOneOne').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneOne').toggleClass('hover');
	});

onetwoMarker.on('mouseover',function(){
	$('.mileOneTwo').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneTwo').toggleClass('hover');
	});

onethreeMarker.on('mouseover',function(){
	$('.mileOneThree').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneThree').toggleClass('hover');
	});

onefourMarker.on('mouseover',function(){
	$('.mileOneFour').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneFour').toggleClass('hover');
	});

onefiveMarker.on('mouseover',function(){
	$('.mileOneFive').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneFive').toggleClass('hover');
	});

onesixMarker.on('mouseover',function(){
	$('.mileOneSix').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneSix').toggleClass('hover');
	});

onesevenMarker.on('mouseover',function(){
	$('.mileOneSeven').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneSeven').toggleClass('hover');
	});

oneeightMarker.on('mouseover',function(){
	$('.mileOneEight').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneEight').toggleClass('hover');
	});

onenineMarker.on('mouseover',function(){
	$('.mileOneNine').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileOneNine').toggleClass('hover');
	});

twozeroMarker.on('mouseover',function(){
	$('.mileTwoZero').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileTwoZero').toggleClass('hover');
	});

twooneMarker.on('mouseover',function(){
	$('.mileTwoOne').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileTwoOne').toggleClass('hover');
	});

twotwoMarker.on('mouseover',function(){
	$('.mileTwoTwo').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileTwoTwo').toggleClass('hover');
	});

twothreeMarker.on('mouseover',function(){
	$('.mileTwoThree').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileTwoThree').toggleClass('hover');
	});


twofourMarker.on('mouseover',function(){
	$('.mileTwoFour').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileTwoFour').toggleClass('hover');
	});

twofiveMarker.on('mouseover',function(){
	$('.mileTwoFive').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileTwoFive').toggleClass('hover');
	});

twosixMarker.on('mouseover',function(){
	$('.mileTwoSix').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.mileTwoSix').toggleClass('hover');
	});

