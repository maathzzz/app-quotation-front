import { useRef, useState } from 'react';
import { Repeat } from '@phosphor-icons/react';
import styles from './CoinConverter.module.css'

interface coinPrice {
  coinPrice: number
  coinName: string
}

export function CoinConverter({coinPrice, coinName}: coinPrice){
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
  const [ estado, setEstado ] = useState(1);
  const [realValue, setRealValue] = useState<string>('');
  const [coinValue, setCoinValue] = useState<string>(``);

  const handleRealInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setRealValue(value);
    if (!isNaN(Number(value))) {
      const conversionResult = Number(value) / coinPrice; 
      setCoinValue(conversionResult.toFixed(8));
    } else {
      setCoinValue('');
    }
  };

  const inverterElementos = () => {
    // if (input1Ref.current && input2Ref.current) {
    //   const parent = input1Ref.current.parentNode;
    //   const sibling = input1Ref.current.nextSibling;

    //   parent?.insertBefore(input1Ref.current, input2Ref.current);
    //   parent?.insertBefore(input2Ref.current, sibling);
    // }

    if(estado === 1){
      setEstado(0)
    } else {
      setEstado(1)
    }
  };

  const handleCoinInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setCoinValue(value);
    if (!isNaN(Number(value))) {
      const realResult = Number(value) * coinPrice; 
      setRealValue(realResult.toFixed(2));
    } else {
      setRealValue('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={estado === 1 ? styles.inputNormal : styles.inputTrocado}>
        <input
          type="number"
          value={realValue}
          placeholder="R$ (BRL)"
          onInput={handleRealInputChange}
          ref={input1Ref}
        />
        <input
          type="number"
          value={coinValue}
          placeholder={`${coinName}`}
          onInput={handleCoinInputChange}
          ref={input2Ref}
        />
      </div>
      <button onClick={inverterElementos}><Repeat weight='fill' color="#FFFF" size={24}/></button>
    </div>
  );
}
