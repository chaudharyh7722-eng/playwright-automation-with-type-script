import {Page, Locator} from "@playwright/test";

export class SearchBar {
  readonly page: Page;
  readonly search_Bar: Locator;
  readonly search_anything:Locator;
  readonly search_textField:Locator;


  constructor(page: Page) {
    this.page = page;
    this.search_Bar = page.locator("//button[@title='Search']");
    this.search_anything = page.locator("//p[text()='Search anything']");
    this.search_textField = page.locator("//input[@placeholder='Search projects, tasks, leads, clients, invoices...']")

  }

  async clickonsearchBar(){await this.search_Bar.click();}
  async emptytext(){await this.search_anything.isVisible();}
  async getSearchAnythingText(){return await this.search_anything.innerText();}

  async getsearch(text : string)
  {await this.search_textField.fill(text);}

  async clearSearchText() {
    await this.search_textField.clear();
  }










}