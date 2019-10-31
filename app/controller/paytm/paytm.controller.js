var checksum=require('./checksum')

module.exports = {
    getRequest:(req,res)=>{
       res.render("paytm/index");
    },
    request:(req,res)=>{
        var paramlist = req.body;
        var paramarray = new Array();
       
        for(name in paramlist){
            if(name==="PAYTM_MERCHANT_KEY"){
               var PAYTM_MERCHANT_KEY = paramlist[name];
            }else{
                paramarray[name] = paramlist[name];
            }
        }//http://34.65.110.237/api
         paramarray["CALLBACK_URL"]="http://34.65.110.237/api/paytm/response";
         checksum.genchecksum(paramarray,PAYTM_MERCHANT_KEY,(err,result)=>{
            if(err) throw err;
            res.render("paytm/request",{result});
        })
    },
    response:(req,res)=>{
      console.log(req.body);
      console.log("Jai Siya Ram.....Jai Hanuman")
      
      if(req.body.RESPCODE ==='01'){
        res.render("paytm/response",{
            status:true,
            rsult:res.body
        });
      }else{
        res.render("paytm/response",{
            status:false,
            rsult:res.body
        });
      }
    }
};