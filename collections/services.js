Services = new Mongo.Collection("services");

var Schemas = {};

Schemas.Service = new SimpleSchema({
    name:{
        type:String,
        optional:true
    },
    endpoint:{
        type:String,
        optional:true
    },
    service_id:{
        type: Number,
        optional:true
    },
    monitor_id:{
        type: String,
        optional:true
    },
    key:{
        type: String,
        optional:true
    },
    status:{
        type: String,
        optional:true
    },
    createdAt: {
        type: Date,
          autoValue: function() {
            if (this.isInsert) {
              return new Date;
            } else if (this.isUpsert) {
              return {$setOnInsert: new Date};
            } else {
              this.unset();
            }
          }
      },
      // Force value to be current date (on server) upon update
      // and don't allow it to be set upon insert.
      updatedAt: {
        type: Date,
        autoValue: function() {
          if (this.isUpdate) {
            return new Date();
          }
        },
        denyInsert: true,
        optional: true
      }
})

Services.attachSchema(Schemas.Service)
