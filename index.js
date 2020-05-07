function realizarPago(){
    Onepay.checkout({
        endpoint:'http://localhost:4545/newtransaction',
        commerceLogo: '',
        callbackUrl: 'http://localhost:4545/result',
        transactionDescription: 'Set de pelotas',
        onclose: function (status) {
            console.log('el estado recibido es: ', status);
        }
      });
}