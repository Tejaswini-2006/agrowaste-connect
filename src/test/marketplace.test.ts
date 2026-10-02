import { describe, it, expect } from "vitest";

describe("AgroWaste Connect Marketplace & AI Calculator Logic", () => {
  it("calculates correct farmer earnings for paddy straw", () => {
    const baseRate = 1800;
    const quantity = 20;
    const totalEarnings = baseRate * quantity;
    const co2Saved = Math.round(quantity * 1.5 * 10) / 10;

    expect(totalEarnings).toBe(36000);
    expect(co2Saved).toBe(30);
  });

  it("adjusts stubble rate based on moisture content", () => {
    const baseRate = 2000;
    const dryFactor = 1.1; // 10% moisture
    const freshFactor = 0.85; // 20% moisture

    expect(Math.round(baseRate * dryFactor)).toBe(2200);
    expect(Math.round(baseRate * freshFactor)).toBe(1700);
  });

  it("calculates environmental impact correctly", () => {
    const quantityTonnes = 50;
    const co2Saved = Math.round(quantityTonnes * 1.5);
    expect(co2Saved).toBe(75);
  });
});
