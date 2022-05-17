import React, {
  FormEvent,
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/axios";

export interface ModalTransactionHandles {
  openModal: () => void;
}

Modal.setAppElement("#root");

const ModalNewTransaction: ForwardRefRenderFunction<ModalTransactionHandles> = (
  _,
  ref
) => {
  const [isVisible, setIsVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("deposit");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTitle("");
    setType("deposit");
    setValue(0);
    setCategory("");
  }, []);

  const openModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  useImperativeHandle(ref, () => ({ openModal }));

  const handleCreateTransaction = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const data = {
        title,
        type,
        value,
        category,
      };

      api.post("/transactions", data);
      handleClose();
    },
    [title, type, value, category]
  );

  if (!isVisible) return null;

  return (
    <Modal
      isOpen={isVisible}
      onRequestClose={handleClose}
      contentLabel="Modal Nova Transação"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" className="react-modal-close" onClick={handleClose}>
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateTransaction}>
        <h2>Cadastrar transações</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="#33cc95"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="#e52b40"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default forwardRef(ModalNewTransaction);
