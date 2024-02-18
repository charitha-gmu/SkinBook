const routines = {
    acne: {
      morning: ["Cleanse your face gently with a product containing salicylic acid to remove excess oil and dead skin cells.", "Moisturize with an oil-free, non-comedogenic moisturizer to keep your skin hydrated.Protect your skin with a non-comedogenic sunscreen."],
      midday: ["Stay hydrated by drinking water or green tea, which has anti-inflammatory properties.", "For lunch, opt for a salad with leafy greens, a source of omega-3 fatty acids like salmon or flaxseeds, and a complex carbohydrate like quinoa.",  "Omega-3s can reduce inflammation associated with acne."],
      evening: ["Cleanse your skin to remove impurities and makeup.", "Treat any active acne with a product containing benzoyl peroxide or tea tree oil.Moisturize with an appropriate product."],
      sleep: ["Aim for 7-9 hours of quality sleep. Lack of sleep can increase stress, leading to spikes in cortisol, which can exacerbate acne."],
      dinner:["Dinner should include lean protein, vegetables, and a source of vitamins A and E, such as sweet potatoes or carrots, which support skin health."]
    },
  
    drySkin: {
      morning: ["Cleanse gently with a hydrating cleanser that does not strip your skin of its natural oils.Moisturize with a cream-based moisturizer rich in hyaluronic acid and ceramides to lock in moisture.", "Protect your skin with a moisturizing sunscreen to guard against UV damage."],
      midday: ["Keep hydrated with water or herbal teas throughout the day to maintain skin hydration.", "For lunch, opt for a salad dressed with olive oil (a healthy fat) and avocado.", "Include a protein source like grilled chicken or tofu for a balanced meal."],
      evening: ["Cleanse your skin to remove any impurities or makeup gently.", "Apply a richer, hydrating night cream that contains ingredients like glycerin, shea butter, or oils (jojoba, argan) to deeply moisturize overnight."],
      sleep: [""],
      dinner:["Dinner should be rich in vegetables and lean protein, incorporating foods with vitamin E (almonds, spinach) to support skin health."]
    },
  
    vascular: {
      morning: ["Cleanse with a gentle, anti-inflammatory cleanser to soothe the skin and reduce redness.", "Moisturize with a product containing calming ingredients like niacinamide, which can improve the skin's barrier function and reduce redness.", "Protect with a mineral-based sunscreen specifically designed for sensitive skin to prevent further damage and irritation."],
      midday: ["Stay hydrated with water or herbal teas that promote circulation, like ginger or hawthorn tea.", "For lunch, incorporate a salad with dark leafy greens and a source of vitamin C like bell peppers or citrus fruits, which are vital for collagen production and strengthening blood vessels."],
      evening: ["Cleanse your face gently to remove daily pollutants and makeup.", "Apply a calming serum or moisturizer formulated for sensitive skin, such as those with aloe vera or chamomile."],
      dinner:["Dinner should be light and anti-inflammatory.", "Foods like wild salmon, rich in omega-3s, and steamed vegetables can be beneficial."],
      sleep: ["Aim for 7-9 hours of sleep.", "Quality sleep can aid in cellular repair and help manage stress, which can exacerbate vascular issues."],
    },
  
    mildEczema: {
      morning: ["Cleanse gently with a fragrance-free, hydrating cleanser to avoid stripping the skin of its natural oils.Moisturize thoroughly with a cream or ointment that contains ceramides to help restore the skin barrier.", "Protect your skin with a mineral-based sunscreen if you will be exposed to the sun."],
      midday: ["Stay hydrated with water throughout the day to support overall hydration and skin health.", "For lunch, opt for a salad with leafy greens, topped with sources of antioxidants like carrots and beets, and a protein source such as grilled chicken or tofu."],
      evening: ["Bathe in lukewarm water using a mild, moisturizing body wash.", "Avoid hot water as it can exacerbate dryness and itching. Moisturize your skin while it is still damp to lock in moisture, using an eczema-friendly cream or ointment."],
      dinner:["Dinner should include foods rich in probiotics, such as a serving of kefir or yogurt, to support gut health and potentially reduce eczema flare-ups."],
      sleep: ["Aim for 7-9 hours of quality sleep. Poor sleep can increase stress, which may trigger eczema flares."],
    },
  
    oilySkin: {
      morning: ["Cleanse with a gentle, water-based cleanser to remove excess oil without stripping the skin.Tone using a mild, alcohol-free toner to balance the skin's pH.", "Moisturize with an oil-free, non-comedogenic moisturizer to hydrate without adding shine.Protect with a broad-spectrum, oil-free sunscreen."],
      midday: ["Stay hydrated with water or herbal teas. Proper hydration signals your glands that no extra oil is needed for hydration.", "For lunch, choose salads with lean protein or a sandwich on whole-grain bread. Include avocado for healthy fats, which help regulate oil production."],
      evening: ["Cleanse your skin again to remove impurities and excess oil accumulated throughout the day.Exfoliate 2-3 times a week with a gentle exfoliant to keep pores clear.Apply a light, oil-free night lotion if needed."],
      dinner:["Dinner should include foods rich in antioxidants, such as a quinoa bowl with mixed vegetables and grilled chicken or tofu.",  "Antioxidants help combat inflammation and can regulate sebum production."],
      sleep: ["Aim for 7-8 hours of quality sleep. Lack of sleep can increase stress, leading to increased cortisol levels, which can stimulate oil production."],
    },
  
    skinRedness: {
      morning: ["Cleanse gently with a lukewarm, mild, fragrance-free cleanser to avoid irritation.", "Moisturize with a product formulated for sensitive skin, ideally containing niacinamide or green tea, which can reduce redness"],
      midday: ["Stay hydrated by drinking water or herbal teas.", "Hydration is key to reducing overall inflammation and supporting skin health.", "For lunch, opt for a salad rich in omega-3 fatty acids, like one with salmon or flax seeds, to help manage inflammation."],
      evening: ["Cleanse your skin gently to remove the day's impurities without causing irritation Apply a calming, hydrating moisturizer or serum designed to soothe redness, containing ingredients like aloe vera or chamomile."],
      dinner:["Dinner should be light and include foods with anti-inflammatory properties, such as grilled chicken with steamed vegetables and quinoa.", "Avoid spicy foods and alcohol, which can exacerbate redness."],
      sleep: ["Aim for 7-9 hours of restorative sleep.", "Quality sleep can help reduce stress levels, thereby lessening skin inflammation and redness."],
    },
    wrinkles: {
      morning: ["Cleanse your skin with a gentle, hydrating cleanser to remove overnight buildup without stripping skin oils.", "Apply a vitamin C serum to help with collagen production and provide antioxidant protection.Moisturize with a product containing peptides and hyaluronic acid to plump up the skin and reduce the appearance of wrinkles.Protect your skin with a broad-spectrum sunscreen to prevent further UV damage.Opt for a breakfast with vitamin-rich foods like a smoothie with kale, berries, and almond butter for healthy fats."],
      midday: ["Stay hydrated throughout the day, as hydration is key to maintaining plump, youthful skin.", "For lunch, include lean protein like chicken or tofu, complex carbs like brown rice or sweet potatoes, and a mix of colorful vegetables for a range of antioxidants."],
      evening: ["Cleanse your face to remove makeup and environmental toxins.Apply a retinol product to help speed up cell turnover and improve skin texture.", "Moisturize again, focusing on products with nourishing ingredients like squalane or ceramides."],
      dinner:["A balanced diet rich in antioxidants can help fight the free radicals that lead to premature aging."],
      sleep: ["Prioritize 7-8 hours of restful sleep since the body repairs itself during sleep, which is crucial for skin health."],
    },
  };
  
  export { routines };