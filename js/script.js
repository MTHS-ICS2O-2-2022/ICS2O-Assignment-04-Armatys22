// Copyright (c) 2020 Mr.Coxall All rights reserved
//
// Created by: dom
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const TAX = 1.13
  const coffee = 1.00
  const delivery = 15
  const size = parseFloat(document.getElementById("size").value)
  const flavour = parseFloat(document.getElementById("flavour").value)
  const coffeeAnswer = document.getElementById("coffie").value
  const pickUpOrDelivery = document.getElementById("pick-up-or-delivery").value

  const basePriceNoTAX = size + flavour
  const basePrice = basePriceNoTAX * TAX
  const coffeeOnly = (basePriceNoTAX + coffee) * TAX
  const deliveryOnly = (basePriceNoTAX + delivery) * TAX
  const coffeeAndDelivery = (basePriceNoTAX + coffee + delivery) * TAX

  const subtotal = calculateSubtotal(
    coffeeAnswer,
    pickUpOrDelivery,
    basePrice,
    coffeeOnly,
    deliveryOnly,
    coffeeAndDelivery,
    TAX
  )
  const tax = calculateTax(
    subtotal,
    coffeeAnswer,
    pickUpOrDelivery,
    basePrice,
    coffeeOnly,
    deliveryOnly,
    coffeeAndDelivery,
    TAX
  )

  document.getElementById("subtotal").innerHTML =
    "Subtotal: $" + subtotal.toFixed(2)
  document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
  document.getElementById("total").innerHTML =
    "Total: $" + (subtotal + tax).toFixed(2) + " including tax."
}

function calculateSubtotal(
  coffeeAnswer,
  pickUpOrDelivery,
  basePrice,
  coffeeOnly,
  deliveryOnly,
  coffeeAndDelivery,
  TAX
) {
  if (coffeeAnswer == "yes" && pickUpOrDelivery == "delivery") {
    return coffeeAndDelivery / TAX
  } else if (coffeeAnswer == "no" && pickUpOrDelivery == "delivery") {
    return deliveryOnly / TAX
  } else if (coffeeAnswer == "yes" && pickUpOrDelivery == "pick") {
    return coffeeOnly / TAX
  } else {
    return basePrice / TAX
  }
}

function calculateTax(
  subtotal,
  coffeeAnswer,
  pickUpOrDelivery,
  basePrice,
  coffeeOnly,
  deliveryOnly,
  coffeeAndDelivery,
  TAX
) {
  if (coffeeAnswer == "yes" && pickUpOrDelivery == "delivery") {
    return coffeeAndDelivery - subtotal
  } else if (coffeeAnswer == "no" && pickUpOrDelivery == "delivery") {
    return deliveryOnly - subtotal
  } else if (coffeeAnswer == "yes" && pickUpOrDelivery == "pick") {
  } else {
    return basePrice - subtotal
  }
}
