
export function time(t){
        
    let s =Date.now() -  t * 1000;
    let min = s / 60 / 1000;
    let hrs = min /60;
    var days = hrs / 24;
    var month = days / 30;
    var year = days / 365;
    
    if(year >= 1){
        return Math.floor(year) > 1 ? Math.floor(year) +" years" : Math.floor(year) +" year";
    }else if(month >= 1){
        return Math.floor(month) > 1 ? Math.floor(month) + " months" :Math.floor(month) +" month";
    }else if (days >=1){
        return Math.floor(days) > 1 ? Math.floor(days) + " days" : Math.floor(days) + " day";
    }else if (hrs >=1){
        return Math.floor(hrs) > 1 ? Math.floor(hrs) + " hours" : Math.floor(hrs) + " hrs";
    }else {   
        return Math.floor(min) > 1 ? Math.floor(min) + " minutes" : Math.floor(min) + " minute";
    }

}
