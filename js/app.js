const myApp = () => {
  handleDropdownDetail();
  dropdownToggle();
  inputNumberCustom();
  datePicker();
  slicker();
  range();
};

function slicker() {
  $(document).ready(function () {
    $("#timestamp").slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerPadding: "40px",
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: "40px",
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 576,
          settings: {
            centerPadding: "40px",
            slidesToShow: 2,
          },
        },
      ],
    });
  });
}

function datePicker() {
  $("#datepicker1").datepicker({
    uiLibrary: "bootstrap4",
    format: "dd/mm/yyyy",
    iconsLibrary: "fontawesome",
    minDate: new Date(Date.now() - 864e5),
    maxDate: function () {
      return $("#datepicker2").val();
    },
  });

  $("#datepicker2").datepicker({
    uiLibrary: "bootstrap4",
    format: "dd/mm/yyyy",
    iconsLibrary: "fontawesome",
    minDate: function () {
      return $("#datepicker1").val() || new Date(Date.now() - 864e5);
    },
  });
}

function range() {
  var lowerSlider = document.querySelector("#lower"),
    upperSlider = document.querySelector("#upper"),
    from = document.querySelector("#from"),
    to = document.querySelector("#to"),
    lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    to.value = upperVal;

    if (upperVal < lowerVal + 4) {
      lowerSlider.value = upperVal - 4;
      from.value = lowerVal;

      if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
      }
    }
  };

  lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    from.value = lowerVal;

    if (lowerVal > upperVal - 4) {
      upperSlider.value = lowerVal + 4;
      to.value = upperVal;

      if (upperVal == upperSlider.max) {
        lowerSlider.value = parseInt(upperSlider.max) - 4;
      }
    }
  };
}

function inputNumberCustom() {
  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter(".quantity input");
  jQuery(".quantity").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $("#dropdownPassengers").on("show.bs.dropdown", function () {
    console.log(11);
  });
}

function dropdownToggle() {
  $(document).ready(function () {
    $("#dropdownPassengers").click(function () {
      $(".dropdown-menu").toggle();
    });
  });
}

function handleDropdownDetail() {
  $(".tabsID").each(function (i) {
    $(this).on("click", function () {
      $(`.tab-content-id${i}`).toggle();
    });
  });
}

myApp();
