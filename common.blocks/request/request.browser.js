/* global modules:false */

modules.define('request',
               ['jquery', 'vow'],
               function(provide, $, Vow) {

  /**
   * Doing AJAX request
   * @param string method request method (GET, POST...)
   * @param string url    request url
   * @param object data   request data
   * @param object format [optional] data format. Default `json`
   * @returns object promise
   */
  var req = function(method, url, data, headers, format){
    var deferred = Vow.defer(),
        isFd = data instanceof FormData;
    $.ajax({
      method : method,
      url : url,
      dataType : format || 'json',
      processData : !isFd,
      contentType : isFd? false :'application/x-www-form-urlencoded',
      data : data,
      headers : headers,
      success : function(res, status, xhr) {
        deferred.resolve(_formatRes(res, status, xhr), this);
      },
      error : function(err, status, xhr){
        deferred.reject(_formatRes(err, status, xhr), this);
      },
      context : this
    });
    return deferred.promise();
  };

  /**
   * @returns object responce
   *  {
   *    message: 'string'
   *  }
   */
  function _formatRes(res, status) {
    var fRes = {};
    if(typeof res === 'object') {
      if(status !== 'success') {
        res = res.responseJSON? res.responseJSON : res;
      }

      res.message = res.message? res.message : status;

       fRes = res;
    } else {
       fRes.message = res;
    }

    return fRes;
  }

provide(req);

});

