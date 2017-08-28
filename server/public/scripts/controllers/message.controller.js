app.controller('MessageController', ['$http', function ($http) {
    var self = this;


    self.messages = { list: [] };
    

    self.addMessage = function (newMessage) {
        console.log(newMessage);
        
        $http.post('/messages', newMessage).then(function (response) {
            console.log('Get response: ', response.data);  
            self.getMessages();
        });//end of http.post
        //Clear input fields on click        
        self.newMessage = {};
    }//end of self.addMessage()

    self.getMessages = function () {
        $http.get('/messages').then(function (response) {
            self.messages.list = response.data;
        })//end of $http.get
    };//end of self.getListings()

    self.deleteMessage = function (messageId) {
        $http.delete('/messages/' + messageId).then(function (response) {
            self.getMessages();
        });
    }

    self.getMessages();

}]);