angular.module('teamApp', ['ngAnimate'])
  .controller('teamController', function(){
    var teamList = this;
    teamList.list = [{people: [{name: 'Alexander', img1: './images/a.png', img2: './images/dibujo1.png',toggle:true},
                                {name: 'Christian', img1: './images/christian.jpg', img2: './images/dibujo.png',toggle:true},
                              {name: 'Louis', img1: './images/louise.jpg', img2: './images/dibujo2.png',toggle:true}]},
                    {people:[{name:'Jakob', img1:'./images/j.png', img2: './images/dibujo3.png',toggle:true},
                              {name: 'Noam', img1:'./images/n.png', img2: './images/dibujo4.png',toggle:true},
                            {name: 'Leticia', img1: './images/l.png', img2: './images/dibujo5.png',toggle:true}]}
                    ];
  });
