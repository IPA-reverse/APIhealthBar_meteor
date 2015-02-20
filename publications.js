if(Meteor.isServer){
Meteor.publish('services',function(){
    return Services.find({});
})}
