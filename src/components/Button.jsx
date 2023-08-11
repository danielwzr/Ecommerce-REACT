export default function ({ texto, cor, onClick }) {
    return <button onClick={onClick} style={{background:cor}} className="button-54">{texto}</button>;
  }
  