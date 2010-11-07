// $Id$
// Original Id: upload_progress.js,v 1.1 2007/11/17 06:47:47 pfournier Exp
/**
 * @file
 * Javascript functions for progress bar status on node creation forms
 *
 * @author Patrick Fournier <patrick at patrickfournier dot com>
 * @author Fabio Varesano <fvaresano at yahoo dot it>
 * Adapted by Bob Hutchinson for filepicker upload form
*/

( function ($) {

/**
 * Hide the node form and show the busy div
*/
  Drupal.filepicker_upload_progress_hide_timeout = function() {
    var delay = Drupal.settings.filepicker_upload_progress.delay;
    setTimeout('filepicker_upload_progress_hide', delay*1000);
  }

  function filepicker_upload_progress_hide() {
    $('#filepicker-upload-form').hide();
    $("#sending").show();
    $("#filepicker_upload_progress_cancel_link").click(Drupal.filepicker_upload_progress_show);
  }

  Drupal.filepicker_upload_progress_show = function() {
    $('#filepicker-upload-form').show();
    $("#sending").hide();

    // "reload" the form
    window.location = window.location;
  }

  Drupal.behaviors.filepicker = function() {
    // Attaches the upload behaviour to the filepicker upload form.
    $('#filepicker-upload-form').submit(Drupal.filepicker_upload_progress_hide_timeout);

    // form enhancement
    if ($("#edit-filepicker-quota-byrole").attr('checked')) {
      $("#wrap_filepicker_quota_role").show();
    }
    else {
      $("#wrap_filepicker_quota_role").hide();
    }
    $("#edit-filepicker-quota-byrole").change(function() {
      if ($("#edit-filepicker-quota-byrole").attr('checked')) {
        $("#wrap_filepicker_quota_role").show();
      }
      else {
        $("#wrap_filepicker_quota_role").hide();
      }
    });

    if ($("#edit-filepicker-import-enabled").attr('checked')) {
      $("#wrap-filepicker-import").show();
    }
    else {
      $("#wrap-filepicker-import").hide();
    }
    $("#edit-filepicker-import-enabled").change(function() {
      if ($("#edit-filepicker-import-enabled").attr('checked')) {
        $("#wrap-filepicker-import").show();
      }
      else {
        $("#wrap-filepicker-import").hide();
      }
    });


    if ($("#edit-filepicker-upload-progress-enabled").attr('checked')) {
      $("#wrap-filepicker-upload-progress").show();
    }
    else {
      $("#wrap-filepicker-upload-progress").hide();
    }
    $("#edit-filepicker-upload-progress-enabled").change(function() {
      if ($("#edit-filepicker-upload-progress-enabled").attr('checked')) {
        $("#wrap-filepicker-upload-progress").show();
      }
      else {
        $("#wrap-filepicker-upload-progress").hide();
      }
    });

    if ($("#edit-group-public").attr('checked')) {
      $("#wrap-group-public-roles").show();
    }
    else {
      $("#wrap-group-public-roles").hide();
    }
    $("#edit-group-public").change(function() {
      if ($("#edit-group-public").attr('checked')) {
        $("#wrap-group-public-roles").show();
      }
      else {
        $("#wrap-group-public-roles").hide();
      }
    });
  };

})(jQuery);
