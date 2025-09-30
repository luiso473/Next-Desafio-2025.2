"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import { Pencil } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

export function ProductEditModal({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  async function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      description: formData.get("description"),
    };

    await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    setOpen(false);
    router.refresh();
  }

  return (
    <>
      <Pencil onClick={() => setOpen(true)} className="w-5 h-5 cursor-pointer text-blue-500" />

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Editar Produto"
        footer={
          <>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button type="submit" form="edit-product-form">Salvar</Button>
          </>
        }
      >
        <form id="edit-product-form" onSubmit={handleEdit} className="space-y-4">
          <div>
            <Label>Nome</Label>
            <Input name="title" defaultValue={product.title} />
          </div>
          <div>
            <Label>Preço</Label>
            <Input name="price" type="number" defaultValue={product.price} />
          </div>
          <div>
            <Label>Descrição</Label>
            <Input name="description" defaultValue={product.description} />
          </div>
        </form>
      </Modal>
    </>
  );
}
