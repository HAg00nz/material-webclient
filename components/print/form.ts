'use client'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useStore from '@/app/store/store'
import { useShallow } from 'zustand/react/shallow'

const PrintForm: React.FC = () => {
  const [hostname, setHostname] = useState('')
  const { printerID: num, layoutID: num } = useStore()

  function getAllInputValues() {
    const inputsContainer = document.getElementById('inputs')
    const inputElements = inputsContainer?.querySelectorAll('input') || []

    const inputValues: Record<string, string> = {}

    inputElements.forEach((input: HTMLInputElement) => {
      const name = input.getAttribute('name')
      const value = input.value

      // Add input value to the object with the input name as the key
      if (name) {
        inputValues[name] = value
      }
    })

    return inputValues
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Access input values from the state object
    printring()
  }

  const printring = async () => {
    try {
      const Layouts = await fetch('http://localhost:3000/api/print', {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify({
          printerId: printerID,
          layoutId: layoutID,
          parameters: getAllInputValues(),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}
