
$( document ).ready(function() {
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    iPhone: function() {
          return navigator.userAgent.match(/iPhone/i);
      },
    iPad: function() {
          return navigator.userAgent.match(/iPad/i);
      },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  //test
  if ( isMobile.any() ) {
    console.log("mobile browser");
  } else {
    console.log("PC browser");
    $("#button-ios").click(function() {
      event.preventDefault();
      $("#modal-iphone").fadeIn();
    });
    $("#button-android").click(function() {
      event.preventDefault();
      $("#modal-android").fadeIn();
    });
  }
  $(".fecha-modal").click(function() {
    $("#modal-iphone").fadeOut();
    $("#modal-android").fadeOut();
  });

  // if ( isMobile.iPhone() ) {
  //   console.log("ios");
  // }
  // if ( isMobile.Android() ) {
  //   console.log("android");
  // }

});
