/**
 * @author Adhfry <ahda.creator@gmail.com>
 */
(function ($) {
  "use strict";
  $(".sakura-falling").sakura();
})(jQuery);

// production
// $(document).ready(() => {
//   $("#button-open").click(() => {
//     $(".awal").toggleClass("d-none");
//     $(".isi-undangan").toggleClass("d-none");
//     $("#staticBackdrop").modal("show");
//     $("#my_audio")[0].play();
//   });
// });

// testing
$(document).ready(() => {
  $(".awal").toggleClass("d-none");
  $(".isi-undangan").toggleClass("d-none");
  $("#button-open").click(() => {
    $("#staticBackdrop").modal("show");
    $("#my_audio")[0].play();
  });
});

// save the date
$(document).ready(function () {
  // // Meng-handle klik pada amplop tutup
  // $(".page4").on("click", function () {
  //   // Menggerakkan telunjuk ke kiri
  //   $(".telunjuk").removeClass("wind-effect");
  //   $(".telunjuk").addClass("move-right");

  //   // Menambahkan animasi ke kanan sebelum menghilang
  //   $(".telunjuk").animate({ marginLeft: "15rem" }, 1000, function () {
  //     $(".amplop-tutup").addClass("d-none");
  //     $(".surat").removeClass("fa-bounce");
  //     $(".amplop-buka, .amplop-buka-depan, .kertas, .text-klik").removeClass(
  //       "d-none"
  //     );
  //   });
  // });

  // // Meng-handle klik pada text-klik
  // $(".text-klik").on("click", function () {
  //   // Menggerakkan amplop-buka dan amplop-buka-depan ke bawah
  //   $(".amplop-buka, .amplop-buka-depan").animate(
  //     {
  //       marginTop: "15rem",
  //     },
  //     500,
  //     function () {
  //       // Setelah animasi ke bawah selesai, menggerakkan ke kanan
  //       $(".amplop-buka, .amplop-buka-depan").animate(
  //         {
  //           marginLeft: "20rem",
  //         },
  //         500,
  //         function () {
  //           // Setelah animasi selesai, menyembunyikan text-klik

  //           // Memperbesar ukuran kertas dengan animasi
  //           $(".kertas").css({
  //             transform: "scale(1.8) translate(-2rem, 10rem)",
  //             transition: "transform 1s",
  //             "z-index": 0,
  //           });

  //           // Menyembunyikan elemen text-klik
  //           $(".text-klik").addClass("d-none");
  //           $(
  //             ".text-klik, .amplop-buka, .amplop-buka-depan, .amplop-tutup"
  //           ).css({
  //             display: "none",
  //           });

  //           // Menampilkan countdown setelah kertas muncul
  //           startCountdown();
  //           setTimeout(function () {
  //             $("#btn-waktu").removeClass("d-none");
  //           }, 1000);
  //           // Menampilkan gambar wayang dengan animasi
  //           $("#hiasan")
  //             .removeClass("d-none")
  //             .css({
  //               opacity: 0,
  //               transform: "translateY(-40rem) rotate(0deg)",
  //               top: "18rem",
  //             })
  //             .animate(
  //               {
  //                 opacity: 1,
  //                 translateY: "-20rem",
  //                 rotate: "394deg",
  //                 left: "-2rem",
  //                 width: "120%",
  //               },
  //               {
  //                 duration: 1000,
  //                 step: function (now, fx) {
  //                   if (fx.prop === "rotate") {
  //                     // Jika sedang melakukan animasi rotasi, atur persentase rotasi
  //                     var rotation = (now / 270) * 100;
  //                     $("#hiasan").css(
  //                       "transform",
  //                       "rotate(" + rotation + "deg)"
  //                     );
  //                   }
  //                 },
  //               }
  //             );
  //           $("#hiasan2")
  //             .removeClass("d-none")
  //             .css({
  //               opacity: 0,
  //               transform: "translateY(-40rem) rotate(0deg)",
  //               top: "-20rem",
  //             })
  //             .animate(
  //               {
  //                 opacity: 1,
  //                 translateY: "-20rem",
  //                 rotate: "475deg",
  //                 left: "-5rem",
  //                 width: "70%",
  //                 top: "-21rem",
  //               },
  //               {
  //                 duration: 1000,
  //                 step: function (now, fx) {
  //                   if (fx.prop === "rotate") {
  //                     // Jika sedang melakukan animasi rotasi, atur persentase rotasi
  //                     var rotation = (now / 270) * 100;
  //                     $("#hiasan2").css(
  //                       "transform",
  //                       "rotate(" + rotation + "deg)"
  //                     );
  //                   }
  //                 },
  //               }
  //             );
  //           $("#hiasan3")
  //             .removeClass("d-none")
  //             .css({
  //               opacity: 0,
  //               transform: "translateY(-40rem) rotate(0deg)",
  //               top: "-20rem",
  //             })
  //             .animate(
  //               {
  //                 opacity: 1,
  //                 translateY: "-20rem",
  //                 rotate: "480deg",
  //                 left: "8rem",
  //                 width: "35%",
  //                 top: "211.5rem",
  //               },
  //               {
  //                 duration: 2000,
  //                 step: function (now, fx) {
  //                   if (fx.prop === "rotate") {
  //                     // Jika sedang melakukan animasi rotasi, atur persentase rotasi
  //                     var rotation = (now / 270) * 100;
  //                     $("#hiasan3").css(
  //                       "transform",
  //                       "rotate(" + rotation + "deg)"
  //                     );
  //                   }
  //                 },
  //               }
  //             )
  //             .addClass("wind-effect");
  //           setTimeout(function () {
  //             $(".page4").animate({
  //               "padding-bottom": "40%",
  //             });
  //           }, 2000);
  //         }
  //       );
  //     }
  //   );
  // });

  // Fungsi untuk memulai countdown

  startCountdown();
  function startCountdown() {
    // Tentukan tanggal dan waktu tujuan (dalam zona waktu setempat pengguna)
    var countDownDate = new Date("2024-01-28T06:30:00").getTime();

    // Perbarui countdown setiap 1 detik
    var x = setInterval(function () {
      // Dapatkan waktu saat ini
      var now = new Date().getTime();

      // Hitung selisih waktu antara sekarang dan waktu tujuan
      var distance = countDownDate - now;

      // Hitung hari, jam, menit, dan detik
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Tampilkan hasil countdown di elemen dengan id "countdown"
      $("#countdown")
        .css({
          "z-index": 1,
          top: "4rem",
          "font-size": "25px",
          "font-family": "forum",
          "margin-left": "0rem",
        })
        .html(days + " Hari")
        .addClass("text-center");
      $("#waktu")
        .css({
          "z-index": 1,
          top: "4rem",
          "font-size": "23px",
          "font-family": "forum",
          "margin-left": "7.5rem",
        })
        .html("- " + hours + " j | " + minutes + " m | " + seconds + " d")
        .addClass("text-center");
      $("#waktu-akad")
        .css({
          "z-index": 1,
          top: "8rem",
          "font-size": "24px",
          "font-family": "forum",
          "margin-left": "10rem",
        })
        .html("Minggu")
        .addClass("text-center");
      $("#tanggal-akad")
        .css({
          "z-index": 1,
          top: "8rem",
          "font-size": "24px",
          "font-family": "forum",
          "margin-left": "8.5rem",
        })
        .html("28 Januari 2024")
        .addClass("text-center");
      $("#btn-waktu")
        .css({
          "z-index": 1,
          top: "9.5rem",
          "font-size": "18px",
          "font-family": "forum",
          "margin-left": "4.815rem",
        })
        .html(
          '<i class="fa-solid  fa-calendar-days"></i> Simpan acara ke kalender'
        )
        .addClass("btn btn-outline-success rounded-pill default text-center");

      // Jika waktu sudah habis, tampilkan pesan atau lakukan aksi tertentu
      if (distance < 0) {
        clearInterval(x); // Hentikan interval countdown jika waktu habis
        $("#countdown").html("Waktu telah tiba!");
        $("#waktu").addClass("d-none");
        $("#waktu-akad").addClass("d-none");
        $("#btn-waktu").addClass("d-none");
      }
    }, 1000); // Perbarui setiap 1 detik
  }
});

// Set the date we're counting down to
// var countDownDate = new Date("Jan 28, 2024 06:30:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {
//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="demo"
//   document.getElementById("time").innerHTML =
//     "<div class='container'><div class='days block'>" +
//     days +
//     "<br>Days</div>" +
//     "<div class='hours block'>" +
//     hours +
//     "<br>Hours</div>" +
//     "<div class='minutes block'>" +
//     minutes +
//     "<br>Minutes</div>" +
//     "<div class='seconds block'>" +
//     seconds +
//     "<br>Seconds</div></div>";

//   // If the count down is over, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("time").innerHTML =
//       "Bless the married couple for happy life!";
//   }
// }, 1000);

// // being a bit cool :p
// var styles = [
//   "background: linear-gradient(#D33106, #571402)",
//   "border: 4px solid #3E0E02",
//   "color: white",
//   "display: block",
//   "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
//   "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
//   "line-height: 40px",
//   "text-align: center",
//   "font-weight: bold",
//   "font-size: 32px",
// ].join(";");

// var styles1 = [
//   "color: #FF6C37",
//   "display: block",
//   "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
//   "line-height: 40px",
//   "font-weight: bold",
//   "font-size: 32px",
// ].join(";");

// var styles2 = [
//   "color: teal",
//   "display: block",
//   "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
//   "line-height: 40px",
//   "font-weight: bold",
//   "font-size: 32px",
// ].join(";");

// console.log("\n\n%c SAVE THE DATE: 29th Nov, 2020!", styles);

// console.log(
//   "%cYour presence is requested!%c\n\nRegards: Vinit Shahdeo",
//   styles1,
//   styles2
// );

// console.log(
//   `%cShaadi me zaroor aana!\n\n`,
//   "color: yellow; background:tomato; font-size: 24pt; font-weight: bold"
// );
