function validateForm()
{
    var nombre="";
    var email="";
    var flag=true;
    
    if(/([a-zA])/.test(nombre))
        {
            flag=false;
        }
    console.log(flag);
    
    var flag = true;
    if(email.indexOf("@")<9)
        {
            flag=false;
        }
    console.log(flag)
    
    
    
	/* Escribe tú código aquí */
}