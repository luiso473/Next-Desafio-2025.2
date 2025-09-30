"use client";

import { useState } from "react";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function ProductModalTrigger() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  
  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
    };

    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    setOpen(false);
    router.refresh(); // 🔄 atualiza lista de produtos
  }

  return (
    <>
      <button
        className="bg-yellow-400 px-4 py-2 rounded-full shadow hover:bg-yellow-500"
        onClick={() => setOpen(true)}
      >
        Novo produto
      </button>

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Adicionar Produto"
        description="Preencha os campos para cadastrar um novo produto."
        footer={
          <>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" form="add-product-form">Salvar</Button>
          </>
        }
      >
        <form id="add-product-form" onSubmit={handleAdd} className="space-y-4">
          <div>
            <Label htmlFor="title">Nome</Label>
            <Input id="title" placeholder="Notebook Dell XPS" />
          </div>
          <div>
            <Label htmlFor="price">Preço</Label>
            <Input id="price" type="number" placeholder="2500" />
          </div>
          <div>
            <Label htmlFor="description">Descrição</Label>
            <Input id="description" placeholder="Escreva uma breve descrição..." />
          </div>
        </form>
      </Modal>
    </>
  );
}
