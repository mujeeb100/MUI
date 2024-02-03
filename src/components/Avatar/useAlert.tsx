import React, {
  createContext, useContext, useState, ReactNode, useMemo,
} from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

type Severity = 'info' | 'success' | 'warning' | 'error' | undefined;

interface AlertContextType {
  showAlert: (newMessage: string, newSeverity?: Severity) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider')
  }
  return context
}

interface AlertProviderProps {
  children: ReactNode;
}

function AlertProvider({ children }: AlertProviderProps) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<Severity>('info')

  const showAlert = (newMessage: string, newSeverity: Severity = 'info') => {
    setMessage(newMessage)
    setSeverity(newSeverity)
    setOpen(true)
  }

  const hideAlert = () => {
    setOpen(false)
  }

  const alertContextValue = useMemo(() => ({ showAlert }), [showAlert])

  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        open={open}
        onClose={hideAlert}
      >
        <Alert severity={severity} onClose={hideAlert}>
          {message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  )
}

export default AlertProvider
