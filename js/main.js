let arrData = [
  `Dhaka`, `Bogura`, `Rangpur`, `Gaibandha`, `Thakurgoan`, `Naogaon`, `Tangail`, `Joypurhat`, `Mirpur`, `Agrabad`,
  `Khatungonj`, `Sylhet`, `Kurigram`, `Gobindogonj`, `Panchagar`, `Ullapara`, `Kushtia`, `Jhenaidah`, `Fulbari`,
  `Chapai`, `Lalmonirhat`, `Adamdighi`, `Shibgonj`, `Debigonj`, `Gazipur`, `Pirgonj01`, `Mithapukur`, `Hili`, `Boda`,
  `Birgonj`, `Parbotipur`, `Modhupur`, `Birampur`, `Panchbibi`, `Nozipur`, `Ranirbondor`, `Shahzadpur`, `Chandaikona`,
  `Mymonsingh`, `Polashbari`, `Sherpur`, `Veramara`, `Bera`, `Kashinathpur`, `Dupchachiya`, `Sirajgonj`, `Ranigonj`,
  `Mokamtola`, `Majhira`, `Ishwordi`, `Bonpara`, `Mohadebpur`, `Santahar`, `Ulipur`, `Kalai`, `Belkuchi`, `Konabari`,
  `Dinajpur`, `Domar`, `Syedpur`, `Jaldhaka`, `Jashore`, `Savar`, `Gulshan`, `Mohammadpur`, `Nilphamari`, `Uttara`,
  `Narayangonj`, `Rupgonj`, `Rajshahi`, `Nagesswari`, `Kaligonj`, `Badda`, `Pirgonj02`, `Ranishankoil`, `Baipail`,
  `Dimla`, `Tushvandar`, `Natore`, `Setabgonj`, `Benapol`, `Hatibandha`, `Elephantroad`, `Haragach`, `Chotopul`,
  `Cumilla`, `Sapahar`, `Mohakhali`, `Nowapara`, `Baneswar`, `Siddikbazar`, `Khulna`, `Vayrab`, `Taragonj`, `Norsingdi`,
  `Banglabazar`, `Newmarket`, `Nobabpur`, `Patuatuli`, `Shothibari`, `Dhunot`, `Sonatola`, `Keranigonj`, `Motijheel`,
  `Meherpur`, `Gangni`, `Mawna`, `Baburhat`, `Malitola`, `Badargonj`, `Shamoly`, `Razapur`, `Jatrabari`, `Chakbazzar`,
  `Khilgaon`, `Siddirgonj`, `Tongi`, `Kaunia`, `Gabtoli`, `Magura`, `Faridpur`, `Jamilnagarshoting`, `Patgram`,
  `Sariakandi`, `Showarighat`, `Chirirbandar`, `Kumarkhali`, `Rajbari`, `Pangsha`,`Chuadanga`, `Araihazar`,
  `Ashulia`, `Farmgate`,`Pabna`,`Stidham-market`,`Sayestaganj`

    
  ]



let inputBox = document.getElementById("inputFild")
let ofc = document.getElementById("ofc")
  let num1 = document.getElementById("num1")
  let num2 = document.getElementById("num2")




inputBox.addEventListener("input",onInputChange);

function onInputChange() {
  removeAutoBox();
 let inputValue = inputBox.value.toLowerCase()
 if (inputValue == 0) return;
 let tmpArrBox = []
 arrData.forEach((branch)=>{
     if(branch.substr(0,inputValue.length).toLocaleLowerCase()===inputValue)
     tmpArrBox.push(branch)
 })
boxCreating(tmpArrBox);
}

function boxCreating(list){
  let dv =document.createElement("div")
  dv.className = "dv"
  dv.id="dv"
  

    list.forEach((listItem)=>{
      
      let btn = document.createElement("button")
      btn.innerHTML = listItem;
      btn.addEventListener("click",onBtnClick)
      dv.appendChild(btn);
    })
   document.getElementById("form").appendChild(dv)
    
}

function removeAutoBox () {
  let dvID = document.getElementById("dv")
  if (dvID) dvID.remove();
}


function onBtnClick(e){
e.preventDefault();
let btn2 = e.target;
inputBox.value = btn2.innerHTML;

removeAutoBox();
}





//////////////
let blrBox = document.getElementById("ans")

function clickk(){
  // let ind = prompt("Enter Office Name EXM(raj OR rajshahi): ")
  if(inputBox.value.length>0)
  {
      blrBox.className = "modal"
  }
  
  let ind = (inputBox.value)
  console.log(inputBox.value.length)
  
  switch (ind){
     case'Rajshahi':
          ofc.innerHTML='Rajshahi'
          num1.innerHTML='01713228499'
          num2.innerHTML='01755597884'
          break
      case'Baneswar':
              ofc.innerHTML='Baneswar'
              num1.innerHTML='01755597821'
              num2.innerHTML='01845989384'
              break
      case'Chapai':
              ofc.innerHTML='Chapai'
              num1.innerHTML='01713228487'
              num2.innerHTML='01739585581'
              break
      case'Shibgonj':
              ofc.innerHTML='Shibgonj'
              num1.innerHTML='01755597887'
              num2.innerHTML='01739585581'
              break
      case'Natore':
              ofc.innerHTML='Nator'
              num1.innerHTML='01713228430'
              num2.innerHTML='01717906350'
              break
      case'Bonpara':
              ofc.innerHTML='Bonpara'
              num1.innerHTML='01755597873'
              num2.innerHTML='01713707906'
              break
      case'Razapur':
              ofc.innerHTML='Rajapur'
              num1.innerHTML='01777794035'
              num2.innerHTML='01716012419'
              break
      case'Pabna':
              ofc.innerHTML='Pabna'
              num1.innerHTML='01713228408'
              num2.innerHTML='01713228434'
              break
      case 'Ishwordi':
              ofc.innerHTML='Ishordi'
              num1.innerHTML='01713228461'
              num2.innerHTML='01733133200'
              break
      case'Bera':
              ofc.innerHTML='Bera'
              num1.innerHTML='01755597870'
              num2.innerHTML='01749444483'
              break
      case 'Kashinathpur':
              ofc.innerHTML='Kashinatpur'
              num1.innerHTML='01755597869'
              num2.innerHTML=''
              break
      case'Sirajgonj':
              ofc.innerHTML='Sirajgonj'
              num1.innerHTML='01713228490'
              num2.innerHTML='01718424666'
              break
      case 'Shahzadpur':
              ofc.innerHTML='Shahzadpur'
              num1.innerHTML='01755597879'
              num2.innerHTML='01711813142'
              break
      case'belkuchi':
              ofc.innerHTML='Belkuchi'
              num1.innerHTML='01755597871'
              num2.innerHTML='01717901106'
              break
      case'Ullapara':
              ofc.innerHTML='Ullapara'
              num1.innerHTML='01713228417'
              num2.innerHTML='01713228478'
              break
      case'Chandaikona':
              ofc.innerHTML='Chandaikona'
              num1.innerHTML='01755597891'
              num2.innerHTML='01713731586'
              break
      case'Sherpur':
              ofc.innerHTML='Sherpur'
              num1.innerHTML='01755597890'
              num2.innerHTML='01713741264'
              break
      case'Dhunot':
              ofc.innerHTML='Dhunot'
              num1.innerHTML='01755597813'
              num2.innerHTML='01711410825'
              break
      case'Majhira':
              ofc.innerHTML='Majhira'
              num1.innerHTML='01755597889'
              num2.innerHTML='01939520932'
              break
      case'Mokamtola':
              ofc.innerHTML='Mokamtola'
              num1.innerHTML='01755597877'
              num2.innerHTML='01950495703'
              break
      case'Sonatola':
              ofc.innerHTML='Sonatola'
              num1.innerHTML='01777794011'
              num2.innerHTML='01712401612'
              break
      case 'Adamdighi':
              ofc.innerHTML='Adamdighi'
              num1.innerHTML='01755597881'
              num2.innerHTML=''
              break
      case'Dupchachiya':
              ofc.innerHTML='Dupchachiya'
              num1.innerHTML='01755597880'
              num2.innerHTML='01711411561'
              break
      case'Santahar':
              ofc.innerHTML='Santahar'
              num1.innerHTML='01755597882'
              num2.innerHTML='01713228482'
              break
      case'Sariakandi':
              ofc.innerHTML='Sariakandi'
              num1.innerHTML='01777794013'
              num2.innerHTML='01737798763'
              break
      case'Naogaon':
              ofc.innerHTML='Naogaon'
              num1.innerHTML='01713228409'
              num2.innerHTML='01713228433'
              break
      case'Nozipur':
              ofc.innerHTML='Nozipur'
              num1.innerHTML='01755597885'
              num2.innerHTML='01711120574'
              break
      case'Modhupur':
              ofc.innerHTML='Mohadebpur'
              num1.innerHTML='01755597886'
              num2.innerHTML='01739852288'
              break
      case'Sapahar':
              ofc.innerHTML='Sapahar'
              num1.innerHTML='01755597842'
              num2.innerHTML='01755597843'
              break
      case'Joypurhat':
              ofc.innerHTML='Joypurhat'
              num1.innerHTML='01713228489'
              num2.innerHTML='01713228435'
              break
      case'Kalai':
              ofc.innerHTML='Kalai'
              num1.innerHTML='01755597876'
              num2.innerHTML='01743403420'
              break
      case'Panchbibi':
              ofc.innerHTML='Panchbibi'
              num1.innerHTML='01755597868'
              num2.innerHTML='01918788691'
              break
      case'Rangpur':
              ofc.innerHTML='Rangpur'
              num1.innerHTML='01713228413'
              num2.innerHTML='01713228456'
              break
      case'Pirgonj01':
              ofc.innerHTML='Pirgonj 01'
              num1.innerHTML='01755597894'
              num2.innerHTML='01719709657'
              break
     case'Shothibari':
              ofc.innerHTML='Shotibari'
              num1.innerHTML='01755597898'
              num2.innerHTML='01714860762'
              break
     case'Mithapukur':
              ofc.innerHTML='Mithapukur'
              num1.innerHTML='01755597896'
              num2.innerHTML='01735535882' 
              break
        case'Haragach':
              ofc.innerHTML='Haragach'
              num1.innerHTML='01755597826'
              num2.innerHTML='01711415442' 
              break
        case'Taragonj':
              ofc.innerHTML='Taragonj'
              num1.innerHTML='01755597814'
              num2.innerHTML='01973228416' 
              break
              
        case'Kaunia':
              ofc.innerHTML='Kaunia'
              num1.innerHTML='017554713'
              num2.innerHTML='01713647782' 
              break
         case'Badargonj':
              ofc.innerHTML='Badargonj'
              num1.innerHTML='01713228442'
              num2.innerHTML='' 
              break
        case'Gaibandha':
              ofc.innerHTML='Gaibandha'
              num1.innerHTML='01713228410'
              num2.innerHTML='01713228473' 
              break
        case'Gobindogonj':
              ofc.innerHTML='Gobindogonj'
              num1.innerHTML='01713228439'
              num2.innerHTML='01757826174' 
              break
        case'Polashbari':
              ofc.innerHTML='Polashbari'
              num1.innerHTML='01767144244'
              num2.innerHTML='01711134244' 
              break
        case'Lalmonirhat':
              ofc.innerHTML='Lalmonirhat'
              num1.innerHTML='01713228468'
              num2.innerHTML='01712275059' 
              break
        case'Hatibandha':
              ofc.innerHTML='Hatibandha'
              num1.innerHTML='01755597864'
              num2.innerHTML='01761371515' 
              break
        case'Tushvandar':
              ofc.innerHTML='Tushvandar'
              num1.innerHTML='01713228436'
              num2.innerHTML='01717677689' 
              break
        case'Patgram':
              ofc.innerHTML='Patgram'
              num1.innerHTML='01755597878'
              num2.innerHTML='01713547090' 
              break
        case'Kurigram':
              ofc.innerHTML='Kurigram'
              num1.innerHTML='01713228412'
              num2.innerHTML='01755554729' 
              break
        case'Nagesswari':
              ofc.innerHTML='Nagesswari'
              num1.innerHTML='01713228420'
              num2.innerHTML='01765623621' 
              break
        case'Ulipur':
              ofc.innerHTML='Ulipur'
              num1.innerHTML='01755597893'
              num2.innerHTML='01717255859' 
              break
        case'Nilphamari':
              ofc.innerHTML='Nilphamari'
              num1.innerHTML='01713228428'
              num2.innerHTML='01716559625' 
              break
        case'Syedpur':
              ofc.innerHTML='Syedpur'
              num1.innerHTML='01713228416'
              num2.innerHTML='01713228438' 
              break
        case'Domar':
              ofc.innerHTML='Domar'
              num1.innerHTML='01713228450'
              num2.innerHTML='01797956204' 
              break
        case'Jaldhaka':
              ofc.innerHTML='Jaldhaka'
              num1.innerHTML='01755597899'
              num2.innerHTML='01916695369' 
              break
        case'Dimla':
              ofc.innerHTML='Dimla'
              num1.innerHTML='01755597849'
              num2.innerHTML='01712559980' 
              break
        case'Dinajpur':
              ofc.innerHTML='Dinajpur'
              num1.innerHTML='01713228462'
              num2.innerHTML='01755597847' 
              break
        case'Fulbari':
              ofc.innerHTML='Fulbari'
              num1.innerHTML='01713228429'
              num2.innerHTML='01712743570' 
              break
        case'Birampur':
              ofc.innerHTML='Birampur'
              num1.innerHTML='01713228415'
              num2.innerHTML='01716666627' 
              break
        case'Birgonj':
              ofc.innerHTML='Birgonj'
              num1.innerHTML='01713228460'
              num2.innerHTML='01911432238' 
              break
        case'Hili':
              ofc.innerHTML='Hili'
              num1.innerHTML='01713228477'
              num2.innerHTML='01716299631' 
              break
        case'Ranirbondor':
              ofc.innerHTML='Ranirbondor'
              num1.innerHTML='01755597860'
              num2.innerHTML='01713710983' 
              break
        case'Parbotipur':
              ofc.innerHTML='Parbotipur'
              num1.innerHTML='01713228451'
              num2.innerHTML='01717330562' 
              break
        case'Ranigonj':
              ofc.innerHTML='Ranigonj'
              num1.innerHTML='01755597858'
              num2.innerHTML='' 
              break
        case'Setabgonj':
              ofc.innerHTML='Setabgonj'
              num1.innerHTML='01755597851'
              num2.innerHTML='01728719722' 
              break
         case'Chirirbandar':
              ofc.innerHTML='Chirirbandar'
              num1.innerHTML='01777794039'
              num2.innerHTML='01718098348' 
              break
         case'Thakurgoan':
              ofc.innerHTML='Thakurgoan'
              num1.innerHTML='01713228414'
              num2.innerHTML='01713228472' 
              break
        case'Pirgonj02':
              ofc.innerHTML='Pirgonj02'
              num1.innerHTML='01755597852'
              num2.innerHTML='01722842343' 
              break
        case'Ranishankoil':
              ofc.innerHTML='Ranishankoil'
              num1.innerHTML='01755597854'
              num2.innerHTML='01724320996' 
              break
        case'Panchagar':
              ofc.innerHTML='Panchagar'
              num1.innerHTML='01713228459'
              num2.innerHTML='01710630429' 
              break
        case'Boda':
              ofc.innerHTML='Boda'
              num1.innerHTML='01713228469'
              num2.innerHTML='01729345420' 
              break
        case'Debigonj':
              ofc.innerHTML='Debigonj'
              num1.innerHTML='01755597850'
              num2.innerHTML='01755256962' 
              break
        case'Agrabad':
              ofc.innerHTML='Agrabad'
              num1.innerHTML='01755597815'
              num2.innerHTML='01755597840' 
              break
        case'Khatungonj':
              ofc.innerHTML='Khatungonj'
              num1.innerHTML='01755597816'
              num2.innerHTML='' 
              break
        case'Chotopul':
              ofc.innerHTML='Chotopul'
              num1.innerHTML='01755597817'
              num2.innerHTML='01755597875' 
              break
        case'Cumilla':
              ofc.innerHTML='Cumilla'
              num1.innerHTML='01755554724'
              num2.innerHTML='01705408192' 
              break
        case'Dhaka':
              ofc.innerHTML='Dhaka'
              num1.innerHTML='01713228405'
              num2.innerHTML='01713228406' 
              break
        case'Mirpur':
              ofc.innerHTML='Mirpur'
              num1.innerHTML='01755597867'
              num2.innerHTML='01713228467' 
              break
        case'Malitola':
              ofc.innerHTML='Malitola'
              num1.innerHTML='01713228440'
              num2.innerHTML='01713228441' 
              break
        case'Elephantroad':
              ofc.innerHTML='Elephantroad'
              num1.innerHTML='01755597830'
              num2.innerHTML='' 
              break
        case'Stidham-market':
              ofc.innerHTML='Stidham-market'
              num1.innerHTML='01714009336'
              num2.innerHTML='' 
              break
        case'Shamoly':
              ofc.innerHTML='Shamoly'
              num1.innerHTML='01713228427'
              num2.innerHTML='01777794037' 
              break
        case'Mohammadpur':
              ofc.innerHTML='Mohammadpur'
              num1.innerHTML='01713228425'
              num2.innerHTML='01713228432' 
              break
        case'Gulshan':
              ofc.innerHTML='Gulshan'
              num1.innerHTML='01755597859'
              num2.innerHTML='01977732250' 
              break
        case'Nobabpur':
              ofc.innerHTML='Nobabpur'
              num1.innerHTML='01755597836'
              num2.innerHTML='01935471016' 
              break
        case'Patuatuli':
              ofc.innerHTML='Patuatuli'
              num1.innerHTML='01755597838'
              num2.innerHTML='' 
              break
        case'Banglabazar':
              ofc.innerHTML='Banglabazar'
              num1.innerHTML='01755597839'
              num2.innerHTML='01711842584' 
              break
        case'Newmarket':
              ofc.innerHTML='Newmarket'
              num1.innerHTML='01755597837'
              num2.innerHTML='01552356461' 
              break
        case'Showarighat':
              ofc.innerHTML='Showarighat'
              num1.innerHTML='01755597810'
              num2.innerHTML='01755597827' 
              break
        case'Chakbazzar':
              ofc.innerHTML='Chakbazzar'
              num1.innerHTML='01777794041'
              num2.innerHTML='01975597838' 
              break
        case'Jatrabari':
              ofc.innerHTML='Jatrabari'
              num1.innerHTML='01777797009'
              num2.innerHTML='01678020878' 
              break
        case'Badda':
              ofc.innerHTML='Badda'
              num1.innerHTML='01755554726'
              num2.innerHTML='01713228491' 
              break
        case'Mohakhali':
              ofc.innerHTML='Mohakhali'
              num1.innerHTML='01755597883'
              num2.innerHTML='01714709770' 
              break
        case'Khilgaon':
              ofc.innerHTML='Khilgaon'
              num1.innerHTML='01755597802'
              num2.innerHTML='01755597803' 
              break
        case'Siddikbazar':
              ofc.innerHTML='Siddikbazar'
              num1.innerHTML='01755597835'
              num2.innerHTML='01786659320' 
              break
        case'Motijheel':
              ofc.innerHTML='Motijheel'
              num1.innerHTML='01842488309'
              num2.innerHTML='01777794043' 
              break
        case'Keranigonj':
              ofc.innerHTML='Keranigonj'
              num1.innerHTML='01777794010'
              num2.innerHTML='01820540844' 
              break
        case'Uttara':
              ofc.innerHTML='Uttara'
              num1.innerHTML='01713228495'
              num2.innerHTML='01713228497' 
              break
        case'Savar':
              ofc.innerHTML='Savar'
              num1.innerHTML='01755597856'
              num2.innerHTML='01760164590' 
              break
        case'Baipail':
              ofc.innerHTML='Baipail'
              num1.innerHTML='01755597844'
              num2.innerHTML='01755597845' 
              break
        case'Gazipur':
              ofc.innerHTML='Gazipur'
              num1.innerHTML='01713228436'
              num2.innerHTML='01713228470' 
              break
        case'Konabari':
              ofc.innerHTML='Konabari'
              num1.innerHTML='01713228457'
              num2.innerHTML='01755597829' 
              break
        case'Mawna':
              ofc.innerHTML='Mawna'
              num1.innerHTML='01777794048'
              num2.innerHTML='01684618400' 
              break
        case'Tongi':
              ofc.innerHTML='Tongi'
              num1.innerHTML='01755554712'
              num2.innerHTML='01745345288' 
              break
        case'Mymonsingh':
              ofc.innerHTML='Mymonsingh'
              num1.innerHTML='01713228421'
              num2.innerHTML='01713228464' 
              break
        case'Modhupur':
              ofc.innerHTML='Modhupur'
              num1.innerHTML='01755597800'
              num2.innerHTML='01717028831' 
              break
        case'Tangail':
              ofc.innerHTML='Tangail'
              num1.innerHTML='01713228407'
              num2.innerHTML='01755597807' 
              break
        case'Narayangonj':
              ofc.innerHTML='Narayangonj'
              num1.innerHTML='01713228452'
              num2.innerHTML='01730437183' 
              break
        case'Siddirgonj':
              ofc.innerHTML='Siddirgonj'
              num1.innerHTML='01755554710'
              num2.innerHTML='' 
              break
        case'Rupgonj':
              ofc.innerHTML='Rupgonj'
              num1.innerHTML='01755597853'
              num2.innerHTML='' 
              break
        case'Araihazar':
              ofc.innerHTML='Araihazar'
              num1.innerHTML='01755597808'
              num2.innerHTML='01924716542' 
              break
        case'Norsingdi':
              ofc.innerHTML='Norsingdi'
              num1.innerHTML='01777794045'
              num2.innerHTML='01777753887' 
              break
        case'Baburhat':
              ofc.innerHTML='Baburhat'
              num1.innerHTML='01777794045'
              num2.innerHTML='01777753887' 
              break
        case'Vayrab':
              ofc.innerHTML='Vayrab'
              num1.innerHTML='01777794044'
              num2.innerHTML='01712263819' 
              break
        case'Khulna':
              ofc.innerHTML='Khulna'
              num1.innerHTML='01755554725'
              num2.innerHTML='01711103715' 
              break
        case'Jashore':
              ofc.innerHTML='Jashore'
              num1.innerHTML='01713228486'
              num2.innerHTML='01628040221' 
              break
        case'Benapol':
              ofc.innerHTML='Benapol'
              num1.innerHTML='01755554727'
              num2.innerHTML='01755554728' 
              break
        case'Nowapara':
              ofc.innerHTML='Nowapara'
              num1.innerHTML='01755597834'
              num2.innerHTML='01711159313' 
              break
        case'Jhenaidah':
              ofc.innerHTML='Jhenaidah'
              num1.innerHTML='01713228485'
              num2.innerHTML='01728337048' 
              break
        case'Kaligonj':
              ofc.innerHTML='Kaligonj'
              num1.innerHTML='01713228463'
              num2.innerHTML='01714298314' 
              break
        case'Kushtia':
              ofc.innerHTML='Kushtia'
              num1.innerHTML='01713228481'
              num2.innerHTML='01714298314' 
              break
        case'Veramara':
              ofc.innerHTML='Veramara'
              num1.innerHTML='01755597874'
              num2.innerHTML='01757824834' 
              break
        case'Kumarkhali':
              ofc.innerHTML='Kumarkhali'
              num1.innerHTML='01777794032'
              num2.innerHTML='01711489320' 
              break
        case'Rajbari':
              ofc.innerHTML='Rajbari'
              num1.innerHTML='01777794034'
              num2.innerHTML='01716296957' 
              break
        case'Pangsha':
              ofc.innerHTML='Pangsha'
              num1.innerHTML='01777794031'
              num2.innerHTML='01923531812' 
              break
        case'Chuadanga':
              ofc.innerHTML='Chuadanga'
              num1.innerHTML='01777794031'
              num2.innerHTML='01929923623' 
              break
        case'Meherpur':
              ofc.innerHTML='Meherpur'
              num1.innerHTML='01777794007'
              num2.innerHTML='01711009651' 
              break
        case'Gangni':
              ofc.innerHTML='Gangni'
              num1.innerHTML='01777794008'
              num2.innerHTML='01717867634' 
              break
        case'Magura':
              ofc.innerHTML='Magura'
              num1.innerHTML='01777794050'
              num2.innerHTML='01729141546' 
              break
        case'Faridpur':
              ofc.innerHTML='Faridpur'
              num1.innerHTML='01755554723'
              num2.innerHTML='01730857877' 
              break
        case'Sylhet':
              ofc.innerHTML='Sylhet'
              num1.innerHTML='01755596865'
              num2.innerHTML='01755596866' 
              break
      case'Sayestaganj':
              ofc.innerHTML='Sayestaganj'
              num1.innerHTML='01313054415'
              num2.innerHTML='01711280121' 
              break
      case'Jamalpur':
              ofc.innerHTML='Jamalpur'
              num1.innerHTML='01313054414'
              num2.innerHTML='01737608630' 
              break
      case'Kazipur':
              ofc.innerHTML='Kazipur'
              num1.innerHTML='01313054416'
              num2.innerHTML='01712880820' 
              break
                            
  }
}























  