import './Card.css'

export function Card ({ colorName, colorHex }) {
  return (
    <>
      <div className='cardGrid' style={{ background: `#${colorHex}` }}>
        <p>{colorName}</p>
        <span>{`#${colorHex}`}</span>
      </div>
    </>
  )
}