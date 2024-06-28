
(async()=>{

  const waiting = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
  };

  for(let i=0;i< 10000000;i++){
    console.log("Ok", i)
    await waiting(50000)
  }
})()
