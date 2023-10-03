import path from 'path';

export default {
    root: path.resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'),
                menuList: path.resolve(__dirname, 'src/menu-list/menu-list.html'),
                receiptList: path.resolve(__dirname, 'src/receipt-list/receipt-list.html')
            },
        },
        outDir: '../dist'
    },
    server: {
        port: 8080,
        hot: true,
    },
};