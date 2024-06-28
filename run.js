
(async()=>{

  const waiting = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
  };

  for(let i=0;i< 10000000){
    console.log("Ok")
    await waiting(50000)
  }
})()
