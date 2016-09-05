function conversionModal(html, custom_config) {
  'use strict';

  var config = custom_config || {}
    , type = config.type || 'exit_intent'
    , background = config.background || 'white'
    , color = config.color || 'black'
    , accept_text = config.accept_text
    , accept_link = config.accept_link || '#'
    , accept_link_target = config.accept_link_target || '_self'
    , reject_text = config.reject_text || 'No, thanks.'
    ;

  function randId() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
  }

  function applyStyles(modal) {
    modal.css({background: background, color: color});
  }

  function dismiss(modal) {
    modal.hide();
  }

  function createWrapper() {
    var id = randId();
    var wrapper = "<div class='conversion-modal " + type + "' id='" + 
        id + "'><div class='conversion-modal-wrapper'>" + html + 
        "<div class='actions'></div></div></div>";
    $("body").append(wrapper);

    wrapper = $("#" + id);

    var actions = $(".actions", wrapper);
    if(accept_text != undefined) {
      actions.append("<a class='accept-link' href='" + accept_link + 
        "' target='" + accept_link_target + "'>" + 
        accept_text + "</a>");
    }

    actions.append("<a class='reject-link' href='#'>" + 
        reject_text + "</a>");

    $(".reject-link, .accept-link", actions).bind("click", function() {
      dismiss(wrapper);
    });

    applyStyles(wrapper);
    return wrapper;
  }

  function exit_intent() {
    ouibounce(createWrapper()[0], config);
  }

  // Calls the appropriated function
  $(function() {
    eval(type + '();')
  });
};