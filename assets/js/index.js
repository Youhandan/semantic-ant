/**
 *  ____  ____  _  _  ____  _  _  ___  _  ____        ____  _  _  ___
 *  [__   |___  |\/|  |__|  |\ |   |   |  |      __   |__|  |\ |   |
 *  ___]  |___  |  |  |  |  | \|   |   |  |___        |  |  | \|   |
 *
 *                  Ant Design inspired theme for Semantic-UI
 *
 *
 * This project was released under MIT license.
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

/* tuen off Bragit styles autoload */

Bragit.defaults({css:{ignore:true}})

$(document)
  .ready(function() {

    /* page */

    $('[data-content]')
      .popup({
        duration : 200,
        delay    : {
          show: 200,
          hide: 200
        },
        variation : 'inverted',
        position  : 'top center'
      })
    ;

    $('.ui.main.menu').visibility({
      once: false,
      type:'fixed',
      onFixed: function () {
        /* compensate for the missing menu height on the menu parent */
        $(this).parent().height($(this).height() -1)
      }
    })

    $('.ui.menu .ui.dropdown').dropdown({
      on: 'hover'
    });
    $('.ui.menu a.item')
      .on('click', function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
      })

      $('.overlay').visibility({
        type: 'fixed',
        offset: 100
      })

      $('a.item.theme').click(function() {
        changeTheme($(this).data('theme'))
      })

    /* sidebar */

    $('.ui.sidebar').sidebar({
        transition: 'push',
        dimPage: false
      }).sidebar('attach events', $('.launch'))

    $('.ui.sidebar .dropdown')
      .dropdown({
        onChange: function(theme) {
          changeTheme(theme)
        }
      }).dropdown('set selected', 'antd')

  })

  /*
   * Change Theme
   */

  function changeTheme(theme){
    console.log(theme)
    var regExp = /(\/components\/).*(\/[a-z]*.css)/
    $.each($('link.themable'), function() {
      $(this).attr('href', $(this).attr('href').replace(regExp, '$1' + theme + '$2'))
    })

    /* activate theme links */
    $('a.item.theme').removeClass('active')
    $('a.item.theme[data-theme="'+theme+'"]').addClass('active')

    /* set drop down too */
    $('.ui.sidebar .dropdown').dropdown('set selected', theme)
  }
