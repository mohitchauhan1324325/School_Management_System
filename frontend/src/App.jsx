import { useState } from 'react'
import StudentsPage from './pages/StudentsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddStudents from './pages/AddStudents'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/addStudents" element={<AddStudents />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="colored"
        />
      </BrowserRouter>
    </>
  )
}

export default App
