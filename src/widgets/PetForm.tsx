import { useState } from "react"

export const PetForm = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    breed: "",
    birth: "",
    weight: "",
    height: "",
    features: "",
    illness: "",
    photo: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPet({ ...pet, [e.target.name]: e.target.value })
  }

  return (
    <div className="grid gap-3">
      <input name="name" value={pet.name} onChange={handleChange} placeholder="Имя питомца" className="input" />
      <input name="type" value={pet.type} onChange={handleChange} placeholder="Вид животного (кошка, собака...)" className="input" />
      <input name="breed" value={pet.breed} onChange={handleChange} placeholder="Порода" className="input" />
      <input name="birth" value={pet.birth} onChange={handleChange} placeholder="Дата рождения" className="input" />
      <input name="weight" value={pet.weight} onChange={handleChange} placeholder="Вес (кг)" className="input" />
      <input name="height" value={pet.height} onChange={handleChange} placeholder="Рост (см)" className="input" />
      <input name="features" value={pet.features} onChange={handleChange} placeholder="Особенности (кастрация, аллергии...)" className="input" />
      <input name="illness" value={pet.illness} onChange={handleChange} placeholder="Заболевания" className="input" />
    </div>
  )
}
