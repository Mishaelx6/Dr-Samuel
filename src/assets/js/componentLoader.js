const components = {};

export async function loadComponent(componentName, targetElement) {
  if (!components[componentName]) {
    const module = await import(`../../components/${componentName}`);
    components[componentName] = module.default;
  }
  
  if (targetElement) {
    targetElement.innerHTML = components[componentName]();
  }
  
  return components[componentName];
}