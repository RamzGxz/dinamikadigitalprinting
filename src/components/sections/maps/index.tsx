const Maps = () => {
  return (
    <div className="w-full py-16 flex flex-col gap-16">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl font-bold">Our Maps</h1>
        <p className="text-center font-medium">Lokasi kantor utama UD.Dinamika Raya</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.229476622092!2d114.17716967606275!3d-8.379074884495656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd155b1ba0fd13f%3A0xb06a7e96d8b26920!2sUD%20DINAMIKA%20RAYA%20FOTOCOPY!5e0!3m2!1sen!2sid!4v1717523946842!5m2!1sen!2sid" width="100%" height="500" loading="lazy" className="rounded-md border-0 focus:outline-none" title="maps"></iframe>
    </div>
  )
}

export default Maps