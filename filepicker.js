// $Id$
/**
 * @file
 * Javascript functions for progress bar and form enhancement
 *
 * By Bob Hutchinson for filepicker upload form
*/

(function ($) {

/**
 * Hide the node form and show the busy div
*/

  Drupal.filepicker_upload_progress_hide = function() {
    $('#filepicker-upload-form').hide();
    $("#sending").show();
    $("#filepicker_upload_progress_cancel_link").click(Drupal.filepicker_upload_progress_show);
  }

  Drupal.filepicker_upload_progress_hide_timeout = function() {
    var delay = Drupal.settings.filepicker_upload_progress.delay;
    setTimeout(Drupal.filepicker_upload_progress_hide, delay*1000);
  }

  Drupal.filepicker_upload_progress_show = function() {
    $('#filepicker-upload-form').show();
    $("#sending").hide();

    // "reload" the form
    window.location = window.location;
  }

  Drupal.behaviors.filepicker = {
    attach: function(context) {

      // Attaches the upload behaviour to the filepicker upload form.
      $('#filepicker-upload-form', context).submit(Drupal.filepicker_upload_progress_hide_timeout);

      // form enhancement
      $("#edit-filepicker-quota-byrole", context).change(function() {
        if ($(this).attr('checked')) {
          $("#wrap-filepicker-quota-role", context).show();
        }
        else {
          $("#wrap-filepicker-quota-role", context).hide();
        }
      });

      $("#edit-filepicker-import-enabled", context).change(function() {
        if ($(this).attr('checked')) {
          $("#wrap-filepicker-import", context).show();
        }
        else {
          $("#wrap-filepicker-import", context).hide();
        }
      });

      $("#edit-filepicker-upload-progress-enabled", context).change(function() {
        if ($(this).attr('checked')) {
          $("#wrap-filepicker-upload-progress", context).show();
        }
        else {
          $("#wrap-filepicker-upload-progress", context).hide();
        }
      });

      $("#edit-filepicker-groups-enabled", context).change(function() {
        if ($(this).attr('checked')) {
          $("#wrap-filepicker-groups", context).show();
        }
        else {
          $("#wrap-filepicker-groups", context).hide();
        }
      });

    }
  };
})(jQuery);
