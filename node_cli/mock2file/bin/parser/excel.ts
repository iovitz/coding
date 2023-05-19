import xlsx, {IJsonSheet} from 'json-as-xlsx'
import log from '../utils/log'
import colors from 'colors'

interface SheetData {
  sheet?: string
  columns?: Array<{
    [keys: string]: string
  }>
  content?: Array<{
    [keys: string]: string
  }>
}

const toExcel = (data: any, fileName: string, originName: string) => {
  const excelData: IJsonSheet[] = []
  try {
    data.forEach((sheet: any) => {
      const sheetData: SheetData = {}
      const sheetName = Object.keys(sheet)[0]

      sheetData.sheet = sheetName
      sheetData.content = sheet[sheetName]
      sheetData.columns = []

      Object.keys(sheet[sheetName][0]).forEach((columnName: string) => {
        sheetData.columns!.push({
          label: columnName,
          value: columnName,
        })
      })

      excelData.push(sheetData as unknown as IJsonSheet)
    })
  } catch (error: any) {
    log.error('parse', 'Conversion failed because:')
    log.error('parse', error.message)
    throw new Error(
        `The content of "${originName}" file does not match the excel type. If you do not know the type required by excel, please use "${colors.green.underline(
            'm2f i excel.json --type excel',
        )}" to initialize a template`,
    )
  }
  xlsx(excelData as IJsonSheet[], {
    fileName,
  })
  log.success('parse', colors.green('Conversion succeeded!'))
  log.success(
      'parse',
      `The converted file named "${colors.green.underline(fileName + '.xlsx')}" has been created successfully`,
  )
}

export default toExcel
