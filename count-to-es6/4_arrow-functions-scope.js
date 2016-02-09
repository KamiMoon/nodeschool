 var foot = {
        kick: function () {
            this.yelp = "Ouch!";

            //setImmediate(function () {
            //    console.log(this.yelp); //undefined
            //});

 			setImmediate(()=> console.log(this.yelp));
        }
    };
    foot.kick();