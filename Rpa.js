const users = [
    { username: 'admin', password: 'admin123' },
];

const trains = {
    'train1': {
        name: 'Express Train',
        number: '12345',
        time: '10:00 AM',
        date: '2024-01-15',
        farePerHead: 500,
        destination: 'Bangalore',
        from: 'Chennai',
        to: 'Bangalore'
    },
    'train2': {
        name: 'Superfast Express',
        number: '56789',
        time: '12:30 PM',
        date: '2024-01-16',
        farePerHead: 700,
        destination: 'Coimbatore',
        from: 'Chennai',
        to: 'Coimbatore'
    },
    'train3': {
        name: 'Rajdhani Express',
        number: '98765',
        time: '08:45 AM',
        date: '2024-01-17',
        farePerHead: 1000,
        destination: 'Vizag',
        from: 'Chennai',
        to: 'Vizag'
    },
    'train4': {
        name: 'Shatabdi Express',
        number: '24680',
        time: '02:15 PM',
        date: '2024-01-18',
        farePerHead: 800,
        destination: 'Chennai',
        from: 'Coimbatore',
        to: 'Chennai'
    },
    'train5': {
        name: 'Garib Rath',
        number: '13579',
        time: '05:30 AM',
        date: '2024-01-19',
        farePerHead: 400,
        destination: 'Chennai',
        from: 'Vizag',
        to: 'Chennai'
    },
    'train6': {
        name: 'Duronto Express',
        number: '11223',
        time: '07:00 PM',
        date: '2024-01-20',
        farePerHead: 900,
        destination: 'Chennai',
        from: 'Bangalore',
        to: 'Chennai'
    },
    'train7': {
        name: 'Howrah Express',
        number: '11223',
        time: '07:00 PM',
        date: '2024-01-21',
        farePerHead: 400,
        destination: 'Bangalore',
        from: 'Coimbatore',
        to: 'Bangalore'
    },
    'train8': {
        name: 'Garbha Express',
        number: '11223',
        time: '07:00 PM',
        date: '2024-01-20',
        farePerHead: 600,
        destination: 'Bangalore',
        from: 'Vizag',
        to: 'Bangalore'
    },
    'train9': {
        name: 'Double Dekkar Express',
        number: '11223',
        time: '07:00 PM',
        date: '2024-01-20',
        farePerHead: 700,
        destination: 'Vizag',
        from: 'Chennai',
        to: 'Vizag'
    },
    'train10': {
        name: 'Intercity Express',
        number: '55432',
        time: '11:45 AM',
        date: '2024-01-22',
        farePerHead: 600,
        destination: 'Vizag',
        from: 'Coimbatore',
        to: 'Vizag'
    },
    'train11': {
        name: 'Prashanthi Express',
        number: '55562',
        time: '1:45 PM',
        date: '2024-01-22',
        farePerHead: 500,
        destination: 'Vizag',
        from: 'Bangalore',
        to: 'Vizag'
    },
'train12': {
        name: 'Mysuru Express',
        number: '54562',
        time: '3:20 PM',
        date: '2024-01-20',
        farePerHead: 550,
        destination: 'Coimbatore',
        from: 'Bangalore',
        to: 'Coimbatore'
    },
    'train13': {
        name: 'Vandhe Bharat Express',
        number: '54122',
        time: '3:11 PM',
        date: '2024-01-21',
        farePerHead: 650,
        destination: 'Coimbatore',
        from: 'Vizag',
        to: 'Coimbatore'
    },
    'train14': {
        name: 'Brindhavan Express',
        number: '68845',
        time: '11:00 AM',
        date: '2024-01-15',
        farePerHead: 600,
        destination: 'Bangalore',
        from: 'Chennai',
        to: 'Bangalore'
    },
    'train15': {
        name: 'Ernakulam Express',
        number: '57889',
        time: '1:30 PM',
        date: '2024-01-16',
        farePerHead: 800,
        destination: 'Coimbatore',
        from: 'Chennai',
        to: 'Coimbatore'
    },
    'train16': {
        name: 'Howrah Mail',
        number: '78680',
        time: '12:20 PM',
        date: '2024-01-18',
        farePerHead: 800,
        destination: 'Chennai',
        from: 'Coimbatore',
        to: 'Chennai'
    },
    'train17': {
        name: 'Tatanagar Express',
        number: '56879',
        time: '06:45 AM',
        date: '2024-01-19',
        farePerHead: 400,
        destination: 'Chennai',
        from: 'Vizag',
        to: 'Chennai'
    },
    'train18': {
        name: 'Dhanbad Express',
        number: '47823',
        time: '08:00 PM',
        date: '2024-01-20',
        farePerHead: 900,
        destination: 'Chennai',
        from: 'Bangalore',
        to: 'Chennai'
    },
'train19': {
        name: 'Lalbagh SF Express',
        number: '55223',
        time: '09:00 PM',
        date: '2024-01-21',
        farePerHead: 700,
        destination: 'Bangalore',
        from: 'Coimbatore',
        to: 'Bangalore'
    },
    'train20': {
        name: 'Sanghamitra SF Express',
        number: '85223',
        time: '07:00 PM',
        date: '2024-01-20',
        farePerHead: 800,
        destination: 'Bangalore',
        from: 'Vizag',
        to: 'Bangalore'
    },
    'train21': {
        name: 'Alappuzha Express',
        number: '78432',
        time: '12.20 AM',
        date: '2024-01-22',
        farePerHead: 550,
        destination: 'Vizag',
        from: 'Coimbatore',
        to: 'Vizag'
    },
    'train22': {
        name: 'Aronai Express',
        number: '43562',
        time: '3 PM',
        date: '2024-01-22',
        farePerHead: 700,
        destination: 'Vizag',
        from: 'Bangalore',
        to: 'Vizag'
    },
    'train23': {
        name: 'Tejas Express',
        number: '87562',
        time: '3:20 PM',
        date: '2024-01-20',
        farePerHead: 550,
        destination: 'Coimbatore',
        from: 'Bangalore',
        to: 'Coimbatore'
    },
    'train24': {
        name: 'Sampark Kranti Express',
        number: '45122',
        time: '3:11 PM',
        date: '2024-01-21',
        farePerHead: 700,
        destination: 'Coimbatore',
        from: 'Vizag',
        to: 'Coimbatore'
    }
};

let selectedTrain;
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Show the login page
        document.getElementById('loginPage').style.display = 'none';
        // Show the search page
        document.getElementById('searchPage').style.display = 'block';
        updateWelcomeText('searchPage');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    updateWelcomeText('loginPage');
});

function searchTrain() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const filteredTrains = Object.values(trains).filter(train => train.from === from && train.to === to);

    // For demonstration, just show a list of filtered trains
    displayTrainList(filteredTrains);
}

function displayTrainList(filteredTrains) {
    const trainListContainer = document.getElementById('trainList');

    // Clear any existing content
    trainListContainer.innerHTML = '';

    // Display each filtered train in the list with a button to select
    filteredTrains.forEach(train => {
        const trainItem = document.createElement('li');

        // Create label for train name
        const nameLabel = document.createElement('label');
        nameLabel.textContent = ${train.name} - $ {train.number};

        // Create label for train time
        const timeLabel = document.createElement('label');
        timeLabel.textContent = Time: ${train.time};

        // Create radio button
        const radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        radioButton.setAttribute('name', 'trainSelection');
        radioButton.setAttribute('value', train.number); // Assigning the train number as the value
        radioButton.addEventListener('click', () => selectTrain(train)); // Set the same name for all radio buttons to ensure only one can be selected at a time

        // Append labels and radio button to list item
        trainItem.appendChild(nameLabel);
        trainItem.appendChild(document.createElement('br')); // Add line break
        trainItem.appendChild(timeLabel);
        trainItem.appendChild(radioButton);

        // Append list item to list container
        trainListContainer.appendChild(trainItem);
    });

    // Show the train list page
    document.getElementById('searchPage').style.display = 'none';
    document.getElementById('trainListPage').style.display = 'block';
}


function selectTrain(train) {
    selectedTrain = train;
    // Display selected train details
    document.getElementById('trainDetails').innerHTML = `
        Train: ${selectedTrain.name}<br>
        Train No.: ${selectedTrain.number}<br>
        Time: ${selectedTrain.time}<br>
        Date: ${selectedTrain.date}<br>
        Destination: ${selectedTrain.destination}
    ;
      // Display ticket fare information
    document.getElementById('ticketFare').innerHTML = Ticket Fare: ₹${train.farePerHead} per head;

    // Hide the train list page and show the passenger page
    document.getElementById('searchPage').style.display = 'none';
    document.getElementById('trainListPage').style.display = 'none'; // Assuming you want to hide the train list page after selecting a train
    document.getElementById('passengerPage').style.display = 'block'; // Assuming the ID of the passenger page is 'passengerPage'
}

function proceedToBerthSelection() {
    document.getElementById('passengerPage').style.display = 'none';
    document.getElementById('berthPage').style.display = 'block';
}

function proceedToPayment() {
    document.getElementById('berthPage').style.display = 'none';
    document.getElementById('ticketPage').style.display = 'block';
}

function makePayment() {
    // Calculate total amount to pay
    const totalAmount = selectedTrain.farePerHead;

    // Display total amount to pay
    document.getElementById('amountToPay').innerHTML = Amount to Pay: ₹${totalAmount};
 // Hide the ticket page and show the confirmation page
    document.getElementById('ticketPage').style.display = 'none';
    document.getElementById('confirmationPage').style.display = 'block';
}

// Global variable to keep track of the current page index
let currentPageIndex = 0;

// Array to store page IDs in the order they appear in the HTML
const pageIds = ["loginPage", "searchPage", "passengerPage", "berthPage", "trainListPage", "ticketPage", "confirmationPage"];

function prevPage() {
    // Decrement the currentPageIndex
    currentPageIndex--;

    // Check if the currentPageIndex is less than 0
    if (currentPageIndex < 0) {
        currentPageIndex = 0; // Set currentPageIndex to 0 to prevent going to negative index
        return; // Exit the function if already at the first page
    }

    // Hide the current page
    document.getElementById(pageIds[currentPageIndex + 1]).style.display = "none";
    // Show the previous page
    document.getElementById(pageIds[currentPageIndex]).style.display = "block";
}
function nextPage() {
    // Increment the currentPageIndex
    currentPageIndex++;

    // Check if the currentPageIndex exceeds the maximum index
    if (currentPageIndex >= pageIds.length) {
        currentPageIndex = pageIds.length - 1; // Set currentPageIndex to the last index
        return; // Exit the function if already at the last page
    }

    // Hide the current page
    document.getElementById(pageIds[currentPageIndex - 1]).style.display = "none";
    // Show the next page
    document.getElementById(pageIds[currentPageIndex]).style.display = "block";
}

function goToHomePage() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('searchPage').style.display = 'none';
    document.getElementById('trainListPage').style.display = 'none';
    document.getElementById('passengerPage').style.display = 'none';
    document.getElementById('berthPage').style.display = 'none';
    document.getElementById('ticketPage').style.display = 'none';
    document.getElementById('confirmationPage').style.display = 'none';
    document.getElementById('welcomeText').style.display = 'block';
    updateWelcomeText('loginPage');
}
function generatePDF() {
    // Get passenger details
    const passengerName = document.getElementById('name').value;
    const passengerAge = document.getElementById('age').value;
    const passengerPhone = document.getElementById('phone').value;
    const passengerAadhaar = document.getElementById('aadhaar').value;

    // Create ticket content
    const ticketContent = `
<h1 style="background-color: rgba(0, 0, 0, 0.5); color: white; padding: 10px; margin-bottom: 20px;"> 
    <center>BHARAT RAILWAYS</center>
</h1>

<div class="details-column1" style="display: flex;">
    <div style="transform: translate(5%, -10%);">
        <h2>From:</h2><br> ${selectedTrain.from}
    </div>
    <div class="details-column2" style="transform: translate(180%, -10%);">
        <h2>To:</h2><br> ${selectedTrain.destination}
    </div>
</div>
<hr>
<div class="train-column1" style="display: flex;">
    <div style="transform: translate(5%, -15%);">
        <h3>Train-number:</h3><br> ${selectedTrain.number}
    </div>        
    <div class="train-column2" style="transform: translate(108%, -15%);">
        <h3>Train-name:</h3><br> ${selectedTrain.name}
    </div>  
    <div class="train-column3" style="transform: translate(220%, -15%);">
        <h3>Class:</h3><br> ${document.getElementById('class').value}<br> ${selectedTrain.date}<br> ${selectedTrain.time}
    </div>
</div>
<hr>
<div class="details-column1" style="transform: translate(5%, 10%);">
    <h2 style="text-align: left; background-color: rgba(0, 0, 0, 0.5); color: white; padding: 10px; margin-bottom: 20px;">PASSENGER DETAILS</h2>
    <strong>Name:</strong> ${passengerName}<br>
    <strong>Age:</strong> ${passengerAge}
</div>
<div class="details-column2" style="transform: translate(110%, -100%);">
    <strong>Phone Number:</strong> ${passengerPhone}<br>
    <strong>Aadhaar Number:</strong> ${passengerAadhaar}
</div>
<hr>      
<div class="details-column1" style="transform: translate(5%, 10%);">
    <h2 style="text-align: left; background-color: rgba(0, 0, 0, 0.5); color: white; padding: 10px; margin-bottom: 20px;">TRAIN DETAILS:</h2>
    <strong>Train:</strong> ${selectedTrain.name}<br>
    <strong>Train No.:</strong> ${selectedTrain.number}<br>
    <strong>Time:</strong> ${selectedTrain.time}<br>
    <strong>Date:</strong> ${selectedTrain.date}
</div>
<div class="details-column2" style="transform: translate(120%, -90%);">
    <strong>Destination:</strong> ${selectedTrain.destination}<br>
    <strong>Berth:</strong> ${document.getElementById('berth').value}<br>
    <strong>Class:</strong> ${document.getElementById('class').value}
</div>
<hr>
<p style="padding: 10px;">
    <strong>Passengers are advised not to carry inflammable/dangerous/explosive items as part of their luggage and also to desist from smoking in the trains.<br>Contact us on:</strong> 24*7 Hrs Customer Support at 0755-6610661<br>
    <strong>Email at:</strong> bharatrailways31@gmail.com
</p>
<hr>
<h2 style="font-family: 'Dancing Script', cursive;">
    <center>Have A Safe Journey</center>
</h2>

<script>
    const ticketContent = `
    <div class="ticket-container">
        ${document.body.innerHTML}
    </div>`;
    document.body.innerHTML = ticketContent;

    // Add background image for printing
    const style = document.createElement('style');
    style.innerHTML = `
    @media print {
        .ticket-container {
            background-image: url('https://images.unsplash.com/photo-1593871097805-09627f52f4bb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
    `;
    document.head.appendChild(style);

    // Print the document
    const element1 = document.createElement('div');
    element1.innerHTML = ticketContent;
    html2pdf()
        .from(element1)
        .save(`${passengerName}_ticket.pdf`);
</script>
