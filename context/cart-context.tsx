"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { useToast } from "@/hooks/use-toast"

export type CartItem = {
  id: number
  name: string
  price: number
  type: string
  image?: string
  quantity: number
  greenScore?: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  clearCart: () => void
  itemCount: number
  totalPrice: number
  discountedPrice: number
  discount: number
  totalGreenScore: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const { toast } = useToast()

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex((item) => item.id === newItem.id && item.type === newItem.type)

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += 1

        toast({
          title: "Item added to cart",
          description: `${newItem.name} quantity increased to ${updatedItems[existingItemIndex].quantity}`,
        })

        return updatedItems
      } else {
        // Add new item with quantity 1
        toast({
          title: "Item added to cart",
          description: `${newItem.name} has been added to your cart`,
        })

        return [...prevItems, { ...newItem, quantity: 1 }]
      }
    })
  }

  const removeItem = (id: number) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.id === id)
      if (itemToRemove) {
        toast({
          title: "Item removed from cart",
          description: `${itemToRemove.name} has been removed from your cart`,
        })
      }
      return prevItems.filter((item) => item.id !== id)
    })
  }

  const clearCart = () => {
    setItems([])
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    })
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  // Calculate total green score from all items
  const totalGreenScore = items.reduce((total, item) => {
    return total + ((item.greenScore || 0) * item.quantity)
  }, 0)

  // Calculate discount percentage based on average green score
  // Higher green score = higher discount (up to 15%)
  const calculateDiscount = () => {
    if (items.length === 0) return 0

    // Calculate average green score
    const avgGreenScore = totalGreenScore / itemCount

    // Discount tiers based on average green score
    if (avgGreenScore >= 95) return 0.15 // 15% discount
    if (avgGreenScore >= 90) return 0.12 // 12% discount
    if (avgGreenScore >= 85) return 0.10 // 10% discount
    if (avgGreenScore >= 80) return 0.08 // 8% discount
    if (avgGreenScore >= 75) return 0.05 // 5% discount
    if (avgGreenScore >= 70) return 0.03 // 3% discount

    return 0 // No discount
  }

  const discount = calculateDiscount() * totalPrice
  const discountedPrice = totalPrice - discount

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      clearCart,
      itemCount,
      totalPrice,
      discountedPrice,
      discount,
      totalGreenScore
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
