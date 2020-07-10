import { getRepository } from 'typeorm';
import { isUuid } from 'uuidv4';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getRepository(Transaction);

    if (!isUuid(id)) {
      throw new AppError('Invalid id format');
    }

    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists');
    }

    await transactionRepository.delete({ id: transaction.id });
  }
}

export default DeleteTransactionService;
