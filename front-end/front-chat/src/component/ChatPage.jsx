import React from 'react'

const ChatPage = () => {
  return (
    <div className="">
        {/* this is a header */}
        <header className="dark:border-gray-700  fixed w-full  dark:bg-gray-900 py-5 shadow flex justify-around items-center">
            {/* room name container */}
            <div>
                <h1 className="text-xl font-semibold">Room:
                    <span>Family Room</span>
                </h1>
            </div>
           
             {/* Username container */}
            <div>
                
                <h1 className="text-xl font-semibold">User:
                    <span>Nitesh Kumar</span>
                </h1>
            </div>
             {/* button: leave room */}
            <div>
                 <button className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-3 rounded-full">
                    Leave Room
                 </button>
            </div>    
        </header> 

        {/* Input message container */}
        <div className="fixed bottom-2 w-full h-16">
        <div className="h-full rounded w-2/3 mx-auto dark:bg-gray-900">
             <input type="text" placeholder="Type your message here..." className="dark:border-gray-900 px-3 py-2 rounded w-full h-full" />

        </div>    
      </div>
          
    </div>
  )
}

export default ChatPage
