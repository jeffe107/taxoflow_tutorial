/*
 * required tasks
 */
include { FASTQC                      }  from './modules/fastqc.nf'
include { TRIM_GALORE                 }  from './modules/trimgalore.nf'
include { BOWTIE2                     }  from './modules/bowtie2.nf'
include { KRAKEN2                     }  from './modules/kraken2.nf'
include { BRACKEN                     }  from './modules/bracken.nf'
include { K_REPORT_TO_KRONA           }  from './modules/kReport2Krona.nf'
include { KT_IMPORT_TEXT              }  from './modules/ktImportText.nf'

/*
 * workflow
 */

workflow TaxoFlow {
    // required inputs
    take:
        bowtie2_index
        kraken2_db
        reads_ch
    // workflow implementation
    main:
         // Initial quality control
        FASTQC(reads_ch)
        TRIM_GALORE(reads_ch)
        BOWTIE2(TRIM_GALORE.out.trimmed_reads, bowtie2_index)
        KRAKEN2(BOWTIE2.out, kraken2_db)
        BRACKEN(KRAKEN2.out.files, kraken2_db)
        K_REPORT_TO_KRONA(BRACKEN.out)
        KT_IMPORT_TEXT(K_REPORT_TO_KRONA.out)

    emit:
        bowtie_unali             =    BOWTIE2.out
        kraken_class             =    KRAKEN2.out.files
        bracken_class            =    BRACKEN.out
        krona                    =    KT_IMPORT_TEXT.out
        fastqc_zip               =    FASTQC.out.zip
        fastqc_html              =    FASTQC.out.html
        trimmed_reads            =    TRIM_GALORE.out.trimmed_reads
        trimming_reports         =    TRIM_GALORE.out.trimming_reports
        trimming_fastqc_1        =    TRIM_GALORE.out.fastqc_reports_1
        trimming_fastqc_2        =    TRIM_GALORE.out.fastqc_reports_2
}

