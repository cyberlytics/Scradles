var verblieben = 10; // muss geandert werden
var timer = setInterval(function(p0='None',p1='None'){
  if(verblieben <= 0 && p0=='None' && p1=='None'){
    clearInterval(timer);
    return p0, p1
  }
  else if (verblieben <= 0 && p0=='None' && p1!='None'){
    clearInterval(timer);
    return p0, p1
  }
  else if (verblieben <= 0 && p0!='None' && p1=='None'){
    clearInterval(timer);
    return p0, p1
  }
  else if (p0!='None' && p1!='None'){
    clearInterval(timer);
    return p0, p1
  }
  verblieben -= 1;
}, 1000);

module.exports = timer;
