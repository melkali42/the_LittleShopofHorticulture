const plantData = [
    {
        id: 121,
        name: "Snake Plant",
        description: "A sturdy, upright plant with long, sword-like leaves that come in various patterns and colors.",
        difficulty_level: "easy",
        price: 14.99,
        image_url: "https://www.gardendesign.com/pictures/images/900x705Max/site_3/snsevieria-trifasciata-laurentii-houseplant-green-leaves-shutterstock-com_14449.jpg"
    },
    {
        id: 122,
        name: "Spider Plant",
        description: "An air-purifying plant with arching, green and white striped leaves that produce baby plantlets.",
        difficulty_level: "easy",
        price: 23.99,
        image_url: "https://www.fast-growing-trees.com/cdn/shop/products/Spider_Plant_2.jpg?v=1638987050&width=1000"
    },
    {
        id: 123,
        name: "Pothos",
        description: "A trailing plant with heart-shaped leaves that come in green, variegated, or golden colors.",
        difficulty_level: "easy",
        price: 12.99,
        image_url: "https://heyrooted.com/cdn/shop/products/8POTHOS_NEON-1_98d41b00-201c-4d87-92a6-82afafd231dd.png?v=1677282895"
    },
    {
        id: 124,
        name: "ZZ Plant",
        description: "A low-maintenance plant with glossy, dark green leaves that can tolerate neglect.",
        difficulty_level: "easy",
        price: 20.99,
        image_url: "https://edsplantshop.com/cdn/shop/products/zamioculcas-zamiifolia-zz-plant-482544.jpg?v=1691421590"
    },
    {
        id: 125,
        name: "Peace Lily",
        description: "A flowering plant with elegant white flowers and glossy dark green leaves.",
        difficulty_level: "easy",
        price: 29.99,
        image_url: "https://cdn11.bigcommerce.com/s-c3hmyjvqdu/images/stencil/1280x1280/products/399/663/C28-4893__37700__23661.1628175739.jpg?c=2"
    },
    {
        id: 126,
        name: "Aloe Vera",
        description: "A succulent with fleshy leaves containing healing gel; it's both decorative and useful.",
        difficulty_level: "easy",
        price: 14.99,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDQu1Bvzm4yVlKWOCwE3mifOyE981wQColMCBreRE7A7RCDgl0Vn7u5B1zhXxOa4asxs&usqp=CAU"
    },
    {
        id: 127,
        name: "Jade Plant",
        description: "A succulent with thick, round leaves and a unique tree-like appearance.",
        difficulty_level: "easy",
        price: 11.99,
        image_url: "https://m.media-amazon.com/images/I/712bqqQGvcL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 128,
        name: "Rubber Plant",
        description: "A popular indoor tree with glossy, rubbery leaves; can grow quite tall.",
        difficulty_level: "moderate",
        price: 29.99,
        image_url: "https://bloomscape.com/wp-content/uploads/2022/08/bloomscape_burgundy-rubber-tree_lg_charcoal.jpg"
    },
    {
        id: 129,
        name: "Fiddle Leaf Fig",
        description: "A trendy plant with large, violin-shaped leaves; adds a statement to any room.",
        difficulty_level: "moderate",
        price: 37.99,
        image_url: "https://gardengoodsdirect.com/cdn/shop/products/Fiddle_Leaf_Fig_7.jpg?v=1627120989"
    },
    {
        id: 130,
        name: "Monstera Deliciosa",
        description: "A striking plant with Swiss cheese-like leaves and unique fenestrations.",
        difficulty_level: "moderate",
        price: 43.99,
        image_url: "https://plantsexpress.com/cdn/shop/files/Monsteradeliciosa.png?v=1684512479"
    },
    {
        id: 131,
        name: "Boston Fern",
        description: "A classic fern with feathery, arching fronds that adds a touch of greenery.",
        difficulty_level: "moderate",
        price: 23.99,
        image_url: "https://gardengoodsdirect.com/cdn/shop/products/BostonFern-06895.jpg?v=1604956054"
    },
    {
        id: 132,
        name: "Chinese Money Plant",
        description: "A small plant with round, coin-shaped leaves on slender stems.",
        difficulty_level: "easy",
        price: 23.99,
        image_url: "https://www.plantvine.com/plants/Pilea-Medium-1.jpg"
    },
    {
        id: 133,
        name: "Swiss Cheese Plant",
        description: "Similar to Monstera Deliciosa but with smaller, perforated leaves.",
        difficulty_level: "moderate",
        price: 39.99,
        image_url: "https://i.etsystatic.com/14339179/r/il/247aac/2357989332/il_570xN.2357989332_gwpd.jpg"
    },
    {
        id: 134,
        name: "Bird of Paradise",
        description: "A tropical plant with large, banana-like leaves and unique bird-like flowers.",
        difficulty_level: "moderate",
        price: 59.99,
        image_url: "https://i.ebayimg.com/images/g/9nkAAOSwV0RXrUy8/s-l1200.webp"
    },
    {
        id: 135,
        name: "String of Pearls",
        description: "A trailing succulent with small, bead-like leaves that resemble pearls.",
        difficulty_level: "moderate",
        price: 19.99,
        image_url: "https://gardenerspath.com/wp-content/uploads/2022/06/How-to-Grow-String-of-Pearls-FB.jpg"
    },
    {
        id: 136,
        name: "Calathea",
        description: "A group of plants with striking patterns on their leaves; known for their responsive movements.",
        difficulty_level: "moderate",
        price: 43.99,
        image_url: "https://i.etsystatic.com/25259683/r/il/39eff0/3774791204/il_fullxfull.3774791204_9xlf.jpg"
    },
    {
        id: 137,
        name: "Maidenhair Fern",
        description: "A delicate fern with fan-shaped fronds and a soft, airy appearance.",
        difficulty_level: "difficult",
        price: 32.99,
        image_url: "https://m.media-amazon.com/images/I/71du5QOSj+L._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 138,
        name: "Begonia Rex",
        description: "A stunning foliage plant with colorful, textured leaves in various patterns.",
        difficulty_level: "difficult",
        price: 34.99,
        image_url: "https://www.whiteflowerfarm.com/mas_assets/cache/image/9/0/7/3/36979.Jpg"
    },
    {
        id: 139,
        name: "String of Hearts",
        description: "A trailing succulent with heart-shaped leaves that's visually appealing but requires specific care.",
        difficulty_level: "moderate",
        price: 33.99,
        image_url: "https://www.myhomenature.com/media/catalog/product/cache/6bd3477fa2f2a68d55e0c78c947906e5/v/a/variegated_chain_of_hearts_ceropegia_woodii_varieg_.jpg"
    },
    {
        id: 140,
        name: "Ficus Bonsai",
        description: "A bonsai version of the Ficus plant, requiring careful pruning and maintenance.",
        difficulty_level: "difficult",
        price: 349.99,
        image_url: "https://www.bonsaiboy.com/catalog/media/k3461.jpg"
    }
];

const source = document.querySelector('#plant-template').innerHTML;
const template = Handlebars.compile(source);
const renderedHtml = template({ plantData: plantData });

const plantList = document.querySelector('#plantList');
plantList.innerHTML = renderedHtml;

document.addEventListener("DOMContentLoaded", function() {
    const source = document.querySelector('#plant-template').innerHTML;
    const template = Handlebars.compile(source);
    const renderedHtml = template({ plantData });

    const plantList = document.querySelector('#plantList');
    plantList.innerHTML = renderedHtml;
});