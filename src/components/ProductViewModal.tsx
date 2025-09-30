"use client";

import { Eye } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import { Product } from "@prisma/client";

interface ProductViewModalProps {
  product: Product;
}

export function ProductViewModal({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Eye onClick={() => setOpen(true)} className="w-5 h-5 cursor-pointer" />

      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Visualizar Produto"
      >
        <div className="space-y-2">
          <p><strong>Nome:</strong> {product.title}</p>
          <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
          <p><strong>Descrição:</strong> {product.description}</p>
          {product.imageUrl && (
            <img src={product.imageUrl} alt={product.title} className="w-32 h-32 object-cover" />
          )}
        </div>
      </Modal>
    </>
  );
}
