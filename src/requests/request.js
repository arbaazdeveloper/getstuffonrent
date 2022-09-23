const requests={
    getRequest:async (endpoint)=>{
        const res= await fetch(`${process.env.REACT_APP_API}${endpoint}`,{
            method:'GET',
            headers:{loginkey:localStorage.getItem('loginkey')}
        })
        const response=await res.json()
      
        return response

    },
    postRequest: async (endpoint,data)=>{
        const res= await fetch(`${process.env.REACT_APP_API}${endpoint}`,{
            method:'POST',
            headers:{
                'content-type':'application/json',
                loginkey:localStorage.getItem('loginkey')},
                body:JSON.stringify(data),
        })
        const response=await res.json()
        return response

    },
    putRequest:async(endpoint,data)=>{
        const res= await fetch(`${process.env.REACT_APP_API}${endpoint}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                loginkey:localStorage.getItem('loginkey')},
                body:JSON.stringify(data),
        })
        const response=await res.json()
        return response
    },
    deleteRequest:async (endpoint)=>{
            const res=await fetch(`${process.env.REACT_APP_API}${endpoint}`,{
                method:'DELETE',
                headers:{loginkey:localStorage.getItem('loginkey')}

            })
            const resposnse=await res.json()
            return resposnse
    },
    capitalizeFirstLetter:(string="a")=>{
        const arr=string.split(" ")
        for(var i=0; i<arr.length; i++){
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join(" ")
      }
}

export const {getRequest,postRequest,putRequest,deleteRequest,capitalizeFirstLetter}=requests