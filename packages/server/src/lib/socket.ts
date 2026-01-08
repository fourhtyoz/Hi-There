import { Server, Socket } from 'socket.io';

export const initializeSocket = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        console.log('a user connected');
        console.log('Socket ID:', socket.id);

        socket.on('disconnect', (reason: string) => {
            console.log('user disconnected:', reason);
        });

        socket.on('hello', (name) => {
            console.log(`Hello from ${name}`);
            socket.emit('message', `Welcome, ${name}!`);
        });
    });
};