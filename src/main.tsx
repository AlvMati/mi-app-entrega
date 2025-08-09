
import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './_pages/home.tsx'
import Posts from './_pages/Posts.tsx'
import PostDetail from './_pages/PostDetail.tsx'
import NotFound from './_pages/NotFound.tsx'
import Layout from './_components/Layout.tsx';
import Carrito from './_pages/Carrito.tsx';
import Checkout from './_pages/Checkout.tsx';
import {CartProvider} from './context/CartContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NewProduct from './_pages/NewProduct';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <CartProvider>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/" element={<Layout />}>
                            <Route path="/posts/:id" element={<PostDetail />} />
                            <Route path="/carrito" element={<Carrito />} />
                            <Route path="/nuevo-producto" element={<NewProduct />} />
                            <Route
                                path="/checkout"
                                element={
                                    <Checkout />
                                }
                                />
                            <Route path="*" element={<NotFound /> } />
                        </Route>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>
);
