var app = new Vue({
    el: '#appData',

    data: {
        errorsEmpty: [],
        name: '',
        lastname: '',
        birthday: '',
        phoneNumber: '',
        email: '',
        question1: '',
        question2: '',
        logicalQuestion1: '',
        logicalQuestion2: '',
    },
    methods: {

        submit() {
            alert('Your application is being processed. We will get in touch :)');
        },

        validation: function (e) {

            if (this.name &&
                this.lastname &&
                this.birthday &&
                this.email &&
                this.phoneNumber &&
                this.email &&
                this.question1 &&
                this.question2 &&
                this.logicalQuestion1 &&
                this.logicalQuestion2.length > 0) {
                this.submit();
            }
        },
    }
});
