
// displaying subjects 
var dropdownitem=document.querySelectorAll(".dropdown-item");
dropdownitem.forEach((ele)=>{
  ele.addEventListener('click',()=>{
    if(ele.innerHTML==='Class I')
    {
        var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -1
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Yoga</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Drawing</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Games</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class II')
    {
        var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -1
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Yoga</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Drawing</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Games</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class III')
    {
        var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -1
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Yoga</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Drawing</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Games</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class IV')
    {
        var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -4
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">E.v.s</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Drawing</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Games</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class V')
    {
        var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -5
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">E.V.S</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Drawing</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Games</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class VI')
    {
      var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -6
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Science</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Drawing</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Social Science</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class VII')
    {
      var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -7
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Science</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Drawing</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Social Science</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class VIII')
    {
        var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -8
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Science</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Drawing</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Social Science</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class IX')
    {
      var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -9
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Chemistry</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Pysics</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Biology</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class X')
    {
      var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -10
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Chemistry</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Pysics</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Biology</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class XI')
    {
        var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -11
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Chemistry</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Pysics</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Biology</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }
    else if(ele.innerHTML==='Class XII')
    {
        var div=` <div class="row mt-5">
      <div class="col-md-10 col-12 mx-auto">
        <h1 class="text-center" style="font-family: 'Cinzel', serif;letter-spacing: .3rem;">
          C.l.a.s.s -12
        </h1>
      </div>
    </div>
<div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Maths</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #ee6c4d;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Chemistry</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #3d5a80;">
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Physics</h1></div>
      </div>
    </div>

    <div class="row mt-5 mx-auto">
      <div class="col-md-3 col-12 cl">
        <div class="box-img" style="background-color: #ff006e;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">English</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color: #2ec4b6;">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Hindi</h1></div>
      </div>
      <div class="col-md-3 offset-1 col-12 cl">
        <div class="box-img" style="background-color:#fee440">
          
        </div>
        <hr>
        <div class="title"><h1 class="text-center">Biology</h1></div>
      </div>
    </div>`;
    container.innerHTML=div;
    }

  })
})      