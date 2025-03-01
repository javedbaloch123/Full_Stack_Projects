<!DOCTYPE html>
<html lang="en">
<?php include "header.php"; ?>

<body style="padding-top: 110px">
    <section class="contact-section">
        <div class="contact-banner">
            <h1>Contact</h1>
        </div>

        <div class="contact-form container py-5">
            <p>Please enter the information below and we will be in touch.</p>
            <div class="row m-0 py-5">
                <div class="col">
                    <div class="contact-spinner">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border " role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>
                    </div>
                    <form>
                        <div class="fullname">
                            <div class="firstname">
                                <label for="">Name</label>
                                <input type="text" id="fname">
                                <label for="">first</label>

                            </div>
                            <div class="lastname">
                                <label for="">last </label>
                                <input type="text" id="lname">
                                <label for="">last</label>

                            </div>
                        </div>
                        <div class="email">
                            <label for="">Email</label>
                            <input type="email" id="email">
                        </div>
                        <div class="phone">
                            <label for="">Phone</label>
                            <input type="number" id="phone">
                        </div>

                        <div class="comment">
                            <label for="">Comment</label>
                            <textarea name="" id="comment" rows="7"></textarea>
                        </div>
                        <button>submit</button>
                    </form>
                </div>
            </div>
        </div>  
         <!-- modal  -->
        <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="col">
                    <i class="fa-solid fa-calendar-check"></i>
                    <h2>Thank You For Reaching Out</h2>
                    <p>We are soon contact you back please wait for momment</p>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
    </section>

    <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">
    Launch demo modal
  </button> -->
   
    <?php  include "footer.php";?>
    <script src="contact.js"></script>
</body>

</html>