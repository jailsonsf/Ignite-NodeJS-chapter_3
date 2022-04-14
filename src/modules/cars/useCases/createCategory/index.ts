import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoryRepository();
    const createCatedoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    const createCategoryController = new CreateCategoryController(createCatedoryUseCase);

    return createCategoryController;
}
