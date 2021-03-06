window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  var image = window.createCropperImage();

  function isNumber(n) {
    return typeof n === 'number' && !isNaN(n);
  }

  image.newCropper = new Cropper(image, {
    built: function () {
      var data = this.cropper.getData();

      QUnit.test('methods.getData', function (assert) {
        assert.ok(isNumber(data.x));
        assert.ok(isNumber(data.y));
        assert.ok(isNumber(data.width));
        assert.ok(isNumber(data.height));
        assert.ok(isNumber(data.rotate));
        assert.ok(isNumber(data.scaleX));
        assert.ok(isNumber(data.scaleY));
      });

    }
  });

});
