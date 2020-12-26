import fetch from 'node-fetch'

async function login(Credentials){

    const res = await fetch('/api/v1/auth/login',{
      method: 'POST',
      body: JSON.stringify(Credentials),
      headers: {"Content-Type":"application/json"
    }})
    const _json = res.json();
    return _json;
    return null;
    //Login

/*     document.cookie = `${Auth.Cookie_Name}=Weird_Stuff`
 */
}

async function signUp(Credentials){
    const res = await fetch('/api/v1/auth/signup',{
        method: 'POST',
        body: JSON.stringify(Credentials),
        headers: {"Content-Type":"application/json"
      }})
      const _json = res.json();
      if(_json.status !== 200 || _json.message !== 'Account Created...') return _json;
      setAuthCookie(_json.JWT)
      return null;
}
async function logout(Crdentials){

    
    /* document.cookie = `${Auth.Cookie_Name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;` */
}

module.exports={
    login,
    logout,
    signUp
}