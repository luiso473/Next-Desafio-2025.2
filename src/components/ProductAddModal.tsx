"use client";

import { useState } from "react";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProductModalTrigger() {
  const [open, setOpen] = useState(false);

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
            <Button>Salvar</Button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Notebook Dell XPS" />
          </div>
          <div>
            <Label htmlFor="price">Preço</Label>
            <Input id="price" type="number" placeholder="2500" />
          </div>
          <div>
            <Label htmlFor="description">Descrição</Label>
            <Input id="description" placeholder="Escreva uma breve descrição..." />
          </div>
        </div>
      </Modal>
    </>
  );
}
