import { TextField } from "@mui/material"


const IntroPages = () => {
  const title ="lol mastery"
  return (
    <>
    <div>
      <h1>{title.toUpperCase()}</h1>
      <h3 className="text-white">Search your champion mastery</h3>
    </div>
    <div className="mt-3">
      <TextField id="outlined-basic" label="GAME NAME #TAG" variant="outlined" fullWidth />
    </div>
    </>
    
  )
}

export default IntroPages
