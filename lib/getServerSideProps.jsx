export async function getServerSideProps(context)  {
    const ref = db.collection('chats').doc(context.query.id)
    const messagesRef = await ref.collection('messeges').orderBy('timestamp', 'asc').get()

    const messages = messagesRef.docs.map(doc=> ({
        id:doc.id,
        ...doc.data(),
    })).map(messages => ({
        ...messages,
        timestamp:messages.timestamp.toDate().getTie()
    }))

    //prep the chats

    const chatRef = await ref.get()
    const chat={
        id:chatRef.id,
        ...chatRef.data()
    }
   
    return{
        props:{
            messages: JSON.stringify(messages),
            chat:chat
        }
    }
    }