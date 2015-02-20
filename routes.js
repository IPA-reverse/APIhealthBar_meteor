Router.configure({
  layoutTemplate: 'defaultLayout'
});

Router.route('/', {
    name:"index",
    template:"index"
});

Router.route('/monitor/:monitor_id/services/:service_id/status', {
    name:"status",
    template:"statusTpl",
    waitOn:function(){
        return Meteor.subscribe('services')
    },
    data: function() {
        service_id = parseInt(this.params.service_id,10)
        monitor_id = this.params.monitor_id;
        return {
            services: Services.findOne({service_id:service_id,monitor_id:monitor_id})
        }
    }
});

Router.route('/hook', { where: "server"})
.post(function(){
    console.log(this.request.body)
    body = this.request.body
    if(body){
        var service = Services.findOne({service_id:body.service_id,monitor_id:body.monitor_id})
        if(service){
            Services.update({_id:service._id},{
                $set:{
                    status: body.status
                }
            })
        }
    }
    this.response.end("OK")
})
