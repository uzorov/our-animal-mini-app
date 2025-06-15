import { UserForm } from "../widgets/UserForm"
import { PetForm } from "../widgets/PetForm"
import { Header } from "../widgets/Header"

export default function ProfilePage() {
  return (
    <div className="bg-milk min-h-screen p-4">
      <Header />

      <h1 className="text-xl font-bold mb-4 text-primary">Я и мой питомец</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-semibold mb-2">Контактная информация</h2>
          <UserForm />
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Питомец</h2>
          <PetForm />
        </section>
      </div>
    </div>
  )
}
