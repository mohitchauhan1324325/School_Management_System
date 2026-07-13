import { useState } from 'react'
import StudentsPage from './pages/StudentsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddStudents from './pages/AddStudents'
import { ToastContainer } from 'react-toastify'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import StudentDetails from './pages/StudentDetails'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/Students/:id" element={<StudentDetails />} />

          <Route
            path="/addStudents"
            element={
              <AddStudents />

            }
          />

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
