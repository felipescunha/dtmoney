import './App.css';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactioModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactionsContext';

Modal.setAppElement('#root');

export  function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionalModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionalModal={handleOpenNewTransactionalModal} />
      <Dashboard/>
      <NewTransactioModal
        isOpen={isNewTransactionModalOpen}
        OnRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
