import React from 'react'

const Balance = ({total, balance}) => {
  return (
    <>
    {
        total > 0 && balance -total !==0 && (
            <div><span>{balance - total}</span> AZN</div>
        )
    }

    {
        total == 0 && balance > 0 && (
            <div><span>{balance}</span>AZN</div>
        )
    }

    {
        balance-total == 0 && (
            <div>🤧</div>
        )
    }

    </>
  )
}

export default Balance