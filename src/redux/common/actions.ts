export const MENU_CLICK = "common/MENU_CLICK" as const;
export const SEARCH_CLICK = "common/SEARCH_CLICK" as const;

export const menuClick = () => ({
  type: MENU_CLICK,
});

export const searchClick = () => ({
  type: SEARCH_CLICK,
});
