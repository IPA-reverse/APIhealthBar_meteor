Template.statusTpl.helpers({
    displayStatus:function(status){
        switch(status){
            case "success":
                return "thumbs-up"
                break;

            case "warning":
                return "exclamation-triangle"
                break;

            case "danger":
                return "bomb"
                break;
            default:
                return "child"
        }
    }
})
