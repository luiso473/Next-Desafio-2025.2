"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

export function ProductDeleteModal({ productId }: { productId: number }) {
  const [open, setOpen] = useState(false);

  async function handleDelete() {
    await fetch(`/api/products/${productId}`, { method: "DELETE" });
    setOpen(false);
  }

  return (
    <>
      <Trash2 onClick={() => setOpen(true)} className="w-5 h-5 cursor-pointer text-red-500" />

      <Modal
              open={open}
              onOpenChange={setOpen}
              title="Excluir Produto"
              description="Tem certeza que deseja excluir este produto?"
              footer={<>
                  <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                  <Button onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
                      Excluir
                  </Button>
              </>} children={undefined}      />
    </>
  );
}
