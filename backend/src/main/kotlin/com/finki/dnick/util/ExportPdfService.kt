package com.finki.dnick.util

import com.itextpdf.text.DocumentException
import org.springframework.stereotype.Service
import org.thymeleaf.TemplateEngine
import org.thymeleaf.context.Context
import org.xhtmlrenderer.pdf.ITextRenderer
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream

@Service
class ExportPdfService(
    val templateEngine: TemplateEngine
) {

    fun exportReceiptPdf(templateName: String, data: Map<String, Any>): ByteArrayInputStream? {
        val context = Context()
        context.setVariables(data)
        val htmlContent = templateEngine.process(templateName, context)
        println(htmlContent)
        var byteArrayInputStream: ByteArrayInputStream? = null
        try {
            val byteArrayOutputStream = ByteArrayOutputStream()
            val renderer = ITextRenderer()
            renderer.setDocumentFromString(htmlContent)
            renderer.layout()
            renderer.createPDF(byteArrayOutputStream, false)
            renderer.finishPDF()
            byteArrayInputStream = ByteArrayInputStream(byteArrayOutputStream.toByteArray())
        } catch (e: DocumentException) {

        }
        return byteArrayInputStream
    }
}