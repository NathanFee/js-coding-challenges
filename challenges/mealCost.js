// Meal cost

function solve(meal_cost, tip_percent, tax_percent) {
  const tip = meal_cost * (tip_percent/100)
  const tax = meal_cost * (tax_percent/100)

  return Math.round(meal_cost + tip + tax)
}

console.log(solve(12.00, 20, 8))
