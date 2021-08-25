<template>
	<html>
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Teenternz</title>
			<link rel="stylesheet" href="style.css">
			<script src="https://kit.fontawesome.com/a076d05399.js"></script>
			<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
			<script data-ad-client="ca-pub-2759747325684420" async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<!-- Global site tag (gtag.js) - Google Analytics -->
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-CTNH4FG8SY"></script>
			<script>
					window.dataLayer = window.dataLayer || [];
					function gtag() { dataLayer.push(arguments); }
					gtag('js', new Date());
					gtag('config', 'G-CTNH4FG8SY');
			</script>
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
				@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
				@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
				@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

				*{
						margin: 0;
						padding: 0;
						box-sizing: border-box;
						text-decoration: none;
						list-style: none;
				}

				.wrapper{
				
						position: fixed;
						top: 0;
						left: 0;
						overflow-y: scroll;
						height: 100%;
						width: 100%;
						background: linear-gradient(-135deg, #7450c8, #4158d0);
						/* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
						/* clip-path: circle(25px at calc(0% + 45px) 45px); */
						clip-path: circle(25px at calc(100% - 45px) 45px);
						transition: all 0.7s ease-in-out;
					}
					#active:checked ~ .wrapper{
						clip-path: circle(75%);
					}
					.menu-btn{
						position: absolute;
						z-index: 2;
						right: 20px;
						/* left: 20px; */
						top: 20px;
						height: 50px;
						width: 50px;
						text-align: center;
						line-height: 50px;
						border-radius: 50%;
						font-size: 20px;
						color: #fff;
						cursor: pointer;
						background: linear-gradient(-135deg, #c850c0, #4158d0);
						/* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
						transition: all 0.3s ease-in-out;
					}
					#active:checked ~ .menu-btn{
						background: #fff;
						color: #4158d0;
					}
					#active:checked ~ .menu-btn i:before{
						content: "\f00d";
					}
					.wrapper ul{
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						list-style: none;
						text-align: center;
					}
					.wrapper ul li{
						margin: 15px 0;
					}
					.wrapper ul li a{
						color: none;
						text-decoration: none;
						font-size: 30px;
						font-weight: 500;
						padding: 5px 30px;
						color: #fff;
						position: relative;
						line-height: 50px;
						transition: all 0.3s ease;
					}
					.wrapper ul li a:after{
						position: absolute;
						content: "";
						background: #fff;
						width: 100%;
						height: 50px;
						left: 0;
						border-radius: 50px;
						transform: scaleY(0);
						z-index: -1;
						transition: transform 0.3s ease;
					}
					.wrapper ul li a:hover:after{
						transform: scaleY(1);
					}
					.wrapper ul li a:hover{
						color: #4158d0;
					}
					input[type="checkbox"]{
						display: none;
					}
					.content{
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						z-index: -1;
						text-align: center;
						width: 100%;
						color: #202020;
					}
					.content .title{
						font-size: 40px;
						font-weight: 700;
					}
					.content p{
						font-size: 35px;
						font-weight: 600;
					}


















				.main{
				
						background-image: url(graphics/desktop.png);
						width: 100%;
						height: 100vh;
						background-size: cover;
						background-repeat: no-repeat;
				}

				.main-heading{
						display: none;
				}

				.after-main{
						display: none;
						background-image: url(graphics/aftermain.png);
						width: 100%;
						height: 100vh;
						background-size: cover;
						background-repeat: no-repeat;
				}


				.after-main-container{
						display: none;
						width: 80vw;
						height: 40vw;
						margin: auto;
						background-color: white;
				}




				.tag{
						display: none;
				}
				#logo{
						display: none;
						width: 50vw;
				}
				.up-logo{
						display: none;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: -50px;
				}

				.big-main{
						/* background-image: url(img/aftermain.png); */
						width: 100%;
						height: 100vh;
						background-size: cover;
						background-repeat: no-repeat;
				}
				#whoarewe{
						text-align: center;
						font-size: 6vw;
						font-family: 'Patrick Hand', cursive;
						letter-spacing: 1vw;
						color: rgb(6, 12, 63);

				}
				.set{
						display: flex;
						padding: 30px;
						margin-left: 40px;
				}
				.image{
						margin-top: -50px;
				}
				.text p{
						font-size: 2.9vw;
						font-family: 'Patrick Hand', cursive;
						color: rgb(0, 0, 0);
						letter-spacing: 0.2vw;
						padding: 17px;
						margin-top: 100px;
						margin-left: 40px;
				}
				.text p span{
						color: #ffaada;
				}



				.services{
						/* background-image: url(img/aftermain.png); */
						width: 90%;
						height: 120vh;
						background-size: cover;
						background-repeat: no-repeat;
				}
				#what{
						text-align: center;
						font-size: 6vw;
						font-family: 'Patrick Hand', cursive;
						letter-spacing: 1vw;
						color: rgb(6, 12, 63);

				}

				.flex{
						display: flex;
						flex-wrap: nowrap;
				}
				.card{
						min-width: 400px;
						height: 500px;
						margin: 20px;
						background-color: white;
						border-radius: 40px;
						display: grid;

				}

				#intern{
						text-align: center;
						font-size: 3vw;
						font-family: 'Patrick Hand', cursive;
						letter-spacing: 0.6vw;
						color: #ffffff;
						margin-top: -460px;
						text-transform: uppercase;
				}

				#vol{
						text-align: center;
						font-size: 3vw;
						font-family: 'Patrick Hand', cursive;
						letter-spacing: 0.6vw;
						color: #ffffff;
						margin-top: 20px;
						text-transform: uppercase;
				}

				#course{
						text-align: center;
						font-size: 3vw;
						font-family: 'Patrick Hand', cursive;
						letter-spacing: 0.6vw;
						color: #ffffff;
						margin-top: 20px;
						text-transform: uppercase;
				}
				#internships{
						background-image: url(graphics/col2.png)
					;
				}
				#Volunteer{
						background-image: url(graphics/col3.png);
				}
				#courses{
						background-image: url(graphics/col1.png);    
				}

				#card1btn{
						margin-top: 440px;
						margin-left: 120px;
						padding: 10px;
						font-size: 16px;
						border-radius: 15px;
						border: none;
						width: 150px;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						background-color: #000baa;
						color: white;
						letter-spacing: 0.3vw;
						cursor: pointer;
				}
				.btn{ 
						margin-left: 120px; 
						margin-top: 360px;  
						padding: 10px;
						font-size: 16px;
						border-radius: 15px;
						border: none;
						width: 150px;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						background-color: #000baa;
						color: white;
						letter-spacing: 0.3vw;
						cursor: pointer;

				}

				.btn:hover{
						opacity: 0.9;
				}

				#card1btn:hover{
						opacity: 0.9;
				}

				.who{
						display: flex;
						margin: 20px;
				}
				.students{
						display: grid;
						width: 50%;
						height: 900px;
						margin: 20px;
				}

				.org{
						display: grid;
						width: 50%;
						margin: 20px;
						height: 900px;
				}

				#who{
						text-align: center;
						font-size: 5.6vw;
						font-family: 'Patrick Hand', cursive;
						letter-spacing: 1vw;
						color: rgb(6, 12, 63); 
				}
				.photo{
					margin-left: 200px;
					margin-top: 20px;
				}
				.picture{
						margin-left: 170px;
				}

				.title-who{
						margin-left: 200px;
						font-size: 4vw;
						font-family: 'Patrick Hand', cursive;
						letter-spacing: 1vw;
						color: rgb(6, 12, 63);
						margin-top: -17px;

				}

				#comp{
						margin-top: 36px;
						margin-left: 80px;
				}

				.pola{
						font-size: 30px;
						padding: 30px;
						text-align: center;
						margin-top: 30px;
						font-family: 'Patrick Hand', cursive;
						line-height: 50px;
				}

				.who-button{
						margin-top: 0px;
						padding: 10px;
						font-size: 16px;
						border-radius: 15px;
						border: none;
						width: 150px;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						background-color: #4126d6;
						color: white;
						letter-spacing: 0.3vw;
						cursor: pointer;
						margin-left: 300px;
				}

				.op-button{
						margin-top: 10px;
						padding: 10px;
						font-size: 16px;
						border-radius: 15px;
						border: none;
						width: 300px;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						background-color: #4126d6;
						color: white;
						letter-spacing: 0.3vw;
						cursor: pointer;
						margin-left: 200px;
				}

				.in-vo h1{
						text-align: center;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						color: #13013d;
						font-size: 4vw;
						letter-spacing: 0.3vw;
						margin-top: 50px;
				}
				.flexbox{
						display: flex;
						width: 90%;
						height: max-content;
						flex-wrap: wrap;
						margin: auto;
				}
				.c1{
						background: blueviolet;
						height: 300px;
						width: 300px;
						margin: 20px;
						border-radius: 40px;


				}

				#car1{
						background-image: url(orgs/tgs.png);
						background-size: cover;
						background-repeat: no-repeat;
				}

				#car2{
						background-image: url(orgs/thechattergals.png);
						background-size: cover;
						background-repeat: no-repeat;
				}


				#car3{
						background-image: url(orgs/love\ achelois.png);
						background-size: cover;
						background-repeat: no-repeat;
				}
				#car4{
						background-image: url(orgs/Llittlebutterflies.png);
						background-size: cover;
						background-repeat: no-repeat;
				}
				#car5{
						background-image: url(orgs/IM.png);
						background-size: cover;
						background-repeat: no-repeat;
				}


				#ss_survey_widget{
						margin: auto;
						margin-top: 20px;
						height: 700px;

				}

				.hiring{
						width: 100%;
						height: max-content;
						background-color: #721ce3;
						position: fixed;

				}
				.hiring h1{
						text-align: center;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						font-size: 1.5vw;
						color: white;
						letter-spacing: 0.3vw;
						padding: 10px;
						cursor: pointer;

				}

				@media screen and (max-width: 768px) {
						.hiring h1{
								font-size: 4vw; 
						}
				}


				/* MOBILE DEVICES */


				@media screen and (max-width:480px) {
				
						.main{
								background-image: url(min-bg.png);
								background-repeat: no-repeat;
								background-size: cover;
								height: 50vw;
						}
						h1{
								display: block;
								font-size:  8vw;
								text-align: center; 
							font-family: 'Patrick Hand', cursive;
								letter-spacing: 0.7vw;
						}
						h1 span{
								color: rgb(253, 142, 142);
						}
						.after-main{
								background-image: url(graphics/aftermain.png);
								background-repeat: no-repeat;
								background-size: cover;
								height: 960vw;
								display: block;
						}

				.after-main-container{
						display: block;
						width: 80vw;
						height: 140vw;
						margin: auto;
						background-color: white;
						border-radius: 20px;
				}

				.s-who{
						display: block;
						color: rgb(6, 12, 63);

				}

				.tag{
						display: block;
						font-size: 5vw;
						letter-spacing: 0.4vw;
						font-family: 'Roboto Condensed', sans-serif;
						text-align: center;
						margin-top: 15px;
						color: rgb(236, 220, 220);
				}

				#logo{
						display: block;
						width: 50vw;
				}
				.up-logo{
						display: block;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: -50px;
				}

				.big-main{
						display: none;
						background-image: url(aftermain.png);
						width: 100%;
						height: 100vh;
						background-size: cover;
						background-repeat: no-repeat;
				}

				.services{
						display: none;
				}
				.who{
						display: none;
				}
				.img{
						display: flex;
						-ms-flex-align: center;
						justify-content: center;
				}
				.s-para{
						display: block;
						font-size:  5vw;
						text-align: center; 
						font-family: 'Patrick Hand', cursive;
						padding: 20px;

				}
				#who{
						display: none;
				}

				.v-card{
						display: block;
						width: 80vw;
						height: 100vw;
						margin: auto;
						background-color: white;
						border-radius: 20px;
						background-image: url(graphics/full\ width.png);
						background-repeat: no-repeat;
						background-size: contain;
				}
				.s-title{
						color: rgb(255, 255, 255);

				}
				.s-btn{

						margin-left: 100px;
						padding: 10px;
						font-size: 14px;
						border-radius: 15px;
						border: none;
						width: 110px;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						background-color: #8a4f4f;
						color: white;
						letter-spacing: 0.3vw;
						cursor: pointer;
				}

				#cora-2{
						background-image: url(graphics/volunteer.png);
				}
				#cora-3{
						background-image: url(graphics/coursess.png);
				}

				/* who can join */

				.bhola{
						padding: 15px;
						font-size: 5vw;
						font-family: 'Patrick Hand', cursive;
						text-align: center;
						color: white;
						line-height: 30px;

				}
				#wat{
						color: #ffffff;
				}

				/* opportunities */

				.opportnities{
					display: none;
				}
				.div{
						display: block;
						background-image: url(min-bg.png); 
						background-repeat: no-repeat;
						background-size: cover;  
						width: 100%;
						height: 120vh;
				}
				.div h1{
						font-size: 10vw;
						text-transform: uppercase;
				}
				.cards-s{
						margin: 10px;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						flex-wrap: wrap;
				}

				.rec{
						border-radius: 40px;
						background-color: #fff;
						width: 80vw;
						height: 80vw;
						margin: 30px;

				}
				#rec1{
						background-image: url(graphics/s-cards1.png);
						background-repeat: no-repeat;
						background-size: cover;
				}
				#rec2{
						background-image: url(graphics/s-cards-2.png);
						background-repeat: no-repeat;
						background-size: cover;
				}

				.c1{
						background: blueviolet;
						height: 90vw;
						width: 90vw;
						margin: 20px;
						border-radius: 40px;
						display: block;
				}
				} 


				/* TAB DEVICES */


				@media screen and (max-width:768px) and (min-width:481px) {
				
				.main{
						background-image: url(min-bg.png);
						background-repeat: no-repeat;
						background-size: cover;
						height: 50vw;
				}
				h1{
						display: block;
						font-size:  6vw; 
						text-align: center;
						font-family: 'Balsamiq Sans', cursive;
						letter-spacing: 0.7vw;
						color: rgb(255, 255, 255);
				}
				h1 span{
						color: rgb(255, 163, 163);
				}
				.after-main{
						background-image: url(aftermain.png);
						background-repeat: no-repeat;
						background-size: cover;
						height: 900vw;
						display: block;
				}
				.after-main-container{
						display: block;
						width: 80vw;
						height: 110vw;
						margin: auto;
						background-color: white;
						border-radius: 20px;
				
				.tag{
						display: block;
						font-size: 5vw;
						letter-spacing: 0.4vw;
						font-family: 'Roboto Condensed', sans-serif;
						text-align: center;
						margin-top: 15px;
						color: rgb(236, 220, 220);
				}
				#logo{
						display: block;
						width: 50vw;
				}
				.up-logo{
						display: block;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: -50px;
				}
				.big-main{
						display: none;
						background-image: url(aftermain.png);
						width: 100%;
						height: 100vh;
						background-size: cover;
						background-repeat: no-repeat;
				}
				.services{
						display: none;
				}
				.who{
						display: none;
				
				/* just tab things *
				.s-who{
						display: block;
						color: rgb(6, 12, 63)
				
				.tag{
				display: block;
				font-size: 5vw;
				letter-spacing: 0.4vw;
				font-family: 'Roboto Condensed', sans-serif;
				text-align: center;
				margin-top: 15px;
				color: rgb(236, 220, 220);
		
				#lo{
				display: block;
				width: 50vw;
			
				.up-logo{
						display: block;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: -50px;
				
				.big-main{
						display: none;
						background-image: url(aftermain.png);
						width: 100%;
						height: 100vh;
						background-size: cover;
						background-repeat: no-repeat;
				
				.services{
						display: none;
				}
				.who{
						display: none;
				}
				.img{
						display: flex;
						-ms-flex-align: center;
						justify-content: center;
				}
				.s-para{
						display: block;
						font-size:  5vw;
						text-align: center; 
						font-family: 'Patrick Hand', cursive;
						padding: 20px
				}
				#who{
						display: none;
				
				.v-card{
						display: block;
						width: 80vw;
						height: 100vw;
						margin: auto;
						background-color: white;
						border-radius: 20px;
						background-image: url(full\ width.png);
						background-repeat: no-repeat;
						background-size: contain;
				}
				.s-title{
						color: rgb(255, 255, 255)
				}
				.s-btn
						margin-left: 160px;
						padding: 10px;
						font-size: 14px;
						border-radius: 15px;
						border: none;
						width: 110px;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						background-color: #8a4f4f;
						color: white;
						letter-spacing: 0.3vw;
						cursor: pointer;
				
				#cora-2{
						background-image: url(volunteer.png);
				}
				#cora-3{
						background-image: url(coursess.png);
				
				/* who can join *
				.bhola{
						padding: 15px;
						font-size: 5vw;
						font-family: 'Patrick Hand', cursive;
						text-align: center;
						color: white;
						line-height: 40px
				}
				#wat{
						color: #ffffff;
						margin-top: 40px;
				
				.s-students img{
						width: 500px
				}
				.s-org img{
						width: 500px
				}
				.opportnities{
						display: none;
				}   
				}


				/* Opportunities */

				.s-op{
						display: none;
				}
				.opportnities{
						background-image: url(RENAME.png);
						width: 100%;
						height: 180vh;
						border-radius: 20px;
						background-repeat: no-repeat;
				}

				.two-cards{
						display: flex;
						margin: 20px;
				}
				.card-n-1{
						width: 700px;
						height: 500px;
						margin: 20px;
						background-image: url(INERNSHIPSVOLUNTEERS.png);
									border-radius: 50px;
							}
				.card-n-2{
						width: 700px;
						height: 500px;
						margin: 20px;
						background-image: url(INERNSHIPSVOLUNTEERS\ \(1\).png);
						border-radius: 50px;
				}
				.op-btn{
						margin-top: 430px;
						margin-left: 250px;
						padding: 10px;
						font-size: 14px;
						border-radius: 15px;
						border: none;
						width: 150px;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						background-color: #811dd3;
						color: white;
						letter-spacing: 0.3vw;
						cursor: pointer;
				}
				.div{
						display: none;
				}
				.container-tgs{
						width: 50%;
						height: max-content;
						margin: auto;
						background-image: url(../graphics/homeeee.png);
						border: 1px solid black;
						border-radius: 40px;
						box-shadow: 5px 5px 30px rgb(122, 122, 122);
						display: flex;
						flex-wrap: wrap;
						flex-direction: column;
						background-repeat: no-repeat;
						background-size: cover;
				}
				.name h1{
						color: white;
						font-family: 'Patrick Hand', cursive;
						text-align: center;
						font-size: 4vw;
						margin-top: 30px;
				}
				#tgs-logo{
						display: flex;
						justify-content: center;
						align-items: center;
						width: 15vw;
						margin-left: 300px;
				}
				.about h1{
						color: white;
						font-family: 'Patrick Hand', cursive;
						text-align: left;
						padding: 30px;
						font-size: 2vw;
						margin-top: 30px;
				}
				.about p{
						color: white;
						font-family: 'Patrick Hand', cursive;
						text-align: left;
						padding: 30px;
						font-size: 2vw;

				}
				.services-tgs h1{
						color: white;
						font-family: 'Patrick Hand', cursive;
						text-align: left;
						padding: 30px;
						font-size: 2vw;
						text-transform: uppercase;

				}
				.services-tgs p{
						color: white;
						font-family: 'Patrick Hand', cursive;
						text-align: left;
						padding: 30px;
						font-size: 2vw;

				}
				.Benifits-tgs h1{
						color: white;
						font-family: 'Patrick Hand', cursive;
						text-align: left;
						padding: 30px;
						font-size: 2vw;
						text-transform: uppercase;

				}
				.Benifits-tgs p{
						color: white;
						font-family: 'Patrick Hand', cursive;
						text-align: left;
						padding: 30px;
						font-size: 2vw;

				}
				.apply{
						display: flex;
						flex-direction: column;
						margin: auto; 
				}
				.butt-tgs{
						margin: 50px;
						padding: 10px;
						cursor: pointer;
						border-radius: 15px;
						border: none;
						background-color: rgb(72, 61, 104);
						color: rgb(255, 255, 255);
						margin-top: -20px;
						width: 100px;
						font-family: 'Patrick Hand', cursive;
						text-transform: uppercase;
						font-size: 1vw;
				}
				.butt-tgs:hover{
						opacity: 0.8;
				}
				#about-tgs{
						text-align: center;
						font-family: 'Patrick Hand', cursive;
						font-size: 6vw;
						letter-spacing: 0.7vw;
						color: rgb(43, 25, 94);
				}
				#icon{
						padding: 20px;
						position: fixed;
						color: black;
				}
				.container-tcg{
						width: 50%;
						height: max-content;
						margin: auto;
						background-image: url(../graphics/homeeee.png);
						border: 1px solid black;
						border-radius: 40px;
						box-shadow: 5px 5px 30px rgb(122, 122, 122);
						display: flex;
						flex-wrap: wrap;
						flex-direction: column;
						background-repeat: no-repeat;
						background-size: cover;
				}

				@media screen and (max-width:768px) and (min-width:481px){
						.container-tgs{
								width: 80%;
								height: max-content;
								box-shadow: 5px 5px 30px rgb(122, 122, 122);
								margin-top: 10px;

						}
						.about h1{
								font-size: 6vw;

						}
						.name h1{
						
								font-size: 7vw;
								color: white;
								font-family: 'Patrick Hand', cursive;
								text-align: center;
								font-size: 10vw;
								margin-top: 30px;
						}
						.about-tgs{
								color: rgb(0, 0, 48);
						}
						.about h1{
								color: white;
								font-family: 'Patrick Hand', cursive;
								text-align: left;
								padding: 30px;
								font-size: 5vw;
								margin-top: 30px;
						}
						.about p{
								font-size: 3vw;

						}
						.services-tgs h1{
								font-size: 6vw;
						}
						.services-tgs p{
								font-size: 3vw;
						}
						.Benifits-tgs h1{
								font-size: 6vw;

						}
						.Benifits-tgs p{
								font-size: 3vw;
						}
						.logo-teenternz{
								width: 90%;
								height: 200px;
								display: flex;    
								margin: auto
						}
						.logo-teenternz img{
								margin: auto
						}
						.main-image{
								display: none;
						}    
				}

				.flex-baby{
						display: flex;
				margin: auto;
						width: 40vw;
						height: max-content;
						flex-direction: column;
						margin-top: 0;
				}
				.txt-alien h1{
						text-align: center;
						color: rgb(10, 0, 56);
						font-family: 'Patrick Hand', cursive;
						text-align: center;
						font-size: 5vw;
						margin-top: 0;
						letter-spacing: 0.5vw;
				}
				.IMG img{
					padding: 100px;
					width: 40vw;
				}
				.flex-s{
						display: none;
				}
				@media screen and (max-width: 480px){
						.flex-baby{
								display: none;
						}
						.flex-s{
								display: block;
								width: 90%;
								height: 600px;

								margin: auto;
						}
						.img-s{
								padding: 50px;
						}
						.img-s img{
								width: 70vw;
						}
						.main-heading{
								color: #13013d
						}

						.logo-teenternz{
								width: 90%;
								height: 200px;
								display: flex;    
								margin: auto
						}
						.logo-teenternz img{
								margin: auto
						}
						.main-image{
								display: none;
						}

				}

				/* todo list */

				@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

				::selection{
					color: #ffff;
					background: rgb(142, 73, 232);
				}

				.wrapper-2{
					background: #fff;
					max-width: 400px;
					width: 100%;
					margin: 120px auto;
					padding: 25px;
					border-radius: 5px;
					box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
				}
				.wrapper-2 header{
					font-size: 30px;
					font-weight: 600;
				}
				.wrapper-2 .inputField{
					margin: 20px 0;
					width: 100%;
					display: flex;
					height: 45px;
				}
				.inputField input{
					width: 85%;
					height: 100%;
					outline: none;
					border-radius: 3px;
					border: 1px solid #ccc;
					font-size: 17px;
					padding-left: 15px;
					transition: all 0.3s ease;
				}
				.inputField input:focus{
					border-color: #8E49E8;
				}
				.inputField button{
					width: 50px;
					height: 100%;
					border: none;
					color: #fff;
					margin-left: 5px;
					font-size: 21px;
					outline: none;
					background: #8E49E8;
					cursor: pointer;
					border-radius: 3px;
					opacity: 0.6;
					pointer-events: none;
					transition: all 0.3s ease;
				}
				.inputField button:hover,
				.footer button:hover{
					background: #721ce3;
				}
				.inputField button.active{
					opacity: 1;
					pointer-events: auto;
				}
				.wrapper-2 .todoList{
					max-height: 250px;
					overflow-y: auto;
				}
				.todoList li{
					position: relative;
					list-style: none;
					height: 45px;
					line-height: 45px;
					margin-bottom: 8px;
					background: #f2f2f2;
					border-radius: 3px;
					padding: 0 15px;
					cursor: default;
					overflow: hidden;
				}
				.todoList li .icon{
					position: absolute;
					right: -45px;
					background: #e74c3c;
					width: 45px;
					text-align: center;
					color: #fff;
					border-radius: 0 3px 3px 0;
					cursor: pointer;
					transition: all 0.2s ease;
				}
				.todoList li:hover .icon{
					right: 0px;
				}
				.wrapper-2 .footer{
					display: flex;
					width: 100%;
					margin-top: 20px;
					align-items: center;
					justify-content: space-between;
				}
				.footer button{
					padding: 6px 10px;
					border-radius: 3px;
					border: none;
					outline: none;
					color: #fff;
					font-weight: 400;
					font-size: 16px;
					margin-left: 5px;
					background: #8E49E8;
					cursor: pointer;
					user-select: none;
					opacity: 0.6;
					pointer-events: none;
					transition: all 0.3s ease;
				}
				.footer button.active{
					opacity: 1;
					pointer-events: auto;
				}
				#task{
						font-size: 5vw;
						color: white;
						text-align: center;
						font-family: 'Patrick Hand', cursive;
				}
				.full-bg{
						width: 100%;
						height: 100vh;
						background: url(aftermain.png);
						font-family: 'Patrick Hand', cursive;
				}
				.main-image img{
						width: 100%;
						height: 100vh;
						background-repeat: no-repeat;
						background-size: cover;
				}

				@media screen and (max-width: 480px) {
						.div{
								display: block;
								background-image: url(min-bg.png); 
								background-repeat: no-repeat;
								background-size: cover;  
								width: 100%;
								height: 170vh;
						}
						.div h1{
								font-size: 10vw;
								text-transform: uppercase;
								color: #020c3b;
						}
						.cards-s{
								margin: 10px;
								display: flex;
								justify-content: center;
								align-items: center;
								flex-direction: column;
								flex-wrap: wrap;
						}

						.rec{
								border-radius: 40px;
								background-color: #fff;
								width: 80vw;
								height: 80vw;
								margin: 30px;

						}
						#rec1{
								background-image: url(s-cards1.png);
								background-repeat: no-repeat;
								background-size: cover;
						}
						#rec2{
								background-image: url(s-cards-2.png);
								background-repeat: no-repeat;
								background-size: cover;
						}
						.flexbox{
								display: flex;
								margin-left: -10px;
								width: 100%;
								height: max-content;
								flex-wrap: wrap;
						}
				}

				@media screen and (max-width:768px) and (min-width:481px){
						.div{
								display: block;
								background-image: url(min-bg.png); 
								background-repeat: no-repeat;
								background-size: cover;  
								width: 100%;
								height: 230vh;
						}
						.div h1{
								font-size: 10vw;
								text-transform: uppercase;
								color: #020c3b;
						}
						.cards-s{
								margin: 10px;
								display: flex;
								justify-content: center;
								align-items: center;
								flex-direction: column;
								flex-wrap: wrap;
						}

						.rec{
								border-radius: 40px;
								background-color: #fff;
								width: 80vw;
								height: 80vw;
								margin: 30px;

						}
						#rec1{
								background-image: url(s-cards1.png);
								background-repeat: no-repeat;
								background-size: cover;
						}
						#rec2{
								background-image: url(s-cards-2.png);
								background-repeat: no-repeat;
								background-size: cover;
						}
				}

				@media screen and (max-width:480px) {
						.container-tgs{
								width: 100%;
								height: max-content;
								margin: auto;
								box-shadow: 5px 5px 30px rgb(122, 122, 122);
								margin-top: 20px;

						}
						.name h1{

								font-size: 5vw;
								color: white;
								font-family: 'Patrick Hand', cursive;
								text-align: center;
								font-size: 10vw;
								margin-top: 30px;
						}
						.about-tgs{
								color: rgb(0, 0, 48);
						}
						.about h1{
								font-size: 6vw;
						}
						.about p{
								font-size: 4vw;
								padding: 30px;

						}
						.services-tgs h1{
								font-size: 6vw;
						}
						.services-tgs p{
								font-size: 4vw;
						}
						.Benifits-tgs h1{
								font-size: 6vw;

						}
						.Benifits-tgs p{
								font-size: 4vw;
						}
						.container-tcg{
								width: 90%;
								height: max-content;
								margin: auto;
								background-image: url(homeeee.png);
								border: 1px solid black;
								border-radius: 40px;
								box-shadow: 5px 5px 30px rgb(122, 122, 122);
								display: flex;
								flex-wrap: wrap;
								flex-direction: column;
								background-repeat: no-repeat;
								background-size: cover;
						}

				}

				@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

				#register-h1{
						margin-top: -500px;
						text-align: center;
				}

				#rocket-logo{
						display: flex;
						margin: auto;
						margin-top: 30px;
						width: 30vw;
				}

				@media screen and (max-width: 480px) {
						#rocket-logo{
								width:60vw;
						}
						.apply a button{
								font-size: 3vw;
						}
						.footer{
								display: none;
						}

				}

				@media screen and (max-width:768px) and (min-width:481px){
						#rocket-logo{
								width:60vw;
						}


				}
				#Amers{
						height: 900px;
				}
				@media screen and (max-width: 768px) {
						.footer{
								display: none;
						}
				}


				.opportunities-2{
						width: 100%;
						height: 110vh;

						background-repeat: no-repeat;
						background-size: cover;
				}


				.orgs-22{

						width: 100%;
						height: 700px;
						margin: auto;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						margin: auto;
				}
				.cards-22{
						width: 270px;
						height: 100px;
						background-color: rgb(245, 244, 247);
						margin: auto;
						display: flex;
						margin-top: 20px;
						box-shadow: 2px 2px 10px rgb(49, 49, 49);
						border-radius: 10px;
				}
				.cards-22 .name h1{
						font-size: 20px;
						margin-top: 10px;
						text-align: center;
						font-family: 'Noto Sans JP', sans-serif;
						letter-spacing: 0.2vw;
						color: #202020;

				}
				.cards-22 .name p{
						font-size: 13px;
						padding: 10px;
						text-align: center;
						font-family: 'Noto Sans JP', sans-serif;
						letter-spacing: 0.2vw;
						text-transform: uppercase;
						font-weight: 750;
						line-height: 15px;


				}
				.cards-22 .img img{
						padding: 4px;
						border-radius: 10px;
				}
				.Howdoeswework{
						width: 100%;
						height: 80vh;

				}

				.flexbox-how{
						width: 90%;
						height: max-content;
						margin: auto;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
				}
				.card-flexbox{
						width: 300px;
						height: 300px;
						background-color: white;
						box-shadow: 2px 2px 10px black;
						margin: auto;
						padding: 50px;
						border-radius: 15px;
				}
				@media screen and (max-width:768px) {
						.card-flexbox{
								width: 200px;
								height: 200px;
								margin-top: 20px;
						}
				}
			</style>
		</head>
		<body>
			<div class="wrapper">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="pages/teams.html">Opportunities</a></li>
					<li><a href="pages/course.html">Courses</a></li>
					<li><a href="pages/Submityourreview.html">Share Feedback</a></li>
					<li><a href="pages/todo.html">To-do List</a></li>
					<li><a href="pages/blog.html">Article</a></li>
					<li><a href="pages/resourses.html">Resourses</a></li>
					<li><a href="pages/Register.html">Register as an Organisation</a></li>
				</ul>
			</div>
			<div class="main-image">
				<img src="/graphics/desktop.png">
			</div>
			<div class="after-main">
				<div class="logo-teenternz">
						<img src="/graphics/updated.png" width="250vw">
				</div><br><br><br>
					<div class="after-main-container"><br><br>
						<h1 class="s-who">WHO ARE<span>WE?</span></h1>
						<div class="img-text">
							<div class="img">
								<img src="/graphics/about-img.png" width="240vw">
							</div>
							<div class="texte">
								<p class="s-para">Teenternz is a startup built by students for students. Teeneternz help
										students<span>find remote internships and volunteer opportunities from around the globe.</span>
								</p>
							</div><br><br><br><br><br><br>
							<h1 id="wat">WHAT CAN YOU FIND HERE?</h1><br><br>
							<div class="cards">
								<div class="v-card">
										<br>
										<h1 class="s-title">
												INTERNSHIPS
										</h1>
								</div>
								<br><br>
								<a href="pages/op.html">
										<button class="s-btn">View all</button>
								</a>
								<br><br><br>
								<div class="v-card" id="cora-2">
										<br>
										<h1 class="s-title">
												VOLUNTEERS
										</h1>
								</div>
								<br><br>
								<a href="pages/op.html">
										<button class="s-btn">View all</button>
								</a>
								<br><br><br>
								<div class="v-card" id="cora-3"><br>
									<h1 class="s-title">COURSES</h1>
								</div><br><br>
								<a href="pages/course.html">
									<button class="s-btn">View all</button></a>
							</div><br><br><br>
							<h1 id="wat">WHO CAN JOIN?</h1>
							<div class="whocanjoin">
								<div class="s-students">
										<img src="/graphics/student.png" width="300vw">
										<br><br>
										<p class="bhola">Students who are interested in finding internships,
												volunteer opportunities, and just looking for an organisation to become amember at
												this is the perfect place for you.
										</p>
								</div>
								<div class="s-org">
									<img src="/graphics/org.png" width="300vw"><br><br>
									<p class="bhola">Organisations/company looking for highschool student
											interns, volunteers, and members can join Teenternz.
											there is No charge for anyone to join Teenternz but have to resepct
											and agree to the terms and conditions.
									</p>
								</div>
							</div>
						</div>
					</div>
			</div>
			<div class="big-main" id="about"><br><br><br>
					<h1 id="whoarewe">WHO ARE WE?</h1>
					<div class="set">
							<div class="image">
									<img src="/graphics/about-img.png" alt="">
							</div>
							<div class="text">
									<p>Teenternz is a startup built by Students for Students Teenternz helps
											Students <span> find Remote Internships and volunteer opportunites from aroundthe globe.
													apart from that Students can find various Resources here.
											</span>
									</p>
							</div>
					</div>
			</div>

				<div class="services">
						<br><br><br>
						<h1 id="what">WHAT CAN YOU FIND HERE?</h1>

						<br><br><br><br>
						<div class="flex">
								<div class="card" id="internships">

										<a href="pages/teams.html">
												<button id="card1btn">
														View all
												</button>
										</a>
										<h1 id="intern">internships</h1>
								</div>
								<div class="card" id="Volunteer">




										<div class="button">
												<h1 id="vol">Volunteer</h1>
												<a href="pages/teams.html">
														<button class="btn" id="cardbtn2">
																View all
														</button>
												</a>
										</div>

								</div>
								<div class="card" id="courses">

										<h1 id="course">Courses</h1>

										<div class="button">
												<a href="#">
														<button class="btn" id="cardbtn">
																View all
														</button>
												</a>
										</div>
								</div>
						</div>
				</div>

				<br><br>

				<div class="Howdoeswework">
						<h1 id="who">HOW DOES TEENTERNZ WORK?</h1>

						<br><br><br>
						<div class="flexbox-how">
								<br><br>
								<div 
								style="background-image: url(/graphics/Skills.png);
								background-repeat: no-repeat;
								background-size: cover;"
								class="card-flexbox" id="card-flexbox-1"></div>
								<div 
								style="background-image: url(/graphics/lato.png);
								background-repeat: no-repeat;
								background-size: cover;"
								class="card-flexbox" id="card-flexbox-2"></div>
								<div  style="background-image: url(/graphics/apply.png);
								background-repeat: no-repeat;
								background-size: cover;"
								class="card-flexbox" id="card-flexbox-3">
								</div>
						</div>
				</div>

				<br><br>


				<h1 id="who">WHO CAN JOIN?</h1>
				<div class="who">


						<div class="students">

								<div class="photo">
										<img src="/graphics/student.png">
								</div>

								<div class="lines">

										<h1 class="title-who">STUDENTS</h1>

										<p class="pola">Students who are interested in finding internships,
												volunteer opportunities, and just looking for an organisation to become a member at
												this is the perfect place for you.
										</p>

										<a href="pages/teams.html">
												<button class="op-button">
														LOOK FOR OPPORTUNITIES
												</button>
										</a>
								</div>
						</div>

						<div class="org">

								<div class="picture">
										<img src="/graphics/org.png">

								</div>
								<div class="paragraphs">
										<h1 class="title-who" id="comp">ORGANISATIONS</h1>

										<p class="pola">Organisations/company looking for highschool student
												interns, volunteers, and members can join Teenternz.
												there is No charge for anyone to join Teenternz but have to resepct
												and agree to the terms and conditions.
										</p>
										<br>
										<a href="pages/Register.html">
												<button class="who-button">
														Register
												</button>
										</a>
								</div>
						</div>
				</div>


				<div class="footer">

						<footer
								style="background-color: #222222; height: max-content; display: flex; flex-wrap: wrap; border-top: 1px solid black; @media screen and (max-width: 768px){
										.footer{
												display: none;
										}
								}">

								<div style="display: flex; flex-wrap: wrap;" class="left">

										<!-- INSTAGRAM -->

										<a target="blank" style="padding:20px; color: white;" href="https://www.instagram.com/teenternz/">
												<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
														class="bi bi-instagram" viewBox="0 0 16 16">
														<path
																d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
												</svg>
										</a>


										<!-- TWITTER -->

										<a target="blank" style="padding:20px; color: white; " href="https://twitter.com/teenternz">
												<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
														class="bi bi-twitter" viewBox="0 0 16 16">
														<path
																d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
												</svg>




												<!-- DISCORD -->


												<a target="blank" style="padding:20px; color: white;" href="https://discord.gg/X6n9vQJm4q">
														<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
																class="bi bi-discord" viewBox="0 0 16 16">
																<path
																		d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
																<path
																		d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z" />
														</svg>
												</a>

												<!-- Mail -->

												<a target="blank" style="padding:20px; color: white;" href="mailto:teenternz@gmail.com">
														<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
																class="bi bi-envelope" viewBox="0 0 16 16">
																<path
																		d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
														</svg>
												</a>

												<!-- Linkedin -->

												<a target="blank" style="padding:20px; color: white;" href="https://www.linkedin.com/in/teenternz/">
														<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
																<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
															</svg>
												</a>
										</a>
								</div>
								<div class="right">
										<p style="margin-left: 1150px; margin-top: -50px; font-size: 1.3vw; color: white; ">© Copyright 2021
											<a style="text-decoration: none;  color: white" href="index.html">  Teenternz </a> </p>
								</div>
						</footer>
				</div>

		</body>
	</html>
</template>