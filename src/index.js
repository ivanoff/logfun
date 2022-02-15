module.exports=new Proxy({},{get(...n){(c=>(console={...c,log:(...d)=>c.log(n[1],...d)}))(console)}})
