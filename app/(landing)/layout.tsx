export default function landingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
    

  return(
    <div className="flex flex-col">
        <header className="h-20 bg-primary flex justify-between items-center">
            <h1 className="text-3xl  text-white px-10 py-5 font-bold">CareerPilot</h1>
        </header>
             
        <main>{children}</main>
    </div>
  )
}
