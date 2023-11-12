import { test, expect } from '@playwright/test';
import { loginSessionAdmin } from '../utils/login_sesion_admin';

test.describe('Posts creación', () => {

  test.beforeEach(async ({ page }) => {    
    // Given: El usuario ha iniciado sesión
    await loginSessionAdmin(page);
  });

  test('Crear un nuevo post con solo título y descripción', async ({ page }) => {
    // When: El usuario crea un nuevo post
    const titulo_post = 'Titulo de prueba';
    const contenido = 'Contenido de prueba';
    
    await test.info().annotations.push({
      type: 'when',
      description: 'And: El usuario hace clic en "New post"',
    });

    // And: El usuario hace clic en "New post"
    await page.getByRole('link', { name: 'New post' }).click(); 
    
    // And: El usuario hace clic en el campo de título del post
    await page.getByPlaceholder('Post title').click(); 
    
    // And: El usuario llena el título del post
    await page.getByPlaceholder('Post title').fill(titulo_post); 
    
    // And: El usuario presiona Tab
    await page.getByPlaceholder('Post title').press('Tab'); 
    
    // And: El usuario llena el contenido del post
    await page.getByRole('textbox').nth(1).fill(contenido); 
    
    // And: El usuario hace clic en "Publish"
    await page.getByRole('button', { name: 'Publish' }).click(); 
    
    // And: El usuario hace clic en "Continue, final review →"
    await page.getByRole('button', { name: 'Continue, final review →' }).click(); 
    
    // And: Se espera un segundo
    await page.waitForTimeout(1000); 
    const buttonSelector = `//button[contains(., 'Publish post, right now')]`;
    
    // And: El usuario hace clic en el botón final de publicación
    await page.locator(buttonSelector).click(); 
    
    // And: Se espera un segundo
    await page.waitForTimeout(1000);
    const dato = `${titulo_post} ${contenido} •andes`
    
    // And: El usuario hace clic en el enlace del post creado
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: dato }).click();
    const page1 = await page1Promise;
    await page1.locator('h1').click();
    
    // And: El usuario hace clic en el título del post
    await page1.locator('h1').click(); 
    
    // Then: Se verifica que el título y contenido son correctos
    expect(await page1.locator('h1').innerText()).toBe(titulo_post); 
    const mainElement = await page1.locator('main');
    const contenidoActual = await mainElement.innerText();
    expect(contenidoActual).toMatch(contenido); 
  
  });

  test('Crear un nuevo post con solo título', async ({ page }) => {
    // When: El usuario crea un nuevo post
    const titulo_post = 'Titulo de prueba 2';
    
    await test.info().annotations.push({
      type: 'when',
      description: 'And: 2 El usuario hace clic en "New post"',
    });

    // And: El usuario hace clic en "New post"
    await page.getByRole('link', { name: 'New post' }).click(); 
    
    // And: El usuario hace clic en el campo de título del post
    await page.getByPlaceholder('Post title').click(); 
    
    // And: El usuario llena el título del post
    await page.getByPlaceholder('Post title').fill(titulo_post); 
    
    // And: El usuario presiona Enter
    await page.getByPlaceholder('Post title').press('Enter'); 
        
    // And: El usuario hace clic en "Publish"
    await page.getByRole('button', { name: 'Publish' }).click(); 
    
    // And: El usuario hace clic en "Continue, final review →"
    await page.getByRole('button', { name: 'Continue, final review →' }).click(); 
    
    // And: Se espera un segundo
    await page.waitForTimeout(1000); 
    const buttonSelector = `//button[contains(., 'Publish post, right now')]`;
    
    // And: El usuario hace clic en el botón final de publicación
    await page.locator(buttonSelector).click(); 
    
    // And: Se espera un segundo
    await page.waitForTimeout(1000);
    const dato = `${titulo_post} •andes`
       
    // And: El usuario hace clic en el enlace del post creado
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: dato }).click();
    const page1 = await page1Promise;
       
    // Then: Se verifica que el título es correcto
    expect(await page1.locator('h1').innerText()).toBe(titulo_post); 
  
  });
  
  test(' Crear un nuevo post con titulo y descripción y tag', async ({ page }) => {
    // When: El usuario crea un nuevo post
    const titulo_post = 'Titulo de prueba';
    const contenido = 'Contenido de prueba';
    
    await test.info().annotations.push({
      type: 'when',
      description: 'And: El usuario hace clic en "New post"',
    });

    // And: El usuario hace clic en "New post"
    await page.getByRole('link', { name: 'New post' }).click(); 
    
    // And: El usuario hace clic en el campo de título del post
    await page.getByPlaceholder('Post title').click(); 
    
    // And: El usuario llena el título del post
    await page.getByPlaceholder('Post title').fill(titulo_post); 
    
    // And: El usuario presiona Tab
    await page.getByPlaceholder('Post title').press('Tab'); 
    
    // And: El usuario llena el contenido del post
    await page.getByRole('textbox').nth(1).fill(contenido); 
    
    const newtag = 'new tag 2'
    await page.getByRole('button', { name: 'Settings' }).click();

    // and seleccionamos el tag usando aria-controls:
    // const inputId = await page.locator('[aria-controls^="ember-power-select-options"]').getAttribute('aria-owns');
    // Obtenemos el ID del input que queremos seleccionar
    await page.click('#tag-input');
    await page.getByRole('option', { name: 'News' }).click();
    await page.getByRole('button', { name: 'Settings' }).click();

    // And: El usuario hace clic en "Publish"
    await page.getByRole('button', { name: 'Publish' }).click(); 
    
    // And: El usuario hace clic en "Continue, final review →"
    await page.getByRole('button', { name: 'Continue, final review →' }).click(); 
    
    // And: Se espera un segundo
    await page.waitForTimeout(1000); 
    const buttonSelector = `//button[contains(., 'Publish post, right now')]`;
    
    // And: El usuario hace clic en el botón final de publicación
    await page.locator(buttonSelector).click(); 
    
    // And: Se espera un segundo
    await page.waitForTimeout(1000);
    const dato = `${titulo_post} ${contenido} •andes`
    
    // And: El usuario hace clic en el enlace del post creado
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: dato }).click();
    const page1 = await page1Promise;
    await page1.locator('h1').click();
    
    // And: El usuario hace clic en el título del post
    await page1.locator('h1').click(); 
    
    // Then: Se verifica que el título, contenido y tag son correctos
    expect(await page1.locator('h1').innerText()).toBe(titulo_post); 
    const mainElement = await page1.locator('main');
    const contenidoActual = await mainElement.innerText();
    expect(contenidoActual).toMatch(contenido); 
    

  
  });
  
});
