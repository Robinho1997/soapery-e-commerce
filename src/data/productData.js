const productData = [
  {
    name: "Orange Blossom hand soap",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1601092404239-a24544fb387c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    info: "HAND 50MG (19,94 €/100ML)",
    germanDescription:
      "Die Orange Blossom Handseife ist eine erfrischende und duftende Möglichkeit Ihre Hände zu reinigen. Hergestellt aus natürlichen Inhaltsstoffen und mit dem süßen Aroma von Orangenblüten angereichert hinterlässt sie Ihre Haut weich und geschmeidig. Perfekt für die tägliche Anwendung in Ihrem Badezimmer oder Küche.",
    englishDescription:
      "The Orange Blossom hand soap is a refreshing and fragrant way to clean your hands. Made from natural ingredients and enriched with the sweet aroma of orange blossoms, it leaves your skin soft and supple. Perfect for daily use in your bathroom or kitchen.",
  },
  {
    name: "HONOLULU SUN",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1649176154020-c695980078e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    info: "HAND 50ML (8,94 €/100ML)",
    germanDescription:
      "Die Honolulu Sun Seife bringt den sonnigen Spirit von Hawaii in Ihre Hände. Mit einer Mischung aus tropischen Früchten und Blumen angereichert verwöhnt diese Seife Ihre Sinne und hinterlässt Ihre Haut mit einem angenehmen Duft. Hergestellt aus hochwertigen Inhaltsstoffen, reinigt sie gründlich und hinterlässt Ihre Hände weich und sauber.",
    englishDescription:
      "The Honolulu Sun soap brings the sunny spirit of Hawaii to your hands. Enriched with a blend of tropical fruits and flowers, this soap pampers your senses and leaves your skin with a pleasant scent. Made from high-quality ingredients, it cleanses thoroughly and leaves your hands soft and clean.",
  },
  {
    name: "PREMIUM BOTTLE GOLD BERRY",
    price: 36.99,
    img: "https://images.unsplash.com/photo-1645724466769-75cb1dfbae5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    info: "HAND 50ML (19,94 €/100ML)",
    germanDescription:
      "Die Premium Bottle Gold Berry Seife ist ein luxuriöses Reinigungsprodukt, welche Ihre Hände mit einem Hauch von Eleganz umgibt. Die einzigartige Mischung aus Beeren und Goldflakes schafft eine einzigartige Erfahrung, die Ihre Haut nährt und pflegt. Verpackt in einer edlen Flasche ist diese Seife ein perfektes Geschenk für jeden Anlass.",
    englishDescription:
      "The Premium Bottle Gold Berry soap is a luxurious cleansing product that surrounds your hands with a touch of elegance. The unique blend of berries and gold flakes creates a unique experience that nourishes and moisturizes your skin. Packaged in an elegant bottle, this soap makes a perfect gift for any occasion.",
  },
  {
    name: "CUROLOGY PURPLE HEAL",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    info: "HAND 50ML (5,94 €/100ML)",
    germanDescription:
      "Die Curology Purple Heal Seife ist eine leistungsstarke Lösung für Problemhaut. Mit einer speziellen Formel aus lila Teebaumöl und anderen hautfreundlichen Inhaltsstoffen hilft sie, Akne und Unreinheiten zu bekämpfen, während sie gleichzeitig Ihre Haut sanft reinigt. Perfekt für alle, die nach einer natürlichen und effektiven Lösung suchen.",
    englishDescription:
      "The CUROLOGY PURPLE HEAL soap is a powerful solution for problem skin. With a special formula of purple tea tree oil and other skin-friendly ingredients, it helps to combat acne and blemishes while gently cleansing your skin. Perfect for anyone looking for a natural and effective solution.",
  },
  {
    name: "Batch Calm & Relax",
    price: 5.99,
    img: "https://images.unsplash.com/photo-1593551496870-8c7803f3d5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    info: "HAND 50MG (19,94 €/100ML)",
    germanDescription:
      "Die Batch Calm & Relax Seife ist eine beruhigende und entspannende Möglichkeit, um Ihren Tag zu beenden. Mit einer Mischung aus Lavendel und Kamille hilft sie, Stress abzubauen und Ihre Haut zu beruhigen. Hergestellt aus natürlichen Inhaltsstoffen, ist sie sanft genug für den täglichen Gebrauch und hinterlässt Ihre Hände sauber und erfrischt.",
    englishDescription:
      "The Batch Calm & Relax soap is a soothing and relaxing way to end your day. With a blend of lavender and chamomile, it helps to reduce stress and soothe your skin. Made from natural ingredients, it is gentle enough for daily use and leaves your hands clean and refreshed.",
  },
  {
    name: "Kaeme Goldflakes Premium",
    price: 26.99,
    img: "https://images.unsplash.com/photo-1648203174420-aa0cc956ae45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    info: "HAND 50MG (11,94 €/100ML)",
    germanDescription:
      "Die Kaeme Goldflakes Premium Seife ist eine luxuriöse Art, um Ihre Hände zu reinigen und zu pflegen. Mit echten Goldflakes und einer Mischung aus natürlichen Inhaltsstoffen angereichert, hinterlässt sie Ihre Haut mit einem seidigen Gefühl. Der sinnliche Duft von Rosen und Jasmin macht diese Seife zu einem wahren Genuss für Ihre Sinne.",
    englishDescription:
      "The Kaeme Goldflakes Premium soap is a luxurious way to cleanse and moisturize your hands. Enriched with real gold flakes and a blend of natural ingredients, it leaves your skin with a silky feeling. The sensual scent of roses and jasmine makes this soap a true indulgence for your senses.",
  },
  {
    name: "Stockholms disinfectant DRY Gin",
    price: 7.99,
    img: "https://images.unsplash.com/photo-1601751818941-571144562ff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    info: "HAND 50MG (4,91 €/100ML)",
    germanDescription:
      "Das Stockholms Desinfektionsmittel DRY Gin ist eine einzigartige Möglichkeit, um Ihre Hände zu desinfizieren. Mit dem Duft von Gin und Limette hinterlässt es einen erfrischenden Duft, während es gleichzeitig Ihre Hände reinigt. Hergestellt aus hochwertigen Inhaltsstoffen, ist es eine perfekte Ergänzung für Ihr Badezimmer oder Büro.",
    englishDescription:
      "The Stockholms disinfectant DRY Gin is a unique way to disinfect your hands. With the scent of gin and lime, it leaves a refreshing aroma while cleaning your hands. Made from high-quality ingredients, it is a perfect addition to your bathroom or office.",
  },
  {
    name: "Dose Organic Cactus",
    price: 3.99,
    img: "https://images.unsplash.com/photo-1543363363-6dbd3125fb6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    info: "HAND 50MG (1,91 €/100ML)",
    germanDescription:
      "Die Dose Organic Cactus Seife ist eine natürliche und effektive Möglichkeit, um Ihre Hände zu reinigen. Hergestellt aus biologischen Kaktus-Extrakten, hilft diese Seife dabei, trockene Haut zu hydratisieren und zu beruhigen. Mit einem subtilen Duft von grünem Tee und Zitrusfrüchten, ist diese Seife eine perfekte Wahl für alle, die nach einer sanften und erfrischenden Lösung suchen.",
    englishDescription:
      "The Dose Organic Cactus soap is a natural and effective way to clean your hands. Made from organic cactus extracts, this soap helps to hydrate and soothe dry skin. With a subtle scent of green tea and citrus fruits, this soap is a perfect choice for anyone looking for a gentle and refreshing solution.",
  },
  {
    name: "La Coèss Mandarin",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1578083881514-75d7049175bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    info: "HAND 50MG (3,91 €/100ML)",
    germanDescription:
      "Die La Coèss Mandarin Seife ist eine frische und zitrische Möglichkeit, um Ihre Hände zu reinigen. Mit einer Mischung aus Mandarin und Grapefruit hinterlässt sie einen belebenden Duft, während sie gleichzeitig Ihre Haut gründlich reinigt. Hergestellt aus hochwertigen Inhaltsstoffen, ist diese Seife eine perfekte Wahl für alle, die nach einer natürlichen und effektiven Lösung suchen.",
    englishDescription:
      "The La Coèss Mandarin soap is a fresh and citrusy way to clean your hands. With a blend of mandarin and grapefruit, it leaves an invigorating scent while thoroughly cleansing your skin. Made from high-quality ingredients, this soap is a perfect choice for anyone looking for a natural and effective solution.",
  },
];

export default productData;
