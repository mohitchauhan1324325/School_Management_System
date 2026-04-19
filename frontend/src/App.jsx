import { useState } from 'react'
import StudentsPage from './pages/StudentsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddStudents from './pages/AddStudents'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/addStudents" element={<AddStudents />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
