/* import { create } from 'zustand'

export const usefavoriteStore = create((set) => ({
  favoritos: [],

  addFavorite: async (item: any) => {
    const favorito = await prisma.favorito.create({
      data: {
        ...item,
      },
    });
    set((state) => ({ favoritos: [...state.favoritos, favorito] }));
  },

  deleteFavorite: async (id: number) => {
    await prisma.favorito.delete({
      where: {
        id,
      },
    });
    set((state) => ({ favoritos: state.favoritos.filter((item) => item.id !== id) }));
  },
})) */