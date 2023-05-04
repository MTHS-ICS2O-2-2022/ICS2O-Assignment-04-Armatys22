// Copyright (c) 2020 Mr.Coxall All rights reserved
//
// Created by: dom
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const TAX = 1.13
  const sprinkles = 1.00
  const delivery = 15
  const size = parseFloat(document.getElementById("size").value)
  const flavour = parseFloat(document.getElementById("flavour").value)
  const sprinklesAnswer = document.getElementById("sprinkles").value
  const pickUpOrDelivery = document.getElementById("pick-up-or-delivery").value

  const basePriceNoTAX = size + flavour
  const basePrice = basePriceNoTAX * TAX
  const sprinklesOnly = (basePriceNoTAX + sprinkles) * TAX
  const deliveryOnly = (basePriceNoTAX + delivery) * TAX
  const sprinklesAndDelivery = (basePriceNoTAX + sprinkles + delivery) * TAX

  const subtotal = calculateSubtotal(
    sprinklesAnswer,
    pickUpOrDelivery,
    basePrice,
    sprinklesOnly,
    deliveryOnly,
    sprinklesAndDelivery,
    TAX
  )
  const tax = calculateTax(
    subtotal,
    sprinklesAnswer,
    pickUpOrDelivery,
    basePrice,
    sprinklesOnly,
    deliveryOnly,
    sprinklesAndDelivery,
    TAX
  )

  document.getElementById("subtotal").innerHTML =
    "Subtotal: $" + subtotal.toFixed(2)
  document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
  document.getElementById("total").innerHTML =
    "Total: $" + (subtotal + tax).toFixed(2) + " including tax."
}

function calculateSubtotal(
  sprinklesAnswer,
  pickUpOrDelivery,
  basePrice,
  sprinklesOnly,
  deliveryOnly,
  sprinklesAndDelivery,
  TAX
) {
  if (sprinklesAnswer == "yes" && pickUpOrDelivery == "delivery") {
    return sprinklesAndDelivery / TAX
  } else if (sprinklesAnswer == "no" && pickUpOrDelivery == "delivery") {
    return deliveryOnly / TAX
  } else if (sprinklesAnswer == "yes" && pickUpOrDelivery == "pick") {
    return sprinklesOnly / TAX
  } else {
    return basePrice / TAX
  }
}

function calculateTax(
  subtotal,
  sprinklesAnswer,
  pickUpOrDelivery,
  basePrice,
  sprinklesOnly,
  deliveryOnly,
  sprinklesAndDelivery,
  TAX
) {
  if (sprinklesAnswer == "yes" && pickUpOrDelivery == "delivery") {
    return sprinklesAndDelivery - subtotal
  } else if (sprinklesAnswer == "no" && pickUpOrDelivery == "delivery") {
    return deliveryOnly - subtotal
  } else if (sprinklesAnswer == "yes" && pickUpOrDelivery == "pick") {
  } else {
    return basePrice - subtotal
  }
}
