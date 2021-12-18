const nicosiaBtn = document.getElementById("CY-01")
const limassolBtn = document.getElementById("CY-02")
const larnacaBtn = document.getElementById("CY-03")
const famagustaBtn = document.getElementById("CY-04")
const paphosBtn = document.getElementById("CY-05")
const kyreniaBtn = document.getElementById("CY-06")
const startBtn = document.getElementById("start-btn")
const pointsEl = document.getElementById("points")
const timerEl = document.getElementById("timer")

let randomCity = ""
let cityName = document.getElementById("city-name")
let result = document.getElementById("result")
let points = 0
let gameIsON = false
let timeLeft = 15
let timer = 0


let nicosiaArr = ["Αγίοι Ηλιόφωτοι", "Αγίοι Τριμιθιάς", "Άγιος Βασίλειος", "Άγιος Δομέτιος", "Άγιος Σωζόμενος", "Αγκολέμι", "Αγλαντζιά", "Αγροκηπιά", "Αγυιά Κεπίρ", "Ακάκι", "Αλάμπρα", "Αλεύκα", "Αληθινού", "Άλωνα", "Αμμαδιές", "Αμπελικού", "Ανάγυια", "Αναδιού", "Αναλυόντας", "Ανθούπολη", "Απλίκι", "Αργάκι", "Αρεδιού", "Ασκάς", "Αστρομερίτης", "Αυλώνα", "Βαρίσια", "Βροΐσια", "Βυζακιά", "Βώνη", "Γαλατά", "Γαληνή", "Γερακιές", "Γέρι", "Γερόλακκος", "Γούρρι", "Δάλι", "Δένεια", "Δυο Ποταμοί", "Έξω Μετόχι", "Επηχώ", "Επισκοπειό", "Εργάτες", "Ευρύχου", "Καζιβερά", "Κακοπετριά", "Καλλιάνα", "Καλοπαναγιώτης", "Καλυβάκια", "Καμπί", "Καμπιά", "Κάμπος", "Κανλί", "Καννάβια", "Καπέδες", "Καραβοστάσι", "Καταλυόντας", "Κατύδατα", "Κάτω Δευτερά", "Κάτω Ζώδια", "Κάτω Κουτραφάς", "Κάτω Μονή", "Κάτω Πύργος", "Κατωκοπιά", "Κιόνελι", "Κλήρου", "Κόκκινα", "Κοκκινοτριμιθιά", "Κοράκου", "Κοτσιάτης", "Κουρού Μοναστήρι", "Κυθρέα", "Κυρά", "Λαγουδερά", "Λαζανιά", "Λακατάμια", "Λατσιά", "Λεύκα", "Λευκωσία", "Λινού", "Λουρουτζίνα", "Λουτρός", "Λυθροδόντας", "Λύμπια", "Μαθιάτης", "Μαλούντα", "Μάμμαρι", "Μαρκί", "Μαρκό", "Μάσαρι", "Μένοικο", "Μηλικούρι", "Μια Μηλιά", "Μιτσερό", "Μόρα", "Μόρφου", "Μουτουλλάς", "Μπέη Κιογιού", "Νήσου", "Νικητάρι", "Νικήτας", "Ξερόβουνος", "Ξυλιάτος", "Οίκος", "Ορούντα", "Ορτά Κιογιού", "Παλαίκυθρο", "Παλαιομέτοχο", "Παλαιοχώρι", "Παλαιχώρι", "Πάνω Δευτερά", "Πάνω Ζώδια", "Πάνω Κουτραφάς", "Πάνω Πύργος", "Παχύαμμος", "Πεδουλάς", "Πεντάγυια", "Πέρα Ορεινής", "Πέρα Χωριό", "Περιστερωνάρι", "Πέτρα", "Πέτρα του Διγενή", "Πηγαίνια", "Πλατανιστάσα", "Πολιτικό", "Πολύστυπος", "Ποτάμι", "Ποταμιά", "Πυρόι", "Σαράντι", "Σελλάιν τ’ Άππη", "Σιά", "Σινά Όρος", "Σκουριώτισσα", "Σκυλλούρα", "Σπήλια", "Στρόβολος", "Συριανοχώρι", "Τεμπριά", "Τράχωνας", "Τσακκίστρα", "Τσέρι", "Τύμπου", "Φαρμακάς", "Φιλιά", "Φλάσου", "Φτερικούδι", "Φυκάρδου", "Χαμίτ Μάντρες", "Ψημολόφου"]
let limassolArr = ["Άγιος Αθανάσιος", "Άγιος Δημήτριος", "Άγιος Θεράπων", "Άγιος Θωμάς", "Άγιος Κωνσταντίνος", "Άγιος Μάμας", "Άγιος Παύλος", "Άγιος Τύχωνας", "Αγρίδια", "Αγρός", "Ακαπνού", "Ακρούντα", "Ακρωτήρι", "Άλασσα", "Αλέκτορα", "Αμίαντος", "Ανώγυρα", "Απαισιά", "Αρακαπάς", "Αρμενοχώρι", "Ασγάτα", "Αυδήμου", "Αψιού", "Βίκλα", "Βουνί", "Γεράσα", "Γερμασόγεια", "Γεροβάσα", "Διερώνα", "Δορά", "Δύμες", "Δωρός", "Ερήμη", "Εφταγώνια", "Ζωοπηγή", "Καμινάρια", "Καντού", "Καπηλειό", "Κάτω Κυβίδες", "Κάτω Μύλος", "Κάτω Πλάτρες", "Κάτω Πολεμίδια", "Κελλάκι", "Κισσούσα", "Κλωνάρι", "Κοιλάνι", "Κολόσσι", "Κορφή", "Κουκά", "Κυπερούντα", "Λάνια", "Λεμεσός", "Λεμύθου", "Λιμνάτης", "Λουβαράς", "Λόφου", "Μαθηκολώνη", "Μαλλιά", "Μαντριά", "Μέσα Γειτονιά", "Μονάγρι", "Μοναγρούλλι", "Μονή", "Μονιάτης", "Μουτταγιάκα", "Όμοδος", "Παλαιόμυλος", "Παλώδια", "Πάνω Κυβίδες", "Πάνω Πλάτρες", "Πάνω Πολεμίδια", "Παραμάλι", "Παραμύθα", "Παρεκκλήσια", "Πάχνα", "Πελαθούσα", "Πελένδρι", "Πεντάκωμο", "Πέρα Πεδί", "Πισσούρι", "Πλατανίσκια", "Ποταμιού", "Ποταμίτισσα", "Πρόδρομος", "Πύργος", "Σανίδα", "Σούνι", "Σπιτάλι", "Συκόπετρα", "Συλίκου", "Τρεις Ελιές", "Τριμίκλινη", "Τσερκέζ Τσιφτλίκ", "Ύψωνας", "Φοινί", "Φοινικάρια", "Χανδριά"]
let larnacaArr = ["Αβδελλερό", "Αγγλισίδες", "Αγίοι Βαβατσινιάς", "Αθηένου", "Αλαμινός", "Αλεθρικό", "Αναφωτία", "Απλάντα", "Αραδίππου", "Βαβατσινιά", "Βάβλα", "Δελίκηπος", "Δρομολαξιά", "Ζύγι", "Καλαβασός", "Κάτω Δρυς", "Κάτω Λεύκαρα", "Κελλιά", "Κιβισίλι", "Κίτι", "Κλαυδιά", "Κόρνος", "Κόσιη", "Κοφίνου", "Λάγια", "Λάρνακα", "Μαζωτός", "Μαρί", "Μαρώνι", "Μελίνη", "Μελούσια", "Μενόγια", "Μενού", "Μοσφιλωτή", "Ξυλοτύμπου", "Ξυλοφάγου", "Οδού", "Όρα", "Ορμήδεια", "Ορόκλινη", "Πάνω Λεύκαρα", "Περβόλια", "Πέργαμος", "Πετροφάνι", "Πύλα", "Πύργα", "Σκαρίνου", "Σοφτάδες", "Τερσεφάνου", "Τόχνη", "Τρεμετουσιά", "Τρούλλοι", "Χοιροκοιτία", "Ψεματισμένος", "Ψευδάς"]
let famagustaArr = ["Ακανθού", "Αγία Νάπα", "Άγιος Ευστάθιος", "Άγιος Ηλίας", "Άγιος Ιάκωβος", "Άγιος Σέργιος", "Άγιος Συμεών", "Άγιος Χαρίτων", "Αγκαστίνα", "Αλόα", "Αμμόχωστος", "Αμμοχώστου", "Άρδανα", "Αρναδί", "Άρτεμη", "Άσσια", "Αυγολίδα", "Αυγόρου", "Αχερίτου", "Άχνα", "Βαθύλακας", "Βασίλι", "Βατυλή", "Βιτσάδα", "Βουκολίδα", "Γαϊδουράς", "Γαλάτεια", "Γαληνόπορνη", "Γαστριά", "Γέναγρα", "Γεράνι", "Γιαλούσα", "Γούφες", "Γύψου", "Δαυλός", "Δερύνεια", "Εφτακώμη", "Καλοψίδα", "Κνώδαρα", "Κοιλάνεμος", "Κοντέα", "Κορνόκηπος", "Κορόβια", "Κρίδια", "Κώμα του Γιαλού", "Κώμη Κεπίρ", "Λάπαθος", "Λεονάρισσο", "Λευκόνοικο", "Λιμνιά", "Λιοπέτρι", "Λυθράγκωμη", "Λύση", "Μακράσυκα", "Μάντρες", "Μαράθα", "Μαραθόβουνος", "Μελάναρκα", "Μελούντα", "Μοναρκά", "Μουσουλίτα", "Μπογάζι", "Νέτα", "Όβγορος", "Παραλίμνι", "Πατρίκι", "Περιβόλια", "Πηγή", "Πλατάνι", "Πλατανισσός", "Πυργά", "Ριζοκάρπασο", "Σανταλάρης", "Σίντα", "Σπαθαρικό", "Στρογγυλός", "Στύλλοι", "Σύγκραση", "Ταύρου", "Τζιάος", "Τρίκωμο", "Τρυπημένη", "Φλαμούδι", "Φρέναρος", "Ψυλλάτος"]
let paphosArr = ["Αγία Μαρινούδα", "Άγιος Δημητριανός", "Άγιος Ισίδωρος", "Ακουρσός", "Αμαργέτη", "Αναρίτα", "Ανδρολύκου", "Αξύλου", "Αργάκα", "Αρμίνου", "Άρμου", "Ασπρογιά", "Αχέλεια", "Βρέτσια", "Γαλαταριά", "Γεροσκήπου", "Γιαλιά", "Γιόλου", "Γουδί", "Δρούσια", "Δρύμου", "Δρυνιά", "Ελεδιώ", "Έμπα", "Ευρέτου", "Ζαχαριά", "Θελέτρα", "Ίνια", "Ιστιντζιόν", "Κάθηκας", "Καλλέπια", "Κανναβιού", "Καραμούλληδες", "Κάτω Ακουρδάλια", "Κάτω Αρόδες", "Κέδαρες", "Κελοκέδαρα", "Κιδάσι", "Κινούσα", "Κισσόνεργα", "Κοίλη", "Κοιλίνια", "Κονιά", "Κούρτακα", "Κρήτου", "Κρήτου Μαρόττου", "Λαπηθιού", "Λάσα", "Λειβάδι", "Λέμπα", "Λεμώνα", "Λετύμπου", "Λουκρούνου", "Λυσός", "Μακούντα", "Μαμούνταλι", "Μαμώνια", "Μαντριά", "Μαραθούντα", "Μάρωνας", "Μελάδια", "Μελάνδρα", "Μέσα Χωριό", "Μέσανα", "Μεσόγη", "Μηλιού", "Μούσερε", "Νατά", "Νέα Δήμματα", "Νικόκλεια", "Πάνω Ακουρδάλια", "Πάνω Αρόδες", "Πάνω Αρχιμανδρίτα", "Πάνω Παναγιά", "Πάφος", "Πέγεια", "Πενταλιά", "Πιταρκού", "Πολέμι", "Πόλη Χρυσοχούς", "Πραιτώρι", "Πωμός", "Σαλαμιού", "Σαραμά", "Σίμου", "Σκούλλι", "Σουσκιού", "Στάτος", "Σταυροκόννου", "Στενή", "Στρουμπί", "Τάλα", "Τέρρα", "Τίμη", "Τραχυπέδουλα", "Τρεμιθούσα", "Τριμιθούσα", "Τσάδα", "Φάλια", "Φασλί", "Φιλούσα", "Φοίνικας", "Φοίτη", "Χλώρακα", "Χολέτρια", "Χόλη", "Χούλου", "Χρυσοχού", "Ψάθι"]
let kyreniaArr = ["Άγιος Επίκτητος", "Άγιος Ερμόλαος", "Αγριδάκι", "Αγύρτα", "Βασίλεια", "Βουνό", "Διόριος", "Θέρμια", "Καζάφανι", "Καλογραία", "Καμπύλη", "Καραβάς", "Καράκουμι", "Καρμί", "Καρπάσια", "Κάτω Δίκωμο", "Κερύνεια", "Κιομουρτζιού", "Κλεπίνη", "Κοντεμένος", "Κορμακίτης", "Κουτσοβέντης", "Κρηνί", "Λάπηθος", "Λάρνακας της Λαπήθου", "Λιβερά", "Μότιδες", "Μπέλλα-Πάις", "Μύρτου", "Όρκα", "Παλαιόσοφος", "Πάναγρα", "Πάνω Δίκωμο", "Πυλέρι", "Συγχαρί", "Σύσκληπος", "Τέμπλος", "Τράπεζα", "Τριμίθθι", "Φτέρυχα", "Φώττα", "Χάρτζια"]

allArr = [nicosiaArr, limassolArr, larnacaArr, famagustaArr, paphosArr, kyreniaArr]
allBtn = [nicosiaBtn, limassolBtn, larnacaBtn, famagustaBtn, paphosBtn, kyreniaBtn]


nicosiaBtn.addEventListener("click" , function(){
    checkCityName (nicosiaArr , nicosiaBtn)
    })
limassolBtn.addEventListener("click", function(){
    checkCityName (limassolArr , limassolBtn)})

larnacaBtn.addEventListener("click", function(){
    checkCityName (larnacaArr , larnacaBtn)})

famagustaBtn.addEventListener("click", function(){
    checkCityName (famagustaArr , famagustaBtn )})

paphosBtn.addEventListener("click", function(){
    checkCityName (paphosArr , paphosBtn)})

kyreniaBtn.addEventListener("click", function(){
    checkCityName (kyreniaArr , kyreniaBtn)})

startBtn.addEventListener("click", function(){
        
        start()
        
})

//find a one random city from all arrays

function getRandomCity() { 
let randomArray = Math.floor(Math.random()*6)+1;
    switch (randomArray) {
        case 1:
            randomCity = nicosiaArr[Math.floor(Math.random()*nicosiaArr.length)]
            break
        case 2:
            randomCity = limassolArr[Math.floor(Math.random()*limassolArr.length)]
            break
        case 3:
            randomCity = larnacaArr[Math.floor(Math.random()*larnacaArr.length)]
            break
        case 4:
            randomCity = famagustaArr[Math.floor(Math.random()*famagustaArr.length)]
            break 
        case 5:
            randomCity = paphosArr[Math.floor(Math.random()*paphosArr.length)]
            break    
        case 6:
            randomCity = kyreniaArr[Math.floor(Math.random()*kyreniaArr.length)]
            break
    }
    return randomCity
}

function checkCityName (arr , svg){
   
if (gameIsON) {
    resetAnimations()
    if (arr.includes(randomCity)) {
        setTimeout(() => {svg.style.animation = "true  900ms"}, 100);
        result.innerText = "Σωστό"
        points += 10
    } else {
        setTimeout(() => {svg.style.animation = "false  900ms"}, 100);
        result.innerText = "Λάθος"
        //if player gets city wrong the right city turn green (gets the true class)
        for (let i = 0; i<allArr.length; i++) {
            if (allArr[i].includes(randomCity)) {
                setTimeout(() => {allBtn[i].style.animation = "true  900ms"}, 100);
            } 
        }
    }
    
    
    pointsEl.innerText = "Points: " + points
    cityName.innerText = getRandomCity()
}
}

function resetAnimations(){
        for (let x = 0; x<allArr.length; x++) {
            allBtn[x].style.animation = "reset 100ms"
        }  
}

function updateTimer () {
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
     timerEl.innerText = timeLeft
    else {
        gameIsON = false
        clearInterval(timer);
    }
}

function start() {
    clearInterval(timer);
    cityName.innerText = getRandomCity()
    points = 0
    timeLeft = 15
    gameIsON = true
    result.innerText = ""
    pointsEl.innerText = ""
    timer = setInterval(updateTimer, 1000);
    
}
 
function gameOver() {
    

  }
