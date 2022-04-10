import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID="ac6cf6e6-7e94-4749-89c2-60b14dc6fc33"
            userName="amitsarkar"
            userSecret="amit0606"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}    
        />
    );
}

export default App;