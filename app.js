let  arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]

const {brand,model,price,camera,ram,rom}=arr

function scrh(event){
  event.preventDefault();
  let input = document.getElementById("input").value.toLowerCase()
  let search = document.getElementById("search")
  let listt = document.getElementById("listt")
  let select = document.getElementById("select").value  

  

  const filter_ar = arr.filter(f =>{
    const search_the_val = f[select].toString().toLowerCase();
    return search_the_val.includes(input);
  });


  if (filter_ar.length > 0) {
    listt.innerHTML = '';
    filter_ar.map(f => {
      listt.innerHTML += `
      <li>Brand: ${f.brand}</li>
        <li>Model: ${f.model}</li>
        <li>Price: Rs.${f.price}</li>
        <li>Camera: ${f.camera}</li>
        <li>ram: ${f.ram} GB</li>
        <li>rom: ${f.rom} GB</li>
        <hr>
      `;
    });
  }
   else {
    listt.innerHTML = 'No results found.';
  }




}