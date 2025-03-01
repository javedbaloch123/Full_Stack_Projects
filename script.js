document.addEventListener("DOMContentLoaded", function () {
   
//  **********Start**********  //

let footerSection = document.querySelector('.footer');
let formCheckboxes = footerSection.querySelectorAll('.footer-checkbox input');
let subscribeBtn = footerSection.querySelector('.email-subscribe-btn');
let emailInput = footerSection.querySelector('#email');
let form = footerSection.querySelector('.form');
let form1 = form.querySelector('form');
let thankDiv = form.querySelector('.footer-thank');
let hiddenDiv = form.querySelector('.hidden-div');
let lastOpt = form1.querySelector('.option-checkbox input');
let errorPara = document.createElement('p');
 
thankDiv.style.visibility = "hidden";
thankDiv.style.opacity = "0";
 thankDiv.style.transition = '.5s';
let checked = 0;
let Opt;
subscribeBtn.addEventListener('click',function(e){
  e.preventDefault();

   let checkInfo = [];
  formCheckboxes.forEach(checkbox => {
     if(checkbox.checked){
       checked++;
       checkInfo.push(checkbox.value);
       }  
  });

  lastOpt.checked == true ? Opt = 1 : Opt = 0;


  if(emailInput.value.trim() !== '' && checked > 0){
    
    let userData = {
        "email": emailInput.value.trim(),
        "checkdata": checkInfo,
        "optIn": Opt
    }

   
     hiddenDiv.style.opacity = '0';
     hiddenDiv.style.visibility = 'hidden';
     thankDiv.style.visibility = "visible";
     thankDiv.style.opacity = "1";
     errorPara.remove();
     setTimeout(()=>{

        form1.reset();  
        checked = 0; 
        hiddenDiv.style.opacity = '1';
        hiddenDiv.style.visibility = 'visible';
        thankDiv.style.visibility = "hidden";
        thankDiv.style.opacity = "0";
            
     },3000);
   
      fetch('subscribe.php',{
          method: 'POST',
          headers: {
             'Content-Type': 'application/json' 
          },
           body: JSON.stringify(userData),

      })
      .then(response => response.json())
      .then(data =>{
        
      })

  }else{
     errorPara.innerHTML = 'Please Put Your email & check at least one headshot !';
     errorPara.classList.add('error-para');
     thankDiv.parentNode.insertBefore(errorPara,thankDiv);
  }
  
})
 

//  **********End**********  //
 
 
    // All Main Functions Are Calling Here
    toggleMenu();
    AutomateReviews();  
    BackTopScroler();
    AccordionControle();
    TrackPath();

// Reload hone se pehle time store karna
let startTime = performance.now();

window.addEventListener("load", function() {
    let endTime = performance.now();
    let loadTime = (endTime - startTime) / 1000; // Milliseconds ko seconds mein convert karna
    // console.log("Page Reload Time: " + loadTime.toFixed(2) + " seconds");
});



    // ye function small screen mien 
    // menu ko toggle krny liye bnaya hai

    //  **********Start**********  //
    function toggleMenu() {
        let menuBtn = document.querySelector(".navbar-toggler");
        let closeBtn = document.querySelector(".fa-xmark");
        let menu = document.querySelector(".mobile-menu");


        menuBtn.addEventListener('click', function () {
            menu.classList.add("active");

        });

        closeBtn.addEventListener('click', function () {
            menu.classList.remove("active");
        });

        window.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
                menu.classList.remove("active");
            }
        });
    }

//  **********End**********  //





    // ye function bnaya hai reviews ko
    //  auto infinity slide krny ky liye 

//  **********Start**********  //
 
    function AutomateReviews() {

        // setInterval(scrollReviews, 2000); // Run function every 2 seconds

        const reviews = document.querySelector(".ind-reviews");
        let scrollAmount = 0; // Track how much we moved
        setInterval(scrollReviews,2000);
        function scrollReviews() {
            scrollAmount -= 300; // Move left by 300px
            if (Math.abs(scrollAmount) >= reviews.scrollWidth - reviews.clientWidth) {
                scrollAmount = 0; // Reset to start when end reached
            }
            reviews.style.transform = `translateX(${scrollAmount}px)`;
        }
 
        
    }
//  **********End**********  //


    //  ye function back to top ky liye bnaya hai taky iss function 
    // ky chalny pr wapis top pr ajayien with smooth movement

//  **********Start**********  //
function BackTopScroler() {
    let scrollBtn = document.querySelector(".scroler");

    // Function to check scroll position
    function checkScroll() {
        if (window.scrollY > 50) { // Jab user 200px scroll kare
            scrollBtn.style.display = "flex"; // Button show
        } else {
            scrollBtn.style.display = "none"; // Button hide
        }
    }

    // Scroll event listener
    window.addEventListener("scroll", checkScroll);

    // Click event for smooth scroll to top
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Initial check
    checkScroll();
}

//  **********End**********  //

 
    // ye function accordion ko 
    // controle krny ky liye bnaya hai  

//  **********Start**********  //
    function AccordionControle() {
        let buttons = document.querySelectorAll('.faq-section .faq-accordion .accordion .accordion-item .accordion-header .accordion-button');

        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                // Har button ke liye uska icon update karein
                buttons.forEach(b => {
                    let icon = b.parentElement.querySelector('i');
                    if (b.getAttribute("aria-expanded") === "true") {
                        icon.classList.remove("fa-plus");
                        icon.classList.add("fa-minus");
                    } else {
                        icon.classList.remove("fa-minus");
                        icon.classList.add("fa-plus");
                    }
                });
            });
        });
    }

//  **********End**********  //

 
    // ye ha track path function jismien meny file ky path ko track kiya 
    // hai or condition put ki hai ky kis file mien meny header show krwana hai 

//  **********Start**********  //
    function TrackPath() {

        let navbar = document.querySelector('.navbar');
        let path = document.location.pathname.split('/').pop();
        if (path == 'school.php') {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "block";

        }
    }
     //  **********End**********  //

     
   //**********Tracking Array Start*********//
     let UserCompleteData = [];
   //***************************************//


    // yahan par hmny book now waly btn ko select kiya jo ky individual waly 
    // page mien hai or usky click krny par modal open krwaya jismien booking information
    //  hai or is JS mien humny modal ko open and close krny ki functionality add ki hai with loading effects

 //  **********Start**********  //
    
    let oldsection = document.querySelector(".old-section");
    let nextSection = document.querySelector('.next-section');
    let confirmSection = document.querySelector('.confirm-section');
    let contactDetailSection = document.querySelector('.contact-details-section');
    let questionarySection = document.querySelector('.questionary-section');
    let agregationSection = document.querySelector('.Agreegation-section');
    let endSection = document.querySelector('.end-section');
   
    endSection.style.transition = '1s';
    agregationSection.style.transition = '1s';
    endSection.style.display = 'none';
    endSection.style.opacity = '0';
    endSection.style.visibility = 'hidden';
    agregationSection.style.display = "none";
    questionarySection.style.display = 'none';
    contactDetailSection.style.display = "none";
    nextSection.style.display = "none";
    confirmSection.style.display = "none";
     
    let bookbtn = document.querySelectorAll(' .ind-section .ind-chart .row .col-11 #bookbtn');
    bookbtn.forEach(btn => {

        btn.addEventListener('click', function (e) {
            let btnid = this.getAttribute('data-id');
            let parent = this.parentElement;
            let price = parent.querySelector('.price').innerHTML;
            let totalAmount = confirmSection.querySelector('.total-amount');
            let subTotal = confirmSection.querySelector('.subtotal b');
            let tax = confirmSection.querySelector('.tax');
            let total = confirmSection.querySelector('.total');
            let expressAmount = confirmSection.querySelector('.express-amount');
             
            UserCompleteData.push(price);  // push data 
            switch(price){
                case '$125':
                     expressAmount.innerHTML = '$125';
                     totalAmount.innerHTML = '$135.00';
                     subTotal.innerHTML = '$125.00';
                     tax.innerHTML = '$10.00';
                     total.innerHTML = '$135.00';
                     break;

                case '$225':
                    expressAmount.innerHTML = '$225';
                    totalAmount.innerHTML = '$235.00';
                    subTotal.innerHTML = '$225.00';
                    tax.innerHTML = '$10.00';
                    total.innerHTML = '$235.00';
                    break;

                case '$425':
                    expressAmount.innerHTML = '$425';
                    totalAmount.innerHTML = '$435.00';
                    subTotal.innerHTML = '$425.00';
                    tax.innerHTML = '$10.00';
                    total.innerHTML = '$435.00';
                    break;
                    
                default: console.log('no');
            }

             
            // after clicking on button start loading 
            loading();
            function loading() {
                btn.setAttribute('data-bs-toggle', 'modal');
                btn.setAttribute('data-bs-target', "#loadingModal");

                // Modal ko open karne ka Bootstrap ka proper method
                let loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
                loadingModal.show();

            }


            // open modal after delay 
            setTimeout(() => {
                // btn.setAttribute('data-bs-toggle', 'modal');

                let loadingModalInstance = bootstrap.Modal.getInstance(document.getElementById('loadingModal'));
                if (loadingModalInstance) {
                    loadingModalInstance.hide();
                }
                btn.removeAttribute('data-bs-target');
                btn.setAttribute('data-bs-target', "#exampleModal");
                // Modal ko open karne ka Bootstrap ka proper method
                let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
                modal.show();
            }, 1000);


            fetch("data.json")
                .then(response => response.json()) // JSON ko JS object me convert kar raha hai
                .then(data => {


                })
                .catch(error => console.error("Error fetching JSON:", error));

        })

        let closeModal = document.querySelector('.modal-content i#cross');
        closeModal.addEventListener('click', Close);

        // function to close modal 
        function Close() {
            btn.removeAttribute('data-bs-toggle', 'modal');
            btn.removeAttribute('data-bs-target', "#exampleModal");
        }
    });

 

 //  **********End**********  //









    //  yahan par humny sabsy pehly calender mien date
    //  par click krny sai aik modal open krwaya hai js ki madad sai,
    //  dropdown add kiya hai JS ki madad sai. jessy kisi date par 
    // click hoga or dropdown open hojayega usky baad uss dropdown mien jo 
    // data hai hai wo humny dynamically change krwaya hai aik json ki file sai 
    // fetch krwakr har date ky dropdown mien  or issky ander mazeed functionality
    //  hai jokay meny neechy hr kisi ki details comment ki hien 

 //  **********Start**********  //
    // document.addEventListener("click", function (e) {

    //     if (e.target.getAttribute('tabindex') == '-1') {
    //         console.log('hi');
    //         e.target.setAttribute('id', 'dropdownMenuButton1');
    //         e.target.setAttribute('data-bs-toggle', 'dropdown');
    //         e.target.setAttribute('aria-expanded', 'true');
    //         let newParent = document.createElement('div');
    //         newParent.classList.add('dropdown');
    //         let existingParent = e.target.parentNode;
    //         existingParent.insertBefore(newParent, e.target);
    //         newParent.appendChild(e.target);
    //         e.target.getAttribute('aria-expanded');
    //         let ul = ``;



    //         let targetDate = e.target.innerHTML;

    //         fetch("shcedual_date.json?" + new Date().getTime())
    //             .then(response => response.json()) // JSON ko JS object me convert kar raha hai
    //             .then(data => {
    //                 console.log(data);
    //                 console.log(targetDate);
    //                 data.forEach(item => {
    //                     if (targetDate == item.date) {
    //                         // console.log(item.time.length);
    //                         ul += `<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">`;
    //                         for (let i = 0; i < item.time.length; i++) {
    //                             ul += `<li><a class="dropdown-item" data-id='${item.id}' href="">${item.time[i]}</a></li>`;
    //                         }
    //                         ul += '</ul>';

    //                     }

    //                     //    console.log(typeof(item.time))
    //                 });


    //                 newParent.insertAdjacentHTML('beforeend', ul);



    //                 // yahn pr calender mien kahien bhi click krny pr open dropdown close hojaingy 
    //                 let calender = document.querySelector('.dayContainer');
    //                 let dropMenu = document.querySelector('.dropdown-menu');
    //                 calender.addEventListener('click', function () {
    //                     dropMenu.style.display = 'none'
    //                 })


    //                 if (targetDate >= 5) {
    //                     e.target.style.padding = '12px';
    //                     dropMenu.style.top = 'none'
    //                 }




    //                 // send data through ajax, method post
    //                 let items = document.querySelectorAll('.dropdown-item');

    //                 items.forEach(item => {
    //                     item.addEventListener('click', function () {
    //                         var id = this.getAttribute('data-id');
    //                         var time = this.innerHTML;
    //                         // console.log(id, time);
    //                         let formData = new FormData();
    //                         formData.append("id", id);
    //                         formData.append("time", time);

    //                         // Send AJAX request to PHP
    //                         fetch("process.php", {
    //                             method: "POST",
    //                             body: formData
    //                         })
    //                             .then(response => response.json()) // Parse response as json
    //                             .then(data => {
    //                                 if (data.length > 0) {
    //                                     let time = document.querySelector('.next-section #time');
    //                                     let dateDetail = document.querySelector('.next-section #date-detail');
    //                                     let dueDate = confirmSection.querySelector('.confirm-due-date');
    //                                     data.forEach(item => {
    //                                         time.innerHTML = item.time;
    //                                         dateDetail.innerHTML = item.day + " " + item.month + " " + item.year;
    //                                         dueDate.innerHTML = "1. Due  "+ item.month.toUpperCase().substr(0,3) + " " + item.date + " " + item.year;
                                            
    //                                         UserCompleteData.push(time.innerHTML,dueDate.innerHTML,"No Coupon");
    //                                         nextSection.style.display = "block";
    //                                         oldsection.style.display = "none";


    //                                         document.addEventListener('click', function (e) {
    //                                             if (e.target.classList.contains('back')) {
    //                                                 nextSection.style.display = "none";
    //                                                 oldsection.style.display = "block";
    //                                             } else if (e.target.classList.contains('confirm')) {
    //                                                 nextSection.style.display = "none";
    //                                                 oldsection.style.display = "none";
    //                                                 confirmSection.style.display = "block";
    //                                             } else if (e.target.id === "cross") {
    //                                                 nextSection.style.display = "none";
    //                                                 oldsection.style.display = "block";
    //                                                 confirmSection.style.display = "none";
    //                                                 questionarySection.style.display = 'none';
    //                                                 contactDetailSection.style.display = "none";
    //                                                 agregationSection.style.display = "none";
    //                                                 this.location.reload();

    //                                             } else if (e.target.id === "nextbtn") {
    //                                                 confirmSection.style.display = "none";
    //                                                 contactDetailSection.style.display = "block";

    //                                             }
    //                                         })


    //                                     });

    //                                 }
    //                                 // console.log("Response from PHP:", data);
    //                             })

    //                     })
    //                 });


    //             })

    //             .catch(error => console.error("Error fetching JSON:", error));
    //     }
    // });
    
    let calender = document.querySelector('.calender-col');
    let datesContainer = calender.querySelector('.date-row');
    let prevBtn = calender.querySelector('.fa-angle-left');
    let nextBtn = calender.querySelector('.fa-angle-right');
    let monthSelect = calender.querySelector('select');
    let yearSpan = calender.querySelector('.month-row span');

    let today = new Date();
    let currentMonth = today.getMonth();  // 0 - 11 (Jan - Dec)
    let currentYear = today.getFullYear();

    function renderCalendar() {
        datesContainer.innerHTML = "";  // Pehle purani dates ko remove karo

        let firstDay = new Date(currentYear, currentMonth, 1).getDay();  // Month ka first day konsa hai (0-Sun, 1-Mon,...)
        let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Total days in month

        // Month aur Year update karna
        monthSelect.value = currentMonth;
        yearSpan.innerText = currentYear;



        // Empty boxes for previous month's days
        for (let i = 0; i < firstDay; i++) {
            let emptyBox = document.createElement('div');
            emptyBox.classList.add('col', 'empty');
            datesContainer.appendChild(emptyBox);
        }

        // Current month ke din render karna
        for (let i = 1; i <= daysInMonth; i++) {
            let dateBox = document.createElement('div');
            dateBox.classList.add('col', 'date');
            dateBox.innerHTML = `<span>${i}</span>`;

            // Current date highlight karna
            if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                dateBox.classList.add('currentDate');
            }

            // Past dates disable karna
            if ((currentYear < today.getFullYear()) || (currentYear === today.getFullYear() && currentMonth < today.getMonth()) || (currentYear === today.getFullYear() && currentMonth === today.getMonth() && i < today.getDate())) {
                dateBox.firstElementChild.classList.add('pastDate');
                dateBox.classList.add('pastDate');
            }

            datesContainer.appendChild(dateBox);
        }

        let dates = datesContainer.querySelectorAll('.date');
        let months = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
        dates.forEach(date => {
            fetch("shcedual_date.json?" + new Date().getTime())
            .then(response => response.json())
            .then(data => {    
                data.forEach(item =>{
                    if(item.month.toUpperCase() == months[monthSelect.value].toUpperCase()){
                        if(item.date == date.firstElementChild.innerHTML && item.date != today.getDate()){
                            date.classList.add('avail');
                        //    date.style.backgroundColor = '#b09a51';
                        }

                    } 
                    
                })
               
                    if(!date.classList.contains('avail')){
                        date.classList.add('disabled');
                    }
               
            }) 
             date.addEventListener('click',function(){
                let clickDate = date.firstElementChild.innerHTML;
                let parent = date.parentElement;
                 
               
                fetch("shcedual_date.json?" + new Date().getTime())
                    .then(response => response.json()) // JSON ko JS object me convert kar raha hai
                    .then(data => {              
                       data.forEach(item => {    
                            if(item.month.toUpperCase() == months[monthSelect.value].toUpperCase()){ 
                            if(item.date === clickDate && item.date != today.getDate()){
                                
                             let ul = `<ul>`;
                              for(let i=0; i<item.time.length; i++){
                                 ul += `<li><a class="drop-item" data-id='${item.id}' href="#">${item.time[i]}</a></li>`;
                              }
                              ul += '</ul>';

                               
                                let existingDropdown = document.querySelector('.date-dropdown');
                                if (existingDropdown) {
                                    existingDropdown.remove();
                                }
                                
                                  let dropdown = document.createElement('div');
                                  dropdown.classList.add('date-dropdown');
                                  datesContainer.appendChild(dropdown);
                                  dropdown.insertAdjacentHTML('beforeend',ul);
                                  setTimeout(()=>{
        
                                    dropdown.style.opacity = '1';
                                    dropdown.style.visibility = 'visible';
                                    dropdown.style.transform = 'none';
                                  },100);
        

                                  let first = dropdown.getBoundingClientRect();
                                  let  second = date.getBoundingClientRect();

                                  
                                  let verticalDistance = Math.abs(second.top - first.bottom);
                                    // console.log("Vertical Distance:", verticalDistance, "px");

                                    let horizontalDistance = Math.abs(second.left - first.right);
                                    // console.log("Horizontal Distance:", horizontalDistance, "px");

                                  
                               
                                 
                                calender.addEventListener('click',function(e){
                                     if(!e.target.classList.contains('date-dropdown')){
                                        dropdown.remove();
                                     }
                                })
                                  
                               }
                            }
                    
                       });

                        // send data through ajax, method post
                    let items = document.querySelectorAll('.drop-item');

                    items.forEach(item => {
                      
                        item.addEventListener('click', function () {
                            var id = this.getAttribute('data-id');
                            var time = this.innerHTML;
                            // console.log(id, time);
                            let formData = new FormData();
                            formData.append("id", id);
                            formData.append("time", time);

                            // Send AJAX request to PHP
                            fetch("process.php", {
                                method: "POST",
                                body: formData
                            })
                                .then(response => response.json()) // Parse response as json
                                .then(data => {
                                    
                                    if (data.length > 0) {
                                        let time = document.querySelector('.next-section #time');
                                        let dateDetail = document.querySelector('.next-section #date-detail');
                                        let dueDate = confirmSection.querySelector('.confirm-due-date');
                                        data.forEach(item => {
                                            time.innerHTML = item.time;
                                            dateDetail.innerHTML = item.day + " " + item.month + " " + item.year;
                                            dueDate.innerHTML = "1. Due  "+ item.month.toUpperCase().substr(0,3) + " " + item.date + " " + item.year;
                                            
                                            UserCompleteData.push(time.innerHTML,dueDate.innerHTML,"No Coupon");
                                            nextSection.style.display = "block";
                                            oldsection.style.display = "none";


                                            document.addEventListener('click', function (e) {
                                                if (e.target.classList.contains('back')) {
                                                    nextSection.style.display = "none";
                                                    oldsection.style.display = "block";
                                                } else if (e.target.classList.contains('confirm')) {
                                                    nextSection.style.display = "none";
                                                    oldsection.style.display = "none";
                                                    confirmSection.style.display = "block";
                                                } else if (e.target.id === "cross") {
                                                    nextSection.style.display = "none";
                                                    oldsection.style.display = "block";
                                                    confirmSection.style.display = "none";
                                                    questionarySection.style.display = 'none';
                                                    contactDetailSection.style.display = "none";
                                                    agregationSection.style.display = "none";
                                                    this.location.reload();

                                                } else if (e.target.id === "nextbtn") {
                                                    confirmSection.style.display = "none";
                                                    contactDetailSection.style.display = "block";

                                                }
                                            })


                                        });

                                    }
                                     
                                })

                        })
                    });
                     
                    });
             })
            
        });
    }

    // Month Change Handlers
    prevBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });



    // First Time Render
    renderCalendar();

 //  **********End**********  //




    // search functionality logic

 //  **********Start**********  //
    let days = document.querySelectorAll('.day-col');
    let dayaray = [];
    days.forEach(day => {
        day.addEventListener('click', function (e) {
            let currDay = e.target.getAttribute('data-day');

            e.target.classList.toggle('active');
            e.target.firstElementChild.classList.toggle('active-color');
            //   dayaray.push("mon","wed","thu","fri","sat","sun");
            days.forEach(checkDay => {
                if (checkDay.classList.contains('active')) {
                    if (currDay == 'all') {
                        dayaray.push("mon", "tue", "wed", "thu", "fri", "sat", "sun");
                    } else {
                        dayaray.push(currDay);
                    }
                }
            })

            let searchbtn = document.querySelector(".find-div button");

            searchbtn.addEventListener('click', function () {
                fetch("shcedual_date.json")
                    .then(response => response.json()) // JSON ko JS object me convert kar raha hai
                    .then(data => {
                           
                        data.forEach(item => {
                            if (dayaray.includes(item.day)) {
                                document.querySelectorAll('.flatpickr-day').forEach(span => {
                                    if (span.getAttribute('tabindex') == -1) {
                                        if (span.innerHTML == item.date) {
                                            span.style.backgroundColor = "grey";
                                        }
                                    }
                                    let clearFilter = document.querySelector(".clear-div button");
                                    clearFilter.addEventListener('click', function () {
                                        if (span.getAttribute('tabindex') == -1) {
                                            span.style.backgroundColor = "transparent";
                                            dayaray.length = 0;
                                        }
                                    })

                                })
                            }

                        });
                    })
            })

        })

    });

 //  **********End**********  //



    //  save form data that given by user inputs
    // ye function contact form ky data ko send karega aik database mien or js ki madad sai wo data track krky inputs   mien sai php ko behjega php ki file mien or wahan sai data jayega database mien ,Or ismien validations ka logic bhi lagaya hai
                                        //  **********Start**********  //
    SaveFormData();
    function SaveFormData() {
        let spinner = document.querySelector('.contact-details-section .spinner');
        spinner.style.display = "none";
        let form = document.querySelector(".contact-details-section form")
        document.querySelector(".contact-details-section form").addEventListener("submit", function (e) {
            e.preventDefault(); // Form submit hone se rokna
            let heading = document.querySelector(".contact-details-section .heading");

            let formData = []; // Empty array to store input values

            // Sab input fields ko select karna
            let inputs = document.querySelectorAll(" .contact-details-section form input");
            let alert = `<div class="alert alert-danger alert-dismissible fade show" role="alert" d-block>
                         Please Must Fill All Fields !
                        <button type="button" class="btn-close m-0" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;

            let existingAlert = heading.querySelector('.alert');
            if (existingAlert) {
                existingAlert.remove();
            }
            let showalert = false;
            for (let input of inputs) {
                if (input.value.trim() === '') {
                    showalert = true;
                    break; // Exit loop immediately
                } else {
                    formData.push({
                        name: input.placeholder,
                        value: input.value.trim()

                    });

                }
            }

            if (showalert) {
                heading.insertAdjacentHTML('beforeend', alert);
            }

            if (formData.length > 9) {
                spinner.style.display = "flex";
                setTimeout(() => {
                    spinner.style.display = "none";
                    form.reset();
                }, 3000);
                let dataToSend = JSON.stringify(formData);
                fetch('submit.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // JSON format define karna
                    },
                    body: dataToSend //data in json form
                })

                    .then(response => response.json())
                    .then(data => {
                        
                        if (data.status == 'success') {
                          
                            UserCompleteData.push(data.Email, data.Name);
                            setTimeout(moveNext, 3000);

                        } else {

                        }
                    })
            }

        });

    }

    function moveNext() {
        contactDetailSection.style.display = 'none';
        questionarySection.style.display = 'block';

    }

     //  **********End**********  //





    // yahn pr contact mien mien button ky
    //  click pr back hojany ka concept hai


     //  **********Start**********  //
    let contactBackBtn = contactDetailSection.querySelector('.contact-back-btn');
    contactBackBtn.addEventListener('click', function (e) {
        e.preventDefault();
       
        contactDetailSection.style.display = 'none';
        confirmSection.style.display = 'block';
    })

     //  **********End**********  //




    // yahn par input pr click hojany sai
    // unpar class toggle krwany ka logic hai 

 //  **********Start**********  //
    let inputsDiv = questionarySection.querySelectorAll('.inputs');
    inputsDiv.forEach(inputs => {
        let divs = inputs.querySelectorAll('div');
        divs.forEach(div => {
            div.addEventListener('click', function (e) {
                let checkbox = div.querySelector('input[type=checkbox]');
                checkbox.checked = !checkbox.checked;
                this.classList.toggle('active');
                this.querySelector('p').classList.toggle('active-para');
            })
        });
    });

     //  **********End**********  //



    // yahn par humny checked questions ko  save krwaya hai 
    // json form mien or aik json file mien php ky through save krwaya hai 
 //  **********Start**********  //
    let checkedData = {}; // Initialize object
    let nameOfTheParticipant = endSection.querySelector('span');
    questionarySection.addEventListener('click', function (e) {
        if (e.target.classList.contains('question-next-btn')) {
            checkedData = {}; // Reset object before collecting new data

            let checkedInputs = document.querySelectorAll('input:checked');

            checkedInputs.forEach(input => {
                let questionID = input.parentElement.parentElement.parentElement.firstElementChild.innerHTML;
                let answerText = input.nextElementSibling.innerHTML.trim();

                if (!checkedData[questionID]) {
                    checkedData[questionID] = []; // Initialize array for this question
                }

                checkedData[questionID].push(answerText); // Store answer inside the array
            });

            // console.log("Sending data:", checkedData); // Debugging log

            if (Object.keys(checkedData).length > 0) { // Ensure data is not empty
                fetch('save_checked_data.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ responses: checkedData })
                })
                    .then(response => response.json())
                    .then(data => {
                       
                        if (data.success) {
                            agregationSection.style.display = "block";
                            questionarySection.style.display = "none";
                        }
                    })
                    .catch(error => console.error('Error:', error));
            } else {
                console.log("No data to send."); // Debugging log
            }
        }



       //**********Tracking Array End*********//
 
       let concatArray =  UserCompleteData.concat(checkedData);

       //***************************************//
        
         
       
         let TodayDate = agregationSection.querySelector('.today-date');
         let clientName = agregationSection.querySelector('.client-name');
         let eventTime = agregationSection.querySelector('.event-time');
         let eventDate = agregationSection.querySelector('.event-date');
         let eventExpressPrice = agregationSection.querySelector('.express-price');

         const date = new Date();
         const options = { year: "numeric", month: "long", day: "numeric" };
         const formattedDate = date.toLocaleDateString("en-US", options);
       
         TodayDate.innerHTML = formattedDate;
         clientName.innerHTML = concatArray[5];
         eventTime.innerHTML = concatArray[1];
         eventExpressPrice.innerHTML = concatArray[0];
         eventDate.innerHTML = concatArray[2].substr(6,14);
         nameOfTheParticipant.innerHTML = concatArray[5];
        //  console.log(concatArray)
    });

//  **********End**********  //
 
  
let printbtn = agregationSection.querySelector('#printbtn');
printbtn.addEventListener('click', Print);

let signatureInput = agregationSection.querySelector('#signature');
signatureInput.addEventListener('keyup',function(){
   signatureInput.setAttribute('value',signatureInput.value.toUpperCase());
 
})
 

function Print() {
    let printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    let row = agregationSection.querySelector('.event-row').innerHTML;
    printWindow.document.write(row);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}



// this function for animation  canvas 

let canvas = endSection.querySelector('.canvas');
    
function startConfetti() {
var end = Date.now() + (15 * 1000);
// go Buckeyes!
var colors = ['#bb0000', '#ffffff'];
    let confettiInstance = confetti.create(canvas, { resize: true });
    confettiInstance({
        particleCount: 200,
        spread: 100,
        startVelocity: 50,
        origin: { y: 0.5 }  
    });
    confettiInstance({
        particleCount: 200,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confettiInstance({
        particleCount: 200,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    
}





let individualSection = document.querySelector('.ind-section');
let Acceptbtn = agregationSection.querySelector('#btn').firstElementChild;
let agreeBox = agregationSection.querySelector('.col-fifth #checkbox');
let alert = agregationSection.querySelector('.alert');
// alert.style.visibility = 'hidden';
// alert.style.opacity = '0';
let spinner =  document.querySelector('#spinner');
// spinner.style.visibility = 'hidden';
// spinner.style.opacity = '0';
// spinner.style.transition = '.5s'
Acceptbtn.addEventListener('click', Accept);
 
function Accept() {
     if(agreeBox.checked && signatureInput.value.trim() !== ''){
        // spinner.style.visibility = 'visible';
        // spinner.style.opacity = '1';
        fetch('send_email.php', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: 'javedbaloch0091@gmail.com' }) // Jis email par bhejna hai
        })
        .then(response => response.text())
        .then(data => {
            
        if(data){  
            // console.log(nameOfTheParticipant)
            setTimeout(()=>{
                // spinner.style.visibility = 'hidden';
                // spinner.style.opacity = '0';
                agregationSection.style.display = 'none';
                agregationSection.style.visibility = 'hidden';
                agregationSection.style.opacity = '0';
                
                endSection.style.display = 'block';
                endSection.style.visibility = 'visible';
                endSection.style.opacity = '1';
                startConfetti();
            },3000);
            
          }
           
            
        })
        .catch(error => console.error("Fetch Error:", error));
     }else{
        // alert.style.visibility = 'visible';
        // alert.style.opacity = '1';
     }
     
}

 //  scroll functionality in individual section 
 let scrolBtn = individualSection.querySelector('#scrolbtn');
 let targetScrol =individualSection.querySelector('#scrolTarget');
 scrolBtn.addEventListener('click',function(){
    targetScrol.scrollIntoView({
        behavior: 'smooth'
    })
    
 })


    // yahan par humny navbar menu bnaya hai jo 
    // ky booking section mien toggle krwany ky liye ye js hai
    
    
 //  **********Start**********  //
    let bookNav = document.querySelectorAll('.bookNav');
    bookNav.forEach(nav => {
        let icon = nav.nextElementSibling.firstElementChild;
        icon.addEventListener('click', function (e) {
            nav.style.visibility = 'visible';
            nav.style.opacity = '1';
            let menu = nav.querySelector('.menu-box');
            menu.style.right = 0;
            nav.addEventListener('click', function (e) {
                if (e.target == nav) {
                    nav.style.visibility = 'hidden';
                    nav.style.opacity = '0';
                    menu.style.right = '-545px';
                }
            })
        });
    });
 //  **********End**********  //

 

let freeSchedualBtn = individualSection.querySelector('.ind-banner3 button');
let freeSchedualSection = document.querySelector('.free-shcedualing');
 
freeSchedualSection.style.display = 'none';
 freeSchedualBtn.addEventListener('click',function(){
    oldsection.style.display = 'none';
    freeSchedualSection.style.display = 'block';

    let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();

    let cross = document.querySelector('#cross');
     
    cross.addEventListener('click',function(){
        oldsection.style.display = 'block';
        freeSchedualSection.style.display = 'none';
     });

 })

  

});


