document.addEventListener("DOMContentLoaded", function () {
    // let calender = document.querySelector('.calender-col');
    // let datesContainer = calender.querySelector('.date-row');
    // let prevBtn = calender.querySelector('.fa-angle-left');
    // let nextBtn = calender.querySelector('.fa-angle-right');
    // let monthSelect = calender.querySelector('select');
    // let yearSpan = calender.querySelector('.month-row span');

    // // let oldsection = document.querySelector(".old-section");
    // // let nextSection = document.querySelector('.next-section');
    // // let confirmSection = document.querySelector('.confirm-section');
    // // let contactDetailSection = document.querySelector('.contact-details-section');
    // // let questionarySection = document.querySelector('.questionary-section');
    // // let agregationSection = document.querySelector('.Agreegation-section');
    // // let endSection = document.querySelector('.end-section');
     
    // // endSection.style.transition = '1s';
    // // agregationSection.style.transition = '1s';
    // // endSection.style.display = 'none';
    // // endSection.style.opacity = '0';
    // // endSection.style.visibility = 'hidden';
    // // agregationSection.style.display = "none";
    // // questionarySection.style.display = 'none';
    // // contactDetailSection.style.display = "none";
    // // nextSection.style.display = "none";
    // // confirmSection.style.display = "none";


    // let today = new Date();
    // let currentMonth = today.getMonth();  // 0 - 11 (Jan - Dec)
    // let currentYear = today.getFullYear();

    // function renderCalendar() {
    //     datesContainer.innerHTML = "";  // Pehle purani dates ko remove karo

    //     let firstDay = new Date(currentYear, currentMonth, 1).getDay();  // Month ka first day konsa hai (0-Sun, 1-Mon,...)
    //     let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Total days in month

    //     // Month aur Year update karna
    //     monthSelect.value = currentMonth;
    //     yearSpan.innerText = currentYear;



    //     // Empty boxes for previous month's days
    //     for (let i = 0; i < firstDay; i++) {
    //         let emptyBox = document.createElement('div');
    //         emptyBox.classList.add('col', 'empty');
    //         datesContainer.appendChild(emptyBox);
    //     }

    //     // Current month ke din render karna
    //     for (let i = 1; i <= daysInMonth; i++) {
    //         let dateBox = document.createElement('div');
    //         dateBox.classList.add('col', 'date');
    //         dateBox.innerHTML = `<span>${i}</span>`;

    //         // Current date highlight karna
    //         if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
    //             dateBox.classList.add('currentDate');
    //         }

    //         // Past dates disable karna
    //         if ((currentYear < today.getFullYear()) || (currentYear === today.getFullYear() && currentMonth < today.getMonth()) || (currentYear === today.getFullYear() && currentMonth === today.getMonth() && i < today.getDate())) {
    //             dateBox.firstElementChild.classList.add('pastDate');
    //             dateBox.classList.add('pastDate');
    //         }

    //         datesContainer.appendChild(dateBox);
    //     }

    //     let dates = datesContainer.querySelectorAll('.date');

    //     dates.forEach(date => {
            
    //          date.addEventListener('click',function(){
    //             let clickDate = date.firstElementChild.innerHTML;
    //             let parent = date.parentElement;
    //             let options = monthSelect.querySelectorAll('option');
    //             let months = [
    //                 "January", "February", "March", "April", "May", "June", 
    //                 "July", "August", "September", "October", "November", "December"
    //             ];
               
    //             fetch("shcedual_date.json?" + new Date().getTime())
    //                 .then(response => response.json()) // JSON ko JS object me convert kar raha hai
    //                 .then(data => {              
    //                    data.forEach(item => {    
    //                         if(item.month.toUpperCase() == months[monthSelect.value].toUpperCase()){ 
    //                         if(item.date === clickDate){
    //                          let ul = `<ul>`;
    //                           for(let i=0; i<item.time.length; i++){
    //                              ul += `<li><a class="drop-item" data-id='${item.id}' href="#">${item.time[i]}</a></li>`;
    //                           }
    //                           ul += '</ul>';

                               
    //                             let existingDropdown = document.querySelector('.date-dropdown');
    //                             if (existingDropdown) {
    //                                 existingDropdown.remove();
    //                             }
                                
    //                               let dropdown = document.createElement('div');
    //                               dropdown.classList.add('date-dropdown');
    //                               datesContainer.appendChild(dropdown);
    //                               dropdown.insertAdjacentHTML('beforeend',ul);
    //                               setTimeout(()=>{
        
    //                                 dropdown.style.opacity = '1';
    //                                 dropdown.style.visibility = 'visible';
    //                               },100);
        
    //                              // Get clicked date position
    //                             let rect = date.getBoundingClientRect();
    //                             let parentRect = parent.getBoundingClientRect();
        
    //                             let topOffset = rect.bottom - parentRect.bottom + date.offsetHeight; // Just below the date
    //                             let leftOffset = rect.left - parentRect.left; // Align with date
        
    //                             // Apply position
    //                             dropdown.style.position = "absolute";
    //                             dropdown.style.bottom = `${topOffset}px`;
    //                             dropdown.style.left = `${leftOffset}px`;
                                 
                                
                                  
    //                            }
    //                         }
                    
    //                    });

    //                     // send data through ajax, method post
    //                 let items = document.querySelectorAll('.drop-item');

    //                 items.forEach(item => {
    //                     console.log(item);
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
    //                                 console.log(data);
    //                                 if (data.length > 0) {
    //                                     let time = document.querySelector('.next-section #time');
    //                                     let dateDetail = document.querySelector('.next-section #date-detail');
    //                                     let dueDate = confirmSection.querySelector('.confirm-due-date');
    //                                     data.forEach(item => {
    //                                         time.innerHTML = item.time;
    //                                         dateDetail.innerHTML = item.day + " " + item.month + " " + item.year;
    //                                         dueDate.innerHTML = "1. Due  "+ item.month.toUpperCase().substr(0,3) + " " + item.date + " " + item.year;
                                            
    //                                         // UserCompleteData.push(time.innerHTML,dueDate.innerHTML,"No Coupon");
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
                                     
    //                             })

    //                     })
    //                 });
                     
    //                 });
    //          })
            
    //     });
    // }

    // // Month Change Handlers
    // prevBtn.addEventListener('click', function () {
    //     currentMonth--;
    //     if (currentMonth < 0) {
    //         currentMonth = 11;
    //         currentYear--;
    //     }
    //     renderCalendar();
    // });

    // nextBtn.addEventListener('click', function () {
    //     currentMonth++;
    //     if (currentMonth > 11) {
    //         currentMonth = 0;
    //         currentYear++;
    //     }
    //     renderCalendar();
    // });



    // // First Time Render
    // renderCalendar();



});
