import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Clock from './components/clock/clock'
function App() {


  const [background, setBackground] = useState('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed413db0-91e7-4cd6-adcf-1d7735d97833/daosbsr-ea14fdd8-8bea-482a-8efb-997f055afcda.png/v1/fill/w_1024,h_576,q_80,strp/goku_vs_frieza__title_intro___4k__wallpaper_by_davidmaxsteinbach_daosbsr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZWQ0MTNkYjAtOTFlNy00Y2Q2LWFkY2YtMWQ3NzM1ZDk3ODMzXC9kYW9zYnNyLWVhMTRmZGQ4LThiZWEtNDgyYS04ZWZiLTk5N2YwNTVhZmNkYS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.njqX50NKoNLzmIDGiaASV8hO13nrTGamlPQJ1zXDia4')
  const [searchValue, setSearchValue]= useState('')

  const Background = styled.div`
        width:100vw;
        height:100vh;
        background-image: url(${props => props.img});
        background-size:cover;
  `
  const handleChange = (e)=>{
    e.preventDefault()
    setSearchValue(e.target.value)
    console.log(searchValue)
  }
  const handleSubmit= ()=>{

    window.location=`http://www.google.com/search?q=${escape(searchValue)}`
  }
  const GoogleSearch = styled.div`
    position:fixed;
    top:0;
    right:50%;
    color:white;
    input{
      background:transparent;
      border:none;
      border-bottom:2px solid white;
      padding:1rem 0;
      &:focus{outline:0}
    }
  `
  return (
    <div className='App'>
      <Background img={background} />
      <Clock/>

      <form action="http://www.google.com/search" method="get">
        <GoogleSearch>
          Search:
         <input type="text" name="q"/>
        </GoogleSearch>

      </form>
    </div>
  );
}

export default App;
