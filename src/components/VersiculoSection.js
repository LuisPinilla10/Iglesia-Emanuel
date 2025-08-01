
const VersiculoSection = () => {
    return(
    <section className="py-64 bg-white-50">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/1">
            <div className="text-center align-top">
                
                <p className="text-gray-700 mb-7  text-3xl text-wrap italic">
                Pero recibiréis poder cuando venga sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea y Samaria, y hasta lo último de la tierra.
                </p>
                <h2 className="text-4xl  justify-center font-bold text-amber-900 mb-6 italic">Hechos 1:8</h2>
            {/*  
                <button className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition">
                Conoce más
                </button>
            */}   
            </div>
          </div>
        </div>
      </div>
    </section>
    )
};

export default VersiculoSection; 
